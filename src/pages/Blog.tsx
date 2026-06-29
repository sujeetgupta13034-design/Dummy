import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp, MessageSquare, ArrowRight } from 'lucide-react';
import { Blog as BlogType } from '../types';
import SEO from '../components/SEO';

interface BlogPageProps {
  blogs: BlogType[];
  handleLikeBlog: (blogId: string, event: React.MouseEvent) => void;
  setSelectedBlog: (blog: BlogType | null) => void;
}

export default function Blog({ blogs, handleLikeBlog, setSelectedBlog }: BlogPageProps) {
  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO 
        title="Fashion Blog & Styling Journal | Style Hub" 
        description="Our editor's style notebook. Read standard capsule wardrobe setup advice, seasonal coordinates, footwear design evaluations, and premium accessory pairings." 
      />

      {/* Blog Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] tracking-[0.2em] font-mono text-[#8C6D58] uppercase font-bold block mb-2">Editor's Journal</span>
        <h1 className="text-4xl md:text-5xl font-serif font-black text-stone-900 tracking-tight animate-fadeIn">Latest Fashion Blogs</h1>
        <div className="h-1 w-16 bg-[#8C6D58] mx-auto mt-4 rounded-full"></div>
        <p className="text-sm text-stone-500 mt-4 font-normal">Stay tuned with styling, sneaker guidelines, and capsule wardrobe secrets of 2026 written by the Style Hub creative directors.</p>
      </div>

      {/* Blogs list view */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            
            {/* Blog Image layout */}
            <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-stone-950/90 text-white text-[10px] tracking-wider uppercase font-mono px-2.5 py-0.5 rounded-full">
                {post.category}
              </div>
            </div>

            {/* Blog Summary Card Info */}
            <div className="p-6 text-left flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center text-xs text-stone-400 font-mono mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">&#183;</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3
                  onClick={() => setSelectedBlog(post)}
                  className="font-serif font-black text-stone-900 text-lg sm:text-xl line-clamp-2 leading-tight hover:text-[#8C6D58] cursor-pointer transition-colors mb-3 focus:outline-none"
                >
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-500 line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Likes, Comments & Action CTA */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-mono text-stone-500 font-medium">
                  <button
                    onClick={(e) => handleLikeBlog(post.id, e)}
                    className="flex items-center gap-1 hover:text-[#8C6D58] transition active:scale-95 group/btn cursor-pointer"
                    title="Like this article"
                  >
                    <ThumbsUp className="h-4 w-4 group-hover/btn:scale-110" />
                    <span>{post.likes}</span>
                  </button>
                  
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.comments.length}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedBlog(post)}
                  className="text-xs font-bold text-stone-900 hover:text-[#8C6D58] flex items-center gap-1 transition cursor-pointer"
                >
                  <span>Read Post</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

          </article>
        ))}
      </div>

      {/* Quick Inspiration banner */}
      <div className="mt-16 bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-stone-200/60 text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-stone-900 font-bold font-serif">Have professional fashion wisdom to contribute?</h3>
            <p className="text-xs text-stone-500 mt-1 max-w-xl">We welcome guest publishers! If you are a fashion creator or sneaker enthusiast looking to publish styling blogs, write to info@stylehub.com</p>
          </div>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-stone-900 hover:bg-[#8C6D58] text-white text-xs font-bold px-6 py-3 rounded-xl whitespace-nowrap self-start md:self-center transition block text-center"
          >
            Message Editorial Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
