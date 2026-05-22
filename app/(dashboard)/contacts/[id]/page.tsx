"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Contact, Interaction } from "@/lib/types";

export default function ContactDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [contact, setContact] = useState<Contact | null>(null);
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLog, setShowLog] = useState(false);
  const [logForm, setLogForm] = useState({ type: "call", summary: "", outcome: "positive", next_step: "", followup_date: "" });

  useEffect(() => { if (id) load(); }, [id]);
  async function load() {
    const [cRes, iRes] = await Promise.all([
      supabase.from("contacts").select("*").eq("id", id).single(),
      supabase.from("interactions").select("*").eq("contact_id", id).order("created_at", { ascending: false }),
    ]);
    setContact(cRes.data); setInteractions(iRes.data || []); setLoading(false);
  }
  async function updateStatus(s: string) { await supabase.from("contacts").update({ relationship_status: s, last_contact: new Date().toISOString().split("T")[0] }).eq("id", id); setContact((p) => p ? { ...p, relationship_status: s as any } : null); }
  async function logInteraction(e: React.FormEvent) {
    e.preventDefault();
    await supabase.from("interactions").insert({ contact_id: id, type: logForm.type, summary: logForm.summary, outcome: logForm.outcome, next_step: logForm.next_step || null, followup_date: logForm.followup_date || null });
    if (logForm.followup_date) await supabase.from("contacts").update({ next_followup: logForm.followup_date, last_contact: new Date().toISOString().split("T")[0] }).eq("id", id);
    setShowLog(false); setLogForm({ type: "call", summary: "", outcome: "positive", next_step: "", followup_date: "" }); load();
  }
  async function del() { if (!confirm("Delete?")) return; await supabase.from("contacts").delete().eq("id", id); router.push("/contacts"); }

  if (loading) return <div className="flex justify-center py-12"><div className="w-5 h-5 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin" /></div>;
  if (!contact) return <p className="text-white/40">Not found</p>;

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div><Link href="/contacts" className="text-xs text-white/30 hover:text-white/50">← Contacts</Link><h1 className="text-2xl font-bold mt-2">{contact.name}</h1><p className="text-white/40 text-sm">{contact.role} {contact.company ? `@ ${contact.company}` : ""}</p></div>
        <div className="flex gap-2"><button onClick={() => setShowLog(true)} className="px-3 py-1.5 text-xs bg-[#10b981] text-black rounded-md font-medium">+ Log</button><button onClick={del} className="px-3 py-1.5 text-xs text-red-400/60 border border-red-400/20 rounded-md">Delete</button></div>
      </div>
      <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01]">
        <h3 className="text-xs text-white/40 uppercase tracking-wider mb-3">Relationship</h3>
        <div className="flex flex-wrap gap-2">
          {["new","talking","warm","hot","client","cold"].map((s) => (<button key={s} onClick={() => updateStatus(s)} className={`px-3 py-1.5 text-xs rounded-md capitalize ${contact.relationship_status === s ? "bg-[#10b981] text-black font-medium" : "border border-white/[0.08] text-white/40"}`}>{s}</button>))}
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {contact.phone && <IC l="Phone" v={contact.phone} />}
        {contact.email && <IC l="Email" v={contact.email} />}
        {contact.preferred_contact && <IC l="Prefers" v={contact.preferred_contact} />}
        {contact.next_followup && <IC l="Follow-up" v={contact.next_followup} />}
      </div>
      {contact.pain_points.length > 0 && <div className="flex flex-wrap gap-2">{contact.pain_points.map((p) => <span key={p} className="px-2.5 py-1 text-xs rounded-md bg-orange-500/10 text-orange-400/70">{p}</span>)}</div>}
      {contact.notes && <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01]"><p className="text-sm text-white/50">{contact.notes}</p></div>}
      {showLog && (
        <form onSubmit={logInteraction} className="p-5 rounded-xl border border-[#10b981]/20 bg-[#10b981]/5 space-y-4">
          <h3 className="text-sm font-medium text-[#10b981]">Log Interaction</h3>
          <div className="grid grid-cols-2 gap-4">
            <select value={logForm.type} onChange={(e) => setLogForm({...logForm, type: e.target.value})} className="input-field"><option value="call">📞 Call</option><option value="meeting">🤝 Meeting</option><option value="visit">🏢 Visit</option><option value="email">✉️ Email</option><option value="assessment">📋 Assessment</option></select>
            <select value={logForm.outcome} onChange={(e) => setLogForm({...logForm, outcome: e.target.value})} className="input-field"><option value="positive">✅ Positive</option><option value="neutral">😐 Neutral</option><option value="negative">❌ Negative</option><option value="no_response">🔇 No Response</option></select>
          </div>
          <input type="text" value={logForm.summary} onChange={(e) => setLogForm({...logForm, summary: e.target.value})} placeholder="What happened?" required className="input-field w-full" />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" value={logForm.next_step} onChange={(e) => setLogForm({...logForm, next_step: e.target.value})} placeholder="Next step..." className="input-field" />
            <input type="date" value={logForm.followup_date} onChange={(e) => setLogForm({...logForm, followup_date: e.target.value})} className="input-field" />
          </div>
          <div className="flex gap-2"><button type="submit" className="px-4 py-2 bg-[#10b981] text-black text-sm font-medium rounded-lg">Save</button><button type="button" onClick={() => setShowLog(false)} className="px-4 py-2 text-sm text-white/40">Cancel</button></div>
        </form>
      )}
      <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] space-y-3">
        <h3 className="text-sm font-medium text-white/60">History</h3>
        {interactions.length === 0 ? <p className="text-xs text-white/30">No interactions</p> : interactions.map((i) => (
          <div key={i.id} className="p-3 rounded-lg bg-white/[0.02]"><p className="text-sm text-white/70">{i.summary}</p><p className="text-xs text-white/30 mt-0.5">{i.type} · {i.outcome} · {new Date(i.created_at).toLocaleDateString()}</p>{i.next_step && <p className="text-xs text-white/40 mt-1">→ {i.next_step}</p>}</div>
        ))}
      </div>
    </div>
  );
}
function IC({ l, v }: { l: string; v: string }) { return <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01]"><div className="text-xs text-white/30 mb-1">{l}</div><div className="text-sm text-white/70">{v}</div></div>; }
