import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    title: "پرفروش‌ترین‌های فصل",
    subtitle: "جدیدترین کلکسیون زمستانه با تخفیف ویژه",
    cta: "مشاهده محصولات",
    link: "/products",
    bg: "linear-gradient(135deg, #ff9811, #ffb84d)",
     image: "/src/assets/pngtree-flat-lay-fashion-outfit-png-image.png",
  },
  {
    title: "تا ۵۰٪ تخفیف",
    subtitle: "فقط تا پایان این هفته، فرصت را از دست ندهید",
    cta: "خرید کنید",
    link: "/products",
    bg: "linear-gradient(135deg, #454545, #2c2c2c)",
    image: "/src/assets/pngtree2.png",
  },
  {
    title: "ارسال رایگان",
    subtitle: "برای خریدهای بالای ۵۰۰ هزار تومان",
    cta: "شروع خرید",
    link: "/products",
    bg: "linear-gradient(135deg, #d8d8d8, #b9b9b9)",
     image: "/src/assets/pngtree.png",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[active];

  return (
    <div
      className="relative h-auto md:h-[420px] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-12 py-8 md:py-0 gap-6 md:gap-0 transition-all duration-700"
      style={{ background: slide.bg }}
    >
      <div className="text-white max-w-md z-10">
        <h1 className="text-3xl md:text-4xl font-black mb-3">{slide.title}</h1>
        <p className="text-sm md:text-base opacity-90 mb-6">{slide.subtitle}</p>
        <Link
          to={slide.link}
          className="inline-block bg-white text-neutral-800 font-bold px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors mb-6"
        >
          {slide.cta}
        </Link>
      </div>
<img
      src={slide.image}
      alt=""
      className="w-[100%] order-first md:order-last md:w-auto h-40 md:h-[95%] object-contain z-10 transition-all duration-700"
    />

      {/* دایره‌های دکوری */}
      <div className="absolute -left-10 -bottom-10 w-56 h-56 rounded-full bg-white/10 floaty" />
      <div className="absolute left-24 top-10 w-24 h-24 rounded-full bg-white/10" />

      {/* نشانگرهای اسلاید */}
      <div className="absolute bottom-6 right-12 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all  ${
              active === i ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}