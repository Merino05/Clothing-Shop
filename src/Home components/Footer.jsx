import { Link } from "react-router-dom";

const COLS = [
  {
    title: "دسترسی سریع",
    items: [
      { label: "صفحه اصلی", path: "/" },
      { label: "محصولات", path: "/products" },
      { label: "پرفروش‌ها", path: "/best-sellers" },
      { label: "وبلاگ", path: "/blog" },
      { label: "درباره ما", path: "/about" },
    ],
  },
  {
    title: "لینک‌های مفید",
    items: [
      { label: "تماس با ما", path: "/contact" },
      { label: "سبد خرید", path: "/cart" },
      { label: "حساب کاربری", path: "/profile" },
      { label: "سوالات متداول", path: "/help#guide" },
      { label: "انتقادات و پیشنهادات", path: "/contact" },
      { label: "قوانین و مقررات", path: "/help#terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-500 mt-10 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-4 gap-10 text-right">
        <div>
          <h4 className="text-neutral-700 font-bold mb-2">به ما اعتماد کنید</h4>
          <p className="text-xs text-neutral-400 leading-7 mb-4">
            لورم ایپسوم متن ساختگی با تولید سادگی از طراحان گرافیک است
          </p>
          <div className="flex gap-3 opacity-50">
            <div className="w-16 h-16 rounded bg-neutral-100" />
            <div className="w-16 h-16 rounded bg-neutral-100" />
          </div>
        </div>

        {COLS.map((c) => (
          <div key={c.title}>
            <h5 className="text-neutral-700 font-bold mb-4">{c.title}</h5>
            <ul className="space-y-2 text-xs text-neutral-400 text-right">
              {c.items.map((item) => (
                <li key={item.label} className="w-fit">
                  <Link
                    to={item.path}
                    className="hover:text-red-500 hover:font-bold transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="text-xs leading-7 text-neutral-400">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <Link
            to="/about"
            className="inline-block mt-4 bg-red text-white text-xs px-5 py-2 shadow-lg shadow-red-200 hover:brightness-110 transition-all"
          >
            اطلاعات بیشتر
          </Link>
        </div>
      </div>

      <div className="bg-[#f8f8f8] border-t border-neutral-100 select-text">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-neutral-400">
          <span>
            {" "}
            انبار و دفتر کرج: ایران – البرز – کرج – شهرک خاتم الانبیاء – خیابان
            توحید – کوچه فجر ۶ – پلاک ۱۰{" "}
          </span>
          <span>
            آدرس شرکت: ایران – تهران – انتهای اتوبان ستاری – میدان دانشگاه –
            ساختمان آیت‌الله هاشمی{" "}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-between gap-2 text-[11px] text-neutral-400">
        <span>© copyright</span>
        <span>
          این وبسایت متعلق به <b className="text-neutral-600">مرینو</b> میباشد و
          تمامی حقوق آن محفوظ است
        </span>
        <span>
          طراحی شده در استودیو دیزاین{" "}
          <b className="text-neutral-600">Narges UI UX</b>
        </span>
      </div>
    </footer>
  );
}
