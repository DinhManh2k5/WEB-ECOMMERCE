export default function FlashSaleProductCard({
  id,
  img,
  name,
  price,
  original,
  discount,
  sold,
  remaining,
  pct,
}) {
  return (
    <div
      className="bg-[#0f172a]/60 p-5 rounded-[2rem] group border border-[#1e293b] 
                    hover:border-indigo-500/40 hover:bg-[#0f172a] transition-all"
    >
      {/* Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#020617] mb-5 border border-[#1e293b]">
        <img
          alt={`Product ${id}`}
          src={img}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 text-white text-[10px] font-black px-3 py-1.5 rounded-lg border border-white/20 bg-gradient-to-br from-indigo-500 to-indigo-700">
          {discount} OPS
        </div>
      </div>

      {/* Info */}
      <h4 className="font-bold text-base mb-2 line-clamp-1 text-white group-hover:text-indigo-500 transition-colors">
        {name}
      </h4>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xl font-black text-white">{price}</span>
        <span className="text-slate-500 text-sm line-through">{original}</span>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
          <span>Synced: {sold}</span>
          <span className="text-indigo-500">{remaining} Remaining</span>
        </div>
        <div className="w-full bg-[#020617] h-2 rounded-full overflow-hidden border border-[#1e293b] p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
