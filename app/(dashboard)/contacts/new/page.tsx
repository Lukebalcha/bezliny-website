"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const painPoints = ["Cost","Safety concerns","Quality issues","Scheduling","Current provider unreliable","Regulatory compliance","Resident complaints"];

export default function NewContactPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", company: "", phone: "", email: "", linkedin: "", how_we_met: "", relationship_status: "new", preferred_contact: "", decision_power: "", pain_points: [] as string[], notes: "", next_followup: "" });

  function u(f: string, v: any) { setForm((p) => ({ ...p, [f]: v })); }
  function togglePain(p: string) { setForm((prev) => ({ ...prev, pain_points: prev.pain_points.includes(p) ? prev.pain_points.filter((x) => x !== p) : [...prev.pain_points, p] })); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setSaving(true);
    const { error } = await supabase.from("contacts").insert({ name: form.name, role: form.role || null, company: form.company || null, phone: form.phone || null, email: form.email || null, linkedin: form.linkedin || null, how_we_met: form.how_we_met || null, relationship_status: form.relationship_status, preferred_contact: form.preferred_contact || null, decision_power: form.decision_power || null, pain_points: form.pain_points, notes: form.notes || null, next_followup: form.next_followup || null });
    if (error) { alert("Error: " + error.message); setSaving(false); } else { router.push("/contacts"); }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold">Add Contact</h1><p className="text-white/40 text-sm mt-1">New facility manager</p></div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <F label="Name" required><input type="text" value={form.name} onChange={(e) => u("name", e.target.value)} required className="input-field" placeholder="Jan Kowalski" /></F>
          <F label="Company"><input type="text" value={form.company} onChange={(e) => u("company", e.target.value)} className="input-field" placeholder="Management co." /></F>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <F label="Role"><select value={form.role} onChange={(e) => u("role", e.target.value)} className="input-field"><option value="">Select...</option><option value="Facility Manager">Facility Manager</option><option value="Property Manager">Property Manager</option><option value="Building Administrator">Building Administrator</option><option value="Technical Director">Technical Director</option><option value="Board Member">Board Member</option></select></F>
          <F label="Decision Power"><select value={form.decision_power} onChange={(e) => u("decision_power", e.target.value)} className="input-field"><option value="">Unknown</option><option value="decides_alone">Decides alone</option><option value="recommends">Recommends</option><option value="committee">Committee</option></select></F>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <F label="Phone"><input type="tel" value={form.phone} onChange={(e) => u("phone", e.target.value)} className="input-field" placeholder="+48..." /></F>
          <F label="Email"><input type="email" value={form.email} onChange={(e) => u("email", e.target.value)} className="input-field" placeholder="jan@co.pl" /></F>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <F label="How we met"><select value={form.how_we_met} onChange={(e) => u("how_we_met", e.target.value)} className="input-field"><option value="">Select...</option><option value="cold_outreach">Cold outreach</option><option value="referral">Referral</option><option value="event">Event</option><option value="linkedin">LinkedIn</option><option value="walk_in">Walk-in</option><option value="inbound">Inbound</option></select></F>
          <F label="Next Follow-up"><input type="date" value={form.next_followup} onChange={(e) => u("next_followup", e.target.value)} className="input-field" /></F>
        </div>
        <F label="Pain Points"><div className="flex flex-wrap gap-2">{painPoints.map((p) => (<button key={p} type="button" onClick={() => togglePain(p)} className={`px-3 py-1.5 text-xs rounded-md border ${form.pain_points.includes(p) ? "bg-[#10b981]/20 border-[#10b981]/30 text-[#10b981]" : "border-white/[0.08] text-white/40"}`}>{p}</button>))}</div></F>
        <F label="Notes"><textarea value={form.notes} onChange={(e) => u("notes", e.target.value)} placeholder="Personal details..." rows={3} className="input-field resize-none" /></F>
        <div className="flex gap-3 pt-4">
          <button type="submit" disabled={saving} className="px-6 py-2.5 bg-[#10b981] text-black text-sm font-medium rounded-lg disabled:opacity-50">{saving ? "Saving..." : "Save Contact"}</button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2.5 border border-white/[0.08] text-white/50 text-sm rounded-lg">Cancel</button>
        </div>
      </form>
    </div>
  );
}
function F({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) { return <div><label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">{label} {required && <span className="text-[#10b981]">*</span>}</label>{children}</div>; }
