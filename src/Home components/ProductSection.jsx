import { useRef, useState } from "react";
import { BagIcon, HeartIcon } from "./Icons.jsx";
import { Price, IconBtn } from "./Shared.jsx";
import { PRODUCTS } from "../data/products.jsx";

const TABS = ["همه", "تخفیف دارها", "زمستانه"];

function ProductCard({ p }) {
  return (
    <div className="cardhov flex flex-col items-center gap-3 w-full py-4 flex-shrink-0 sm:w-[calc(50%-16px)] md:w-[calc(25%-24px)]">
      <div className="relative bg-[#f6f6f6] h-80 w-full flex items-end justify-center overflow-hidden">
        <div
          className="figure w-[80%] h-[90%] rounded-t-full flex justify-center items-end "
          style={{ background: "linear-gradient(160deg, #d8d8d8, #b9b9b9)" }}
        >
          <img src={p.url} alt="" className="h-[90%] " />
        </div>
        <div className="grad absolute inset-0 pointer-events-none" />
      </div>
      <div className="flex flex-col items-center gap-1 px-4 text-center">
        <p className="text-[11px] text-neutral-400 uppercase">{p.cat}</p>
        <p className="ctitle font-extrabold text-sm">{p.title}</p>
        <div className="w-full h-px bg-neutral-100 my-1" />
        <div className="flex items-center justify-center gap-6 w-full">
          <IconBtn>
            <BagIcon className="w-5 h-5" />
          </IconBtn>
          <Price price={p.price} oldPrice={p.old} />
          <IconBtn>
            <HeartIcon className="w-5 h-5" />
          </IconBtn>
        </div>
      </div>
    </div>
  );
}

export default function ProductSection({ title, subtitle }) {
  const [activeTab, setActiveTab] = useState("همه");
  const scrollRef = useRef(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === "همه") return true;
    if (activeTab === "تخفیف دارها") return p.old && p.old > p.price;
    if (activeTab === "زمستانه") return true; // فعلاً فیلد فصل نداریم، همه رو نشون میده
    return true;
  });

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 320; // تقریبا عرض یک کارت + gap
    scrollRef.current.scrollBy({
      left: direction === "next" ? -amount : amount, // چون RTL هست جهت برعکسه
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div className="text-right">
          <h2 className="text-2xl font-black relative inline-block">
            {title}
            <span className="absolute right-0 -bottom-1 w-full h-2 bg-orange-100 -z-10" />
          </h2>
          <p className="text-neutral-400 text-xs mt-2">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {TABS.map((b) => (
            <button
              key={b}
              onClick={() => setActiveTab(b)}
              className={`text-xs font-bold px-6 py-2.5 border transition-colors ${
                activeTab === b
                  ? "bg-orange-500 text-white border-orange-500"
                  : "hover:bg-neutral-100"
              }`}
            >
              {b}
            </button>
          ))}
          <div className="flex gap-1">
            <button
              onClick={() => scroll("prev")}
              className="w-9 h-9 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-9 h-9 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}