import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  ShoppingCart,
  Menu,
  X,
  Star,
  ArrowRight,
  MessageSquare,
  ThumbsUp,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Tag,
  Truck,
  Plus,
  Minus,
  Trash2
} from 'lucide-react';
import { Product, Blog, BlogComment } from './types';
import { blogsList, whyChooseUs } from './mockData';

// Import our standalone pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BlogPage from './pages/Blog';
import Contact from './pages/Contact';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation & View States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Global Interactive Product States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalSize, setModalSize] = useState<string>('');
  const [modalColor, setModalColor] = useState<string>('');

  // Cart Management States
  const [cart, setCart] = useState<{
    id: string; // unique cart item id (product.id + size + color)
    product: Product;
    quantity: number;
    selectedSize: string;
    selectedColor: string;
  }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [generatedOrderId, setGeneratedOrderId] = useState('');

  // Blog dynamic state (to handle client side Likes and Comments)
  const [blogs, setBlogs] = useState<Blog[]>(blogsList);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');

  // Promotion Alert and Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ hrs: 12, mins: 45, secs: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) {
          return { ...prev, secs: prev.secs - 1 };
        } else if (prev.mins > 0) {
          return { ...prev, mins: prev.mins - 1, secs: 59 };
        } else if (prev.hrs > 0) {
          return { hrs: prev.hrs - 1, mins: 59, secs: 59 };
        } else {
          return { hrs: 12, mins: 0, secs: 0 }; // Loop
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close mobile navigation when switching pages
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Total Quantity computed
  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  // Cart pricing calculation
  const cartPrices = useMemo(() => {
    const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const shipping = subtotal > 100 || subtotal === 0 ? 0 : 5.99;
    const tax = subtotal * 0.08; // 8% sales tax
    const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total };
  }, [cart]);

  // Action methods
  const handleAddToCart = (product: Product, size: string, color: string, qtyValue: number = 1) => {
    const chosenSize = size || product.sizes[0] || 'M';
    const chosenColor = color || product.colors[0] || 'Default';
    const cartItemId = `${product.id}-${chosenSize}-${chosenColor}`;

    setCart(prev => {
      const existingIdx = prev.findIndex(item => item.id === cartItemId);
      if (existingIdx > -1) {
        const itemCopy = [...prev];
        itemCopy[existingIdx].quantity += qtyValue;
        return itemCopy;
      } else {
        return [
          ...prev,
          {
            id: cartItemId,
            product,
            quantity: qtyValue,
            selectedSize: chosenSize,
            selectedColor: chosenColor
          }
        ];
      }
    });

    // Notify user inline or flash drawer
    setIsCartOpen(true);
    // Auto reset selection fields
    setModalSize('');
    setModalColor('');
  };

  const handleUpdateCartQty = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const nextQty = item.quantity + delta;
          return { ...item, quantity: nextQty > 0 ? nextQty : 1 };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleProductQuickView = (product: Product) => {
    setSelectedProduct(product);
    setModalSize(product.sizes[0]);
    setModalColor(product.colors[0]);
  };

  // Blog Interactions
  const handleLikeBlog = (blogId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setBlogs(prev =>
      prev.map(b => (b.id === blogId ? { ...b, likes: b.likes + 1 } : b))
    );
    if (selectedBlog && selectedBlog.id === blogId) {
      setSelectedBlog(prev => prev ? { ...prev, likes: prev.likes + 1 } : null);
    }
  };

  const handleAddComment = (e: React.FormEvent, blogId: string) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const newComment: BlogComment = {
      id: `comment-${Date.now()}`,
      name: commentName.trim(),
      date: 'Just now',
      text: commentText.trim()
    };

    setBlogs(prev =>
      prev.map(b => {
        if (b.id === blogId) {
          return {
            ...b,
            comments: [newComment, ...b.comments]
          };
        }
        return b;
      })
    );

    // Update the chosen detail modal in real-time
    if (selectedBlog && selectedBlog.id === blogId) {
      setSelectedBlog(prev => prev ? { ...prev, comments: [newComment, ...prev.comments] } : null);
    }

    setCommentName('');
    setCommentText('');
  };

  // Simulated Checkout Execution
  const handleCheckoutSubmit = () => {
    if (cart.length === 0) return;
    const randomOrderId = `STH-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedOrderId(randomOrderId);
    setOrderSuccess(true);
    setCart([]); // Reset Cart
  };

  // Helper for identifying active state in navbar
  const isTabActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FDFCF7] text-stone-800 antialiased selection:bg-[#8C6D58] selection:text-white">
      
      {/* Promotion bar */}
      <div className="bg-stone-955 bg-stone-900 text-[#FDFCF7] text-xs py-2 px-4 flex justify-between items-center tracking-wide font-medium">
        <div className="flex items-center gap-2">
          <span className="bg-[#8C6D58] text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">Special Offer</span>
          <span>Get Free Express Delivery on orders over $100!</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>Hurry Up! Offer ends in</span>
          <span className="font-mono bg-stone-800 text-[#D97706] font-bold px-2 py-0.5 rounded leading-none text-center">
            {timeLeft.hrs.toString().padStart(2, '0')}:{timeLeft.mins.toString().padStart(2, '0')}:{timeLeft.secs.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Main Header navigation */}
      <header id="header-bar" className="sticky top-0 z-30 bg-[#FDFCF7]/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo and store title */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="bg-[#8C6D58] text-white p-2.5 rounded-full shadow-sm">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-serif font-bold tracking-tight text-stone-900 block">Style Hub</span>
                <span className="text-[10px] tracking-[0.2em] font-mono text-stone-500 uppercase block -mt-1">Modern Wardrobe</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden md:flex items-center space-x-8 text-[15px] font-medium tracking-wide">
              <Link
                to="/"
                className={`py-2 transition px-1 relative ${isTabActive('/') ? 'text-[#8C6D58] font-bold' : 'text-stone-600 hover:text-stone-900'}`}
              >
                Home
                {isTabActive('/') && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8C6D58] rounded-full" />}
              </Link>
              
              <Link
                to="/services"
                className={`py-2 transition px-1 relative ${isTabActive('/services') ? 'text-[#8C6D58] font-bold' : 'text-stone-600 hover:text-stone-900'}`}
              >
                Our Services & Products
                {isTabActive('/services') && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8C6D58] rounded-full" />}
              </Link>

              <Link
                to="/blog"
                className={`py-2 transition px-1 relative ${isTabActive('/blog') ? 'text-[#8C6D58] font-bold' : 'text-stone-600 hover:text-stone-900'}`}
              >
                Fashion Blog
                {isTabActive('/blog') && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8C6D58] rounded-full" />}
              </Link>

              <Link
                to="/about"
                className={`py-2 transition px-1 relative ${isTabActive('/about') ? 'text-[#8C6D58] font-bold' : 'text-stone-600 hover:text-stone-900'}`}
              >
                About Us
                {isTabActive('/about') && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8C6D58] rounded-full" />}
              </Link>

              <Link
                to="/contact"
                className={`py-2 transition px-1 relative ${isTabActive('/contact') ? 'text-[#8C6D58] font-bold' : 'text-stone-600 hover:text-stone-900'}`}
              >
                Contact Us
                {isTabActive('/contact') && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8C6D58] rounded-full" />}
              </Link>
            </nav>

            {/* Shopping Cart button & Mobile menu toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-stone-100 hover:bg-stone-200 text-stone-900 p-3 rounded-full transition duration-300 group flex items-center justify-center cursor-pointer"
                aria-label="View Shopping Cart"
              >
                <ShoppingCart className="h-5 w-5 group-hover:scale-105 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-[#FDFCF7] animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-700 hover:text-stone-900 bg-stone-100 rounded-lg cursor-pointer animate-fadeIn"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation overlay */}
        {mobileMenuOpen && (
          <div id="mobile-nav-panel" className="md:hidden bg-[#FDFCF7] border-b border-stone-200 py-4 px-6 animate-fadeIn text-left">
            <div className="flex flex-col space-y-4 font-medium tracking-wide">
              <Link
                to="/"
                className={`py-2 border-b border-stone-100 block ${isTabActive('/') ? 'text-[#8C6D58] font-bold pl-2' : 'text-stone-600 pl-0'}`}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`py-2 border-b border-stone-100 block ${isTabActive('/services') ? 'text-[#8C6D58] font-bold pl-2' : 'text-stone-600 pl-0'}`}
              >
                Our Services & Products
              </Link>
              <Link
                to="/blog"
                className={`py-2 border-b border-stone-100 block ${isTabActive('/blog') ? 'text-[#8C6D58] font-bold pl-2' : 'text-stone-600 pl-0'}`}
              >
                Fashion Blog
              </Link>
              <Link
                to="/about"
                className={`py-2 border-b border-stone-100 block ${isTabActive('/about') ? 'text-[#8C6D58] font-bold pl-2' : 'text-stone-600 pl-0'}`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`py-2 block ${isTabActive('/contact') ? 'text-[#8C6D58] font-bold pl-2' : 'text-stone-600 pl-0'}`}
              >
                Contact Us
              </Link>
              
              <div className="pt-2">
                <span className="text-xs text-stone-400 font-mono italic">Style Hub Mobile Portal</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Container Router Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/services" 
            element={
              <Services 
                handleProductQuickView={handleProductQuickView} 
                handleAddToCart={handleAddToCart} 
              />
            } 
          />
          <Route 
            path="/blog" 
            element={
              <BlogPage 
                blogs={blogs} 
                handleLikeBlog={handleLikeBlog} 
                setSelectedBlog={setSelectedBlog} 
              />
            } 
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* ==================== BOTTOM FOOTER BRANDING ==================== */}
      <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Column 1: Store Intro branding */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#8C6D58] text-white p-2 rounded-full">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <span className="text-xl font-serif font-black text-white">Style Hub</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
                Trendy fashion and stylish accessories designed with high-quality components. Redefining modern confidence since 2026.
              </p>
              
              <div className="pt-2 text-xs text-stone-500">
                <p>Address: 125 Fashion Avenue, New Delhi, India</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </div>

            {/* Column 2: Quick navigation */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-sm uppercase font-mono tracking-wider text-white font-bold">Navigation</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link to="/" className="hover:text-white transition">Home Page</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition">Our Services</Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white transition">Fashion Blog</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition">About Us Story</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">Get in Touch</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Category quick focuses */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm uppercase font-mono tracking-wider text-white font-bold">Categories</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link to="/services?category=men" className="hover:text-white transition">Men's Fashion Essentials</Link>
                </li>
                <li>
                  <Link to="/services?category=women" className="hover:text-white transition">Women's Elite Apparel</Link>
                </li>
                <li>
                  <Link to="/services?category=accessories" className="hover:text-white transition">Contemporary Accessories</Link>
                </li>
                <li>
                  <Link to="/services?category=footwear" className="hover:text-white transition">Ergonomic Footwear</Link>
                </li>
                <li>
                  <Link to="/services?category=seasonal" className="hover:text-white transition">Seasonal Warm Coordinates</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Customer service standards */}
            <div className="lg:col-span-3 space-y-4 text-xs font-mono">
              <h4 className="text-sm uppercase tracking-wider text-white font-bold font-sans">Official Verification</h4>
              <p className="text-stone-400 font-sans leading-relaxed">We provide a 30-day wear trial on sneakers and jackets. If the seam compromises or size fits uncomfortable, we pick it up clean.</p>
              <div className="p-3 bg-stone-900 text-stone-300 rounded-xl space-y-1 block font-mono text-[10px]">
                <div className="text-[#8C6D58] font-bold">SUPPORT CONFIDENCE</div>
                <div>Live Support Mon-Sat</div>
                <div>Email: info@stylehub.com</div>
              </div>
            </div>

          </div>

          {/* Social icons row and legal copyright info */}
          <div className="pt-12 mt-12 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-500">
            <p className="font-serif italic font-medium">Style Hub &copy; 2026. Made for clothes Lovers.</p>
            
            <div className="flex gap-4">
              <span className="hover:text-stone-300 cursor-pointer">Privacy Statement</span>
              <span>&#124;</span>
              <span className="hover:text-stone-300 cursor-pointer">Sizing Terms</span>
              <span>&#124;</span>
              <span className="hover:text-stone-300 cursor-pointer">Secure checkout</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ==================== SHOPPING CART DRAWER (interactive overlay) ==================== */}
      {isCartOpen && (
        <div id="cart-drawer-backdrop" className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          <div className="absolute inset-0 overflow-hidden bg-stone-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-4 sm:pl-10">
            <div className="pointer-events-auto w-screen max-w-md bg-[#FDFCF7] shadow-2xl flex flex-col animate-slideLeft border-l border-stone-200">
              
              {/* Header inside cart */}
              <div className="px-5 py-6 bg-stone-950 text-[#FDFCF7] flex justify-between items-center h-20">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-amber-500" />
                  <h2 className="text-lg font-serif font-bold text-white tracking-tight" id="slide-over-title">Your Style Hub Bag</h2>
                </div>
                <button
                  type="button"
                  className="bg-stone-850 text-stone-300 hover:text-white p-1 rounded-full border border-stone-700 transition cursor-pointer"
                  onClick={() => setIsCartOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body containing items */}
              <div className="flex-1 overflow-y-auto px-5 py-6 text-left">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col justify-center items-center text-center py-20">
                    <div className="bg-stone-100 p-6 rounded-full inline-block mb-3">
                      <ShoppingBag className="h-10 w-10 text-stone-300" />
                    </div>
                    <h3 className="font-serif font-black text-stone-900 text-lg">Your Bag is Empty</h3>
                    <p className="text-stone-500 text-xs mt-2 max-w-xs leading-relaxed">Choose some exquisite dresses, casual t-shirts, or denim jackets to express your absolute confidence!</p>
                    
                    <button
                      onClick={() => { setIsCartOpen(false); navigate('/services'); }}
                      className="mt-6 bg-[#8C6D58] hover:bg-[#725744] text-white font-bold text-xs py-3 px-5 rounded-xl transition shadow-sm uppercase tracking-wider cursor-pointer"
                    >
                      Browse Apparels now
                    </button>
                  </div>
                ) : (
                  <div>
                    {/* Item count status warning */}
                    <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-3 mb-6 text-amber-900 text-xs flex justify-between items-center font-mono font-medium">
                      <span>Items count: {cartCount} units</span>
                      {cartPrices.subtotal < 100 ? (
                        <span>Add <strong className="text-amber-950">${(100 - cartPrices.subtotal).toFixed(2)}</strong> for free shipping!</span>
                      ) : (
                        <span className="text-teal-850 font-bold flex items-center gap-1">🎉 Free express delivery applied!</span>
                      )}
                    </div>

                    <div className="space-y-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 pb-6 border-b border-stone-200">
                          
                          {/* Image box */}
                          <div className="h-20 w-16 bg-stone-100 rounded-lg overflow-hidden shrink-0">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="h-full w-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          {/* Detail item */}
                          <div className="flex-grow">
                            <div className="flex justify-between items-start gap-1">
                              <h4 className="font-serif font-bold text-stone-900 text-[14px] leading-tight">{item.product.name}</h4>
                              <span className="font-mono text-stone-905 font-bold text-[14px]">${(item.product.price * item.quantity).toFixed(2)}</span>
                            </div>
                            
                            {/* Color size indicators */}
                            <div className="flex gap-2 text-[10px] uppercase font-mono text-stone-500 font-semibold mt-1">
                              <span className="bg-stone-105 px-1.5 py-0.5 rounded">Size: {item.selectedSize}</span>
                              <span className="bg-stone-105 px-1.5 py-0.5 rounded">Color: {item.selectedColor}</span>
                            </div>

                            {/* Qty increment controls */}
                            <div className="flex justify-between items-center mt-3 pt-2">
                              <div className="flex items-center border border-stone-200 rounded-lg">
                                <button
                                  onClick={() => handleUpdateCartQty(item.id, -1)}
                                  className="p-1 text-stone-500 hover:text-stone-900 bg-stone-50 cursor-pointer"
                                >
                                  <Minus className="h-3.5 w-3.5" />
                                </button>
                                <span className="px-3 text-xs font-mono font-bold text-stone-800">{item.quantity}</span>
                                <button
                                  onClick={() => handleUpdateCartQty(item.id, 1)}
                                  className="p-1 text-stone-500 hover:text-stone-900 bg-stone-50 cursor-pointer"
                                >
                                  <Plus className="h-3.5 w-3.5" />
                                </button>
                              </div>
                              
                              <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="text-stone-400 hover:text-rose-600 transition cursor-pointer"
                                title="Remove item"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>

                          </div>

                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Checkout Calculation summary */}
              {cart.length > 0 && (
                <div className="px-5 py-6 bg-stone-50 border-t border-stone-200 text-left space-y-4">
                  <div className="space-y-2 text-xs font-mono font-normal">
                    <div className="flex justify-between text-stone-505">
                      <span>Cart Subtotal</span>
                      <span className="font-extrabold text-[#8C6D58]">${cartPrices.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-stone-505">
                      <span>Shipping Delivery</span>
                      {cartPrices.shipping === 0 ? (
                        <span className="text-teal-700 font-bold">FREE</span>
                      ) : (
                        <span className="font-extrabold text-[#8C6D58]">${cartPrices.shipping.toFixed(2)}</span>
                      )}
                    </div>
                    <div className="flex justify-between text-stone-505">
                      <span>Estimated Sales Tax (8%)</span>
                      <span className="font-extrabold text-[#8C6D58]">${cartPrices.tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="h-[1px] bg-stone-200 my-2"></div>
                    
                    <div className="flex justify-between text-sm text-stone-900 font-sans font-black">
                      <span>Grand Total</span>
                      <span className="font-mono text-lg text-stone-950">${cartPrices.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleCheckoutSubmit}
                      className="w-full bg-stone-950 hover:bg-[#8C6D58] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition duration-300 shadow-lg cursor-pointer text-center"
                    >
                      Propose Order Checkout
                    </button>
                    <p className="text-[10px] text-stone-400 text-center mt-2.5 font-mono font-medium">Standard SSL Secure encryption processing.</p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ==================== ORDER COMPLETE SIMULATION CELEBRATION MODAL ==================== */}
      {orderSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-2xl max-w-md w-full text-center relative overflow-hidden">
            
            {/* Celebrate circles */}
            <div className="mx-auto bg-teal-50 text-teal-600 h-16 w-16 rounded-full flex items-center justify-center mb-6 animate-pulse scale-110">
              <CheckCircle className="h-10 w-10 text-teal-600" />
            </div>

            <h3 className="font-serif font-black text-2xl text-stone-900">Style Connection Secured!</h3>
            <p className="text-sm font-semibold text-[#8C6D58] mt-2 font-mono font-bold">Order ID: {generatedOrderId}</p>
            
            <p className="text-xs text-stone-500 mt-4 leading-relaxed bg-[#FAF9F5] p-5 rounded-2xl border border-stone-150-100 font-medium">
              Congratulations! Your simulated Style Hub checkout completes successfully. Our sorting warehouse in New Delhi is preparing your high-fashion coordinates for immediate transit. 
              <br />
              <strong className="block text-stone-800 mt-2 font-bold">Estimated delivery: {new Date(Date.now() + 3*24*60*60*1000).toDateString()}</strong>
            </p>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => { setOrderSuccess(false); navigate('/services'); }}
                className="w-full bg-[#8C6D58] hover:bg-[#725744] text-white font-bold text-xs py-3 rounded-xl transition uppercase tracking-wider cursor-pointer"
              >
                Continue Closet Shopping
              </button>
              
              <button
                onClick={() => { setOrderSuccess(false); navigate('/'); }}
                className="w-full bg-transparent hover:bg-stone-50 text-stone-605 text-xs font-bold py-3 border border-stone-250 rounded-xl transition cursor-pointer"
              >
                Back to Home Screen
              </button>
            </div>

            <p className="text-[10px] text-stone-400 font-mono mt-4 font-medium">Simulation response engine validated.</p>
          </div>
        </div>
      )}

      {/* ==================== PRODUCT DRESSING CABINET MODAL (Quick View) ==================== */}
      {selectedProduct && (
        <div id="product-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn" role="dialog" aria-modal="true">
          <div className="absolute inset-0" onClick={() => setSelectedProduct(null)}></div>
          
          <div className="bg-[#FDFCF7] rounded-3xl border border-stone-200 shadow-2xl max-w-4xl w-full text-left relative overflow-hidden animate-slideUp z-10 flex flex-col md:flex-row">
            
            {/* Left Image visual */}
            <div className="md:w-1/2 aspect-square md:aspect-auto bg-stone-100 relative max-h-[480px]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              <span className="absolute top-4 left-4 bg-stone-955 bg-stone-900 text-white text-[10px] uppercase font-mono tracking-widest font-bold px-3 py-1 rounded-md">
                {selectedProduct.category}
              </span>
            </div>

            {/* Close modal button absolutely positioned */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-stone-900 hover:bg-stone-850 text-white p-2 rounded-full shadow border border-stone-800 transition z-20 cursor-pointer"
              aria-label="Close details"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Right Information detail panel */}
            <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between max-h-[480px] overflow-y-auto">
              <div>
                
                {/* Title badge & pricing */}
                <div>
                  <h3 className="font-serif font-black text-stone-900 text-2xl leading-tight mb-1">{selectedProduct.name}</h3>
                  <div className="flex items-baseline justify-between mt-2 pb-3 border-b border-stone-200">
                    <span className="font-serif text-[#8C6D58] text-xl font-bold font-serif">${selectedProduct.price.toFixed(2)}</span>
                    <span className="text-[10px] uppercase font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                      {selectedProduct.inStock ? 'In Stock (Ready)' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                {/* Stars metrics */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < Math.floor(selectedProduct.rating) ? 'fill-amber-500' : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-stone-500 font-mono font-medium">({selectedProduct.rating} / {selectedProduct.reviewsCount} reviews)</span>
                </div>

                {/* Description wording parsed from user inputs */}
                <p className="text-xs text-stone-500 mt-4 leading-relaxed font-medium">
                  {selectedProduct.description}
                </p>

                {/* INTERACTIVE COLOR PICKER */}
                <div className="mt-5 space-y-2 text-left">
                  <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-stone-400 block font-bold">
                    Choose Closet Hue: <span className="text-stone-900 font-bold">{modalColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProduct.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setModalColor(color)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition border cursor-pointer ${
                          modalColor === color
                            ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* INTERACTIVE SIZE SELECTOR */}
                <div className="mt-5 space-y-2 text-left">
                  <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-stone-400 block font-bold">
                    Choose Fitted Size: <span className="text-stone-900 font-bold">{modalSize}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setModalSize(size)}
                        className={`h-9 min-w-[36px] px-2.5 rounded-lg text-xs font-mono font-bold transition border cursor-pointer ${
                          modalSize === size
                            ? 'bg-[#8C6D58] text-white border-[#8C6D58] shadow-sm font-bold'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bullet details */}
                <div className="mt-5 space-y-1.5 bg-[#FAF8F4] p-4 rounded-xl border border-stone-205 text-left">
                  <span className="text-[9px] uppercase font-mono tracking-wider font-bold text-stone-400 block mb-1 font-bold">Specifications</span>
                  {selectedProduct.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-600 text-xs">
                      <CheckCircle className="h-3 w-3 text-emerald-600 shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action layout */}
              <div className="pt-6 mt-6 border-t border-stone-200">
                <button
                  onClick={() => {
                    handleAddToCart(selectedProduct, modalSize, modalColor, 1);
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-[#8C6D58] hover:bg-[#725744] text-white font-bold py-3 px-4 rounded-xl transition duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-md cursor-pointer"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Secure Choice to Cart</span>
                </button>
                <p className="text-[10px] text-stone-400 font-mono text-center mt-2 font-medium">Hassle-free 30-day trial pickup in place.</p>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ==================== FULL ARTICLE DISCUSSION MODAL (Blog Detail) ==================== */}
      {selectedBlog && (
        <div id="blog-reading-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm overflow-y-auto animate-fadeInByFade font-sans" role="dialog" aria-modal="true">
          <div className="absolute inset-0" onClick={() => setSelectedBlog(null)}></div>

          <div className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-3xl w-full text-left relative overflow-hidden animate-slideUp z-10 my-8">
            
            {/* Header image overlay with title */}
            <div className="relative h-64 bg-stone-950 overflow-hidden">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover brightness-75"
                referrerPolicy="no-referrer"
              />
              
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 bg-stone-900/80 hover:bg-stone-900/100 text-white p-2.5 rounded-full border border-white/20 transition z-20 cursor-pointer"
                aria-label="Close reading panel"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white text-left z-10">
                <span className="bg-[#8C6D58] text-white text-[9px] uppercase tracking-widest font-mono font-bold px-2 py-0.5 rounded">
                  {selectedBlog.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-white mt-2 leading-tight drop-shadow">
                  {selectedBlog.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
            </div>

            {/* Article Text Content */}
            <div className="p-6 sm:p-8 max-h-[480px] overflow-y-auto space-y-6">
              
              {/* Meta information indicators */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4 text-xs font-mono text-stone-500 font-medium">
                <div className="flex items-center gap-2 text-left">
                  <span>Published: <strong>{selectedBlog.date}</strong></span>
                  <span>&#183;</span>
                  <span>Est: <strong>{selectedBlog.readTime}</strong></span>
                </div>

                <button
                  onClick={(e) => handleLikeBlog(selectedBlog.id, e)}
                  className="bg-amber-50 hover:bg-amber-100 text-[#8C6D58] px-3.5 py-1.5 rounded-xl flex items-center gap-2 font-black transition active:scale-95 cursor-pointer border border-amber-250/50"
                >
                  <ThumbsUp className="h-4 w-4 fill-[#8C6D58]/10 text-[#8C6D58]" />
                  <span>Like Article ({selectedBlog.likes})</span>
                </button>
              </div>

              {/* Main reading content paragraphs */}
              <div className="text-stone-700 text-sm leading-relaxed whitespace-pre-wrap space-y-4 font-serif italic text-left p-4 bg-stone-50 rounded-2xl border border-stone-150 shadow-inner">
                {selectedBlog.content}
              </div>

              {/* Comments Thread Center */}
              <div className="pt-6 border-t border-stone-200 text-left space-y-6">
                
                <h4 className="font-serif font-black text-stone-900 text-lg flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#8C6D58]" />
                  <span>Discussion Conversation ({selectedBlog.comments.length})</span>
                </h4>

                {/* Append Comment Form */}
                <form onSubmit={(e) => handleAddComment(e, selectedBlog.id)} className="bg-[#FAF8F4] p-4 rounded-2xl border border-stone-200/60 transition space-y-3">
                  <span className="text-[9px] uppercase font-mono tracking-wider font-bold text-stone-400 block font-bold">Leave a comment</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={commentName}
                      onChange={(e) => setCommentName(e.target.value)}
                      className="bg-white border border-stone-300 focus:border-[#8C6D58] rounded-xl px-3 py-2 text-xs font-medium w-full outline-none font-sans"
                    />
                    <div className="text-[10px] text-stone-400 font-mono flex items-center italic">Comments will append instantly.</div>
                  </div>

                  <textarea
                    required
                    rows={2}
                    placeholder="We love constructive feedback..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="bg-white border border-stone-300 focus:border-[#8C6D58] rounded-xl px-3 py-2 text-xs font-medium w-full outline-none resize-none font-sans"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-stone-900 hover:bg-stone-850 text-white font-bold text-xs px-4 py-2 rounded-xl transition cursor-pointer font-sans"
                  >
                    Post Comment
                  </button>
                </form>

                {/* Submissions loop list */}
                <div className="space-y-4">
                  {selectedBlog.comments.length === 0 ? (
                    <p className="text-stone-400 text-xs italic text-center py-4">No comments posted yet. Be the first to start the thread!</p>
                  ) : (
                    selectedBlog.comments.map((comment) => (
                      <div key={comment.id} className="bg-stone-50/50 p-4 rounded-2xl border border-stone-150 flex gap-3 text-xs leading-relaxed text-left font-sans">
                        <div className="bg-[#8C6D58]/10 text-[#8C6D58] font-bold h-8 w-8 rounded-full shrink-0 flex items-center justify-center font-mono text-[10px]">
                          {comment.name.slice(0,1).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-bold text-stone-900">{comment.name}</span>
                            <span className="text-[10px] text-stone-400 font-mono">{comment.date}</span>
                          </div>
                          <p className="mt-1 text-stone-600 font-medium">{comment.text}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

              </div>

            </div>

            {/* Bottom action wrapper */}
            <div className="bg-stone-50 px-6 py-4 border-t border-stone-150 flex justify-between items-center text-xs font-sans font-medium">
              <span className="text-stone-400 font-mono">Style Hub Publishing Section</span>
              <button
                onClick={() => setSelectedBlog(null)}
                className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-4 py-2 rounded-xl transition cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
