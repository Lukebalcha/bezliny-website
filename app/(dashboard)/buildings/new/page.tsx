"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const districts = ["Śródmieście","Mokotów","Wola","Ursynów","Wilanów","Praga-Południe","Praga-Północ","Żoliborz","Ochota","Bemowo","Bielany","Targówek","Białołęka","Wawer","Ursus","Włochy"];
const buildingTypes = ["Residential High-rise","Office Tower","Shopping Mall","Hotel","Industrial","Government","Hospital","University","Mixed-use"];
const facadeMaterials = ["Glass","Stone","Concrete","Metal","Composite","Brick","Ceramic"];

export default function NewBuildingPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ name: "", address: "", district: "Śródmieście", building_type: "Office Tower", floors: "", facade_material: [] as string[], estimated_value: "", status: "identified", lat: "", lng: "", notes: "" });

  function u(f: string, v: any) { setForm((p) => ({ ...p, [f]: v })); }
  function toggleMat(m: string) { setForm((p) => ({ ...p, facade_material: p.facade_material.includes(m) ? p.facade_material.filter((x) => x !== m) : [...p.facade_material, m] })); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setSaving(true);
    const { error } = await supabase.from("buildings").insert({ name: form.name, address: form.address, district: form.district, building_type: form.building_type, floors: form.floors ? parseInt(form.floors) : null, facade_material: form.facade_material, estimated_value: form.estimated_value ? parseFloat(form.estimated_value) : null, status: form.status, lat: form.lat ? parseFloat(form.lat) : null, lng: form.lng ? parseFloat(form.lng) : null, notes: form.notes || null });
    if (error) { alert("Error: " + error.message); setSaving(false); } else { router.push("/buildings"); }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold">Add Building</h1><p className="text-white/40 text-sm mt-1">Register a new building</p></div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <F label="Building Name" required><input type="text" value={form.name} onChange={(e) => u("name", e.target.value)} placeholder="e.g. Złota 44" required className="input-field" /></F>
        <F label="Address" required><input type="text" value={form.address} onChange={(e) => u("address", e.target.value)} placeholder="ul. Złota 44, Warszawa" required className="input-field" /></F>
        <div className="grid grid-cols-2 gap-4">
          <F label="District"><select value={form.district} onChange={(e) => u("district", e.target.value)} className="input-field">{districts.map((d) => <option key={d} value={d}>{d}</option>)}</select></F>
          <F label="Type"><select value={form.building_type} onChange={(e) => u("building_type", e.target.value)} className="input-field">{buildingTypes.map((t) => <option key={t} value={t}>{t}</option>)}</select></F>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <F label="Floors"><input type="number" value={form.floors} onChange={(e) => u("floors", e.target.value)} placeholder="52" className="input-field" /></F>
          <F label="Est. Value (PLN/yr)"><input type="number" value={form.estimated_value} onChange={(e) => u("estimated_value", e.target.value)} placeholder="120000" className="input-field" /></F>
        </div>
        <F label="Facade Material"><div className="flex flex-wrap gap-2">{facadeMaterials.map((m) => (<button key={m} type="button" onClick={() => toggleMat(m)} className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${form.facade_material.includes(m) ? "bg-[#10b981]/20 border-[#10b981]/30 text-[#10b981]" : "border-white/[0.08] text-white/40 hover:text-white/60"}`}>{m}</button>))}</div></F>
        <F label="Status"><select value={form.status} onChange={(e) => u("status", e.target.value)} className="input-field"><option value="identified">Identified</option><option value="contacted">Contacted</option><option value="assessment">Assessment</option><option value="negotiating">Negotiating</option><option value="client">Client</option></select></F>
        <div className="grid grid-cols-2 gap-4">
          <F label="Latitude"><input type="text" value={form.lat} onChange={(e) => u("lat", e.target.value)} placeholder="52.2297" className="input-field" /></F>
          <F label="Longitude"><input type="text" value={form.lng} onChange={(e) => u("lng", e.target.value)} placeholder="21.0122" className="input-field" /></F>
        </div>
        <F label="Notes"><textarea value={form.notes} onChange={(e) => u("notes", e.target.value)} placeholder="Observations..." rows={3} className="input-field resize-none" /></F>
        <div className="flex gap-3 pt-4">
          <button type="submit" disabled={saving} className="px-6 py-2.5 bg-[#10b981] text-black text-sm font-medium rounded-lg disabled:opacity-50">{saving ? "Saving..." : "Save Building"}</button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2.5 border border-white/[0.08] text-white/50 text-sm rounded-lg">Cancel</button>
        </div>
      </form>
    </div>
  );
}
function F({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) { return <div><label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">{label} {required && <span className="text-[#10b981]">*</span>}</label>{children}</div>; }
