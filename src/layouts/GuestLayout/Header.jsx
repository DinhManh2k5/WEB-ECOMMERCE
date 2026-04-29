const NAV_LINKS = ["Marketplace", "Security", "Status"];
const SUB_LINKS = [
  "Intelligence",
  "Quantum Drops",
  "Nexus Hub",
  "Hardware",
  "Ecosystem",
  "Protocols",
];

export default function GuestHeader() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl
                       border-b border-white/10 bg-slate-950/80
                       shadow-[0px_10px_40px_rgba(79,70,229,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main nav */}
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="size-10 rounded-xl flex items-center justify-center text-white
                            bg-linear-to-br from-indigo-500 to-indigo-700
                            shadow-lg shadow-indigo-500/20"
            >
              🚀
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white hidden sm:block">
              Shop<span className="text-indigo-500">Indigo</span>
            </span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative group">
              <span
                className="absolute inset-y-0 left-4 flex items-center
                               text-slate-500 group-focus-within:text-indigo-500 transition-colors"
              >
                🔍
              </span>
              <input
                type="text"
                placeholder="Discover the future of tech..."
                className="w-full pl-12 pr-24 py-3 text-sm rounded-2xl
                           bg-[#0f172a]/50 border border-[#1e293b]
                           focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500
                           placeholder:text-slate-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <div
              className="hidden lg:flex flex-col items-end px-4 py-1
                            border-r border-[#1e293b]"
            >
              <span className="text-[10px] uppercase font-black tracking-widest text-indigo-500">
                Elite Alpha
              </span>
              <span className="text-xs font-bold text-slate-300">2,450 XP</span>
            </div>

            <button
              className="relative p-2.5 text-slate-400 hover:bg-white/5
                               rounded-xl border border-transparent hover:border-[#1e293b]
                               transition-colors"
            >
              🔔
              <span
                className="absolute top-2.5 right-2.5 size-2 bg-indigo-500 rounded-full
                               ring-4 ring-[#020617]"
              />
            </button>

            <button
              className="flex items-center gap-2 px-5 py-2.5 text-white text-sm
                               font-bold rounded-xl transition-all active:scale-95
                               bg-linear-to-br from-indigo-500 to-indigo-700
                               hover:shadow-lg hover:shadow-indigo-500/25"
            >
              🛍️ <span className="hidden sm:inline">Checkout (3)</span>
            </button>
          </div>
        </div>

        {/* Sub nav */}
        <nav
          className="flex items-center gap-8 h-12 text-sm font-semibold
                        text-slate-400 overflow-x-auto
                        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {SUB_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`whitespace-nowrap transition-colors h-full flex items-center
                          ${
                            i === 0
                              ? "text-white border-b-2 border-indigo-500"
                              : "hover:text-indigo-500"
                          }`}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="ml-auto whitespace-nowrap font-black italic tracking-tighter text-indigo-500"
          >
            SYSTEM_UPGRADE_50%_OFF
          </a>
        </nav>
      </div>
    </header>
  );
}
