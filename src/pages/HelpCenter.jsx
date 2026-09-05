import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../Product components/Breadcrumb.jsx";
import {
  TruckIcon,
  ShieldIcon,
  ClockIcon,
  CheckIcon,
  CloseIcon,
  ChevronDownIcon,
  SearchIcon,
  BagIcon,
} from "../Home components/Icons.jsx";

const GUIDE_ITEMS = [
  {
    q: "چطور وارد حساب کاربری‌ام شوم؟",
    a: "از آیکون کاربر در بالای صفحه وارد شوید، سپس با شماره موبایل خود کد تایید دریافت کرده و وارد حساب کاربری خود شوید.",
    images: [
      "https://placehold.co/700x350/f6f6f6/999999?text=Step+1",
      "https://placehold.co/700x350/f6f6f6/999999?text=Step+2",
    ],
  },
  {
    q: "چطور سفارش ثبت کنم؟",
    a: "محصول مورد نظر را انتخاب کرده، سایز و رنگ را مشخص کنید و به سبد خرید اضافه کنید. سپس از صفحه سبد خرید، فرآیند خرید را تا مرحله پرداخت ادامه دهید.",
  },
  {
    q: "چطور آدرس تحویل را تغییر دهم؟",
    a: "از بخش «حساب کاربری» وارد تب «آدرس‌ها» شوید و آدرس جدید خود را ثبت یا آدرس موجود را ویرایش کنید.",
  },
  {
    q: "چگونه از وضعیت سفارش خود مطلع شوم؟",
    a: "از بخش «حساب کاربری» وارد تب «سفارش‌ها» شوید، یا با استفاده از کد رهگیری در همین صفحه، وضعیت سفارش را پیگیری کنید.",
    images: [
      "https://placehold.co/700x350/f6f6f6/999999?text=Order+Tab",
      "https://placehold.co/700x350/f6f6f6/999999?text=Tracking+Code",
      "https://placehold.co/700x350/f6f6f6/999999?text=Status",
    ],
  },
];

const TERMS_ITEMS = [
  {
    q: "حریم خصوصی",
    a: "اطلاعات شخصی شما صرفاً برای پردازش سفارش و بهبود تجربه خرید استفاده می‌شود و در اختیار اشخاص ثالث قرار نمی‌گیرد.",
  },
  {
    q: "شرایط استفاده از سایت",
    a: "استفاده از این وب‌سایت به منزله پذیرش قوانین و مقررات فروشگاه است. هرگونه سوءاستفاده از حساب کاربری منجر به مسدودسازی آن خواهد شد.",
  },
  {
    q: "قیمت‌گذاری و تغییرات",
    a: "فروشگاه این حق را دارد که قیمت محصولات را بدون اطلاع قبلی تغییر دهد. قیمت نهایی همان چیزی است که در لحظه ثبت سفارش نمایش داده می‌شود.",
  },
];

