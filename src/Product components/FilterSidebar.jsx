import { useState } from "react";
import { FilterIcon, CloseIcon,TrashIcon } from "../Home components/Icons";

const CATEGORIES = ["زنانه", "مردانه", "بچگانه", "اکسسوری"];
const SIZES = ["S", "M", "L", "XL"];
const COLORS = ["#000000", "#ff9811", "#ffffff", "#454545", "#d8d8d8"];
const DEFAULT_PRICE = 5000000;

export default function FilterSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedCats, setSelectedCats] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [price, setPrice] = useState(DEFAULT_PRICE);

  const toggleCat = (cat) => {
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const clearFilters = () => {
    setSelectedCats([]);
    setSelectedSize(null);
    setSelectedColor(null);
    setPrice(DEFAULT_PRICE);
  };

  const hasActiveFilters =
    selectedCats.length > 0 ||
    selectedSize !== null ||
    selectedColor !== null ||
    price !== DEFAULT_PRICE;

  const content = (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-black text-lg">فیلترها</h2>
        <button className="md:hidden" onClick={() => setMobileOpen(false)}>
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      <div>
        <h3 className="font-extrabold text-sm mb-3">دسته‌بندی</h3>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCats.includes(cat)}
                onChange={() => toggleCat(cat)}
                className="accent-orange-500"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-extrabold text-sm mb-3">سایز</h3>
        <div className="flex gap-2 flex-wrap">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s === selectedSize ? null : s)}
              className={`w-9 h-9 text-xs border transition-colors ${
                selectedSize === s
                  ? "bg-orange-500 text-white border-orange-500"
                  : "hover:bg-neutral-100"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-extrabold text-sm mb-3">رنگ</h3>
        <div className="flex gap-2 flex-wrap">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedColor(c === selectedColor ? null : c)}
              style={{ background: c }}
              className={`w-7 h-7 rounded-full border-2 transition-all ${
                selectedColor === c
                  ? "border-orange-500 scale-110"
                  : "border-neutral-200"
              }`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-extrabold text-sm mb-3">محدوده قیمت</h3>
        <input
          type="range"
          min="100000"
          max="10000000"
          step="100000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-orange-500"
        />
        <p className="text-xs text-neutral-400 mt-2">
          تا {price.toLocaleString("fa-IR")} تومان
        </p>
      </div>
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="flex items-center gap-1.5 text-xs text-orange-500 font-bold border border-orange-200 bg-orange-50 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors px-3 py-1.5 rounded-full self-start"
        >
          <TrashIcon className="w-3.5 h-3.5" />
          حذف همه فیلترها
        </button>
      )}
    </>
  );

  return (
    <>
      {/* دکمه باز کردن فیلتر - فقط موبایل */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden flex items-center gap-2 border px-4 py-2 text-sm font-bold w-fit"
      >
        <FilterIcon className="w-4 h-4" />
        فیلترها
      </button>

      {/* سایدبار دسکتاپ */}
      <aside className="hidden md:flex w-64 flex-shrink-0 flex-col gap-8">
        {content}
      </aside>

      {/* پس‌زمینه تیره موبایل */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* دراور موبایل - از راست باز میشه (چون RTL هست) */}
      <aside
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-white z-50 px-6 py-8 flex flex-col gap-8 overflow-y-auto transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {content}
      </aside>
    </>
  );
}
