import { BagIcon, HeartIcon } from "./Icons.jsx";
import { Price, IconBtn } from "./Shared.jsx";

export const PRODUCTS = [
  { id:1,
    cat: "WOMEN'S HYGIENE GEL",
    title: "کراپ زنانه گره‌دار برند زارا رنگ سفید",
    price: 1250000,
    old: 2371000,
    sold: 342,
    url: "/src/assets/87857868 1.png",
    images: [
      "/src/assets/87857868 1.png",
      "/src/assets/hio89 1.png",
      "/src/assets/Layer 0 1.png",
    ],
    description:
      "این کراپ زنانه با پارچه‌ای نرم و باکیفیت تولید شده و برای استفاده روزمره بسیار مناسب است. طراحی گره‌دار آن ظاهری شیک و مدرن به شما می‌دهد.",
  },
  {
    id:2,
    cat: "WOMEN'S HYGIENE GEL",
    title: "کراپ زنانه گره‌دار برند زارا رنگ سفید",
    price: 1250000,
    old: 2371000,
    sold: 150,
    url: "/src/assets/hio89 1.png",
    images: [
      "/src/assets/87857868 1.png",
      "/src/assets/hio89 1.png",
      "/src/assets/Layer 0 1.png",
    ],
    description:
      "این کراپ زنانه با پارچه‌ای نرم و باکیفیت تولید شده و برای استفاده روزمره بسیار مناسب است. طراحی گره‌دار آن ظاهری شیک و مدرن به شما می‌دهد.",
  
  },
  {
    id:3,
    cat: "WOMEN'S HYGIENE GEL",
    title: "کراپ زنانه گره‌دار برند زارا رنگ سفید",
    price: 1250000,
    old: 2371000,
    sold: 500,
    url: "/src/assets/Layer 0 1.png",
    images: [
      "/src/assets/87857868 1.png",
      "/src/assets/hio89 1.png",
      "/src/assets/Layer 0 1.png",
    ],
    description:
      "این کراپ زنانه با پارچه‌ای نرم و باکیفیت تولید شده و برای استفاده روزمره بسیار مناسب است. طراحی گره‌دار آن ظاهری شیک و مدرن به شما می‌دهد.",
  
  },
  {
    id:4,
    cat: "WOMEN'S HYGIENE GEL",
    title: "کراپ زنانه گره‌دار برند زارا رنگ سفید",
    price: 1250000,
    old: 2371000,
    sold: 200,
    url: "/src/assets/Layer 0970790 1.png",
    images: [
      "/src/assets/87857868 1.png",
      "/src/assets/hio89 1.png",
      "/src/assets/Layer 0 1.png",
    ],
    description:
      "این کراپ زنانه با پارچه‌ای نرم و باکیفیت تولید شده و برای استفاده روزمره بسیار مناسب است. طراحی گره‌دار آن ظاهری شیک و مدرن به شما می‌دهد.",
  
  },
];

function ProductCard({ p }) {
  return (
    <div className="cardhov flex flex-col items-center gap-3 w-full py-4">
      <div className="relative bg-[#f6f6f6] h-80 w-full flex items-end justify-center overflow-hidden">
        <div
          className="figure w-[80%] h-[90%] rounded-t-full flex justify-center items-end "
          style={{ background: "linear-gradient(160deg, #d8d8d8, #b9b9b9)" }}
        >
          <img src={p.url} alt="" />
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
        <div className="flex flex flex-wrap gap-3">
          {["زمستانه", "تخفیف دارها", "همه"].map((b, i) => (
            <button
              key={b}
              className={
                "text-xs font-bold px-6 py-2.5 border transition-colors hover:bg-neutral-100"
              }
            >
              {b}
            </button>
          ))}
          <div className="flex gap-1">
            <button className="w-9 h-9 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
              ‹
            </button>
            <button className="w-9 h-9 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
              ›
            </button>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
