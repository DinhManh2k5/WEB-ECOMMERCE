export default function ProductCard({ product }) {
  const {
    img,
    name,
    price,
    originalPrice,
    rating,
    reviews,
    badge,
    badgeColor,
    description,
    discount,
  } = product;

  const badgeColorStyles = {
    "Flash Sale": "bg-red-500 shadow-red-500/20",
    "New Release": "bg-primary shadow-primary/20",
    "Trending Hot": "bg-orange-500 shadow-orange-500/20",
  };

  return (
    <div className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all flex flex-col h-full hover:shadow-2xl hover:shadow-primary/5">
      <div className="relative aspect-4/3 overflow-hidden bg-slate-900/80 p-4">
        <img
          alt={name}
          src={img}
          className="object-contain w-full h-full group-hover:scale-105 transition-all duration-500"
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span
              className={`${badgeColorStyles[badge] || "bg-primary shadow-primary/20"} text-white text-[9px] font-black px-2 py-1 rounded tracking-tighter uppercase shadow-lg`}
            >
              {badge}
            </span>
          </div>
        )}
        <button className="absolute top-4 right-4 p-2 bg-slate-800/80 backdrop-blur-md rounded-xl text-slate-500 hover:text-red-400 hover:bg-slate-700 transition-all shadow-lg">
          <span className="material-symbols-outlined text-lg">favorite</span>
        </button>
      </div>

      <div className="p-5 flex flex-col grow">
        {/* Rating */}
        <div className="flex items-center gap-1.5 text-amber-400 mb-3">
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined filled-icon text-[10px]"
              >
                star
              </span>
            ))}
            {[...Array(5 - rating)].map((_, i) => (
              <span
                key={`empty-${i}`}
                className="material-symbols-outlined text-[10px] text-slate-700"
              >
                star
              </span>
            ))}
          </div>
          <span className="text-slate-600 text-[10px] font-bold tracking-tighter">
            ({reviews} REVIEWS)
          </span>
        </div>

        <h3 className="font-bold text-white text-base mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {name}
        </h3>
        <p className="text-xs text-slate-400 mb-6 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <div className="mt-auto pt-5 flex items-end justify-between border-t border-slate-800/50">
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-xl font-black text-white">${price}</span>
              {originalPrice && (
                <span className="text-xs text-slate-600 line-through font-medium">
                  ${originalPrice}
                </span>
              )}
            </div>
            {discount && (
              <span
                className={`text-[10px] font-bold px-2 py-1 rounded-md border uppercase ${
                  discount.color === "red"
                    ? "text-red-500 bg-red-500/10 border-red-500/20"
                    : "text-green-500 bg-green-500/10 border-green-500/20"
                }`}
              >
                {discount.text}
              </span>
            )}
          </div>
          <button className="p-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group/btn">
            <span className="material-symbols-outlined text-xl group-hover/btn:scale-110 transition-transform">
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
