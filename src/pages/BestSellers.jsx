import { PRODUCTS } from "../Home components/ProductSection.jsx";
import Breadcrumb from "../Product components/Breadcrumb.jsx";
import HeroSlider from "../BestSellers components/HeroSlider.jsx";
import PromoBanner from "../BestSellers components/PromoBanner.jsx";
import DiscountBadgeCard from "../BestSellers components/DiscountBadgeCard.jsx";
import ProductGrid from "../Product components/ProductGrid.jsx";

export default function BestSellers() {
  // پرفروش‌ترین‌ها: بر اساس فیلد sold مرتب و ۴ تای اول
  const topSellers = [...PRODUCTS]
    .sort((a, b) => (b.sold || 0) - (a.sold || 0))
    .slice(0, 4);

  // محصولات تخفیف‌دار: قیمت کمتر از قیمت اصلی
  const discounted = PRODUCTS.filter((p) => p.old && p.old > p.price);

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-16 flex flex-col gap-16">
      <Breadcrumb
        items={[
          { label: "صفحه اصلی", path: "/" },
          { label: "پرفروش‌ها", path: "/best-sellers" },
        ]}
      />

      <HeroSlider />

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black relative inline-block">
            پرفروش‌ترین محصولات
            <span className="absolute right-0 -bottom-1 w-full h-2 bg-orange-100 -z-10" />
          </h2>
        </div>
        <ProductGrid products={topSellers} />
      </section>

      <PromoBanner />

      {discounted.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black relative inline-block">
              تخفیف‌های ویژه
              <span className="absolute right-0 -bottom-1 w-full h-2 bg-orange-100 -z-10" />
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {discounted.map((p) => (
              <DiscountBadgeCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}