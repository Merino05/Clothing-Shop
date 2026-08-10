import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.jsx";
import Breadcrumb from "../Product components/Breadcrumb.jsx";
import ProductGallery from "../Product components/ProductGallery.jsx";
import ProductInfo from "../Product components/ProductInfo.jsx";
import ProductGrid from "../Product components/ProductGrid.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-8 pt-40 pb-16 text-center">
        <p className="text-neutral-400">محصول مورد نظر پیدا نشد.</p>
        <Link to="/products" className="text-orange-500 font-bold hover:underline">
          بازگشت به محصولات
        </Link>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-16">
      <Breadcrumb
        items={[
          { label: "صفحه اصلی", path: "/" },
          { label: "محصولات", path: "/products" },
          { label: product.title, path: `/products/${product.id}` },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <ProductGallery images={product.images || [product.url]} />
        <ProductInfo product={product} />
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="text-2xl font-black mb-8">محصولات مرتبط</h2>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}