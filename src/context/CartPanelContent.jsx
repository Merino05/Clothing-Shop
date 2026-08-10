import { Link } from "react-router-dom";
import { useCart } from "./CartContext.jsx";
import { BagIcon, TrashIcon } from "../Home components/Icons.jsx";

export default function CartPanelContent({ onNavigate }) {
  const { items, removeFromCart, updateQty, totalPrice } = useCart();

  return (
    <>
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-neutral-400 py-8">
            <BagIcon className="w-12 h-12 opacity-30" />
            <p className="text-sm">سبد خرید شما خالیه</p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.key}
              className="flex gap-3 items-center border-b border-neutral-50 pb-4"
            >
              <div className="w-16 h-16 bg-[#f6f6f6] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={item.url}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link to={`/products/${item.id}`} onClick={onNavigate}>
                  <p className="text-sm font-bold truncate hover:text-orange-500 transition-colors">
                    {item.title}
                  </p>
                </Link>

                {(item.size || item.color) && (
                  <div className="flex items-center gap-2 mt-1">
                    {item.size && (
                      <span className="text-[10px] text-neutral-400">
                        سایز: {item.size}
                      </span>
                    )}
                    {item.color && (
                      <span
                        className="w-3 h-3 rounded-full border border-neutral-200"
                        style={{ background: item.color }}
                      />
                    )}
                  </div>
                )}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 border rounded-full px-1.5 py-0.5">
                    <button
                      onClick={() => updateQty(item.key, item.qty - 1)}
                      className="w-5 h-5 flex items-center justify-center hover:text-orange-500"
                    >
                      −
                    </button>
                    <span className="text-xs font-bold w-4 text-center">
                      {item.qty.toLocaleString("fa-IR")}
                    </span>
                    <button
                      onClick={() => updateQty(item.key, item.qty + 1)}
                      className="w-5 h-5 flex items-center justify-center hover:text-orange-500"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs font-bold">
                    {(item.price * item.qty).toLocaleString("fa-IR")} تومان
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.key)}
                className="text-neutral-300 hover:text-red-500 transition-colors flex-shrink-0"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="border-t border-neutral-100 px-6 py-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-500">جمع کل</span>
            <span className="font-black text-lg">
              {totalPrice.toLocaleString("fa-IR")} تومان
            </span>
          </div>
          <Link
            to="/checkout"
            onClick={onNavigate}
            className="bg-orange-500 text-white text-center font-bold py-3 rounded-md hover:bg-orange-600 transition-colors"
          >
            ادامه فرآیند خرید
          </Link>
        </div>
      )}
    </>
  );
}
