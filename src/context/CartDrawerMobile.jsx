import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { BagIcon, CloseIcon } from "../Home components/Icons.jsx";
import CartPanelContent from "./CartPanelContent.jsx";

export default function CartDrawerMobile() {
  const { items, isOpen, setIsOpen } = useCart();
  const location = useLocation();

  if (location.pathname.toLowerCase() === "/cart") {
    return null;
  }


  const portalRoot = document.getElementById("cart-portal");
  if (!portalRoot) return null;

  return createPortal(
    <div className="md:hidden">
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-[999] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[1000] flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <h2 className="font-black text-lg flex items-center gap-2">
            <BagIcon className="w-5 h-5" />
            سبد خرید
            {items.length > 0 && (
              <span className="text-xs text-orange-500 font-bold">
                ({items.reduce((s, i) => s + i.qty, 0).toLocaleString("fa-IR")})
              </span>
            )}
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        <CartPanelContent onNavigate={() => setIsOpen(false)} />
      </aside>
    </div>,
    portalRoot
  );
}