"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import("react-leaflet").then((m) => m.CircleMarker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false });
const Polygon = dynamic(() => import("react-leaflet").then((m) => m.Polygon), { ssr: false });
const Circle = dynamic(() => import("react-leaflet").then((m) => m.Circle), { ssr: false });
const Tooltip = dynamic(() => import("react-leaflet").then((m) => m.Tooltip), { ssr: false });

const buildingColors: Record<string, string> = { identified: "#3b82f6", contacted: "#eab308", assessment: "#a855f7", negotiating: "#f97316", client: "#10b981", lost: "#ef4444", dormant: "#6b7280" };

// Warsaw Drone Zones based on PANSA/Polish AIP regulations
// Source: AIP Poland ENR 2.1, PANSA DroneMap (dronemap.pansa.pl)
const droneZones = [
  {
    id: "ctr-epwa",
    name: "CTR EPWA (Chopin Airport)",
    type: "DRA-P" as const,
    description: "No drone flights without ATC permission. ~9km radius around Chopin Airport.",
    maxAlt: "0m (total ban without permission)",
    // CTR EPWA - approximately 9.3km (5NM) radius, extended along runway axis (E-W)
    // Airport reference point: 52.1657°N, 20.9671°E
    polygon: [
      [52.2500, 20.8500],  // North-West
      [52.2550, 20.9700],  // North
      [52.2500, 21.0900],  // North-East
      [52.2000, 21.1300],  // East (extended for approach)
      [52.1300, 21.1200],  // South-East
      [52.0850, 21.0500],  // South
      [52.0800, 20.9700],  // South (centerline)
      [52.0850, 20.8800],  // South-West
      [52.1300, 20.8100],  // West (extended for departure)
      [52.2000, 20.8100],  // North-West
    ] as [number, number][],
  },
  {
    id: "ctr-epbc",
    name: "CTR EPBC (Babice Airport)",
    type: "DRA-R" as const,
    description: "Restricted zone around Babice military airfield. Permission required.",
    maxAlt: "30m AGL with restrictions",
    // Babice is a small CTR north-west Warsaw
    center: [52.2686, 20.9072] as [number, number],
    radius: 2500,
  },
  {
    id: "sop-sejm",
    name: "SOP Zone - Sejm & Government",
    type: "DRA-P" as const,
    description: "State Protection Service zone. No drones >900g within 500m of protected buildings.",
    maxAlt: "30m for <900g drones",
    center: [52.2256, 21.0247] as [number, number],
    radius: 500,
  },
  {
    id: "sop-belweder",
    name: "SOP Zone - Belweder Palace",
    type: "DRA-P" as const,
    description: "Presidential residence protection zone.",
    maxAlt: "30m for <900g drones",
    center: [52.2133, 21.0236] as [number, number],
    radius: 500,
  },
  {
    id: "sop-palace",
    name: "SOP Zone - Presidential Palace",
    type: "DRA-P" as const,
    description: "Krakowskie Przedmieście presidential protection zone.",
    maxAlt: "30m for <900g drones",
    center: [52.2435, 21.0151] as [number, number],
    radius: 500,
  },
  {
    id: "epmo-modlin",
    name: "CTR EPMO (Modlin Airport)",
    type: "DRA-R" as const,
    description: "Modlin airport controlled zone. North of Warsaw.",
    maxAlt: "Permission required",
    center: [52.4511, 20.6517] as [number, number],
    radius: 5000,
  },
  {
    id: "park-kampinos",
    name: "Kampinos National Park",
    type: "DRA-I" as const,
    description: "National park - drone permit required from park administration.",
    maxAlt: "120m with park permit",
    // Kampinos is NW of Warsaw, roughly this area
    polygon: [
      [52.3300, 20.4000],
      [52.3300, 20.6800],
      [52.2900, 20.6800],
      [52.2900, 20.4000],
    ] as [number, number][],
  },
  {
    id: "park-wilanow",
    name: "Wilanów Palace & Park",
    type: "DRA-I" as const,
    description: "Heritage site - drone permit required.",
    maxAlt: "50m with permit",
    center: [52.1653, 21.0903] as [number, number],
    radius: 400,
  },
];

const zoneColors: Record<string, { fill: string; border: string }> = {
  "DRA-P": { fill: "rgba(239,68,68,0.15)", border: "#ef4444" },   // Red - Prohibited
  "DRA-R": { fill: "rgba(249,115,22,0.12)", border: "#f97316" },  // Orange - Restricted
  "DRA-I": { fill: "rgba(234,179,8,0.10)", border: "#eab308" },   // Yellow - Information
};

