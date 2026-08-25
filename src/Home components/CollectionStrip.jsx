import { BagIcon, HeartIcon } from "./Icons.jsx";
import { Price } from "./Shared.jsx";
import collection from "/src/assets/images.png";

const STRIP_ITEMS = [
  { name: "پکیج ضد موخوره و تقویت کننده مو وان پلاس", price: 1250000 },
  { name: "پکیج روغن‌های خوراکی تقویتی پوست و مو", price: 8720000 },
  { name: "پکیج مراقبت پوست ویژه بانوان", price: 1250000 },
  { name: "پکیج آرایشی مجلسی کامل", price: 8720000 },
];

export default function CollectionStrip() {
  return (
    <section className="max-w-7xl mx-auto px-0 md:px-8 py-10">
      <div className="relative bg-[#f8f8f8] grid md:grid-cols-2 overflow-hidden bg-gradient-to-r from-[#C7C7C7] to-[#323232] ">
        <div className="p-10 text-right text-white">
          <h2 className="text-2xl font-black mb-6">محصولات ست‌شده توسط ما</h2>
          <div className="divide-y divide-neutral-200">
            {STRIP_ITEMS.map((it) => (
              <div
                key={it.name}
                className="group flex items-center justify-between py-4 hover:bg-orange-300/20 px-3 -mx-3 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="font-bold text-sm">{it.name}</span>
                </div>
                <div className="flex items-center gap-3 group-hover:text-orange-400 transition-colors">
                  <Price price={it.price} /> <HeartIcon className="w-4 h-4" />
                  <BagIcon className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-96 flex justify-center  from-neutral-200 to-neutral-300">
          <img
            src={collection}
            alt=""
            className=" h-full"
          />
        </div>
      </div>
    </section>
  );
}
