"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const stages = [
  { id: "identified", label: "🔍 Identified", color: "border-blue-500/30" },
  { id: "contacted", label: "📞 Contacted", color: "border-yellow-500/30" },
  { id: "assessment", label: "📋 Assessment", color: "border-purple-500/30" },
  { id: "negotiating", label: "💬 Negotiating", color: "border-orange-500/30" },
  { id: "won", label: "✅ Won", color: "border-[#10b981]/30" },
  { id: "lost", label: "❌ Lost", color: "border-red-500/30" },
];

export default function PipelinePage() {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadDeals(); }, []);
  async function loadDeals() { const { data } = await supabase.from("deals").select("*, buildings(name), contacts(name)").order("created_at", { ascending: false }); setDeals(data || []); setLoading(false); }
  async function moveDeal(id: string, stage: string) { await supabase.from("deals").update({ stage }).eq("id", id); setDeals((p) => p.map((d) => d.id === id ? { ...d, stage } : d)); }

  const totalPipeline = deals.filter((d) => !["won","lost"].includes(d.stage)).reduce((s, d) => s + (d.value || 0), 0);

  if (loading) return <div className="flex justify-center py-12"><div className="w-5 h-5 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Pipeline</h1><p className="text-white/40 text-sm mt-1">{deals.length} deals · {totalPipeline.toLocaleString()} PLN in pipeline</p></div>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage === stage.id);
          return (
            <div key={stage.id} className={`min-w-[260px] flex-shrink-0 rounded-xl border ${stage.color} bg-white/[0.01] p-4`}>
              <div className="flex items-center justify-between mb-4"><h3 className="text-sm font-medium text-white/70">{stage.label}</h3><span className="text-xs text-white/30">{stageDeals.length}</span></div>
              <div className="space-y-2">
                {stageDeals.map((deal) => (
                  <div key={deal.id} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.04] hover:border-white/[0.08] group">
                    <div className="text-sm text-white/70 font-medium">{deal.title}</div>
                    <div className="text-xs text-white/30 mt-1">{deal.buildings?.name} · {deal.contacts?.name}</div>
                    {deal.value && <div className="text-xs text-[#10b981] mt-1">{deal.value.toLocaleString()} PLN</div>}
                    <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {stages.filter((s) => s.id !== deal.stage).slice(0, 3).map((s) => (
                        <button key={s.id} onClick={() => moveDeal(deal.id, s.id)} className="px-2 py-0.5 text-[10px] rounded bg-white/[0.05] text-white/40 hover:text-white/70">{s.label.slice(0,2)} {s.id.slice(0,4)}</button>
                      ))}
                    </div>
                  </div>
                ))}
                {stageDeals.length === 0 && <p className="text-xs text-white/20 text-center py-4">Empty</p>}
              </div>
            </div>
          );
        })}
      </div>
      {deals.length === 0 && <div className="text-center py-16 border border-dashed border-white/[0.08] rounded-xl"><p className="text-white/30 text-sm">No deals yet</p></div>}
    </div>
  );
}
