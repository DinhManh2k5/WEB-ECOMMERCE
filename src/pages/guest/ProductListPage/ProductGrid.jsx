import ProductCard from "./ProductCard.jsx";

const PRODUCTS = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6mElf1I5d2SFsub8lixi33b59SfPFLus8DtxZQZyd4RSz8XQboLFYzOs46rnUNq7RF6Wwqc14Yr40AvTpIiW5FzIQyDsDraomsOvPS6IgBcE54i3FOWLLffvyXjOTBFVdq6ywCeLUns5efNUCED7ilY5bA4IT2_Dp_NnD2aKhWqxl5suPLyS2GTd02ySmVhHy-OvXrjptWW5fYuLgTikjQDsOZn_hTSFSEoLD3Xy7hr9Qdj2hJv60v1ltm_eHwKwsiK5eQJNYIk",
    name: 'MacBook Air M2 13"',
    price: "999.00",
    originalPrice: "1,199.00",
    rating: 5,
    reviews: 124,
    badge: "Flash Sale",
    description:
      "The thinnest, lightest laptop, now supercharged by Apple M2 chip with 8-core CPU.",
    discount: { text: "SAVE 15% INSTANTLY", color: "primary" },
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABLEqaP3H4lKAD-nO2gRPKWz-5VIl04g4PLUnBifoi2UWprMvDRisaKhKK0adMP2tLIPyABUIf2Fj3UallfCpyYOfb0EPCSL6OtUhisXFMMkUDM_v4VCXo0ZyJDOs8q1gYXeOfXsE2I29m35NzYYd2nm7fMsy96oZ9L6MzoKv1D0Qdkm2tRaUxcAFmjX5U5ss8d0Ld2jIKGITCAEheqUbbHWDinogCmYTSix59LwkyBBlXARSIszP0pY6n-fzN4Fw0mkYho7RCBBc",
    name: "Dell XPS 13 Plus 9320",
    price: "1,549.00",
    rating: 4,
    reviews: 42,
    badge: "New Release",
    description:
      "Experience the most powerful 13-inch XPS laptop yet, featuring capacitive touch function row.",
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfRRkgVtKG_fm23OiXUgh7nRpmRmNP5o5EE4dUGSBDcYvYUTJydqJoGnrt1zdcnVbKzXX2VbMEVpn962iJofkj8kF93iBRmfkcLYvY-CMEf8bhtDQ1kFPa76EH9tQ9_rbpYgDFcCmu-7oM6jNUTEtP0XSLaNxvhyvDPwviAgIoHUl3MnGUA6P8BXuwXB61URZ3qhe4EiG2nYM21gvL7ctziTUYOxkFu8Gl5Lum8oJpm673uHKdUkpuXJotDUGU7Vgjzp4PzMpJ4Hg",
    name: "Asus ROG Zephyrus G14",
    price: "1,899.00",
    originalPrice: "2,099.00",
    rating: 5,
    reviews: 218,
    badge: "Trending Hot",
    description:
      "The world's most powerful 14-inch gaming laptop, featuring NVIDIA GeForce RTX graphics.",
    discount: { text: "SAVE $200 TODAY", color: "green" },
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK7dMu73k0c9WK_zmJ25CSgNqHuJfrJZf3qUImk2HhsSI2aaI1WHMZ2Zwlfw9fzhJp6DOgdE50Y2jHsOnanY9V0P1fUkI-9sNXixgZXXPDu9lPoPPBrMQ9VoUGSENke3KQ7b1sHo6L6i5IGii6LZr_CVj-tRrFB39Ot3zVbzFRuhu2VQFv4xXjcapgCmMV0ht1gbM3AoY1uFT5ox2y5CijAJiu6DBd3Vtm_XB_Q4JDiGqUpoIYFmpf6dBp6BCJwdzAqI6OnXx5c6I",
    name: 'iPad Pro M2 12.9"',
    price: "1,099.00",
    rating: 5,
    reviews: 56,
    description:
      "The ultimate iPad experience. Now with next-generation M2 performance.",
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh44F76VQlBXSS29-c9TlTokP540uyJqv3jEPJS930rVAZyxoBUwOfT3OCUjkfDS6eXRpXfU5jyT-64uAw0g7MFY1oTfpSk0w41YXSY9c3eNjHjQ-8_mU7BRhC7lO3347C9CzQohyQkxlb_WGlB43vHiZ7P4tEXVEdX3MgXvXKxi0S57F8v9Bjk2WjY9mkS7E3VK2dBXwFIcgTnOdQ-aXl9lqj5NTUHUwAf13sKoAnbaoBkGyy1dZGdrHR7U7MSKv2gJLBgU-J7ms",
    name: "MSI Katana GF66",
    price: "1,249.00",
    rating: 4,
    reviews: 89,
    description:
      "Reliable performance for high-end gaming and intensive creative workflows.",
    outOfStock: true,
  },
  {
    id: 6,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgAPtb6SE3bC3YqJsiFjLSJHeF0rzbQTm7iTS-3vFy7WXzpLebSQ57gMR8p9HgIQBxF18Qu0kkvDcmidyNGE2y3LaPLisPP2sWG9wykAGye7hpzeU801q-rVPwBqBZI5m-lUZfVaW6SH1jZC51Ksg24Poinl6KaqbTFqXPz2dWBAaM0vi0eVAFGlLedWqZrNHrwGmCHgAkpmJG58w9FS32O5Cv-xdSKEr87C6ch0rn3CTYCUXm30ebF8XGCsSvCGQRowziU21kss0",
    name: "Lenovo Legion 5i Gen 7",
    price: "1,399.00",
    rating: 4,
    reviews: 15,
    description:
      "Powered by 12th Gen Intel processors for seamless multitasking.",
  },
];

export default function ProductGrid() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-800 pt-8">
        <button className="flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-all bg-slate-900 border border-slate-800 rounded-xl hover:border-primary/30">
          <span className="material-symbols-outlined text-sm">west</span>
          Prev Page
        </button>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-primary text-white font-black text-sm shadow-xl shadow-primary/20 ring-2 ring-primary/20">
            1
          </button>
          <button className="w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 font-bold text-sm transition-all">
            2
          </button>
          <button className="w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 font-bold text-sm transition-all">
            3
          </button>
          <span className="px-2 text-slate-700">•••</span>
          <button className="w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 font-bold text-sm transition-all">
            8
          </button>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-all bg-slate-900 border border-slate-800 rounded-xl hover:border-primary/30">
          Next Page
          <span className="material-symbols-outlined text-sm">east</span>
        </button>
      </div>
    </div>
  );
}
