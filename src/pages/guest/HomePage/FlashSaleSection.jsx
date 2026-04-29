import FlashSaleCountdown from "./FlashSaleCountdown.jsx";
import FlashSaleProductCard from "./FlashSaleProductCard.jsx";

const PRODUCTS = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbNYPnlKC_T322-WmOi1DrKc0zQd74przTQSxfbd4b4qUZRrllhZ9xQAKinP6q46xfhOFpCOBEe1-QVpq_SWrTqB6A2DNqyO2B5nYFhBx9Z7Y0aoYPENLqsjNODxWiFkidWGCqrXA4wcHOS7bT2_Ka2GL0LzqS5e78lzE_2yLWo-rTusnnFvu-eWbRSmm7mCsCPqf1ol2tJEvzIxSIBuOZWxppGFiax2CwWpylUcyJVU_liZRRe3XdpujtzfwJF2dEDVzaO4NKdE",
    name: "Quantum Chronos S1",
    price: "$129.00",
    original: "$185.00",
    discount: "-30%",
    sold: 42,
    remaining: 8,
    pct: 84,
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg9U5RNG_-XQN1-hZx3Iq88dfLtiall9xliBCTddZtQ0z9aP7CVL7zSNJAHwo1W3l_FRJ0JuPTwjWE0aQaiUaCwsKkb5G-cxD4zoccEiVW-KH-NQ51ZT64Q0JONPYhPRJ0DIS2EB0GBFwYGNc0vIyLNfXACv3_UqUM2-OpFLj-rpwws72YYyutMDqSCadNI0OU4-fbg74FIigqYDOe2SyZubr2nzzjrlLCVYuK5ZVv6skkHS53aUDoE-FsDugrOHG3k0G6KqRiylU",
    name: "Neural Stream ANC",
    price: "$199.00",
    original: "$350.00",
    discount: "-45%",
    sold: 125,
    remaining: 15,
    pct: 89,
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4dwq-HTJ8Dc0k25Vi2c5MnhRQr4CM213uK9j1iwfv_r_-dmWwgrIJW5D57-7CbwT2HHKt_pzNVU-n8QaHLmnnMdM45I1K3Tf9Df0H-_RI6r2rPzXdICNFTaxwFN292DjTatBvT8PwyoqADaYzKqIZSdAsRmJQoIvwrCBksVhCmOI7SnRIg-nYM-6NA4ryLcf8gTI1j3s_0VaPoqlONgmj4LldGtxILZPjEoUfVr_a_gRspsv4s6iBn5El4RtaUC8kX8CrUmKccuQ",
    name: "Velocity Core X2",
    price: "$85.00",
    original: "$110.00",
    discount: "-20%",
    sold: 67,
    remaining: 33,
    pct: 67,
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYVBVSKNAwuuPIAkp6YYfGa7Ds90EJvwnvmUs3JyToCi83COysSkLg3N_KqJXY46Q_iuVKCNP_Kw1jvZAu7o0GUmhbAyCgmZmluj3wslCCg75P-MoHhuhTOySY4Yi_hPw2qT7RcIUsbl1_M88mj7K8sK6N1Se2fP4gOlXVW6wPYUdvdu4w2RZ15XylCAQhlM6G-Zz7gphAN07xY4Q2mHV2bZa42RCfPI2CYMYfVoQMmQRZhFDvR8m_n8jfK6pWdGafkQ_2ZNyycoQ",
    name: "Vision Analogue Gen 1",
    price: "$49.00",
    original: "$99.00",
    discount: "-50%",
    sold: 198,
    remaining: 2,
    pct: 98,
  },
];

export default function FlashSaleSection() {
  return (
    <section
      className="bg-[#0f172a]/40 rounded-[3rem] p-8 lg:p-12
                        border border-[#1e293b] relative overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5
                      blur-[120px] -mr-48 -mt-48 pointer-events-none"
      />

      <div
        className="flex flex-col md:flex-row md:items-center justify-between
                      gap-8 mb-12 relative z-10"
      >
        <div className="flex items-center gap-5">
          <div
            className="size-16 text-white rounded-2xl flex items-center justify-center
                          bg-gradient-to-br from-indigo-500 to-indigo-700
                          shadow-lg shadow-indigo-500/30 text-3xl"
          >
            ⚡
          </div>
          <div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">
              Overclock Deals
            </h3>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">
              Limited Execution Window
            </p>
          </div>
        </div>
        <FlashSaleCountdown />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {PRODUCTS.map((p) => (
          <FlashSaleProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
