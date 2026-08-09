import { useEffect, useState } from "react";
import { BagIcon, SearchIcon } from "./Icons.jsx";
import { IconBtn } from "./Shared.jsx";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
const RIGHT_MENU = [
  { label: "صفحه اصلی", path: "/" },
  { label: "محصولات", path: "/Products" },
  { label: "پرفروش ها", path: "/best-sellers" },
  { label: "تماس با ما", path: "/contact" },
  { label: "مطالب وبلاگ", path: "/blog" },
  { label: "بیشتر", path: "/more" },
];
const TOP_MENU = [
  { label: "آموزش", path: "/best-sellers" },
  { label: "کدرهگیری", path: "/contact" },
  { label: "شرایط ارسال", path: "/blog" },
  { label: "مرجوعی محصول", path: "/more" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // اگر بیشتر از ۵۰ پیکسل اسکرول کرد، استیت تغییر کند
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const navigate = useNavigate();
const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/Products?q=${encodeURIComponent(query.trim())}`);
    }
  };
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.toLowerCase() !== "/products") {
      setQuery("");
    }
  }, [location.pathname]);

  return (
    <header
      className={`max-w-[1920px] mx-auto transition-all duration-500 fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-white/70 border-b border-neutral-100 
    ${
      scrolled
        ? "mt-3 bg-white rounded-2xl shadow-xl w-[85%] mx-auto" // حالت اسکرول پایین (فاصله از بقل‌ها + پدینگ)
        : "mx-0 px-0 bg-white shadow-sm" // حالت عادی (فول، بدون پدینگ)
    }`}
    >
      <div
        className={`bg-neutral-100/70 text-[11px] text-neutral-500 hidden md:flex items-center justify-between px-8 py-2 ${scrolled ? "rounded-t-2xl" : ""}`}
      >
        <nav className="flex items-center gap-4">
          {TOP_MENU.map((m) => (
            <NavLink
              key={m.path}
              to={m.path}
              className={({ isActive }) =>
                `transition-colors cursor-pointer ${
                  isActive
                    ? "text-orange-500 font-bold"
                    : "hover:text-orange-500"
                }`
              }
            >
              {m.label}
            </NavLink>
          ))}
        </nav>
         <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-md relative mx-4"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجوی محصول..."
            className="w-full border border-neutral-200 rounded-full pl-4 pr-10 py-2 text-sm outline-none focus:border-orange-400 transition-colors"
          />
          <button
            type="submit"
            className="absolute right-3.5 top-1/2 -translate-y-1/2"
          >
            <SearchIcon className="w-4 h-4 text-neutral-400" />
          </button>
        </form>
        <div className="flex items-center gap-2 ">
          <span className="font-bold text-neutral-700 select-text">
            ۹۱۲۵۶۰۱۲۱۳ (۹۸)+
          </span>
          <span>پشتیبانی ۲۴ ساعته</span>
        </div>
      </div>

      <div className="flex items-center justify-between px-8 py-3">
        <div className="flex flex-col items-center leading-none">
          <span className="font-black text-2xl italic">Hipster</span>
          <span className="text-[9px] text-neutral-400 tracking-widest">
            WWW.HIYOSTER.COM
          </span>
        </div>
         
        <nav className="hidden md:flex items-center gap-6 text-sm mx-2">
          {RIGHT_MENU.map((m) => (
            <NavLink
              key={m.path}
              to={m.path}
              className={({ isActive }) =>
                `underline-grow transition-colors ${
                  isActive
                    ? "text-orange-500 font-bold"
                    : "hover:text-orange-500"
                }`
              }
            >
              {m.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4 text-sm text-neutral-600">
          <IconBtn>
            <SearchIcon className="w-5 h-5" />
          </IconBtn>
          <IconBtn>
            <BagIcon className="w-5 h-5" />
          </IconBtn>

          <div className="flex items-center gap-2 mr-2">
            <div className="text-xs">
              <p className="text-neutral-400">خوش آمدید!</p>
              <p className="font-bold">نرگس موسوی</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-neutral-200">
              <img
                src="/src/assets/Profile.png"
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <button
          className="md:hidden text-xl transition-transform duration-300"
          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      <div
        className={`md:hidden mobile-menu flex flex-col gap-3 px-8 text-sm ${
          open ? "open py-4" : ""
        }`}
      >
        <form
          onSubmit={handleSearch}
          className=" md:flex flex-1 max-w-md relative mx-4"
          onSubmit= {()=>setOpen(false)}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
             
            placeholder="جستجوی محصول..."
            className="w-full border border-neutral-200 rounded-full pl-4 pr-10 py-2 text-sm outline-none focus:border-orange-400 transition-colors"
          />
          <button
            type="submit"
            className="absolute right-3.5 top-1/2 -translate-y-1/2"
          >
            <SearchIcon className="w-4 h-4 text-neutral-400" />
          </button>
        </form>
        {RIGHT_MENU.map((m) => (
          <NavLink
            key={m.path}
            to={m.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
          >
            
            {m.label}
          </NavLink>
        ))}
        <hr />
        {TOP_MENU.map((m) => (
          <NavLink
            key={m.path}
            to={m.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
          >
            {m.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
