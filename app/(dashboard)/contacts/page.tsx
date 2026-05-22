"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Contact } from "@/lib/types";

const statusColors: Record<string, string> = { new: "bg-blue-500/20 text-blue-400", talking: "bg-yellow-500/20 text-yellow-400", warm: "bg-orange-500/20 text-orange-400", hot: "bg-red-500/20 text-red-400", client: "bg-[#10b981]/20 text-[#10b981]", cold: "bg-white/10 text-white/40" };

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => { loadContacts(); }, []);
  async function loadContacts() { const { data } = await supabase.from("contacts").select("*").order("created_at", { ascending: false }); setContacts(data || []); setLoading(false); }

  const filtered = filter === "all" ? contacts : contacts.filter((c) => c.relationship_status === filter);
  const todayStr = new Date().toISOString().split("T")[0];
  const followupsToday = contacts.filter((c) => c.next_followup === todayStr);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">Contacts</h1><p className="text-white/40 text-sm mt-1">{contacts.length} facility managers</p></div>
        <Link href="/contacts/new" className="px-4 py-2 bg-[#10b981] text-black text-sm font-medium rounded-lg">+ Add Contact</Link>
      </div>
      {followupsToday.length > 0 && (
        <div className="p-4 rounded-xl border border-[#10b981]/20 bg-[#10b981]/5">
          <p className="text-sm text-[#10b981] font-medium">📞 Follow-ups today:</p>
          {followupsToday.map((c) => <Link key={c.id} href={`/contacts/${c.id}`} className="block text-sm text-white/60 hover:text-[#10b981] mt-1">• {c.name} {c.company ? `(${c.company})` : ""}</Link>)}
        </div>
      )}
      <div className="flex gap-1">
        {["all","new","talking","warm","hot","client","cold"].map((s) => (
          <button key={s} onClick={() => setFilter(s)} className={`px-3 py-1.5 text-xs rounded-md capitalize ${filter === s ? "bg-[#10b981]/20 text-[#10b981]" : "text-white/40 hover:text-white/60"}`}>{s}</button>
        ))}
      </div>
      {loading ? <div className="flex justify-center py-12"><div className="w-5 h-5 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin" /></div> : filtered.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-white/[0.08] rounded-xl"><p className="text-white/30 text-sm">No contacts</p><Link href="/contacts/new" className="text-[#10b981] text-sm hover:underline mt-2 inline-block">Add first →</Link></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((c) => (
            <Link key={c.id} href={`/contacts/${c.id}`} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:border-white/[0.12] transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center text-sm text-white/50 group-hover:bg-[#10b981]/10 group-hover:text-[#10b981]">{c.name.charAt(0)}</div>
                <div className="flex-1 min-w-0"><div className="text-sm font-medium text-white/80 truncate">{c.name}</div><div className="text-xs text-white/30 truncate">{c.company || c.role || "—"}</div></div>
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase ${statusColors[c.relationship_status]}`}>{c.relationship_status}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-white/30">
                {c.phone && <span>📞 {c.phone}</span>}
                {c.next_followup && <span className={c.next_followup <= todayStr ? "text-[#10b981]" : ""}>📅 {c.next_followup}</span>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
