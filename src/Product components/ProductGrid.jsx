import { Link } from "react-router-dom";
import { BagIcon, HeartIcon } from "../Home components/Icons.jsx";
import { Price, IconBtn } from "../Home components/Shared.jsx";

function ProductCard({ p }) {
  return (
    <div className="cardhov flex flex-col items-center gap-3 w-full py-4">
        <div className="relative bg-[#f6f6f6] h-80 w-full flex items-end justify-center overflow-hidden">
          <div
            className="figure w-[80%] h-[90%] rounded-t-full flex justify-center items-end"
            style={{ background: "linear-gradient(160deg, #d8d8d8, #b9b9b9)" }}
          >
            <img src={p.url} alt="" />
          </div>
          <div className="grad absolute inset-0 pointer-events-none" />
        </div>
      <div className="flex flex-col items-center gap-1 px-4 text-center">
        <p className="text-[11px] text-neutral-400 uppercase">{p.cat}</p>
        <Link to={`/products/${p.id}`}>
          <p className="ctitle font-extrabold text-sm">{p.title}</p>
        </Link>
        <div className="w-full h-px bg-neutral-100 my-1" />
        <div className="flex items-center justify-center gap-6 w-full">
          <Link to={`/products/${p.id}`}>
            <IconBtn>
              <BagIcon className="w-5 h-5" />
            </IconBtn>
          </Link>
          <Price price={p.price} oldPrice={p.old} />
          <IconBtn>
            <HeartIcon className="w-5 h-5" />
          </IconBtn>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ products }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}
