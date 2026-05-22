"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Building } from "@/lib/types";

const statusColors: Record<string, string> = { identified: "bg-blue-500/20 text-blue-400", contacted: "bg-yellow-500/20 text-yellow-400", assessment: "bg-purple-500/20 text-purple-400", negotiating: "bg-orange-500/20 text-orange-400", client: "bg-[#10b981]/20 text-[#10b981]", lost: "bg-red-500/20 text-red-400", dormant: "bg-white/10 text-white/40" };

export default function BuildingsPage() {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => { loadBuildings(); }, []);
  async function loadBuildings() { const { data } = await supabase.from("buildings").select("*").order("created_at", { ascending: false }); setBuildings(data || []); setLoading(false); }

  const filtered = buildings.filter((b) => {
    const matchesFilter = filter === "all" || b.status === filter;
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase()) || b.address.toLowerCase().includes(search.toLowerCase()) || b.district.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">Buildings</h1><p className="text-white/40 text-sm mt-1">{buildings.length} buildings mapped</p></div>
        <Link href="/buildings/new" className="px-4 py-2 bg-[#10b981] text-black text-sm font-medium rounded-lg hover:bg-[#10b981]/90 transition-colors">+ Add Building</Link>
      </div>
      <div className="flex flex-wrap gap-3 items-center">
        <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field w-64" />
        <div className="flex gap-1">
          {["all","identified","contacted","assessment","negotiating","client","lost"].map((s) => (
            <button key={s} onClick={() => setFilter(s)} className={`px-3 py-1.5 text-xs rounded-md capitalize transition-colors ${filter === s ? "bg-[#10b981]/20 text-[#10b981]" : "text-white/40 hover:text-white/60 hover:bg-white/[0.03]"}`}>{s}</button>
          ))}
        </div>
      </div>
      {loading ? <div className="flex justify-center py-12"><div className="w-5 h-5 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin" /></div> : filtered.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-white/[0.08] rounded-xl"><p className="text-white/30 text-sm">No buildings found</p><Link href="/buildings/new" className="text-[#10b981] text-sm hover:underline mt-2 inline-block">Add first →</Link></div>
      ) : (
        <div className="border border-white/[0.06] rounded-xl overflow-hidden">
          <table className="w-full">
            <thead><tr className="border-b border-white/[0.06] bg-white/[0.02]"><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Building</th><th className="text-left text-xs text-white/40 font-medium px-4 py-3">District</th><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Type</th><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Floors</th><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Value</th><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Status</th></tr></thead>
            <tbody>{filtered.map((b) => (
              <tr key={b.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                <td className="px-4 py-3"><Link href={`/buildings/${b.id}`} className="hover:text-[#10b981]"><div className="text-sm font-medium text-white/80">{b.name}</div><div className="text-xs text-white/30">{b.address}</div></Link></td>
                <td className="px-4 py-3 text-sm text-white/50">{b.district}</td>
                <td className="px-4 py-3 text-sm text-white/50">{b.building_type}</td>
                <td className="px-4 py-3 text-sm text-white/50">{b.floors || "—"}</td>
                <td className="px-4 py-3 text-sm text-white/50">{b.estimated_value ? `${b.estimated_value.toLocaleString()} PLN` : "—"}</td>
                <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-md text-xs capitalize ${statusColors[b.status] || ""}`}>{b.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
