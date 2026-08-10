import img1 from "../assets/images (1).jpg";
import img2 from "../assets/images (2).png";
import img3 from "../assets/images (3).png";
import img4 from "../assets/images (4).jpg";
import img5 from "../assets/images (5).jpg";
export default function Customers() {

const costom = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img4 },
  { url: img5 },
];
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 text-center">
      <div className="text-2xl mb-2">🏅</div>
      <h2 className="text-2xl font-black">مشتریان معتبر بندیتو</h2>
      <p className="text-neutral-400 text-xs mt-2 mb-10">
        قبل و بعد مشتریان عزیزمان بعد از استفاده محصولات و مشاوره گرفتن از
        متخصصان ما
      </p>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {costom.map((i) => (
          <div
            key={i.url}
            className="w-20 h-20 rounded-full bg-neutral-100 hover:bg-orange-100 transition-colors overflow-hidden shadow"
          >
            <img
              src={i.url}
              alt="profile"
              className="w-full h-full object-cover hover:bg-orange-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
