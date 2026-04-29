export default function BreadcrumbBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
        <a className="hover:text-primary transition-colors" href="#">
          Home
        </a>
        <span className="material-symbols-outlined text-[10px]">
          chevron_right
        </span>
        <a className="hover:text-primary transition-colors" href="#">
          Electronics
        </a>
        <span className="material-symbols-outlined text-[10px]">
          chevron_right
        </span>
        <span className="text-primary">Laptops</span>
      </nav>

      {/* Sort & Count */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-500 font-medium">
          Showing <span className="text-slate-300">1-12</span> of 48
        </span>
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-tight whitespace-nowrap">
            Sort:
          </label>
          <select className="bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-300 focus:ring-2 focus:ring-primary focus:border-primary py-1.5 pl-3 pr-8">
            <option>Newest Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>
    </div>
  );
}
