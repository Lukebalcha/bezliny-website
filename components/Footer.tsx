import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#09090b] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-[0.2em] font-[family-name:var(--font-space)] mb-4">
              BEZLINY
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Global leader in drone-based cleaning, inspection, and surface treatment. 
              Redefining how the world maintains critical infrastructure.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c8cdd3]" />
              <span className="text-[11px] text-white/70 uppercase tracking-[0.2em]">Operations Active Worldwide</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Government", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-sm text-white/70 hover:text-white transition-colors duration-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-6">Headquarters</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Warsaw, Poland</li>
              <li>
                <a href="mailto:cooperation@gmail.com" className="hover:text-white transition-colors duration-500">
                  cooperation@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+48579366868" className="hover:text-white transition-colors duration-500">
                  +48 579 366 868
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/60 tracking-wider">
            © {new Date().getFullYear()} Bezliny Cleaning Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-white/60 tracking-wider">Global Operations</span>
            <span className="w-[3px] h-[3px] rounded-full bg-white/10" />
            <span className="text-[11px] text-white/60 tracking-wider">ISO Certified</span>
            <span className="w-[3px] h-[3px] rounded-full bg-white/10" />
            <span className="text-[11px] text-white/60 tracking-wider">Enterprise Grade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
