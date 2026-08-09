import { Link } from "react-router-dom";

export default function PromoBanner() {
  return (
    <div className="relative bg-dark rounded-3xl overflow-hidden px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-white text-center md:text-right">
        <p className="orange text-xs font-bold uppercase tracking-widest mb-2">
          پیشنهاد ویژه
        </p>
        <h2 className="text-2xl md:text-3xl font-black mb-2">
          عضویت در باشگاه مشتریان
        </h2>
        <p className="text-sm text-neutral-300 max-w-md">
          با عضویت، از تخفیف‌های اختصاصی و اطلاع‌رسانی زودهنگام محصولات جدید
          بهره‌مند شوید.
        </p>
      </div>
      <Link
        to="/products"
        className="bg-orange whitespace-nowrap text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
      >
        همین حالا عضو شو
      </Link>

      <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full bg-white/5" />
    </div>
  );
}