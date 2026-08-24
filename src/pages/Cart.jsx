import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Breadcrumb from "../Product components/Breadcrumb.jsx";
import { TrashIcon, BagIcon } from "../Home components/Icons.jsx";

export default function Cart() {
  const { items, removeFromCart, updateQty, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-24 flex flex-col items-center justify-center gap-4 text-center min-h-[50vh]">
        <BagIcon className="w-16 h-16 text-neutral-300" />
        <h1 className="text-xl font-black">سبد خرید شما خالیه</h1>
        <p className="text-neutral-400 text-sm">
          هنوز محصولی به سبد خرید اضافه نکردی.
        </p>
        <Link
          to="/products"
          className="bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors mt-2"
        >
          مشاهده محصولات
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-24">
      <Breadcrumb
        items={[
          { label: "صفحه اصلی", path: "/" },
          { label: "سبد خرید", path: "/cart" },
        ]}
      />

      <div className="flex items-center justify-between mt-6 mb-8">
        <h1 className="text-2xl font-black">سبد خرید</h1>
        <button
          onClick={clearCart}
          className="flex items-center gap-1.5 text-xs text-orange-500 font-bold border border-orange-200 bg-orange-50 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors px-3 py-1.5 rounded-full"
        >
          <TrashIcon className="w-3.5 h-3.5" />
          خالی کردن سبد
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* لیست محصولات */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.key}
              className="flex items-center gap-4 border border-neutral-100 rounded-2xl p-4"
            >
              <div className="w-24 h-24 bg-[#f6f6f6] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={item.url}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <Link to={`/products/${item.id}`}>
                  <p className="font-bold text-sm hover:text-orange-500 transition-colors truncate">
                    {item.title}
                  </p>
                </Link>

                {(item.size || item.color) && (
                  <div className="flex items-center gap-3 mt-1.5">
                    {item.size && (
                      <span className="text-xs text-neutral-400">
                        سایز: {item.size}
                      </span>
                    )}
                    {item.color && (
                      <span className="flex items-center gap-1 text-xs text-neutral-400">
                        رنگ:
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-neutral-200 inline-block"
                          style={{ background: item.color }}
                        />
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between flex-wrap gap-2 mt-3">
                  <div className="flex items-center gap-3 border rounded-full px-2 py-1 w-fit flex-shrink-0">
                    <button
                      onClick={() => updateQty(item.key, item.qty - 1)}
                      className="w-7 h-7 flex items-center justify-center hover:text-orange-500 transition-colors"
                    >
                      −
                    </button>
                    <span className="text-sm font-bold w-5 text-center">
                      {item.qty.toLocaleString("fa-IR")}
                    </span>
                    <button
                      onClick={() => updateQty(item.key, item.qty + 1)}
                      className="w-7 h-7 flex items-center justify-center hover:text-orange-500 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-black orange whitespace-nowrap">
                    {(item.price * item.qty).toLocaleString("fa-IR")} تومان
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.key)}
                className="text-neutral-300 hover:text-red-500 transition-colors flex-shrink-0 self-start"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* خلاصه سفارش */}
        <div className="lg:col-span-1">
          <div className="border border-neutral-100 rounded-2xl p-6 flex flex-col gap-4 sticky top-32">
            <h2 className="font-black text-lg">خلاصه سفارش</h2>

            <div className="flex items-center justify-between text-sm text-neutral-500">
              <span>تعداد کالا</span>
              <span>
                {items.reduce((s, i) => s + i.qty, 0).toLocaleString("fa-IR")}{" "}
                عدد
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-neutral-500">
              <span>هزینه ارسال</span>
              <span className="text-green-600 font-bold">رایگان</span>
            </div>

            <div className="w-full h-px bg-neutral-100" />

            <div className="flex items-center justify-between">
              <span className="font-bold">مبلغ قابل پرداخت</span>
              <span className="font-black text-lg orange">
                {totalPrice.toLocaleString("fa-IR")} تومان
              </span>
            </div>

            <Link
              to="/"
              className="bg-orange-500 text-white text-center font-bold py-3.5 rounded-md hover:bg-orange-600 transition-colors mt-2"
            >
              ادامه فرآیند خرید
            </Link>

            <Link
              to="/products"
              className="text-center text-xs text-neutral-400 hover:text-orange-500 transition-colors"
            >
              ادامه خرید محصولات دیگر
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
