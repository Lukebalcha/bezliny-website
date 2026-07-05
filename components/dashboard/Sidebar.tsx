"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/buildings", label: "Buildings", icon: "🏢" },
  { href: "/contacts", label: "Contacts", icon: "👤" },
  { href: "/pipeline", label: "Pipeline", icon: "🔄" },
  { href: "/map", label: "Territory Map", icon: "🗺️" },
  { href: "/interactions", label: "Interactions", icon: "📋" },
  { href: "/contracts", label: "Contracts", icon: "📄" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0a0a0c] border-r border-white/[0.06] flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-white/[0.06]">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#10b981]/20 flex items-center justify-center">
            <span className="text-[#10b981] font-bold text-sm">B</span>
          </div>
          <div>
            <span className="font-semibold text-white/90 text-sm">Bezliny</span>
            <span className="block text-[10px] text-white/30 uppercase tracking-wider">CRM System</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                isActive
                  ? "bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20"
                  : "text-white/50 hover:text-white/80 hover:bg-white/[0.03]"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-white/[0.06]">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-white/30 hover:text-white/60 transition-colors"
        >
          <span>←</span>
          <span>Public Site</span>
        </Link>
      </div>
    </aside>
  );
}