export default function MapPage() {
  const [buildings, setBuildings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showZones, setShowZones] = useState(true);
  const [showBuildings, setShowBuildings] = useState(true);

  useEffect(() => { load(); }, []);
  async function load() { const { data } = await supabase.from("buildings").select("id, name, address, status, lat, lng, estimated_value").not("lat", "is", null).not("lng", "is", null); setBuildings(data || []); setLoading(false); }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">Territory Map</h1><p className="text-white/40 text-sm mt-1">{buildings.length} buildings · Drone zones from PANSA regulations</p></div>
        <div className="flex gap-3">
          <button onClick={() => setShowZones(!showZones)} className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${showZones ? "border-red-500/30 bg-red-500/10 text-red-400" : "border-white/10 text-white/30"}`}>
            {showZones ? "🚫 Zones ON" : "🚫 Zones OFF"}
          </button>
          <button onClick={() => setShowBuildings(!showBuildings)} className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${showBuildings ? "border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981]" : "border-white/10 text-white/30"}`}>
            {showBuildings ? "🏢 Buildings ON" : "🏢 Buildings OFF"}
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6">
        <div className="space-y-1">
          <p className="text-[10px] text-white/30 uppercase tracking-wider">Drone Zones (PANSA)</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm border border-red-500 bg-red-500/20" /><span className="text-xs text-white/40">DRA-P Prohibited</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm border border-orange-500 bg-orange-500/20" /><span className="text-xs text-white/40">DRA-R Restricted</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm border border-yellow-500 bg-yellow-500/20" /><span className="text-xs text-white/40">DRA-I Info/Permit</span></div>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] text-white/30 uppercase tracking-wider">Buildings</p>
          <div className="flex flex-wrap gap-3">{Object.entries(buildingColors).map(([s, c]) => (<div key={s} className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} /><span className="text-xs text-white/40 capitalize">{s}</span></div>))}</div>
        </div>
      </div>

      <div className="h-[650px] rounded-xl overflow-hidden border border-white/[0.06]">
        {loading ? <div className="flex items-center justify-center h-full"><div className="w-5 h-5 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin" /></div> : (
          <MapContainer center={[52.2297, 21.0122]} zoom={11} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" attribution="OpenStreetMap · Drone zones: PANSA (dronemap.pansa.pl)" />

            {/* Drone flight zones */}
            {showZones && droneZones.map((zone) => {
              const zc = zoneColors[zone.type];
              if ("polygon" in zone && zone.polygon) {
                return (
                  <Polygon key={zone.id} positions={zone.polygon} pathOptions={{ color: zc.border, fillColor: zc.fill, fillOpacity: 0.3, weight: 2, dashArray: zone.type === "DRA-P" ? "5,5" : "3,6" }}>
                    <Tooltip sticky><div className="text-xs"><strong>{zone.name}</strong><br/>{zone.type} · Max: {zone.maxAlt}<br/>{zone.description}</div></Tooltip>
                  </Polygon>
                );
              }
              if ("center" in zone && zone.center) {
                return (
                  <Circle key={zone.id} center={zone.center} radius={zone.radius} pathOptions={{ color: zc.border, fillColor: zc.fill, fillOpacity: 0.3, weight: 2, dashArray: zone.type === "DRA-P" ? "5,5" : "3,6" }}>
                    <Tooltip sticky><div className="text-xs"><strong>{zone.name}</strong><br/>{zone.type} · Max: {zone.maxAlt}<br/>{zone.description}</div></Tooltip>
                  </Circle>
                );
              }
              return null;
            })}

            {/* Buildings */}
            {showBuildings && buildings.map((b) => (
              <CircleMarker key={b.id} center={[b.lat, b.lng]} radius={8} pathOptions={{ color: buildingColors[b.status] || "#6b7280", fillColor: buildingColors[b.status] || "#6b7280", fillOpacity: 0.8, weight: 2 }}>
                <Popup><div className="text-black text-xs"><strong>{b.name}</strong><br/>{b.address}<br/><span className="capitalize">{b.status}</span>{b.estimated_value && <><br/>{b.estimated_value.toLocaleString()} PLN/yr</>}</div></Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        )}
      </div>

      {/* Zone info panel */}
      <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01]">
        <h3 className="text-sm font-medium text-white/60 mb-3">⚠️ Drone Flight Zones - Warsaw (PANSA Regulations)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {droneZones.map((z) => (
            <div key={z.id} className="flex gap-3 p-2.5 rounded-lg bg-white/[0.02]">
              <div className={`w-2 rounded-full flex-shrink-0 ${z.type === "DRA-P" ? "bg-red-500" : z.type === "DRA-R" ? "bg-orange-500" : "bg-yellow-500"}`} />
              <div>
                <p className="text-xs text-white/60 font-medium">{z.name}</p>
                <p className="text-[10px] text-white/30 mt-0.5">{z.description}</p>
                <p className="text-[10px] text-white/20 mt-0.5">Max altitude: {z.maxAlt}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-white/20 mt-3">Source: PANSA DroneMap (dronemap.pansa.pl) · AIP Poland ENR 2.1 · Always verify current zones before flight at dronemap.pansa.pl</p>
      </div>
    </div>
  );
}
