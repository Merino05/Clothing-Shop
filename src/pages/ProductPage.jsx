import Breadcrumb from "../Product components/Breadcrumb.jsx";
import FilterSidebar from "../Product components/FilterSidebar.jsx";
import ProductGrid from "../Product components/ProductGrid.jsx";
import Pagination from "../Product components/Pagination.jsx";
import { PRODUCTS } from "../data/products.jsx";
import { useEffect, useState } from "react";
import { SearchIcon } from "../Home components/Icons.jsx";
import { useSearchParams } from "react-router-dom";

const ITEMS_PER_PAGE = 3;

export default function Products() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = PRODUCTS.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.cat.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginatedProducts = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setSearch(searchParams.get("q") || "");
  }, [searchParams]);

  // هر بار جستجو تغییر کرد، برگرد صفحه ۱
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-16">
      <Breadcrumb
        items={[
          { label: "صفحه اصلی", path: "/" },
          { label: "محصولات", path: "/products" },
        ]}
      />

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <FilterSidebar />
        <div className="flex-1">
          {paginatedProducts.length > 0 ? (
            <ProductGrid products={paginatedProducts} />
          ) : (
            <p className="text-center text-neutral-400 py-16">
              محصولی با این مشخصات پیدا نشد.
            </p>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}