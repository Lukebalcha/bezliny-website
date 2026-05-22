"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Building, Contact } from "@/lib/types";

export default function BuildingDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [building, setBuilding] = useState<Building | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [interactions, setInteractions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { if (id) load(); }, [id]);
  async function load() {
    const [bRes, cRes, iRes] = await Promise.all([
      supabase.from("buildings").select("*").eq("id", id).single(),
      supabase.from("building_contacts").select("contact_id, contacts(*)").eq("building_id", id),
      supabase.from("interactions").select("*, contacts(name)").eq("building_id", id).order("created_at", { ascending: false }).limit(10),
    ]);
    setBuilding(bRes.data); setContacts((cRes.data || []).map((bc: any) => bc.contacts)); setInteractions(iRes.data || []); setLoading(false);
  }
  async function updateStatus(status: string) { await supabase.from("buildings").update({ status }).eq("id", id); setBuilding((p) => p ? { ...p, status: status as any } : null); }
  async function del() { if (!confirm("Delete?")) return; await supabase.from("buildings").delete().eq("id", id); router.push("/buildings"); }

  if (loading) return <div className="flex justify-center py-12"><div className="w-5 h-5 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin" /></div>;
  if (!building) return <p className="text-white/40">Not found</p>;

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div><Link href="/buildings" className="text-xs text-white/30 hover:text-white/50">← Buildings</Link><h1 className="text-2xl font-bold mt-2">{building.name}</h1><p className="text-white/40 text-sm">{building.address}</p></div>
        <button onClick={del} className="px-3 py-1.5 text-xs text-red-400/60 border border-red-400/20 rounded-md hover:bg-red-400/10">Delete</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <IC label="District" value={building.district} /><IC label="Type" value={building.building_type} /><IC label="Floors" value={building.floors?.toString() || "—"} /><IC label="Value" value={building.estimated_value ? `${building.estimated_value.toLocaleString()} PLN/yr` : "—"} />
      </div>
      <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01]">
        <h3 className="text-xs text-white/40 uppercase tracking-wider mb-3">Status</h3>
        <div className="flex flex-wrap gap-2">
          {["identified","contacted","assessment","negotiating","client","lost","dormant"].map((s) => (<button key={s} onClick={() => updateStatus(s)} className={`px-3 py-1.5 text-xs rounded-md capitalize ${building.status === s ? "bg-[#10b981] text-black font-medium" : "border border-white/[0.08] text-white/40 hover:text-white/70"}`}>{s}</button>))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] space-y-3">
          <h3 className="text-sm font-medium text-white/60">Details</h3>
          {building.facade_material.length > 0 && <p className="text-sm text-white/50">Facade: {building.facade_material.join(", ")}</p>}
          {building.current_provider && <p className="text-sm text-white/50">Provider: {building.current_provider}</p>}
          {building.notes && <p className="text-sm text-white/50">{building.notes}</p>}
        </div>
        <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] space-y-3">
          <h3 className="text-sm font-medium text-white/60">Facility Managers</h3>
          {contacts.length === 0 ? <p className="text-xs text-white/30">None linked</p> : contacts.map((c) => (
            <Link key={c.id} href={`/contacts/${c.id}`} className="block p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04]"><div className="text-sm text-white/70">{c.name}</div><div className="text-xs text-white/30">{c.company}</div></Link>
          ))}
        </div>
      </div>
      <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] space-y-3">
        <h3 className="text-sm font-medium text-white/60">Interactions</h3>
        {interactions.length === 0 ? <p className="text-xs text-white/30">None</p> : interactions.map((i: any) => (
          <div key={i.id} className="p-3 rounded-lg bg-white/[0.02]"><p className="text-sm text-white/70">{i.summary}</p><p className="text-xs text-white/30">{i.contacts?.name} · {new Date(i.created_at).toLocaleDateString()}</p></div>
        ))}
      </div>
    </div>
  );
}
function IC({ label, value }: { label: string; value: string }) { return <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01]"><div className="text-xs text-white/30 mb-1">{label}</div><div className="text-sm font-medium text-white/70">{value}</div></div>; }
