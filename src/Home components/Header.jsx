import { useEffect, useRef, useState } from "react";
import { BagIcon, CloseIcon, SearchIcon } from "./Icons.jsx";
import { IconBtn } from "./Shared.jsx";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CartPanelContent from "../context/CartPanelContent.jsx";
import profileImg from "../assets/Profile.png";

const RIGHT_MENU = [
  { label: "صفحه اصلی", path: "/" },
  { label: "محصولات", path: "/Products" },
  { label: "پرفروش ها", path: "/best-sellers" },
  { label: "تماس با ما", path: "/contact" },
  { label: "مطالب وبلاگ", path: "/blog" },
  { label: "درباره ما", path: "/about" },
];
const TOP_MENU = [
  { label: "آموزش", path: "/help#guide" },
  { label: "کدرهگیری", path: "/help#tracking" },
  { label: "شرایط ارسال", path: "/help#shipping" },
  { label: "مرجوعی محصول", path: "/help#returns" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalCount, isOpen, setIsOpen } = useCart();
  useEffect(() => {
    const handleScroll = () => {
      // اگر بیشتر از ۵۰ پیکسل اسکرول کرد، استیت تغییر کند
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
            <Link
              key={m.path}
              to={m.path}
              className="transition-colors cursor-pointer"
            >
              {m.label}
            </Link>
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
            className="w-full border border-neutral-200 rounded-full pl-4 pr-10 py-2 text-sm outline-none focus:border-red-400 transition-colors"
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
                    ? "text-red-500 font-bold"
                    : "hover:text-red-500"
                }`
              }
            >
              {m.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4 text-sm text-neutral-600">
          {/* دیو نسبی که هم آیکون هم دراپ‌داون توش هست */}
          <div className="relative">
            <IconBtn onClick={() => setIsOpen(!isOpen)}>
              <div className="relative">
                <BagIcon className="w-5 h-5" />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCount.toLocaleString("fa-IR")}
                  </span>
                )}
              </div>
            </IconBtn>

            {/* دراپ‌داون دسکتاپ - دقیقاً همینجا، زیر آیکون */}
            <div
              className={`absolute top-full left-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-neutral-100 flex flex-col overflow-hidden transition-all duration-200 origin-top-left z-50 ${
                isOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
                <h2 className="font-black text-base">سبد خرید</h2>
                <button onClick={() => setIsOpen(false)}>
                  <CloseIcon className="w-4 h-4" />
                </button>
              </div>
              <CartPanelContent onNavigate={() => setIsOpen(false)} />
            </div>
          </div>

          <NavLink to="/profile">
            <div className="flex items-center gap-2 mr-2">
              <div className="text-xs">
                <p className="text-neutral-400">خوش آمدید!</p>
                <p className="font-bold">نرگس موسوی</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-200">
                <img src={profileImg} alt="" className="rounded-full" />
              </div>
            </div>
          </NavLink>
        </div>

        <button
          ref={buttonRef}
          className="md:hidden text-xl transition-transform duration-300"
          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      <div
        ref={menuRef}
        className={`md:hidden mobile-menu flex flex-col gap-3 px-8 text-sm ${
          open ? "open py-4" : ""
        }`}
      >
        <form
          onSubmit={(e) => {
            handleSearch(e);
            setOpen(false);
          }}
          className="md:flex flex-1 max-w-md relative mx-4"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجوی محصول..."
            className="w-full border border-neutral-200 rounded-full pl-4 pr-10 py-2 text-sm outline-none focus:border-red-400 transition-colors"
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
              isActive ? "text-red-500 font-bold" : ""
            }
          >
            {m.label}
          </NavLink>
        ))}
        <hr />
        {TOP_MENU.map((m) => (
          <Link key={m.path} to={m.path} onClick={() => setOpen(false)}>
            {m.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
