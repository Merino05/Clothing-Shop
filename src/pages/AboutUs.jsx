import { Link } from "react-router-dom";
import Breadcrumb from "../Product components/Breadcrumb.jsx";
import PromoBanner from "../BestSellers components/PromoBanner.jsx";
import {
  TruckIcon,
  ShieldIcon,
  HeartIcon,
  StarIcon,
} from "../Home components/Icons.jsx";
import img from ".././assets/pngtree.png"
const STATS = [
  { value: "۱۲+", label: "سال تجربه" },
  { value: "۵۰هزار+", label: "مشتری راضی" },
  { value: "۳۰۰+", label: "محصول متنوع" },
  { value: "۹۸٪", label: "رضایت مشتریان" },
];

const FEATURES = [
  {
    icon: TruckIcon,
    title: "ارسال سریع",
    desc: "ارسال به سراسر کشور با سریع‌ترین زمان ممکن و بسته‌بندی مطمئن.",
  },
  {
    icon: ShieldIcon,
    title: "ضمانت اصالت کالا",
    desc: "تمامی محصولات دارای ضمانت اصالت و امکان مرجوعی هستند.",
  },
  {
    icon: HeartIcon,
    title: "پشتیبانی همیشگی",
    desc: "تیم پشتیبانی ما همه‌روزه پاسخگوی سوالات و مشکلات شماست.",
  },
  {
    icon: StarIcon,
    title: "کیفیت برتر",
    desc: "انتخاب دقیق برندها و محصولات با بالاترین استاندارد کیفیت.",
  },
];

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-16 flex flex-col gap-16">
      <Breadcrumb
        items={[
          { label: "صفحه اصلی", path: "/" },
          { label: "درباره ما", path: "/about" },
        ]}
      />

      {/* بنر معرفی */}
      <div
        className="relative rounded-3xl overflow-hidden px-8 md:px-16 py-16 md:py-24 flex flex-col items-center text-center gap-4"
        style={{ background: "linear-gradient(135deg, #ff9811, #ffb84d)" }}
      >
        <span className="text-white/80 text-xs font-bold tracking-widest uppercase">
          Since 2013
        </span>
        <h1 className="text-white text-3xl md:text-4xl font-black max-w-2xl">
          داستان برند هیوستر
        </h1>
        <p className="text-white/90 text-sm md:text-base max-w-xl leading-8">
          ما با عشق به مد و استایل، سفری را آغاز کردیم که امروز به یکی از
          معتبرترین فروشگاه‌های آنلاین پوشاک تبدیل شده است.
        </p>

        <div className="absolute -left-10 -bottom-10 w-56 h-56 rounded-full bg-white/10 floaty" />
        <div className="absolute left-24 top-6 w-20 h-20 rounded-full bg-white/10" />
      </div>

      {/* آمار */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-2 border border-neutral-100 rounded-2xl py-8 hover:shadow-md  hover:-translate-y-1 transition-all duration-300"
          >
            <span className="orange text-2xl md:text-3xl font-black">
              {s.value}
            </span>
            <span className="text-xs text-neutral-400">{s.label}</span>
          </div>
        ))}
      </div>

      {/* متن معرفی + تصویر */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div
          className="h-72 md:h-96 rounded-3xl"
          style={{
            background: "linear-gradient(160deg, #d8d8d8, #b9b9b9)",
          }}
        >
            <img src={img} alt="" className="h-72 md:h-96 rounded-3xl w-auto m-auto"/>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-black relative inline-block w-fit">
            چرا هیوستر؟
            <span className="absolute right-0 -bottom-1 w-full h-2 bg-orange-100 -z-10" />
          </h2>
          <p className="text-sm text-neutral-500 leading-8">
            هیوستر با هدف ارائه‌ی پوشاکی باکیفیت، به‌روز و مقرون‌به‌صرفه برای
            تمامی سلیقه‌ها تأسیس شد. تیم ما متشکل از طراحان و کارشناسانی است
            که با دقت، بهترین محصولات را از میان برندهای معتبر انتخاب می‌کنند
            تا تجربه‌ای لذت‌بخش از خرید آنلاین را برای شما رقم بزنند.
          </p>
          <p className="text-sm text-neutral-500 leading-8">
            رضایت مشتری، اولویت اصلی ماست؛ به همین دلیل در تمامی مراحل، از
            انتخاب محصول تا تحویل درب منزل، کنار شما هستیم.
          </p>
          <Link
            to="/products"
            className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors w-fit mt-2"
          >
            مشاهده محصولات
          </Link>
        </div>
      </div>

      {/* چرا ما را انتخاب کنید */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black relative inline-block">
            چرا ما را انتخاب کنید
            <span className="absolute right-0 -bottom-1 w-full h-2 bg-orange-100 -z-10" />
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 border border-neutral-100 rounded-2xl p-6 hover:shadow-md  hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center orange">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm">{title}</h3>
              <p className="text-xs text-neutral-400 leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <PromoBanner />
    </div>
  );
}