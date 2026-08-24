import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BLOGS } from "../data/blogs.jsx";
import Breadcrumb from "../Product components/Breadcrumb.jsx";
import RevealOnScroll from "../utils/RevealOnScroll.jsx";
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from "../Home components/Icons.jsx";

export default function BlogDetail() {
  const { id } = useParams();
  const post = BLOGS.find((b) => b.id === Number(id));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-8 pt-40 pb-16 text-center">
        <p className="text-neutral-400">این پست پیدا نشد.</p>
        <Link to="/blog" className="text-orange-500 font-bold hover:underline">
          بازگشت به وبلاگ
        </Link>
      </div>
    );
  }

  const related = BLOGS.filter(
    (b) => b.category === post.category && b.id !== post.id
  ).slice(0, 3);

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-[3px] bg-neutral-100 z-[60]">
        <div
          className="h-full bg-orange-500 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article className="max-w-3xl mx-auto px-8 pt-32 pb-20">
        <Breadcrumb
          items={[
            { label: "صفحه اصلی", path: "/" },
            { label: "وبلاگ", path: "/blog" },
            { label: post.title, path: `/blog/${post.id}` },
          ]}
        />

        <RevealOnScroll className="mt-6 flex flex-col items-center text-center gap-4">
          <span className="bg-orange-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-black leading-snug max-w-2xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <img
                src={post.author.avatar}
                alt=""
                className="w-6 h-6 rounded-full object-cover"
              />
              {post.author.name}
            </span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              {post.readTime} دقیقه مطالعه
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-96 mt-10">
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="mt-10 flex flex-col gap-6">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className={`text-[15px] text-neutral-600 leading-9 ${
                i === 0
                  ? "first-letter:text-6xl first-letter:font-black first-letter:orange first-letter:float-right first-letter:leading-[0.8] first-letter:ml-3 first-letter:mt-1"
                  : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </RevealOnScroll>

        <RevealOnScroll
          delay={100}
          className="mt-14 flex items-center gap-4 border border-neutral-100 rounded-2xl p-6"
        >
          <img
            src={post.author.avatar}
            alt=""
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="text-xs text-neutral-400">نویسنده</p>
            <p className="font-bold">{post.author.name}</p>
          </div>
        </RevealOnScroll>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-black mb-6">مطالب مرتبط</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((r, i) => (
                <RevealOnScroll key={r.id} delay={i * 100}>
                  <Link
                    to={`/blog/${r.id}`}
                    className="group relative rounded-2xl overflow-hidden flex flex-col justify-end min-h-[200px]"
                  >
                    <img
                      src={r.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <p className="relative z-10 p-4 text-white text-sm font-bold leading-snug">
                      {r.title}
                    </p>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        )}

        <Link
          to="/blog"
          className="flex items-center gap-2 text-sm font-bold orange hover:underline mt-14 w-fit"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          بازگشت به همه‌ی مطالب
        </Link>
      </article>
    </>
  );
}