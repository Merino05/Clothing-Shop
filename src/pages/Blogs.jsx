import { useState } from "react";
import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogs.jsx";
import Breadcrumb from "../Product components/Breadcrumb.jsx";
import RevealOnScroll from "../utils/RevealOnScroll.jsx";
import { CalendarIcon, ClockIcon } from "../Home components/Icons.jsx";

const CATEGORIES = ["همه", ...new Set(BLOGS.map((b) => b.category))];

function BlogCard({ post, big }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className={` group relative overflow-hidden flex flex-col justify-end ${
        big ? "min-h-[420px] md:min-h-[544px]" : "min-h-[260px]"
      }`}
    >
      <img
        src={post.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <span className="absolute top-4 right-4 bg-orange-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full z-10">
        {post.category}
      </span>

      <div className="relative z-10 p-5 md:p-6 text-white flex flex-col gap-2">
        <h3
          className={`font-black leading-snug ${
            big ? "text-xl md:text-2xl" : "text-base"
          }`}
        >
          {post.title}
        </h3>
        {big && (
          <p className="text-xs md:text-sm text-neutral-200 leading-6 line-clamp-2">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center gap-4 text-[11px] text-neutral-300 mt-1">
          <span className="flex items-center gap-1">
            <CalendarIcon className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <ClockIcon className="w-3.5 h-3.5" />
            {post.readTime} دقیقه مطالعه
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Blogs() {
  const [activeCat, setActiveCat] = useState("همه");

  const filtered = BLOGS.filter(
    (b) => activeCat === "همه" || b.category === activeCat
  );

  const featured = filtered.find((b) => b.featured) || filtered[0];
  const rest = filtered.filter((b) => b.id !== featured?.id);

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-16 flex flex-col gap-10">
      <Breadcrumb
        items={[
          { label: "صفحه اصلی", path: "/" },
          { label: "وبلاگ", path: "/blog" },
        ]}
      />

      <div className="flex flex-col items-center text-center gap-3">
        <span className="orange text-xs font-bold uppercase tracking-widest">
          Magazine
        </span>
        <h1 className="text-3xl md:text-4xl font-black relative inline-block">
          وبلاگ هیوستر
          <span className="absolute right-0 -bottom-1 w-full h-2 bg-orange-100 -z-10" />
        </h1>
        <p className="text-neutral-400 text-sm max-w-md">
          یادداشت‌هایی درباره‌ی استایل، مد فصل و مراقبت شخصی، برای الهام گرفتن
          پیش از هر خرید.
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`text-xs font-bold px-5 py-2.5  border transition-colors ${
              activeCat === cat
                ? "bg-orange-500 text-white border-orange-500"
                : "border-neutral-200 hover:bg-neutral-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-neutral-400 py-16">
          پستی در این دسته‌بندی پیدا نشد.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {featured && (
            <RevealOnScroll className="md:col-span-2 md:row-span-2">
              <BlogCard post={featured} big />
            </RevealOnScroll>
          )}

          {rest.map((post, i) => (
            <RevealOnScroll key={post.id} delay={(i + 1) * 100}>
              <BlogCard post={post} />
            </RevealOnScroll>
          ))}
        </div>
      )}
    </div>
  );
}