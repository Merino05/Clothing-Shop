import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { HomeIcon, BagIcon, UserIcon, GridIcon } from "./Icons.jsx";

const NAV_ITEMS = [
  { label: "خانه", path: "/", icon: HomeIcon },
  { label: "محصولات", path: "/Products", icon: GridIcon },
  { label: "سبد خرید", path: "/cart", icon: BagIcon, isCart: true },
  { label: "حساب من", path: "/profile", icon: UserIcon },
];

export default function BottomNav() {
  const { totalCount } = useCart();

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50  bg-white/70 border-b backdrop-blur-lg border-t border-neutral-100 flex items-center justify-around py-2 px-2">
      {NAV_ITEMS.map(({ label, path, icon: Icon, isCart }) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          className={({ isActive }) =>
            `relative flex flex-col items-center gap-1 px-3 py-1 text-[10px] transition-colors ${
              isActive ? "text-red-500" : "text-neutral-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="absolute -top-2 w-7 h-[3px] bg-red-500 rounded-full" />
              )}
              <div className="relative">
                <Icon className="w-5 h-5" />
                {isCart && totalCount > 0 && (
                  <span className="absolute -top-1.5 -left-1.5 bg-red-500 text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                    {totalCount.toLocaleString("fa-IR")}
                  </span>
                )}
              </div>
              {label}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}