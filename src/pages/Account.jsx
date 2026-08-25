import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.jsx";
import Breadcrumb from "../Product components/Breadcrumb.jsx";
import {
  UserIcon,
  BagIcon,
  LocationIcon,
  HeartIcon,
  EditIcon,
  LogoutIcon,
  TrashIcon,
  ClockIcon,
} from "../Home components/Icons.jsx";

const TABS = [
  { key: "info", label: "اطلاعات من", icon: UserIcon },
  { key: "orders", label: "سفارش‌ها", icon: BagIcon },
  { key: "addresses", label: "آدرس‌ها", icon: LocationIcon },
  { key: "favorites", label: "علاقه‌مندی‌ها", icon: HeartIcon },
];

const ORDERS = [
  { id: "10245", date: "۱۰ شهریور ۱۴۰۴", status: "تحویل شده", total: 2450000 },
  { id: "10198", date: "۲۲ مرداد ۱۴۰۴", status: "در حال ارسال", total: 1250000 },
  { id: "10122", date: "۵ تیر ۱۴۰۴", status: "لغو شده", total: 890000 },
];

const ADDRESSES = [
  { id: 1, title: "منزل", detail: "تهران، انتهای اتوبان ستاری، میدان دانشگاه، پلاک ۱۲" },
  { id: 2, title: "محل کار", detail: "تهران، خیابان ولیعصر، بالاتر از پارک ملت" },
];

const STATUS_STYLE = {
  "تحویل شده": "bg-green-50 text-green-600",
  "در حال ارسال": "bg-orange-50 orange",
  "لغو شده": "bg-red-50 text-red-500",
};

function InfoTab() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-neutral-500">نام و نام خانوادگی</label>
          <input
            defaultValue="نرگس موسوی"
            className="border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-neutral-500">شماره تماس</label>
          <input
            defaultValue="09125601213"
            className="border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors dir-ltr text-right"
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-bold text-neutral-500">ایمیل</label>
          <input
            defaultValue="narges.mousavi@email.com"
            className="border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors dir-ltr text-right"
          />
        </div>
      </div>
      <button className="bg-orange-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-orange-600 transition-colors w-fit text-sm">
        ذخیره تغییرات
      </button>
    </div>
  );
}

function OrdersTab() {
  return (
    <div className="flex flex-col gap-4">
      {ORDERS.map((o) => (
        <div
          key={o.id}
          className="flex items-center justify-between border border-neutral-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center orange">
              <BagIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">سفارش #{o.id}</p>
              <p className="text-xs text-neutral-400 flex items-center gap-1 mt-1">
                <ClockIcon className="w-3.5 h-3.5" />
                {o.date}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${STATUS_STYLE[o.status]}`}>
              {o.status}
            </span>
            <p className="text-sm font-black">{o.total.toLocaleString("fa-IR")} تومان</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AddressesTab() {
  const [addresses, setAddresses] = useState(ADDRESSES);
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState({ title: "", detail: "" });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newAddress.title.trim() || !newAddress.detail.trim()) return;

    setAddresses((prev) => [
      ...prev,
      { id: Date.now(), title: newAddress.title, detail: newAddress.detail },
    ]);
    setNewAddress({ title: "", detail: "" });
    setShowForm(false);
  };

  return (
    <div className="flex flex-col gap-4">
      {addresses.map((a) => (
        <div
          key={a.id}
          className="flex items-start justify-between gap-3 border border-neutral-100 rounded-2xl p-4"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center orange flex-shrink-0">
              <LocationIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">{a.title}</p>
              <p className="text-xs text-neutral-400 mt-1 leading-6">{a.detail}</p>
            </div>
          </div>
          <button
            onClick={() => setAddresses((prev) => prev.filter((x) => x.id !== a.id))}
            className="text-neutral-300 hover:text-red-500 transition-colors flex-shrink-0"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      ))}

      {showForm ? (
        <form
          onSubmit={handleAdd}
          className="border border-neutral-100 rounded-2xl p-4 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-neutral-500">
              عنوان آدرس
            </label>
            <input
              value={newAddress.title}
              onChange={(e) =>
                setNewAddress({ ...newAddress, title: e.target.value })
              }
              placeholder="مثلاً منزل، محل کار"
              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-neutral-500">
              آدرس کامل
            </label>
            <textarea
              value={newAddress.detail}
              onChange={(e) =>
                setNewAddress({ ...newAddress, detail: e.target.value })
              }
              rows={3}
              placeholder="استان، شهر، خیابان، پلاک..."
              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 transition-colors resize-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-orange-600 transition-colors text-sm"
            >
              ذخیره آدرس
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setNewAddress({ title: "", detail: "" });
              }}
              className="text-neutral-400 text-sm font-bold hover:text-neutral-600 transition-colors"
            >
              انصراف
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="border border-dashed border-orange-300 orange font-bold rounded-2xl py-3 hover:bg-orange-50 transition-colors"
        >
          + افزودن آدرس جدید
        </button>
      )}
    </div>
  );
}

function FavoritesTab() {
  const favorites = PRODUCTS.slice(0, 3);
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {favorites.map((p) => (
        <Link
          key={p.id}
          to={`/products/${p.id}`}
          className="flex items-center gap-4 border border-neutral-100 rounded-2xl p-4 hover:shadow-md transition-shadow"
        >
          <div className="w-16 h-16 bg-[#f6f6f6] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img src={p.url} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-sm ">{p.title}</p>
            <p className="orange text-sm font-black mt-1">
              {p.price.toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Account() {
  const [activeTab, setActiveTab] = useState("info");

  const TAB_CONTENT = {
    info: <InfoTab />,
    orders: <OrdersTab />,
    addresses: <AddressesTab />,
    favorites: <FavoritesTab />,
  };

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-16">
      <Breadcrumb
        items={[
          { label: "صفحه اصلی", path: "/" },
          { label: "حساب کاربری", path: "/account" },
        ]}
      />

      <div className="grid lg:grid-cols-4 gap-8 mt-8">
        {/* سایدبار */}
        <aside className="lg:col-span-1 flex flex-col gap-6">
          <div className="flex flex-col items-center text-center gap-3 border border-neutral-100 rounded-2xl p-6">
            <div className="relative">
              <img
                src="/src/assets/Profile.png"
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
              <button className="absolute -bottom-1 -left-1 w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center border-2 border-white">
                <EditIcon className="w-3.5 h-3.5" />
              </button>
            </div>
            <div>
              <p className="font-black">نرگس موسوی</p>
              <p className="text-xs text-neutral-400 mt-1">عضو از تیر ۱۴۰۲</p>
            </div>
          </div>

          <nav className="flex flex-col gap-1 border border-neutral-100 rounded-2xl p-2">
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 text-sm font-bold px-4 py-3 rounded-xl transition-colors ${
                  activeTab === key
                    ? "bg-orange-500 text-white"
                    : "text-neutral-500 hover:bg-neutral-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
            <button className="flex items-center gap-3 text-sm font-bold px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors mt-1">
              <LogoutIcon className="w-5 h-5" />
              خروج از حساب
            </button>
          </nav>
        </aside>

        {/* محتوای تب فعال */}
        <div className="lg:col-span-3 border border-neutral-100 rounded-2xl p-6 md:p-8">
          <h2 className="font-black text-lg mb-6">
            {TABS.find((t) => t.key === activeTab)?.label}
          </h2>
          {TAB_CONTENT[activeTab]}
        </div>
      </div>
    </div>
  );
}