const TRACKING_STEPS = [
  { label: "ثبت سفارش", icon: BagIcon },
  { label: "در حال پردازش", icon: ClockIcon },
  { label: "ارسال شده", icon: TruckIcon },
  { label: "تحویل شده", icon: CheckIcon },
];
function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-6"
    >
      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full rounded-2xl object-contain"
      />
      <button
        onClick={onClose}
        className="absolute top-6 left-6 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
      >
        <CloseIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={item.q}
          className="border border-neutral-100 rounded-2xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-3 px-5 py-4 text-right"
          >
            <span className="font-bold text-sm">{item.q}</span>
            <ChevronDownIcon
              className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-180 red" : "text-neutral-400"
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-5 flex flex-col gap-4">
                <p className="text-xs text-neutral-500 leading-7">{item.a}</p>
                {item.images && item.images.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {item.images.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt=""
                        onClick={() => setLightboxSrc(src)}
                        className="w-full h-28 md:h-32 object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  );
}

function TrackingSection() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    setResult({ code: code.trim(), currentStep: 2 });
  };

  return (
    <div className="border border-neutral-100 rounded-3xl p-6 md:p-8">
      <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="کد رهگیری سفارش خود را وارد کنید"
            className="w-full border border-neutral-200 rounded-xl pr-10 pl-4 py-3 text-sm outline-none focus:border-red-400 transition-colors"
          />
          <SearchIcon className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-red-600 transition-colors"
        >
          پیگیری سفارش
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <p className="text-xs text-neutral-400 mb-6">
            وضعیت سفارش با کد <b className="text-neutral-600">{result.code}</b>
          </p>
          <div className="flex items-center justify-between">
            {TRACKING_STEPS.map((step, i) => {
              const Icon = step.icon;
              const done = i <= result.currentStep;
              return (
                <div
                  key={step.label}
                  className="flex-1 flex flex-col items-center gap-2 relative"
                >
                  {i !== 0 && (
                    <div
                      className={`absolute right-1/2 top-5 w-full h-0.5 -z-10 ${
                        i <= result.currentStep
                          ? "bg-red-500"
                          : "bg-neutral-200"
                      }`}
                    />
                  )}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      done
                        ? "bg-red-500 text-white"
                        : "bg-neutral-100 text-neutral-400"
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span
                    className={`text-[10px] text-center font-bold ${
                      done ? "red" : "text-neutral-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const SHIPPING_CARDS = [
  {
    icon: TruckIcon,
    title: "ارسال پستی",
    desc: "تحویل طی ۳ تا ۵ روز کاری به سراسر کشور، با هزینه‌ی ۴۵ هزار تومان.",
  },
  {
    icon: ClockIcon,
    title: "ارسال اکسپرس",
    desc: "تحویل طی ۲۴ ساعت در تهران، با هزینه‌ی ۸۵ هزار تومان.",
  },
  {
    icon: ShieldIcon,
    title: "ارسال رایگان",
    desc: "برای خریدهای بالای ۵۰۰ هزار تومان، هزینه‌ی ارسال رایگان است.",
  },
];

const RETURN_ACCEPTED = [
  "محصول حداکثر تا ۷ روز پس از دریافت مرجوع شود.",
  "برچسب و بسته‌بندی اصلی محصول دست‌نخورده باشد.",
  "محصول استفاده یا شسته نشده باشد.",
  "اصالت کالا با فاکتور خرید تطابق داشته باشد.",
];

const RETURN_REJECTED = [
  "محصولاتی که برچسب آن‌ها جدا شده باشد.",
  "لباس‌های زیر و محصولات بهداشتی.",
  "محصولاتی که خارج از بازه‌ی ۷ روزه مرجوع شوند.",
  "کالاهایی که در تخفیف نهایی (Final Sale) خریداری شده‌اند.",
];

export default function HelpCenter() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - 110;
          window.scrollTo({ top, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="max-w-4xl mx-auto px-8 pt-32 pb-16">
      <Breadcrumb
        items={[
          { label: "صفحه اصلی", path: "/" },
          { label: "مرکز راهنما", path: "/help" },
        ]}
      />

      <div className="flex flex-col items-center text-center gap-3 mt-6 mb-14">
        <span className="red text-xs font-bold uppercase tracking-widest">
          Help Center
        </span>
        <h1 className="text-3xl md:text-4xl font-black relative inline-block">
          مرکز راهنما
          <span className="absolute right-0 -bottom-1 w-full h-2 bg-red-100 -z-10" />
        </h1>
      </div>

      <div className="flex flex-col gap-16">
        <section id="guide" className="scroll-mt-28">
          <h2 className="text-xl font-black mb-6">آموزش سایت</h2>
          <img
            src="https://placehold.co/800x400/f6f6f6/999999?text=Tutorial+Image"
            alt=""
            className="w-full h-56 md:h-72 object-cover rounded-2xl mb-6"
          />
          <Accordion items={GUIDE_ITEMS} />
        </section>

        <section id="tracking" className="scroll-mt-28">
          <h2 className="text-xl font-black mb-6">کد رهگیری</h2>
          <TrackingSection />
        </section>

        <section id="shipping" className="scroll-mt-28">
          <h2 className="text-xl font-black mb-6">شرایط ارسال</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {SHIPPING_CARDS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-3 border border-neutral-100 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center red">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm">{title}</h3>
                <p className="text-xs text-neutral-400 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="returns" className="scroll-mt-28">
          <h2 className="text-xl font-black mb-6">مرجوعی محصول</h2>
          <p className="text-sm text-neutral-500 leading-8 mb-6">
            رضایت شما برای ما اهمیت دارد. در صورتی که محصول خریداری‌شده شرایط
            زیر را داشته باشد، امکان مرجوعی و بازگشت وجه وجود دارد.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-green-100 bg-green-50/40 rounded-2xl p-6">
              <h3 className="font-bold text-sm text-green-700 mb-4">
                قابل مرجوعی
              </h3>
              <ul className="flex flex-col gap-3">
                {RETURN_ACCEPTED.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2 text-xs text-neutral-600"
                  >
                    <CheckIcon className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-100 bg-red-50/40 rounded-2xl p-6">
              <h3 className="font-bold text-sm text-red-600 mb-4">
                غیرقابل مرجوعی
              </h3>
              <ul className="flex flex-col gap-3">
                {RETURN_REJECTED.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2 text-xs text-neutral-600"
                  >
                    <CloseIcon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="terms" className="scroll-mt-28">
          <h2 className="text-xl font-black mb-6">قوانین و مقررات</h2>
          <Accordion items={TERMS_ITEMS} />
        </section>
      </div>
    </div>
  );
}
