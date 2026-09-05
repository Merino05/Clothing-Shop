import { Link } from "react-router-dom";
import { BagIcon, HeartIcon } from "../Home components/Icons.jsx";
import { Price, IconBtn } from "../Home components/Shared.jsx";

export default function DiscountBadgeCard({ p }) {
  const discountPercent = Math.round(((p.old - p.price) / p.old) * 100);

  return (
    <div className="cardhov flex flex-col items-center gap-3 w-full py-4 relative">
      {discountPercent > 0 && (
        <span className="absolute top-4 right-0 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-l-lg mt-3">
          {discountPercent.toLocaleString("fa-IR")}% تخفیف
        </span>
      )}
      <Link to={`/products/${p.id}`} className="w-full">
        <div className="relative bg-[#f6f6f6] h-80 w-full flex items-end justify-center overflow-hidden">
          <div
            className="figure w-[80%] h-[90%] rounded-t-full flex justify-center items-end"
            style={{ background: "linear-gradient(160deg, #d8d8d8, #b9b9b9)" }}
          >
            <img src={p.url} alt="" />
          </div>
          <div className="grad absolute inset-0 pointer-events-none" />
        </div>
      </Link>
      <div className="flex flex-col items-center gap-1 px-4 text-center">
        <p className="text-[11px] text-neutral-400 uppercase">{p.cat}</p>
        <Link to={`/products/${p.id}`}>
          <p className="ctitle font-extrabold text-sm hover:text-red-500 transition-colors">
            {p.title}
          </p>
        </Link>
        <div className="w-full h-px bg-neutral-100 my-1" />
        <div className="flex items-center justify-center gap-6 w-full">
          <IconBtn>
            <BagIcon className="w-5 h-5" />
          </IconBtn>
          <Price price={p.price} oldPrice={p.old} />
          <IconBtn>
            <HeartIcon className="w-5 h-5" />
          </IconBtn>
        </div>
      </div>
    </div>
  );
}