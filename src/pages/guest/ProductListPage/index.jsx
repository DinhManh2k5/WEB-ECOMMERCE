import BreadcrumbBar from "./BreadcrumbBar.jsx";
import FilterSidebar from "./FilterSidebar.jsx";
import ProductGrid from "./ProductGrid.jsx";
import "../guest.css";

export default function ProductListPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbBar />

      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar />
        <ProductGrid />
      </div>
    </main>
  );
}
