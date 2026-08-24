import { useState } from "react";
import Breadcrumb from "../Product components/Breadcrumb.jsx";
import {
  PhoneIcon,
  MailIcon,
  LocationIcon,
  ClockIcon,
} from "../Home components/Icons.jsx";

const INFO_CARDS = [
  {
    icon: PhoneIcon,
    title: "شماره تماس",
    lines: ["۹۱۲۵۶۰۱۲۱۳ (۹۸)+", "پشتیبانی ۲۴ ساعته"],
  },
  {
    icon: MailIcon,
    title: "ایمیل",
    lines: ["support@hiyoster.com", "پاسخ‌گویی حداکثر ۲۴ ساعته"],
  },
  {
    icon: LocationIcon,
    title: "آدرس",
    lines: ["تهران، انتهای اتوبان ستاری", "میدان دانشگاه"],
  },
  {
    icon: ClockIcon,
    title: "ساعات کاری",
    lines: ["شنبه تا پنج‌شنبه", "۹ صبح تا ۹ شب"],
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-16 flex flex-col gap-16">
      <Breadcrumb
        items={[
          { label: "صفحه اصلی", path: "/" },
          { label: "تماس با ما", path: "/contact" },
        ]}
      />

      <div className="flex flex-col items-center text-center gap-3">
        <span className="orange text-xs font-bold uppercase tracking-widest">
          Get In Touch
        </span>
        <h1 className="text-3xl md:text-4xl font-black relative inline-block">
          در ارتباط باشید
          <span className="absolute right-0 -bottom-1 w-full h-2 bg-orange-100 -z-10" />
        </h1>
        <p className="text-neutral-400 text-sm max-w-md">
          سوالی دارید؟ پیشنهادی برای بهتر شدن دارید؟ خوشحال می‌شویم صدای شما
          را بشنویم.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {INFO_CARDS.map(({ icon: Icon, title, lines }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-3 border border-neutral-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center orange">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm">{title}</h3>
            <div className="text-xs text-neutral-400 leading-6">
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 border border-neutral-100 rounded-3xl p-8 md:p-10 flex flex-col gap-5"
        >
          <h2 className="text-xl font-black mb-2">فرم تماس با ما</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-neutral-500">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="مثلاً نرگس موسوی"
                className="border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-neutral-500">
                ایمیل
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
                className="border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors dir-ltr text-right"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-neutral-500">
              پیام شما
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="پیام خود را اینجا بنویسید..."
              className="border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white font-bold py-3.5 rounded-full hover:bg-orange-600 transition-colors mt-2"
          >
            ارسال پیام
          </button>

          {sent && (
            <p className="text-green-600 text-xs font-bold text-center bg-green-50 rounded-full py-2 animate-pulseOnce">
              پیام شما با موفقیت ارسال شد ✓
            </p>
          )}
        </form>

        <div
          className="lg:col-span-2 relative rounded-3xl overflow-hidden p-8 md:p-10 flex flex-col justify-between text-white"
          style={{ background: "linear-gradient(150deg, #454545, #2c2c2c)" }}
        >
          <div className="relative z-10">
            <h3 className="text-xl font-black mb-3">همیشه در دسترسیم</h3>
            <p className="text-sm text-neutral-300 leading-7">
              تیم پشتیبانی هیوستر آماده پاسخ‌گویی به سوالات، پیگیری سفارش‌ها
              و راهنمایی شماست. کافیست با ما تماس بگیرید.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-3 mt-8">
            <a
              href="tel:+989125601213"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-5 py-3 text-sm"
            >
              <PhoneIcon className="w-4 h-4" />
              ۹۱۲۵۶۰۱۲۱۳ (۹۸)+
            </a>
            <a
              href="mailto:support@hiyoster.com"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-5 py-3 text-sm dir-ltr justify-end"
            >
              <MailIcon className="w-4 h-4" />
              support@hiyoster.com
            </a>
          </div>

          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/5 floaty" />
          <div className="absolute left-16 top-6 w-20 h-20 rounded-full bg-white/5" />
        </div>
      </div>
    </div>
  );
}