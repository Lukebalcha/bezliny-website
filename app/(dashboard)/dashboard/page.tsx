"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const [stats, setStats] = useState({ totalBuildings: 0, totalContacts: 0, activeDeals: 0, monthlyRevenue: 0, followupsToday: 0, buildingsByStatus: {} as Record<string, number> });
  const [recentInteractions, setRecentInteractions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadDashboard(); }, []);

  async function loadDashboard() {
    try {
      const [buildings, contacts, deals, contracts, interactions, followups] = await Promise.all([
        supabase.from("buildings").select("id, status"),
        supabase.from("contacts").select("id, relationship_status"),
        supabase.from("deals").select("id, stage, value").neq("stage", "won").neq("stage", "lost"),
        supabase.from("contracts").select("id, monthly_revenue, status").eq("status", "active"),
        supabase.from("interactions").select("*, contacts(name)").order("created_at", { ascending: false }).limit(5),
        supabase.from("contacts").select("id, name, next_followup").eq("next_followup", new Date().toISOString().split("T")[0]),
      ]);
      const buildingsByStatus: Record<string, number> = {};
      (buildings.data || []).forEach((b: any) => { buildingsByStatus[b.status] = (buildingsByStatus[b.status] || 0) + 1; });
      const monthlyRevenue = (contracts.data || []).reduce((sum: number, c: any) => sum + (c.monthly_revenue || 0), 0);
      setStats({ totalBuildings: buildings.data?.length || 0, totalContacts: contacts.data?.length || 0, activeDeals: deals.data?.length || 0, monthlyRevenue, followupsToday: followups.data?.length || 0, buildingsByStatus });
      setRecentInteractions(interactions.data || []);
    } catch (error) { console.error("Failed:", error); }
    finally { setLoading(false); }
  }

  if (loading) return <div className="flex items-center justify-center h-64"><div className="w-6 h-6 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-8">
      <div><h1 className="text-2xl font-bold">Dashboard</h1><p className="text-white/40 text-sm mt-1">Bezliny Warsaw Operations</p></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Buildings Mapped" value={stats.totalBuildings} icon="🏢" href="/buildings" />
        <StatCard label="FM Contacts" value={stats.totalContacts} icon="👤" href="/contacts" />
        <StatCard label="Active Deals" value={stats.activeDeals} icon="🔄" href="/pipeline" />
        <StatCard label="Monthly Revenue" value={`${stats.monthlyRevenue.toLocaleString()} PLN`} icon="💰" href="/contracts" />
      </div>
      {stats.followupsToday > 0 && (
        <div className="p-4 rounded-xl border border-[#10b981]/20 bg-[#10b981]/5">
          <p className="text-sm text-[#10b981]">📞 You have <strong>{stats.followupsToday}</strong> follow-up{stats.followupsToday > 1 ? "s" : ""} due today</p>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.01]">
          <h3 className="text-sm font-medium text-white/60 mb-4">Building Pipeline</h3>
          <div className="space-y-3">
            {Object.entries(stats.buildingsByStatus).map(([status, count]) => (
              <div key={status} className="flex items-center justify-between">
                <span className="text-sm text-white/50 capitalize">{status}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-1.5 bg-white/[0.06] rounded-full overflow-hidden"><div className="h-full bg-[#10b981] rounded-full" style={{ width: `${Math.min((count / Math.max(stats.totalBuildings, 1)) * 100, 100)}%` }} /></div>
                  <span className="text-sm font-medium text-white/70 w-8 text-right">{count}</span>
                </div>
              </div>
            ))}
            {Object.keys(stats.buildingsByStatus).length === 0 && <p className="text-xs text-white/30">No buildings yet. <Link href="/buildings/new" className="text-[#10b981] hover:underline">Add first →</Link></p>}
          </div>
        </div>
        <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.01]">
          <h3 className="text-sm font-medium text-white/60 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentInteractions.map((i) => (
              <div key={i.id} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
                <span className="text-sm">{i.type === "call" ? "📞" : i.type === "meeting" ? "🤝" : "📋"}</span>
                <div className="flex-1 min-w-0"><p className="text-sm text-white/70 truncate">{i.summary}</p><p className="text-xs text-white/30 mt-0.5">{i.contacts?.name} · {new Date(i.created_at).toLocaleDateString()}</p></div>
              </div>
            ))}
            {recentInteractions.length === 0 && <p className="text-xs text-white/30">No interactions yet.</p>}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <QuickAction href="/buildings/new" label="Add Building" icon="+" />
        <QuickAction href="/contacts/new" label="Add Contact" icon="+" />
        <QuickAction href="/interactions" label="Log Interaction" icon="📝" />
        <QuickAction href="/map" label="View Map" icon="🗺️" />
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, href }: { label: string; value: string | number; icon: string; href: string }) {
  return (
    <Link href={href} className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:border-white/[0.12] transition-all group">
      <div className="flex items-center justify-between mb-3"><span className="text-lg">{icon}</span><span className="text-xs text-white/20 group-hover:text-white/40">→</span></div>
      <div className="text-2xl font-bold text-white/90">{value}</div>
      <div className="text-xs text-white/40 mt-1">{label}</div>
    </Link>
  );
}

function QuickAction({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <Link href={href} className="p-4 rounded-xl border border-dashed border-white/[0.08] hover:border-[#10b981]/30 hover:bg-[#10b981]/5 transition-all text-center">
      <span className="text-lg">{icon}</span>
      <p className="text-xs text-white/50 mt-1">{label}</p>
    </Link>
  );
}
