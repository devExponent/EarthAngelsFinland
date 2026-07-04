import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { POSTS, type Post } from "../data/POST_DATA";

function PostCard({ post }: { post: Post }) {
  return (
    <NavLink
      to={`/posts/${post.id}`}
      className="flex-shrink-0 w-72 md:w-80 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-left group border border-[#E2DDD5] hover:border-[#0097D0]/40"
    >
      {post.image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5">
        {post.tag && (
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0097D0] mb-2">
            {post.tag}
          </span>
        )}
        <h3 className="text-[#0B1D13] font-bold text-lg leading-snug mb-2 line-clamp-2">
          {post.title}
        </h3>
        {post.description && (
          <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-3">
            {post.description}
          </p>
        )}
        <span className="inline-block mt-4 text-[#0097D0] text-sm font-semibold">
          Read more →
        </span>
      </div>
    </NavLink>
  );
}

export default function NewsPostsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F7F5F0] py-16 md:py-24 px-4 my-8">
      <div className="w-10/12 lg:w-9/12 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[#0097D0] text-2xl uppercase tracking-[0.25em] font-bold mb-3">
            Stay Updated
          </span>
          <h2
            className="text-[#0B1D13] text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Latest from EarthAngels
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg md:text-xl font-bold">
            Events, news, and community updates.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md border border-[#E2DDD5] items-center justify-center text-[#0B1D13] hover:bg-[#0097D0] hover:text-white transition-all duration-300"
            aria-label="Scroll left"
          >
            ←
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md border border-[#E2DDD5] items-center justify-center text-[#0B1D13] hover:bg-[#0097D0] hover:text-white transition-all duration-300"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>

        <p className="text-center text-[#9CA3AF] text-sm mt-6 md:hidden">
          Swipe to see more
        </p>
      </div>
    </section>
  );
}
