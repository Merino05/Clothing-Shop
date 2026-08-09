import { Price } from "./Shared.jsx";

const FEATURES = ["دوخت ترک", "کِش بلند", "دوخت ترک", "جنس پشم"];

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10">
      <div className="relative h-auto md:h-[420px] py-20 overflow-hidden">
        {/* background panels, matching the figma flat-color layout */}
        <div className="absolute inset-0 grid grid-cols-[1fr_2fr_7fr] gap-3 bg-white">
          <div className="bg-[#707070]" />
          <div className="bg-[#d6d8db]" />
          <div className="bg-[#f0f0f0]" />
        </div>

        {/* content */}
        <div className="relative h-full flex content-center items-center flex-wrap flex-row px-10 gap-8">
          <div className="floaty from-neutral-300 to-neutral-400 order-2 ">
            <img src="/src/assets/homepage2-slider3 1.png" alt="" className="  w-auto"/>
          </div>
          <div className="order-1 md:order-2 text-right space-y-3">
            <p className="text-xl text-neutral-700">تخفیف لباس زنانه مجلسی</p>
            <h3 className="text-3xl font-black">
              مانتو زنانه بست کد ریحون رنگ روش
            </h3>
            <p className="text-xs tracking-widest text-neutral-500 uppercase">
              Rata Food restaurant cafe, Tehran, Best
            </p>
            <div className="flex flex-wrap justify-start gap-3">
              {FEATURES.map((f, i) => (
                <span
                  key={i}
                  className=" text-xs font-bold bg-white shadow rounded-full px-3 py-1.5"
                >
                  ● {f}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
              <Price price={1250000} oldPrice={2371000} />
              <button className="bg-dark text-white text-sm px-6 py-2.5 hover:bg-orange-500 transition-colors">
                اطلاعات بیشتر ...
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
