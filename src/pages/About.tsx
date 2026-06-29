import { Sparkles, Store } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO 
        title="About Us | Style Hub Origin Story" 
        description="Learn about the origin story of Style Hub, our core values of sustainable production, premium fabric sourcing, and our relentless vision of modern affordable luxury." 
      />
      
      {/* Header / Intro section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] tracking-[0.2em] font-mono text-[#8C6D58] uppercase font-bold block mb-2">Our Origin Story</span>
        <h1 className="text-4xl md:text-5xl font-serif font-black text-stone-900 tracking-tight">About Style Hub</h1>
        <div className="h-1 w-16 bg-[#8C6D58] mx-auto mt-4 rounded-full"></div>
        
        <p className="text-base sm:text-lg text-stone-605 mt-6 leading-relaxed">
          Style Hub was founded with the mission of bringing modern and affordable fashion to everyone. We believe that style is a way to express yourself, and our collection is carefully selected to provide comfort, quality, and elegance.
        </p>
      </div>

      {/* Visual highlight split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative">
          <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-lg bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1000&auto=format&fit=crop&q=80"
              alt="Creative garment table"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Visual quote badge overlay */}
          <div className="absolute -bottom-6 -right-4 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 max-w-md hidden sm:block">
            <p className="text-sm font-serif italic text-stone-700">"Style is a deeply personal way to say who you are without speaking."</p>
          </div>
        </div>
        
        <div className="text-left space-y-6">
          <span className="text-[10px] tracking-widest font-mono text-[#8C6D58] uppercase font-semibold">Carefully Sourced Fabrics</span>
          <h3 className="text-2xl font-serif font-bold text-stone-900 leading-tight">Every Garment Represents a Thread of True Dedication</h3>
          <p className="text-stone-650 text-sm leading-relaxed">
            Our products are selected not just for immediate aesthetic value, but for longevity. By partnering directly with ethical weavers and certified leather makers, we secure organic cotton, natural linen, and high-performance rubber that stands up to daily use.
          </p>
          <p className="text-stone-650 text-sm leading-relaxed">
            We maintain a rigorous carbon footprint validation schedule, striving to utilize 80% recycled components in our seasonal packaging containers.
          </p>
        </div>
      </div>

      {/* Mission & Vision Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 mx-auto max-w-5xl">
        
        {/* Mission */}
        <div className="bg-[#FAF8F4] p-8 sm:p-10 rounded-3xl text-left border border-stone-200/60 shadow-sm flex flex-col justify-between">
          <div>
            <div className="bg-[#8C6D58]/10 text-[#8C6D58] h-12 w-12 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-stone-900 mb-4">Our Mission</h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              To provide fashionable and affordable products that inspire confidence and individuality across all communities worldwide.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-stone-200/40 text-[10px] font-mono uppercase tracking-wider text-stone-400">
            Fashion Integrity Anchor
          </div>
        </div>

        {/* Vision */}
        <div className="bg-stone-900 text-[#FDFCF7] p-8 sm:p-10 rounded-3xl text-left border border-stone-850 shadow-sm flex flex-col justify-between">
          <div>
            <div className="bg-white/10 text-white h-12 w-12 rounded-xl flex items-center justify-center mb-6">
              <Store className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white mb-4">Our Vision</h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              To become a trusted, sustainable, and organic-first online fashion destination for customers worldwide.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-stone-850 text-[10px] font-mono uppercase tracking-wider text-stone-500">
            Global Reach Goals 2026-2030
          </div>
        </div>

      </div>

      {/* Our Values section */}
      <section className="bg-white p-10 sm:p-14 rounded-3xl border border-stone-200/80 shadow-md">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#8C6D58] font-mono text-[11px] uppercase tracking-wider font-bold">The Pillars of Our Brand</span>
          <h2 className="text-3xl font-serif font-bold text-stone-900 mt-2 font-serif">Our Foundational Values</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Quality */}
          <div className="text-left space-y-2">
            <div className="text-2xl font-serif font-black text-[#8C6D58]">01. Quality</div>
            <p className="text-sm font-semibold text-stone-850">Double stitched reassurance.</p>
            <p className="text-xs text-stone-500 leading-relaxed">We inspect every single accessory, button seam, and heel support so your apparel endures multiple seasons.</p>
          </div>

          {/* Innovation */}
          <div className="text-left space-y-2">
            <div className="text-2xl font-serif font-black text-[#8C6D58]">02. Innovation</div>
            <p className="text-sm font-semibold text-stone-850">Functional textiles.</p>
            <p className="text-xs text-stone-500 leading-relaxed">From memory foam insoles to sweat-wicking active weaves, we weave practicality directly into clothing style.</p>
          </div>

          {/* Customer Satisfaction */}
          <div className="text-left space-y-2">
            <div className="text-2xl font-serif font-black text-[#8C6D58]">03. Customer Satisfaction</div>
            <p className="text-sm font-semibold text-stone-850">A smooth experience.</p>
            <p className="text-xs text-stone-500 leading-relaxed">Easy size swap policies, real-time query support, and streamlined refunds represent our loyalty to you.</p>
          </div>

          {/* Sustainability */}
          <div className="text-left space-y-2">
            <div className="text-2xl font-serif font-black text-[#8C6D58]">04. Sustainability</div>
            <p className="text-sm font-semibold text-stone-850">Conscious fashion.</p>
            <p className="text-xs text-stone-500 leading-relaxed">Utilizing organic fibers, fair workplace partnerships, and minimizing transport emissions at every supply level.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
