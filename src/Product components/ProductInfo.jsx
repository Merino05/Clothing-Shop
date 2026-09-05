import { useState } from "react";
import { BagIcon, HeartIcon } from "../Home components/Icons.jsx";
import { IconBtn, Price } from "../Home components/Shared.jsx";
import { useCart } from "../context/CartContext.jsx";

const SIZES = ["S", "M", "L", "XL"];
const COLORS = ["#000000", "#ff9811", "#ffffff", "#454545"];

export default function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product, qty, { size: selectedSize, color: selectedColor });
  };
  return (
    <div className="flex flex-col gap-5">
      <p className="text-[11px] text-neutral-400 uppercase">{product.cat}</p>
      <h1 className="text-2xl font-black">{product.title}</h1>
      <div className="flex items-start">
        <Price price={product.price} oldPrice={product.old} big={true} />
      </div>

      <div className="w-full h-px bg-neutral-100" />

      {product.description && (
        <p className="text-sm text-neutral-500 leading-7">
          {product.description}
        </p>
      )}

      {/* سایز */}
      <div>
        <h3 className="font-extrabold text-sm mb-3">سایز</h3>
        <div className="flex gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`w-10 h-10 text-sm border rounded-lg transition-colors ${
                selectedSize === s
                  ? "bg-red-500 text-white border-red-500"
                  : "hover:bg-neutral-100"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* رنگ */}
      <div>
        <h3 className="font-extrabold text-sm mb-3">رنگ</h3>
        <div className="flex gap-2">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedColor(c)}
              style={{ background: c }}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColor === c
                  ? "border-red-500 scale-110"
                  : "border-neutral-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* تعداد */}
      <div>
        <h3 className="font-extrabold text-sm mb-3">تعداد</h3>
        <div className="flex items-center gap-3 border rounded-full w-fit px-2 py-1">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-7 h-7 flex items-center justify-center hover:text-red-500 transition-colors"
          >
            −
          </button>
          <span className="text-sm font-bold w-6 text-center">
            {qty.toLocaleString("fa-IR")}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-7 h-7 flex items-center justify-center hover:text-red-500 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* دکمه‌ها */}
      <div className="flex items-center gap-5 mt-2">
        <button
          onClick={handleAddToCart}
          disabled={!selectedSize || !selectedColor}
          className={`flex-1 flex items-center justify-center gap-2 bg-red-500 text-white font-bold py-3 rounded-md transition-colors
    ${!selectedSize || !selectedColor ? "opacity-50 " : "hover:bg-red-600"}
  `}
        >
          <BagIcon className="w-5 h-5" />
          افزودن به سبد خرید
        </button>
        <IconBtn>
          <HeartIcon className="w-5 h-5" />
        </IconBtn>
      </div>
    </div>
  );
}
