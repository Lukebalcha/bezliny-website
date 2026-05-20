import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-wider font-[family-name:var(--font-space)] mb-4">
              BEZLINY
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Global leader in drone-based cleaning, inspection, and surface treatment. 
              Redefining how the world maintains critical infrastructure.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="inline-block w-2 h-2 rounded-full bg-[#34C7FF] animate-pulse" />
              <span className="text-xs text-white/40 uppercase tracking-wider">Operations Active Worldwide</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Government", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/40 mb-6">Headquarters</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Warsaw, Poland</li>
              <li>
                <a href="mailto:cooperation@gmail.com" className="hover:text-white transition-colors">
                  cooperation@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+48579366868" className="hover:text-white transition-colors">
                  +48 579 366 868
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Bezliny Cleaning Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/30">Global Operations</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-xs text-white/30">ISO Certified</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-xs text-white/30">Enterprise Grade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
