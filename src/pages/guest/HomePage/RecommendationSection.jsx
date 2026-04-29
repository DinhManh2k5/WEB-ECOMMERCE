import RecommendationProductCard from "./RecommendationProductCard.jsx";

const PRODUCTS = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH81hCo8-pphAWXyUnbTfh2l1O_hCvvrtT2MlxPqG_VLrErfH3ShE67xWr769XL1ok9q4WsKTakllC3tZahuLR_OhjRbXVLMuDmsuOs6YIeZhx2HMqXCAQ1eFQI2w8jUdTxVVwl0MMOCAzOSblc4FDWjFk4pBWWd8XWEQCeLASiB7FvpQyuAGC3IkPebq5pg4l7khtXy3Sg2EV9_Qe4hA_r6LddyY7yWyUQN1pdNisCSHPp65MatlyP96F3zzFRHbjaoZ5mJ3n0IY",
    category: "Next-Gen Gear",
    name: "Matrix Runner S-01",
    price: "$115.00",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALNmpRe7fLQc44eMx6gZvnywB7hPcNDsiF9w8JnPgtvVWzlstC5FyUKVTZY_TpiUdYst7OoL5u7hWVTj-1s_qEYqtrBRLnYrGMHynXDmZ1V3wEDOf_LuvkZzqldMC2uyqxffjdwsBgT_v7DLyz2rx6dUZ4TZ5Fz8BEDDwTg4VUzPRIp8xBSTR7l6XABR0xep189k3tJ70OARqbN7x95ou0BUU9obAuV5fdd_qRyFYHjQWhufzsUbwhKW-bojHo1ohESiUOSUmnJH4",
    category: "Optics",
    name: "Ray-Ban Meta Tech",
    price: "$180.00",
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg_3PT2kA51D0BF2X6qE0NAA_VC44RK-bshml69UfuuJm4rH71rlwzyT7OQkVDBOphXRUp3MCfRgK38FLJDjNs3YjAnrO0TdgkuGGkkN9sr6mDCykYdOvyoV7iOERWISl09gF7t8eR99kbmgdJZ51ZVM7KvE7NL_uRe51OC15ek5nIHEkyvvLKij3LxZuGUNz9YGBHPbd-6YnDyBokCzvHr7SwhAxwXjmv5Mhqw-gu6lHEohnxNcE1aB-HUzhrg6wbpiB9UW0SLNY",
    category: "Elite Audio",
    name: "SoundCore Pro Max",
    price: "$299.00",
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4oRAL81kg1oz-k_hHJ6OACyBuUp9k-WiEdiSBYxDlO_6Q6DIF7bV_tmuFjJbeQaVYo3PkqIUOTw-6dnO4gGFC3C1_A9MEouMJCFSxYEiogyhr2dkYTn3Pmn1GOw6o-b4cKgtFyZe6vu5YRrrdMHopNTdR0KP7R6VIHOekbkn28uM_0zK-V2_olX1rvTl3IMIpCrlVLqRET0v0ywkor4gIZa4tGN4unRkS-Jc1D-6iDfxt_w6KYJ7Bva6zabfxsDoagT1t3HQv73M",
    category: "Home Grid",
    name: "Automated Pantry Core",
    price: "$145.00",
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVi4OCHGlNrAFcb1gApWpj4SJTu0eazkSocRIYba304wk9h4lKNOtLtCntwzb2hegCaWLlV3yG-bVwycp4cVZbf8uSZB4iSBdHTw7ZSFwlwH2vvMolYJLdtu2_foewBy5lw0LGQgguP7UQd1A-k42-V1E2bkDQxV5GFZOIemkNC1n_0AQ6h_v-zAXXkS9mwwBKGU9p9n9UILUmAg1VoCM9DaoO0N0xYvEg76m4lA0yBdlTJZr4xZ_G_4LlQvN0C241PX75fW_z0g4",
    category: "Bio-Life",
    name: "Smart Hydration Unit",
    price: "$32.00",
  },
];

export default function RecommendationSection() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <div
          className="size-12 text-white rounded-xl flex items-center justify-center
                        bg-linear-to-br from-indigo-500 to-indigo-700
                        shadow-lg shadow-indigo-500/20 text-xl"
        >
          🧠
        </div>
        <div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            Adaptive Suggestions
          </h3>
          <p className="text-slate-500 text-sm font-medium">
            Algorithmic selection based on your profile
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {PRODUCTS.map((p) => (
          <RecommendationProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
