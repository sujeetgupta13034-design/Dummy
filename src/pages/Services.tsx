import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  X,
  Grid,
  List,
  Eye,
  ShoppingCart,
  Star,
  ArrowUpDown,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Product } from '../types';
import { productsList, categoriesMeta } from '../mockData';
import SEO from '../components/SEO';

interface ServicesProps {
  handleProductQuickView: (product: Product) => void;
  handleAddToCart: (product: Product, size: string, color: string, qtyValue?: number) => void;
}

export default function Services({ handleProductQuickView, handleAddToCart }: ServicesProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category');

  // Interactive Product States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');

  // Sync category state with search query parameter if present
  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    } else {
      setSelectedCategory('all');
    }
  }, [urlCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  // Filter and Search Algorithm
  const filteredProducts = useMemo(() => {
    let result = [...productsList];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortOption]);

  // Special Fashion Services definition
  const stylingServices = [
    {
      id: 's1',
      title: 'Personalized Wardrobe Assembly',
      desc: 'Connect with a certified fashion advisory agent. Together we curate 6 basic elements mapping to your body measurements, workspace vibe, and lifestyle coordinates.',
      price: '$50.00 / session',
      icon: <Sparkles className="h-5 w-5 text-[#8C6D58]" />
    },
    {
      id: 's2',
      title: '30-Day Sneaker Wear Trial',
      desc: 'Select any sneakers from our inventory list. We dispatch your proper fits for a complete 30-day street testing session. Fully refundable if seams wear out or comfort compromises.',
      price: 'Free with purchase',
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-700" />
    }
  ];

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO 
        title="Our Services & Fashion Catalog | Style Hub" 
        description="Browse Style Hub's exquisite service spectrum, clothing catalog, styling consulting sessions, shoes, accessories, and customizable wardrobe outfits." 
      />

      {/* Services & Products Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-[11px] tracking-[0.2em] font-mono text-[#8C6D58] uppercase font-bold block mb-2">Style Hub Catalog</span>
        <h1 className="text-4xl md:text-5xl font-serif font-black text-stone-900 tracking-tight">Our Services & Products</h1>
        <div className="h-1 w-16 bg-[#8C6D58] mx-auto mt-4 rounded-full"></div>
        <p className="text-sm text-stone-500 mt-4">Discover our premier collection of fine apparel paired with personalized custom fitting and style consulting services.</p>
      </div>

      {/* Styled Personal Services Highlight Panel */}
      <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {stylingServices.map(srv => (
          <div key={srv.id} className="bg-[#FAF8F4] p-6 rounded-2xl border border-stone-200/60 shadow-sm flex items-start gap-4 text-left">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-stone-200/50 shrink-0">
              {srv.icon}
            </div>
            <div>
              <h3 className="font-serif font-extrabold text-stone-900 text-base mb-1">{srv.title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed mb-3">{srv.desc}</p>
              <span className="text-[11px] uppercase tracking-wider font-mono bg-stone-900 text-white px-2.5 py-1 rounded font-bold">
                {srv.price}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Live Filter Controls & Search Workspace */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-md mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 font-sans">
          
          {/* Category Selection Carousel */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-mono tracking-wider text-stone-400 font-bold mr-2 block lg:inline text-left">Filters:</span>
            {categoriesMeta.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`text-xs md:text-sm font-medium px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#8C6D58] text-white shadow-md font-bold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 border border-stone-200/30'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sub controls (Search, Sort, Layout mode) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            
            {/* Search box inline */}
            <div className="relative flex-grow sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#FDFCF7] placeholder-stone-400 border border-stone-300 focus:border-[#8C6D58] outline-none rounded-xl pl-10 pr-4 py-2 text-sm w-full"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Pricing and rating Sorter */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-stone-400 shrink-0" />
              <select
                value={sortOption}
                onChange={(e: any) => setSortOption(e.target.value)}
                className="bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs md:text-sm outline-none text-stone-700 focus:border-[#8C6D58] cursor-pointer"
              >
                <option value="default">Default Sort</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Popularity (Rating)</option>
              </select>
            </div>

            {/* Grid / List Selector toggler */}
            <div className="hidden sm:flex items-center border border-stone-200 rounded-xl p-0.5">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 rounded-lg transition cursor-pointer ${layoutMode === 'grid' ? 'bg-stone-100 text-[#8C6D58]' : 'text-stone-400 hover:text-stone-700'}`}
                aria-label="Grid View"
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setLayoutMode('list')}
                className={`p-1.5 rounded-lg transition cursor-pointer ${layoutMode === 'list' ? 'bg-stone-100 text-[#8C6D58]' : 'text-stone-400 hover:text-stone-700'}`}
                aria-label="List View"
              >
                <List className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Products grid display */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 shadow-sm max-w-xl mx-auto">
          <Search className="h-12 w-12 text-stone-300 mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold text-stone-900">No Matching Clothes Found</h3>
          <p className="text-stone-500 text-sm mt-2 px-4 leading-relaxed">There are no clothing items or styling accessories matching your search query "{searchQuery}". Try updating your query or filter pill selection.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); searchParams.delete('category'); setSearchParams(searchParams); }}
            className="mt-6 bg-stone-900 text-white font-semibold text-xs px-5 py-2.5 rounded-lg hover:bg-stone-800 transition cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : layoutMode === 'grid' ? (
        
        // GRID DISPLAY
        <div id="products-catalog-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-350 flex flex-col justify-between"
            >
              
              {/* Visual Card image body */}
              <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Interactive Visual Overlay hover state */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleProductQuickView(product)}
                    className="bg-white hover:bg-[#8C6D58] hover:text-white text-stone-900 p-3 rounded-full shadow-lg transition duration-300 cursor-pointer"
                    title="Quick View Details"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleAddToCart(product, product.sizes[0], product.colors[0], 1)}
                    className="bg-white hover:bg-stone-900 text-stone-955 hover:text-white p-3 rounded-full shadow-lg transition duration-300 cursor-pointer"
                    title="Instant Add to Cart"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>

                {/* Top ribbon pills */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                  {product.id === 'p1' || product.id === 'p4' ? (
                    <span className="bg-[#8C6D58] text-white text-[9px] uppercase tracking-widest font-mono font-bold px-2 py-0.5 rounded">
                      Popular
                    </span>
                  ) : null}
                  
                  <span className="bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded font-bold border border-stone-250/50">
                    {product.category}
                  </span>
                </div>

                {/* Embedded quick-rating pill */}
                <div className="absolute bottom-3 right-3 bg-[#FDFCF7]/95 backdrop-blur-sm border border-stone-100/50 px-2 py-0.5 rounded-md flex items-center gap-1 text-[10px] font-semibold shadow-sm text-amber-700">
                  <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 text-left flex-grow flex flex-col justify-between">
                <div>
                  
                  {/* Title and price summary row */}
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <h3
                      onClick={() => handleProductQuickView(product)}
                      className="font-serif font-black text-stone-900 text-base md:text-lg hover:text-[#8C6D58] cursor-pointer transition-colors leading-tight focus:outline-none"
                    >
                      {product.name}
                    </h3>
                    <span className="font-mono font-extrabold text-stone-900 text-base">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Brief explanation paragraph */}
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Visual summary of available choices */}
                  <div className="flex items-center gap-3 mb-4 pt-3 border-t border-stone-100 text-[11px] text-stone-400 font-mono">
                    <span className="bg-stone-50 px-1.5 py-0.5 rounded border border-stone-150">Colors: {product.colors.length}</span>
                    <span className="bg-stone-50 px-1.5 py-0.5 rounded border border-stone-150">Sizes: {product.sizes.length}</span>
                  </div>

                </div>

                {/* Primary card action CTA button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleProductQuickView(product)}
                    className="w-full bg-stone-900 hover:bg-[#8C6D58] text-[#FDFCF7] text-xs font-bold py-3 px-4 rounded-xl transition duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-lg"
                  >
                    <span>Select Dressing Choices</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      ) : (
        
        // LIST DISPLAY
        <div id="products-catalog-list" className="space-y-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex flex-col md:flex-row gap-6 text-left"
            >
              
              {/* Visual left image */}
              <div className="w-full md:w-52 aspect-square md:aspect-auto md:h-44 bg-stone-100 rounded-xl overflow-hidden shrink-0 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-[#8C6D58] text-white text-[8px] uppercase tracking-widest px-2 py-0.5 rounded">
                  {product.category}
                </span>
              </div>

              {/* Content right detailing */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3
                      onClick={() => handleProductQuickView(product)}
                      className="font-serif font-black text-stone-900 text-lg md:text-xl hover:text-[#8C6D58] cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>
                    <span className="font-mono font-extrabold text-[#8C6D58] text-lg">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(product.rating) ? 'fill-amber-500' : 'text-stone-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-stone-400 font-mono">({product.reviewsCount} verified reviews)</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-500 max-w-3xl leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Bullet indicators */}
                  <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                    {product.colors.map(color => (
                      <span key={color} className="bg-stone-50 text-stone-600 border border-stone-200 px-2 py-0.5 rounded">
                        {color}
                      </span>
                    ))}
                    <span className="text-stone-300 mx-1">|</span>
                    {product.sizes.map(sz => (
                      <span key={sz} className="text-stone-500 font-semibold">{sz}</span>
                    ))}
                  </div>

                </div>

                {/* Interactive Button tray */}
                <div className="flex gap-3 pt-4 border-t border-stone-100 mt-4">
                  <button
                    onClick={() => handleProductQuickView(product)}
                    className="bg-stone-900 hover:bg-stone-850 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition"
                  >
                    Quick View Details
                  </button>
                  <button
                    onClick={() => handleAddToCart(product, product.sizes[0], product.colors[0], 1)}
                    className="bg-[#8C6D58]/10 hover:bg-[#8C6D58]/20 text-[#8C6D58] text-xs font-bold px-5 py-2.5 rounded-lg transition"
                  >
                    Add with Default Sizing
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
