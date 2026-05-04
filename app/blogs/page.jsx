import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";

// This forces the page to be treated as a static build
export const dynamic = "force-static";

// 1. Function to fetch data from Laravel
async function getPosts() {
  const res = await fetch("http://127.0.0.1:8000/api/blogs");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const result = await res.json();

  return result.data; // ✅ THIS IS THE FIX
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-indigo-500/30 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold mb-6">
            <BookOpen size={16} /> OUR JOURNAL
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight max-w-4xl">
            Risk Insights & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Insurance Intelligence | Vestigo Advisory
            </span>
          </h1>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl leading-relaxed">
            Expert analysis on risk management, corporate compliance, and the
            evolving landscape of global insurance.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-32 border border-dashed border-slate-800 rounded-[3rem]">
            <p className="text-xl text-slate-500 max-w-xl mx-auto italic">
              Insights from our advisors on risk, compliance, and industry
              developments — coming soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="group relative flex flex-col bg-[#0F172A] border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-2xl shadow-black/50"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-64 w-full overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                      <BookOpen className="text-slate-700 w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-60" />
                </div>

                {/* CONTENT AREA */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> Mar 2026
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} /> Advisor
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-4 group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <div
                    className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-8"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* BUTTON */}
                  <div className="mt-auto pt-6 border-t border-slate-800/50">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 text-white font-bold text-sm group/link transition-all"
                    >
                      READ FULL ARTICLE
                      <ArrowRight
                        size={18}
                        className="text-indigo-500 group-hover/link:translate-x-2 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>
    </main>
  );
}
