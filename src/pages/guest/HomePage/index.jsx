import HeroBanner from "./HeroBanner.jsx";
import CategoryGrid from "./CategoryGrid.jsx";
import FlashSaleSection from "./FlashSaleSection.jsx";
import RecommendationSection from "./RecommendationSection.jsx";
import "../guest.css";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-20">
      <HeroBanner />
      <CategoryGrid />
      <FlashSaleSection />
      <RecommendationSection />
    </div>
  );
}
