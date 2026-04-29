import { Link, useLocation } from "react-router-dom";

const SUB_LINKS = [
  { title: "Home", links: "/" },
  { title: "Product", links: "/products" },
  { title: "Discount Code", links: "/discount-codes" },
  { title: "Contact", links: "/contact" },
];

export default function GuestHeader() {
  const location = useLocation(); // lấy path hiện tại

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
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
              <span className="text-indigo-500">Fashion</span>Shop
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
                placeholder="Enter product name or code..."
                className="block w-full pl-12 pr-24 py-3 bg-slate-100 dark:bg-slate-800 text-sm rounded-2xl
                           bg-[#0f172a]/50 border border-[#1e293b]
                           focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500
                           placeholder:text-slate-500 outline-none transition-all"
              />

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-1">
                <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 transition-colors">
                  <span className="material-symbols-outlined text-xl">mic</span>
                </button>
                <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    photo_camera
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
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
            <div class="size-10 rounded-xl bg-surface-dark overflow-hidden ring-2 ring-primary/20 border border-border-dark">
              <img
                alt="User Profile Avatar"
                data-alt="Close up portrait of a smiling user"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB2Z_9V7X5vbcCN3eUITwcp8hcOq4bcYU3vGW_hDQDZjA9MuqOsgjjSYe-hL_55sFyH4xIOf7hOMTClEDyIGyEsKAeyyaKILsot3EwJLyWhHnZiSE8U43O61hdG2IWkd9Mj3_i6lxcNgdY6PHFFxgZ57jM9-uQD4iTT5bz5G2ayulgt5p_dkc2cYQ7Ns30tQRshM3dTMBSZVsyle8vB64hHrZMEmcB_aKPV5wyqhI4vnPInGyFe9zwK0Ag4qi2XugnBnKvWzXTUgU"
              />
            </div>
          </div>
        </div>

        {/* Sub nav */}
        <nav className="flex items-center gap-8 h-12 text-lg font-semibold text-slate-600 dark:text-slate-400 overflow-x-auto no-scrollbar">
          {SUB_LINKS.map((p) => (
            <Link
              key={p.title}
              to={p.links}
              className={`flex items-center gap-1 text-slate-900 dark:text-white h-full px-1 
      ${
        location.pathname === p.links
          ? "!text-indigo-500 border-b-2 border-indigo-500"
          : "hover:text-indigo-500"
      }`}
            >
              {p.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
