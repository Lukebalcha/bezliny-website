"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const typeIcons: Record<string, string> = { call: "📞", meeting: "🤝", visit: "🏢", email: "✉️", whatsapp: "💬", assessment: "📋" };

export default function InteractionsPage() {
  const [interactions, setInteractions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [contacts, setContacts] = useState<any[]>([]);
  const [buildings, setBuildings] = useState<any[]>([]);
  const [form, setForm] = useState({ contact_id: "", building_id: "", type: "call", summary: "", outcome: "positive", next_step: "", followup_date: "" });

  useEffect(() => { load(); }, []);
  async function load() {
    const [i, c, b] = await Promise.all([
      supabase.from("interactions").select("*, contacts(name), buildings(name)").order("created_at", { ascending: false }).limit(50),
      supabase.from("contacts").select("id, name").order("name"),
      supabase.from("buildings").select("id, name").order("name"),
    ]);
    setInteractions(i.data || []); setContacts(c.data || []); setBuildings(b.data || []); setLoading(false);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    await supabase.from("interactions").insert({ contact_id: form.contact_id, building_id: form.building_id || null, type: form.type, summary: form.summary, outcome: form.outcome, next_step: form.next_step || null, followup_date: form.followup_date || null });
    await supabase.from("contacts").update({ last_contact: new Date().toISOString().split("T")[0], ...(form.followup_date ? { next_followup: form.followup_date } : {}) }).eq("id", form.contact_id);
    setShowForm(false); setForm({ contact_id: "", building_id: "", type: "call", summary: "", outcome: "positive", next_step: "", followup_date: "" }); load();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">Interactions</h1><p className="text-white/40 text-sm mt-1">Every touchpoint tracked</p></div>
        <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 bg-[#10b981] text-black text-sm font-medium rounded-lg">+ Log</button>
      </div>
      {showForm && (
        <form onSubmit={submit} className="p-5 rounded-xl border border-[#10b981]/20 bg-[#10b981]/5 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <select value={form.contact_id} onChange={(e) => setForm({...form, contact_id: e.target.value})} required className="input-field"><option value="">Contact...</option>{contacts.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select>
            <select value={form.building_id} onChange={(e) => setForm({...form, building_id: e.target.value})} className="input-field"><option value="">Building (opt)</option>{buildings.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}</select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select value={form.type} onChange={(e) => setForm({...form, type: e.target.value})} className="input-field"><option value="call">📞 Call</option><option value="meeting">🤝 Meeting</option><option value="visit">🏢 Visit</option><option value="email">✉️ Email</option><option value="assessment">📋 Assessment</option></select>
            <select value={form.outcome} onChange={(e) => setForm({...form, outcome: e.target.value})} className="input-field"><option value="positive">✅ Positive</option><option value="neutral">😐 Neutral</option><option value="negative">❌ Negative</option><option value="no_response">🔇 No Response</option></select>
          </div>
          <input type="text" value={form.summary} onChange={(e) => setForm({...form, summary: e.target.value})} placeholder="What happened?" required className="input-field w-full" />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" value={form.next_step} onChange={(e) => setForm({...form, next_step: e.target.value})} placeholder="Next step..." className="input-field" />
            <input type="date" value={form.followup_date} onChange={(e) => setForm({...form, followup_date: e.target.value})} className="input-field" />
          </div>
          <div className="flex gap-2"><button type="submit" className="px-4 py-2 bg-[#10b981] text-black text-sm font-medium rounded-lg">Save</button><button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-sm text-white/40">Cancel</button></div>
        </form>
      )}
      {loading ? <div className="flex justify-center py-12"><div className="w-5 h-5 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin" /></div> : interactions.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-white/[0.08] rounded-xl"><p className="text-white/30 text-sm">No interactions yet</p></div>
      ) : (
        <div className="space-y-2">{interactions.map((i) => (
          <div key={i.id} className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08]">
            <span className="text-lg">{typeIcons[i.type] || "📌"}</span>
            <div className="flex-1"><p className="text-sm text-white/70">{i.summary}</p><div className="flex gap-3 mt-1.5 text-xs text-white/30"><span>{i.contacts?.name}</span>{i.buildings?.name && <span>🏢 {i.buildings.name}</span>}<span>{new Date(i.created_at).toLocaleDateString()}</span><span className="capitalize">{i.outcome}</span></div>{i.next_step && <p className="text-xs text-white/40 mt-1">→ {i.next_step}</p>}</div>
          </div>
        ))}</div>
      )}
    </div>
  );
}
