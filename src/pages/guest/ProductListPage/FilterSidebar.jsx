export default function FilterSidebar() {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-8">
      {/* Categories */}
      <div className="p-6 rounded-2xl glass-panel">
        <h3 className="font-bold text-white mb-5 uppercase tracking-widest text-[10px] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Categories
        </h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a className="flex items-center justify-between group" href="#">
              <span className="text-primary font-bold">Laptops</span>
              <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-md text-[10px] font-bold">
                154
              </span>
            </a>
            <ul className="pl-4 mt-3 space-y-2.5 text-slate-400 border-l border-slate-800 ml-1">
              <li>
                <a
                  className="hover:text-primary transition-colors text-xs"
                  href="#"
                >
                  Gaming Laptops
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors text-xs"
                  href="#"
                >
                  Ultrabooks
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors text-xs"
                  href="#"
                >
                  Workstations
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="flex items-center justify-between text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              <span>Tablets</span>{" "}
              <span className="text-slate-600 text-xs">82</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-between text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              <span>Accessories</span>{" "}
              <span className="text-slate-600 text-xs">210</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Price Range */}
      <div className="p-6 rounded-2xl glass-panel">
        <h3 className="font-bold text-white mb-5 uppercase tracking-widest text-[10px] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Price Range
        </h3>
        <div className="space-y-6">
          <div className="h-1 w-full bg-slate-800 rounded-full relative">
            <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-2 border-slate-900 rounded-full shadow-lg shadow-primary/40 cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-2 border-slate-900 rounded-full shadow-lg shadow-primary/40 cursor-pointer hover:scale-110 transition-transform"></div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-600 text-[10px]">
                $
              </span>
              <input
                className="w-full pl-5 pr-2 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-300"
                type="text"
                defaultValue="500"
              />
            </div>
            <span className="text-slate-700">/</span>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-600 text-[10px]">
                $
              </span>
              <input
                className="w-full pl-5 pr-2 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-300"
                type="text"
                defaultValue="2500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="p-6 rounded-2xl glass-panel">
        <h3 className="font-bold text-white mb-5 uppercase tracking-widest text-[10px] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Brands
        </h3>
        <div className="space-y-3">
          {["Apple", "Dell", "Asus", "HP", "Lenovo"].map((brand, idx) => (
            <label
              key={brand}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                defaultChecked={idx < 2}
                className="rounded-md border-slate-700 bg-slate-900 text-primary focus:ring-primary focus:ring-offset-slate-900 transition-all"
                type="checkbox"
              />
              <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="p-6 rounded-2xl glass-panel">
        <h3 className="font-bold text-white mb-5 uppercase tracking-widest text-[10px] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Customer Rating
        </h3>
        <div className="space-y-3">
          {[4, 3].map((stars) => (
            <label
              key={stars}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                className="w-4 h-4 text-primary focus:ring-primary bg-slate-900 border-slate-700 focus:ring-offset-slate-900"
                name="rating"
                type="radio"
              />
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`material-symbols-outlined text-sm ${i < stars ? "filled-icon" : "text-slate-700"}`}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">
                & up
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
