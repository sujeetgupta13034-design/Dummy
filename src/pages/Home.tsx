import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Tag,
  Truck
} from 'lucide-react';
import { categoriesMeta, whyChooseUs } from '../mockData';
import SEO from '../components/SEO';

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Style Hub",
    "url": "https://stylehub002.netlify.app/",
    "image": "https://www.bing.com/images/search?view=detailV2&ccid=59ctWMRh&id=0FE862C00B87E7046295A53BBDDCAF597F311F7E&thid=OIP.59ctWMRhCErqiAHaxXU4KwHaEK&mediaurl=https%3a%2f%2fwww.glam.com%2fimg%2fgallery%2ftips-for-styling-a-clothing-rack-for-the-perfect-aesthetic%2fl-intro-1678394165.jpg&exph=901&expw=1600&q=clothes%27&FORM=IRPRST&ck=E0477077E2471040591EB0DBEBA1618F&selectedIndex=10&itb=0",
    "sameAs": ""
  };

  return (
    <div className="animate-fadeIn">
      <SEO 
        title="Trendy Fashion Clothing for Men & Women | Style Hub" 
        description="Shop trendy fashion clothing, stylish outfits, casual wear, and premium apparel for men and women. Explore the latest fashion trends and upgrade your wardrobe with Style Hub." 
        jsonSchema={schemaMarkup}
      />
      
      {/* Elegant Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF5EF] via-[#FAF9F5] to-[#FDFBF9] py-16 lg:py-24 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-[#8C6D58]"></span>
                <span className="text-[11px] tracking-[0.25em] font-mono text-[#8C6D58] uppercase font-bold">New Summer Coordinate 2026</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900 tracking-tight leading-tight mb-4">
                Style Hub – Trendy Fashion Clothing for Men and Women
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#8C6D58] mb-6">
                Fashionable outfits for every style and occasion
              </h2>
              
              <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed mb-8">
                Welcome to Style Hub, your premier <span className="font-semibold text-stone-950">online clothing store</span> where you can shop high-quality <span className="font-semibold text-stone-950">trendy outfits</span>, timeless <span className="font-semibold text-stone-950">casual wear</span>, versatile <span className="font-semibold text-stone-950">women's clothing</span>, and stylish <span className="font-semibold text-stone-950">men's clothing</span> designed to help you express your confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="bg-stone-900 text-[#FDFCF7] hover:bg-stone-800 transition duration-300 font-medium text-sm md:text-base px-8 py-4 rounded-full shadow-lg flex items-center gap-3 cursor-pointer group"
                >
                  Explore Collection
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                
                <Link
                  to="/blog"
                  className="bg-transparent text-stone-800 hover:bg-stone-100 border border-stone-300 transition duration-300 font-medium text-sm md:text-base px-7 py-4 rounded-full flex items-center gap-2 cursor-pointer"
                >
                  Read Latest Trends
                </Link>
              </div>

              {/* Simple Stats line to break up white space */}
              <div className="grid grid-cols-3 gap-6 pt-12 mt-4 border-t border-stone-200 max-w-lg">
                <div>
                  <span className="block text-2xl font-serif font-bold text-stone-900">8+</span>
                  <span className="text-[11px] text-stone-500 uppercase font-mono tracking-wider">Premium Items</span>
                </div>
                <div>
                  <span className="block text-2xl font-serif font-bold text-stone-900">10k+</span>
                  <span className="text-[11px] text-stone-500 uppercase font-mono tracking-wider">Happy clients</span>
                </div>
                <div>
                  <span className="block text-2xl font-serif font-bold text-stone-900">2026</span>
                  <span className="text-[11px] text-stone-500 uppercase font-mono tracking-wider">New Collection</span>
                </div>
              </div>
            </div>

            {/* Right Column Visual Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80"
                  alt="High Fashion Visual Model"
                  className="w-full h-full object-cover shadow-inner hover:scale-105 transition-transform duration-[1200ms]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent"></div>
                
                {/* Floating tag */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#FDFCF7]/95 backdrop-blur-md rounded-2xl p-4 border border-stone-100/50 shadow-lg animate-bounce">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#8C6D58] text-white text-[10px] uppercase font-bold p-1 rounded-md"><Sparkles className="h-4 w-4" /></span>
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-stone-400">Featured Outfit</p>
                      <p className="text-sm font-semibold text-stone-850">Linen Comfort Series</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Best Fashion Clothing Showcase */}
      <section className="py-16 bg-[#FAF9F6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] tracking-[0.2em] font-mono text-[#8C6D58] uppercase font-bold block mb-2">
              Style Hub Exclusives
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-stone-900 tracking-tight">
              Best fashion clothing for men and women
            </h2>
            <p className="text-sm text-stone-500 mt-3 leading-relaxed">
              As a premier <span className="font-semibold text-stone-850">online clothing store</span>, Style Hub is dedicated to bringing you meticulously designed, high-quality, and versatile attire for any closet.
            </p>
            <div className="h-1 w-12 bg-[#8C6D58] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Women's Fashion Block */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-350 flex flex-col justify-between text-left group">
              <div>
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80"
                    alt="Women's premium clothing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-900 mb-3">
                  Women's fashion and trendy dresses
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed mb-6">
                  Upgrade your look with our modern range of <span className="font-semibold text-stone-750">women's clothing</span>. From hand-crafted linen outfits to elegant evening apparel, discover premium <span className="font-semibold text-stone-750">trendy outfits</span> curated for daily comfort and exceptional events.
                </p>
              </div>
              <div>
                <Link
                  to="/services?category=women"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8C6D58] hover:text-stone-900 transition-colors"
                >
                  <span>Explore Women's Apparel</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Men's Fashion Block */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-350 flex flex-col justify-between text-left group">
              <div>
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=80"
                    alt="Men's premium clothing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-900 mb-3">
                  Men's stylish clothing and essentials
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed mb-6">
                  Discover unmatched style with premium <span className="font-semibold text-stone-750">men's clothing</span>. Featuring minimalist t-shirts, tailored denim outerwear, and everyday <span className="font-semibold text-stone-750">casual wear</span>, we make dressing effortlessly simple and sharp.
                </p>
              </div>
              <div>
                <Link
                  to="/services?category=men"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8C6D58] hover:text-stone-900 transition-colors"
                >
                  <span>Explore Men's Essentials</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Featured Categories" Section */}
      <section className="py-16 bg-[#FDFCF7] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div id="feat-cat-header" className="max-w-3xl mx-auto mb-12">
            <span className="text-[11px] tracking-[0.2em] font-mono text-[#8C6D58] uppercase font-bold block mb-2">Curated Assortments</span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-stone-900 tracking-tight animate-fadeIn">Featured Categories</h2>
            <div className="h-1 w-12 bg-[#8C6D58] mx-auto mt-4 rounded-full font-serif"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categoriesMeta.slice(1).map((cat) => (
              <Link
                key={cat.id}
                to={`/services?category=${cat.id}`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer bg-stone-50 rounded-2xl overflow-hidden border border-stone-200/80 hover:border-[#8C6D58]/60 shadow-sm hover:shadow-xl transition-all duration-300 block"
              >
                <div className="aspect-square relative overflow-hidden bg-stone-200">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/25 group-hover:bg-stone-950/35 transition-colors"></div>
                </div>
                <div className="p-4 text-left">
                  <h3 className="font-serif font-bold text-stone-900 text-base group-hover:text-[#8C6D58] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 flex items-center justify-between">
                    <span>Browse Apparel</span>
                    <span className="bg-stone-100 font-mono text-stone-600 px-2 py-0.5 rounded-full text-[10px] group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                      {cat.count} Items
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* "Why Choose Style Hub?" Section */}
      <section className="py-16 bg-[#FAF8F4] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] tracking-[0.2em] font-mono text-[#8C6D58] uppercase font-bold block mb-2">The Style Hub Advantage</span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-stone-900 tracking-tight">Why Choose Style Hub?</h2>
            <p className="text-sm text-stone-500 mt-2">Driven by quality, convenience, and unparalleled customer integrity.</p>
            <div className="h-1 w-12 bg-[#8C6D58] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyChooseUs.map((item, index) => {
              const iconMap: { [key: string]: any } = {
                Sparkles: <Sparkles className="h-6 w-6 text-orange-700" />,
                ShieldCheck: <ShieldCheck className="h-6 w-6 text-teal-700" />,
                Tag: <Tag className="h-6 w-6 text-[#8C6D58]" />,
                Truck: <Truck className="h-6 w-6 text-blue-700" />,
                SmileCheck: <Heart className="h-6 w-6 text-pink-700" />
              };
              
              // Fallback to Sparkles
              const iconElement = iconMap[item.icon] || <Sparkles className="h-6 w-6 text-stone-700" />;

              return (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm text-left hover:shadow-md transition duration-350 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-4 bg-stone-50 p-3 rounded-xl inline-block">
                      {iconElement}
                    </div>
                    <h3 className="font-serif font-extrabold text-stone-900 text-base mb-2">{item.title}</h3>
                    <p className="text-xs text-stone-500 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1 text-[11px] font-mono text-[#8C6D58] uppercase">
                    <span>Promise #0{index+1}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Newsletter Promotional Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-[#FDFCF7] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <ShoppingBag className="w-96 h-96 -translate-y-16 translate-x-16" />
          </div>
          <div className="max-w-2xl relative z-10 text-left">
            <span className="text-[#8C6D58] font-mono text-xs uppercase tracking-widest font-bold">In-Style Daily</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 mb-4 leading-tight">
              Never Miss a Fashion Update. Join the Inner Circle!
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
              Subscribe now to receive secret clothing drops, personalized size guides, early warehouse sales access, and a <strong className="text-white">10% discount ticket</strong> straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your premium email address"
                className="bg-stone-800 text-white placeholder-stone-500 border border-stone-700 focus:border-[#8C6D58] rounded-xl px-5 py-3.5 text-sm outline-none flex-grow"
              />
              <button
                onClick={() => alert('Thank you for subscribing! Your 10% promo code is "STYLEHUB10". Use it during checks.')}
                className="bg-white hover:bg-stone-100 text-stone-950 font-bold text-sm px-6 py-3.5 rounded-xl whitespace-nowrap transition cursor-pointer"
              >
                Subscribe
              </button>
            </div>
            <p className="text-[11px] text-stone-500 mt-3 font-mono">We respect your absolute privacy. Zero spam promise.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
