import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Breadcrumb from "../Product components/Breadcrumb.jsx";
import { useAddress } from "../context/AddressContext.jsx";
import {
  LocationIcon,
  ClockIcon,
  TruckIcon,
  CheckIcon,
} from "../Home components/Icons.jsx";



const TIME_SLOTS = [
  { id: 1, day: "امروز", range: "۹:۰۰ تا ۱۲:۰۰" },
  { id: 2, day: "امروز", range: "۱۵:۰۰ تا ۱۸:۰۰" },
  { id: 3, day: "فردا", range: "۹:۰۰ تا ۱۲:۰۰" },
  { id: 4, day: "فردا", range: "۱۵:۰۰ تا ۱۸:۰۰" },
];

const FREE_SHIPPING_THRESHOLD = 500000;

export default function Checkout() {
  const { items, totalPrice } = useCart();
const { addresses } = useAddress();
const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [shippingMethod, setShippingMethod] = useState("normal");
  const [confirmed, setConfirmed] = useState(false);

  const normalCost = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : 45000;
  const expressCost = 85000;
  const shippingCost = shippingMethod === "express" ? expressCost : normalCost;
  const finalTotal = totalPrice + shippingCost;

  const canContinue = selectedAddress && selectedSlot;

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-8 pt-40 pb-16 text-center">
        <p className="text-neutral-400">سبد خرید شما خالی است.</p>
        <Link to="/products" className="text-orange-500 font-bold hover:underline">
          مشاهده محصولات
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-16">
      <Breadcrumb
        items={[
          { label: "صفحه اصلی", path: "/" },
          { label: "سبد خرید", path: "/cart" },
          { label: "تکمیل خرید", path: "/checkout" },
        ]}
      />

      <h1 className="text-2xl font-black mt-6 mb-8">تکمیل خرید</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* آدرس تحویل */}
          <section>
            <h2 className="font-black text-lg mb-4 flex items-center gap-2">
              <LocationIcon className="w-5 h-5 orange" />
              آدرس تحویل
            </h2>
            <div className="flex flex-col gap-3">
              {addresses.map((addr) => (
                <button
                  key={addr.id}
                  onClick={() => setSelectedAddress(addr.id)}
                  className={`flex items-start gap-3 text-right border rounded-2xl p-4 transition-colors ${
                    selectedAddress === addr.id
                      ? "border-orange-500 bg-orange-50/40"
                      : "border-neutral-100 hover:bg-neutral-50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      selectedAddress === addr.id
                        ? "border-orange-500 bg-orange-500"
                        : "border-neutral-300"
                    }`}
                  >
                    {selectedAddress === addr.id && (
                      <CheckIcon className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{addr.title}</p>
                    <p className="text-xs text-neutral-400 mt-1 leading-6">
                      {addr.detail}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* زمان ارسال */}
          <section>
            <h2 className="font-black text-lg mb-4 flex items-center gap-2">
              <ClockIcon className="w-5 h-5 orange" />
              زمان ارسال
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`flex items-center justify-between border rounded-2xl px-4 py-3.5 transition-colors ${
                    selectedSlot === slot.id
                      ? "border-orange-500 bg-orange-50/40"
                      : "border-neutral-100 hover:bg-neutral-50"
                  }`}
                >
                  <div className="text-right">
                    <p className="font-bold text-sm">{slot.day}</p>
                    <p className="text-xs text-neutral-400 mt-1">{slot.range}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedSlot === slot.id
                        ? "border-orange-500 bg-orange-500"
                        : "border-neutral-300"
                    }`}
                  >
                    {selectedSlot === slot.id && (
                      <CheckIcon className="w-3 h-3 text-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* روش ارسال */}
          <section>
            <h2 className="font-black text-lg mb-4 flex items-center gap-2">
              <TruckIcon className="w-5 h-5 orange" />
              روش ارسال
            </h2>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setShippingMethod("normal")}
                className={`flex items-center justify-between border rounded-2xl px-4 py-4 transition-colors ${
                  shippingMethod === "normal"
                    ? "border-orange-500 bg-orange-50/40"
                    : "border-neutral-100 hover:bg-neutral-50"
                }`}
              >
                <div className="text-right">
                  <p className="font-bold text-sm">ارسال پستی</p>
                  <p className="text-xs text-neutral-400 mt-1">۳ تا ۵ روز کاری</p>
                </div>
                <span className="font-bold text-sm">
                  {normalCost === 0 ? (
                    <span className="text-green-600">رایگان</span>
                  ) : (
                    `${normalCost.toLocaleString("fa-IR")} تومان`
                  )}
                </span>
              </button>

              <button
                onClick={() => setShippingMethod("express")}
                className={`flex items-center justify-between border rounded-2xl px-4 py-4 transition-colors ${
                  shippingMethod === "express"
                    ? "border-orange-500 bg-orange-50/40"
                    : "border-neutral-100 hover:bg-neutral-50"
                }`}
              >
                <div className="text-right">
                  <p className="font-bold text-sm">ارسال اکسپرس</p>
                  <p className="text-xs text-neutral-400 mt-1">حداکثر ۲۴ ساعت</p>
                </div>
                <span className="font-bold text-sm">
                  {expressCost.toLocaleString("fa-IR")} تومان
                </span>
              </button>
            </div>

            {normalCost === 0 && shippingMethod === "normal" && (
              <p className="text-xs text-green-600 mt-3">
                ✓ سبد خرید شما شامل ارسال رایگان می‌شود
              </p>
            )}
          </section>
        </div>

        {/* خلاصه سفارش */}
        <div className="lg:col-span-1">
          <div className="border border-neutral-100 rounded-2xl p-6 flex flex-col gap-4 sticky top-32">
            <h2 className="font-black text-lg">خلاصه سفارش</h2>

            <div className="flex items-center justify-between text-sm text-neutral-500">
              <span>جمع کالاها</span>
              <span>{totalPrice.toLocaleString("fa-IR")} تومان</span>
            </div>

            <div className="flex items-center justify-between text-sm text-neutral-500">
              <span>هزینه ارسال</span>
              <span className={shippingCost === 0 ? "text-green-600 font-bold" : ""}>
                {shippingCost === 0
                  ? "رایگان"
                  : `${shippingCost.toLocaleString("fa-IR")} تومان`}
              </span>
            </div>

            <div className="w-full h-px bg-neutral-100" />

            <div className="flex items-center justify-between">
              <span className="font-bold">مبلغ نهایی</span>
              <span className="font-black text-lg orange">
                {finalTotal.toLocaleString("fa-IR")} تومان
              </span>
            </div>

            {confirmed ? (
              <p className="text-green-600 text-xs font-bold text-center bg-green-50 rounded-full py-2.5 animate-pulseOnce">
                سفارش شما ثبت شد ✓
              </p>
            ) : (
              <button
                disabled={!canContinue}
                onClick={() => setConfirmed(true)}
                className="bg-orange-500 text-sm text-white font-bold py-3 rounded-md hover:bg-orange-600 transition-colors mt-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-orange-500"
              >
                {canContinue ? "ثبت نهایی سفارش" : "آدرس و زمان ارسال را انتخاب کنید"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}