export default function RecommendationProductCard({
  img,
  category,
  name,
  price,
}) {
  return (
    <div className="flex flex-col gap-4 group cursor-pointer">
      <div
        className="aspect-[4/5] rounded-[2rem] overflow-hidden relative
                      bg-[#0f172a] border border-[#1e293b]
                      group-hover:border-indigo-500/30 transition-all"
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
        />
        <button
          className="absolute bottom-4 right-4 size-12 text-white rounded-2xl
                           flex items-center justify-center
                           opacity-0 group-hover:opacity-100
                           translate-y-4 group-hover:translate-y-0 transition-all
                           backdrop-blur-xl bg-[rgba(15,23,42,0.7)] border border-white/5
                           hover:bg-indigo-500"
        >
          <span className="material-symbols-outlined">auto_awesome</span>
        </button>
      </div>

      {/* Info */}
      <div className="px-1">
        <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">
          {category}
        </span>
        <h4 className="font-bold text-base text-white line-clamp-1 mt-1">
          {name}
        </h4>
        <p className="font-black text-lg text-indigo-300">{price}</p>
      </div>
    </div>
  );
}
