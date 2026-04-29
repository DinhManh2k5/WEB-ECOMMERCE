const FOOTER_COLS = [
  {
    title: "Navigation",
    links: [
      "Command Center",
      "Core Ethics",
      "Nexus Nodes",
      "Dev Portal",
      "Ambassadors",
    ],
  },
  {
    title: "Protocols",
    links: [
      "Support Uplink",
      "Logistics API",
      "Return Cycle",
      "Signal Tracking",
      "Privacy Cipher",
    ],
  },
];

export default function GuestFooter() {
  return (
    <footer className="bg-[#0f172a] border-t border-[#1e293b] mt-32 relative overflow-hidden">
      {/* Bottom gradient bar */}
      <div
        className="absolute bottom-0 left-0 w-full h-1
                      bg-gradient-to-r from-indigo-600 to-indigo-400"
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div
                className="size-10 rounded-xl flex items-center justify-center text-white
                              bg-gradient-to-br from-indigo-500 to-indigo-700"
              >
                🚀
              </div>
              <span className="text-2xl font-black tracking-tight">
                Shop<span className="text-indigo-500">Indigo</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Powering the next generation of premium tech commerce.
            </p>
            <div className="flex gap-4">
              {["🌐", "💻", "🔗"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-12 rounded-2xl flex items-center justify-center
                              bg-[#020617] border border-[#1e293b] text-slate-400
                              hover:text-indigo-500 hover:border-indigo-500/50 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {FOOTER_COLS.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8">
                {title}
              </h4>
              <ul className="space-y-5 text-sm font-bold text-slate-500">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-indigo-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8">
              Subroutine
            </h4>
            <p className="text-sm text-slate-500 mb-6 font-medium">
              Subscribe for direct neural updates on new hardware drops.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="user@matrix.com"
                className="w-full px-5 py-3.5 rounded-2xl text-sm
                           bg-[#020617] border border-[#1e293b]
                           focus:ring-2 focus:ring-indigo-500/50 outline-none
                           placeholder:text-slate-600 transition-all"
              />
              <button
                className="w-full py-4 font-black text-white rounded-2xl
                                 bg-gradient-to-r from-indigo-600 to-indigo-500
                                 hover:shadow-lg hover:shadow-indigo-500/25
                                 active:scale-[0.98] transition-all"
              >
                SYNC_NOW
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-10 border-t border-[#1e293b] flex flex-col md:flex-row
                        justify-between items-center gap-6
                        text-[10px] font-black uppercase tracking-[0.15em] text-slate-600"
        >
          <p>© 2024 SHOPINDIGO NEURAL NETWORK. ALL SYSTEMS OPERATIONAL.</p>
          <div className="flex gap-10">
            <span className="hover:text-indigo-500 transition-colors cursor-pointer">
              🌐 LANG_EN
            </span>
            <span className="hover:text-indigo-500 transition-colors cursor-pointer">
              🪙 CURRENCY_USD
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
