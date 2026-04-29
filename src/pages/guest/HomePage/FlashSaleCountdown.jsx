export default function FlashSaleCountdown() {
  // Sau này dùng useState + useEffect để đếm ngược thật
  const time = ["02", "45", "12"];

  return (
    <div className="flex gap-4 items-center">
      <span className="text-slate-500 font-black uppercase text-[10px] tracking-widest mr-2">
        Countdown:
      </span>
      <div className="flex gap-2">
        {time.map((t, i) => (
          <div
            key={i}
            className="bg-[#0f172a]/80 px-4 py-3 rounded-2xl
                          text-2xl font-black text-indigo-500
                          border border-indigo-500/20 backdrop-blur-md"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
