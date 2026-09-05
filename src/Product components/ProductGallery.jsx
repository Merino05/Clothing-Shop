import { useState } from "react";

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* عکس اصلی */}
      <div className="relative bg-[#f6f6f6] h-[420px] rounded-2xl overflow-hidden flex items-center justify-center">
        <img
          src={images[active]}
          alt=""
          className="max-h-full max-w-full object-contain transition-all duration-500"
        />
      </div>

      {/* تصاویر کوچک */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                active === i
                  ? "border-red-500 scale-95"
                  : "border-neutral-200 hover:border-red-300"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover bg-[#f6f6f6]"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}