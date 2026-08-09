const CATS = [
  { fa: "لباس مردانه", en: "Menswear", span: "md:col-span-2", img: "/src/assets/heather-ford-Tw9iB8TGRGI-unsplash 1.png" },
  { fa: "اکسسوری", en: "Accessory", img: "/src/assets/stil-TVllFyGaLEA-unsplash 1.png" },
  { fa: "لباس زمستانه", en: "Winterkleidung", img: "/src/assets/zemestoon.png" },
  { fa: "لباس زیر", en: "Under wear", img: "/src/assets/neauthy-skincare-8jg7vumdUlU-unsplash 1.png" },
  { fa: "لوازم آرایشی", en: "Cosmetic", img: "/src/assets/cosmetic.png" },
  { fa: "لباس مسافرتی", en: "Travel clothes", span: "md:col-span-2", img: "/src/assets/mosaferati.png" },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10" dir="rtl ">
      <div className="grid md:grid-cols-4 gap-4 ">
        {CATS.map((c) => (
          <div
            key={c.fa}
            className={
              "group relative h-64 overflow-hidden flex items-end justify-start pb-6 text-white cursor-pointer " +
              (c.span || "")
            }
            style={{
              backgroundImage: `url('${c.img}')`,
              backgroundColor: '#cbcbcb', // رنگ طوسی کمرنگ یکسان برای همه (Gray-300)
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* تغییر اصلی اینجاست: وقتی هاور می‌شود، شفافیت لایه تیره کم می‌شود */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 " />
            
            <div className="relative text-right ps-6 text-black">
              <p className="text-2xl font-extrabold ">{c.fa}</p>
              <p className="text-sm opacity-70 uppercase font-extralight tracking-widest">{c.en}</p>
              <span className="text-[11px] underline-grow inline-block mt-1">بیشتر ...</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}