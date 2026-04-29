import { CATEGORIES } from "@/components/shared/CategoryIcons";

export default function CategoryGrid() {
  return (
    <section>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h3 className="text-2xl font-black tracking-tight text-white">
            Neural Networks
          </h3>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Browse optimized hardware sectors
          </p>
        </div>
        <a
          href="#"
          className="text-indigo-500 text-sm font-black hover:text-indigo-300
                               uppercase tracking-widest transition-colors"
        >
          Explore All →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {CATEGORIES.map(({ icon, label, color }) => (
          <div
            key={label}
            className="bg-[#0f172a] p-8 rounded-3xl flex flex-col items-center gap-4
                          border border-[#1e293b] cursor-pointer group
                          hover:bg-slate-800/50 hover:border-indigo-500/50
                          hover:-translate-y-1 transition-all"
          >
            <div
              className={`size-16 rounded-2xl flex items-center justify-center
                            border text-3xl group-hover:scale-110 transition-transform ${color}`}
            >
              {icon}
            </div>
            <span className="font-bold text-sm tracking-tight text-slate-300">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
