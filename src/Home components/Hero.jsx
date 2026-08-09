const FEATURES = ["دوخت ترک", "کِش بلند", "دوخت ترک", "جنس پشم"];
const COUNTDOWN = [
  ["۴", "روز"],
  ["۲۰", "ساعت"],
  ["۱۶", "دقیقه"],
  ["۳۸", "ثانیه"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 min-h-[600px]">
      
      {/* ========================================================= */}
      {/* بخش جدید: چهار دیو پس‌زمینه با گرادیانت و رنگ‌های متفاوت */}
      {/* ========================================================= */}
      <div className="absolute inset-0 grid grid-cols-[55%_45%] grid-rows-[85%_15%]">
        {/* دیو بالا-چپ (خاکستری با گرادیانت) */}
        <div className="bg-gradient-to-br from-[#d1d5db] to-[#e5e7eb]"></div>
        
        {/* دیو بالا-راست (سفید/خاکستری خیلی روشن) */}
        <div className="bg-gradient-to-b from-[#f3f4f6] to-[#ffffff]"></div>
        
        {/* دیو پایین-چپ (سفید تمیز) */}
        <div className="bg-[#f9fafb]"></div>
        
        {/* دیو پایین-راست (خاکستری تیره‌تر) */}
        <div className="bg-gradient-to-tl from-[#d1d5db] to-[#e5e7eb]"></div>
      </div>
      {/* ========================================================= */}


      {/* عکس به صورت جدا و مطلق - با رسپانسیو */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div className="relative w-full h-full flex items-end justify-center">
          {/* لایه بلور در موبایل */}
          <div className="absolute inset-0 backdrop-blur-sm md:backdrop-blur-none bg-white/30 md:bg-transparent "></div>

          {/* خود عکس */}
          <img
            src="/src/assets/woman 1.png"
            alt="woman model"
            className="h-[70%] sm:h-[75%] md:h-[85%] lg:h-[85%] w-auto object-contain transition-all duration-300"
          />
        </div>
      </div>

      {/* محتوای اصلی با Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 grid md:grid-cols-3 gap-6 md:gap-8 items-end">
        {/* سمت راست: عنوان و تخفیف */}
        <div className="order-1 md:order-1 text-right space-y-2 sm:space-y-3">
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-700">
            تخفیف لباس زنانه مجلسی
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
            مانتو زنانه بست کد ریحون رنگ روش
          </h1>
          <p className="text-xs tracking-widest text-neutral-500 uppercase">
            Rata Food restaurant cafe, Tehran, Best
          </p>
          <div className="flex flex-wrap justify-start gap-2 sm:gap-4 pt-1 sm:pt-2">
            {FEATURES.map((f, i) => (
              <span
                key={i}
                className="text-xs font-bold bg-white/80 backdrop-blur-sm shadow rounded-full px-2 sm:px-3 py-1 sm:py-1.5"
              >● {f}
              </span>
            ))}
          </div>
        </div>

        {/* ستون وسط: خالی (برای عکس) */}
        <div className="order-2 md:order-2"></div>

        {/* سمت چپ: متن توضیحات */}
        <p className="order-3 md:order-3 text-sm text-neutral-600 leading-7 sm:leading-8 text-justify bg-white/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-3 sm:p-4 md:p-0 rounded-lg">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر
          آن‌چنان که لازم است.
        </p>
      </div>

      {/* بخش پایین: دکمه‌ها و تایمر */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex flex-wrap justify-center sm:justify-start  ">
          <button className="bg-orange text-white text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-3 font-bold">
            تومان ۱.۵۷۰.۰۰۰
          </button>
          <button className="bg-dark text-white text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 hover:bg-orange-500 transition-colors">
            اطلاعات بیشتر ...
          </button>
        </div>
        <div className="flex gap-1.5 sm:gap-2">
          {COUNTDOWN.map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-orange-300 flex items-center justify-center font-bold text-sm sm:text-base bg-white/50 backdrop-blur-sm">
                {n}
              </div>
              <p className="text-[8px] sm:text-[10px] mt-1 text-neutral-500">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}