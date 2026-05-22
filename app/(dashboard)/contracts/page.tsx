"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const statusColors: Record<string, string> = { draft: "bg-white/10 text-white/40", active: "bg-[#10b981]/20 text-[#10b981]", renewal_due: "bg-orange-500/20 text-orange-400", ended: "bg-red-500/20 text-red-400", paused: "bg-yellow-500/20 text-yellow-400" };

export default function ContractsPage() {
  const [contracts, setContracts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { load(); }, []);
  async function load() { const { data } = await supabase.from("contracts").select("*, buildings(name), contacts(name)").order("created_at", { ascending: false }); setContracts(data || []); setLoading(false); }

  const totalMonthly = contracts.filter((c) => c.status === "active").reduce((s, c) => s + (c.monthly_revenue || 0), 0);

  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Contracts</h1><p className="text-white/40 text-sm mt-1">{contracts.filter((c) => c.status === "active").length} active · {totalMonthly.toLocaleString()} PLN/month</p></div>
      {loading ? <div className="flex justify-center py-12"><div className="w-5 h-5 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin" /></div> : contracts.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-white/[0.08] rounded-xl"><p className="text-white/30 text-sm">No contracts yet</p><p className="text-xs text-white/20 mt-1">Win deals to create contracts</p></div>
      ) : (
        <div className="border border-white/[0.06] rounded-xl overflow-hidden">
          <table className="w-full">
            <thead><tr className="border-b border-white/[0.06] bg-white/[0.02]"><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Building</th><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Contact</th><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Service</th><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Monthly</th><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Status</th><th className="text-left text-xs text-white/40 font-medium px-4 py-3">Renewal</th></tr></thead>
            <tbody>{contracts.map((c) => (
              <tr key={c.id} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                <td className="px-4 py-3 text-sm text-white/70">{c.buildings?.name || "—"}</td>
                <td className="px-4 py-3 text-sm text-white/50">{c.contacts?.name || "—"}</td>
                <td className="px-4 py-3 text-sm text-white/50">{(c.service_type || []).join(", ") || "—"}</td>
                <td className="px-4 py-3 text-sm text-[#10b981]">{c.monthly_revenue ? `${c.monthly_revenue.toLocaleString()} PLN` : "—"}</td>
                <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-md text-xs capitalize ${statusColors[c.status] || ""}`}>{c.status.replace("_"," ")}</span></td>
                <td className="px-4 py-3 text-sm text-white/40">{c.renewal_date || "—"}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
