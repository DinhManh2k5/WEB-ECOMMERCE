export default function HeroBanner() {
  return (
    <section
      className="relative rounded-[2.5rem] overflow-hidden
                        aspect-[21/9] sm:aspect-[3/1] bg-slate-900
                        border border-[#1e293b] group"
    >
      <img
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400"
        alt="Summer promo"
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/40 to-transparent
                      flex items-center px-10 sm:px-20"
      >
        <div className="max-w-xl space-y-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-indigo-500/20 border border-indigo-500/30
                           text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300"
          >
            <span className="size-1.5 bg-indigo-500 rounded-full animate-pulse" />
            Seasonal Upgrade
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight">
            Forge Your Future <br /> With Tech
          </h2>
          <p className="text-slate-300 text-base sm:text-xl font-medium leading-relaxed max-w-md">
            Access the exclusive summer matrix with up to 50% optimization on
            all premium gear.
          </p>
          <div className="flex gap-4 pt-4">
            <button
              className="px-10 py-4 text-white font-black rounded-2xl
                               bg-gradient-to-br from-indigo-500 to-indigo-700
                               hover:shadow-2xl hover:shadow-indigo-500/40
                               transition-all hover:-translate-y-1"
            >
              Initiate Order
            </button>
            <button
              className="px-10 py-4 glass font-bold text-white rounded-2xl 
                   hover:bg-white/10 transition-colors border border-white/10"
            >
              Read Docs
            </button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 right-10 flex gap-3">
        <div className="w-12 h-1.5 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50" />
        <div className="w-12 h-1.5 rounded-full bg-white/10" />
        <div className="w-12 h-1.5 rounded-full bg-white/10" />
      </div>
    </section>
  );
}
