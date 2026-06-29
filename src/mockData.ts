import { Product, Blog } from './types';

export const productsList: Product[] = [
  {
    id: 'p1',
    name: 'Casual T-Shirt',
    description: 'Comfortable and stylish t-shirts available in multiple colors and sizes. Perfect for your daily casual runs, layering, or lounging in comfort.',
    price: 29.99,
    category: 'men',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
    colors: ['White', 'Slate Grey', 'Olive Green', 'Classic Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: ['100% Organic Cotton', 'Breathable fabric', 'Pre-shrunk regular fit', 'Durable double-stitch seams'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 124,
  },
  {
    id: 'p2',
    name: 'Denim Jacket',
    description: 'Classic and trendy jackets suitable for all seasons. A style statement piece designed to age beautifully and accompany you on every journey.',
    price: 89.99,
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
    colors: ['Indigo Blue', 'Vintage Acid Wash', 'Charcoal Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    features: ['12oz premium heavy cotton denim', 'Classic chest flap pockets', 'Button-adjustable waist/cuffs', 'Comfort-oriented stretch element'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 88,
  },
  {
    id: 'p3',
    name: 'Hoodie & Sweatshirt',
    description: 'Warm and fashionable designs for everyday wear. Lighter weight fleece fabric provides premium thermal isolation with an exceptionally cozy hand-feel.',
    price: 59.99,
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80',
    colors: ['Sage Green', 'Dusty Rose', 'Heather Grey', 'Midnight Onyx'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: ['Ultra-soft brushed fleece lining', 'Double-lined spacious hood', 'Front kangaroo pouch pocket', 'Heavy ribbed cuffs and waistband'],
    inStock: true,
    rating: 4.7,
    reviewsCount: 142,
  },
  {
    id: 'p4',
    name: 'Sneakers',
    description: 'Modern footwear designed for comfort and style. Featuring a modern low-profile styling suited for both lifestyle walks and polished smart-casual coordinates.',
    price: 110.00,
    category: 'footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80',
    colors: ['Minimal White', 'Retro Caramel', 'All Black'],
    sizes: ['8', '9', '10', '11'],
    features: ['Genuine full-grain leather upper', 'Orthotic supportive memory foam insole', 'Slip-resistant natural rubber sole', 'Breathable moisture-wicking linings'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 210,
  },
  {
    id: 'p5',
    name: 'Fashion Accessories',
    description: 'Add character to your look with premium accessories including elegant watches, protective sunglasses, ergonomic bags, and classic caps.',
    price: 45.00,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    colors: ['Gold Accent', 'Classic Black', 'Tortoiseshell'],
    sizes: ['One Size'],
    features: ['UV400 protective sun lenses', 'Splashproof minimalist quartz movement', 'Premium hardware & buckle systems', 'Includes luxury protection box'],
    inStock: true,
    rating: 4.6,
    reviewsCount: 65,
  },
  {
    id: 'p6',
    name: "Women's Dresses",
    description: 'Elegant and trendy dresses styled for every occasion from weekend brunches to sophisticated evening social occasions. Flaunts an effortless flowy drape.',
    price: 79.99,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80',
    colors: ['Crimson Red', 'Emerald Green', 'Classic Black', 'Floral Blush'],
    sizes: ['XS', 'S', 'M', 'L'],
    features: ['Premium breathable rayon fiber', 'Flexible smocked elastic waistline', 'Flattering A-line flowing drape', 'Subtle leg slit detail'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 95,
  },
  {
    id: 'p7',
    name: 'Jeans Collection',
    description: 'Find your perfect custom denim outline. Our premium jeans collection covers slim fit, regular fit, and relaxed utility architectures designed for durable style.',
    price: 69.99,
    category: 'men',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80',
    colors: ['Slate Blue', 'Midnight Navy', 'Eco Stonewashed'],
    sizes: ['30x30', '32x30', '32x32', '34x32'],
    features: ['Premium ring-spun flexible denim cotton', 'Reinforced brass metallic rivets', 'Classic functional five-pocket setup', 'Retains shape after multiple washes'],
    inStock: true,
    rating: 4.7,
    reviewsCount: 112,
  },
  {
    id: 'p8',
    name: 'Activewear Coordinate',
    description: 'High-performance athletic apparel engineered for workouts, running, yoga sessions, or high-energy commutes. Offers non-restrictive elasticity.',
    price: 49.99,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
    colors: ['Burgundy', 'Charcoal Black', 'Ocean Blue'],
    sizes: ['S', 'M', 'L'],
    features: ['Flexible four-way stretch athletic stitch', 'Sweat-wicking moisture ventilation technology', 'Non-chafing flatlock premium seams', 'Concealed phone/key pocket inside waist'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 76,
  }
];

export const blogsList: Blog[] = [
  {
    id: 'b1',
    title: 'Top Fashion Trends of 2026',
    excerpt: 'Discover the newest styles and colors dominating the fashion industry this year, from earthy clays to sleek tech-minimalist outerwear.',
    content: `Fashion in 2026 is all about striking a balance between utility and visual expression. Emerging from the post-athletic era, we are witnessing a substantial turn toward structured layering, custom fabrics, and warm organic palettes.

In colors, deep clay reds, olive sage greens, and neutral ivory shades have overtaken sterile technical grays. Pieces are cut with generous drapes that allow natural motion, honoring user comfort. Layering lightweight oversized casual garments with sharp, premium cropped denim jacket silhouettes remains a staple combination.

Another major shift is the blending of organic cotton knitwear with sleek weatherproofing. Fashion lovers are pairing these breathable layers with high-traction lifestyle sneakers to transition seamlessly from fluid offices to natural treks. To lock in this vibe, try pairing solid pastel t-shirts under structured outerwear with clean-brimmed accessories.`,
    date: 'June 18, 2026',
    readTime: '5 min read',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80',
    likes: 312,
    comments: [
      { id: 'c1', name: 'Aarav Mehta', date: 'June 19, 2026', text: 'Totally agree on the clay and sage palettes! Style Hub is absolutely hitting the sweet spot with their newest collection.' },
      { id: 'c2', name: 'Sophia Lin', date: 'June 20, 2026', text: 'I need that casual denim layering template in my life immediately.' }
    ]
  },
  {
    id: 'b2',
    title: 'How to Build a Minimal Wardrobe',
    excerpt: 'Learn how to create a stylish, functional wardrobe with minimal essential clothing pieces that can form unlimited elegant combinations.',
    content: `Building a capsule wardrobe is not about restriction—it is about curated freedom. By choosing fewer, higher-quality clothing pieces that coordinate harmoniously, you eliminate morning decision fatigue and elevate your signature elegance.

The Rule of Essentials: A complete minimal wardrobe starts with six foundational elements:
1. Two Premium Heavyweight T-shirts: White and Matte Black.
2. One Classic Denim Jacket or Minimal Blazer: For rapid structure.
3. One Cozy Hooded Sweatshirt: Ideal for texture or casual weekends.
4. One Pair of Perfect-Fit Indigo Jeans: Sleek and wearable anywhere.
5. One Pair of Clean, Low-Profile Sneakers: The anchor.
6. One Fluid Dress or Versatile Activewear Layer: Tailored to your active routine.

By selecting garments with simple lines and neutral tones (like charcoal, beige, sand, and cream), every top fits with every bottom. Invest in premium textures—heavyweight cottons and ring-spun weaves hold their form and wash beautifully, costing far less over time than cyclic fast items.`,
    date: 'May 28, 2026',
    readTime: '4 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=80',
    likes: 245,
    comments: [
      { id: 'c3', name: 'Priya Sharma', date: 'May 29, 2026', text: 'This guide changed how I buy clothes. Investing in the white sneakers and raw denim denim jacket from Style Hub first!' }
    ]
  },
  {
    id: 'b3',
    title: 'Best Outfit Ideas for Every Season',
    excerpt: 'Find inspiration for spring, summer, autumn, and winter outfits using versatile pieces that transition effortlessly.',
    content: `Style is a year-round conversation. Mastering weather transitions allows you to look cohesive and comfortable without overhauling your storage container each equinox. Let’s break down the perfect coordinates for every season:

• Spring: The Season of Layering. Combine lightweight activewear pants with a classic denim jacket. Allow a peek of white t-shirt underneath to anchor the chest visual.
• Summer: Airy and Effortless. Opt for the classic organic cotton casual t-shirts paired with lightweight shorts, or choose the breathable, flowing A-line dress in crimson or floral pastel. Finish with comfortable leather sneakers.
• Autumn: Textured Warmth. Shift into hoodies and raw denim jeans. Top with neutral-toned outerwear. Play with color contrasts like pairing a sage green hoody under a stone-washed vest.
• Winter: Structured Insulation. Layer heavy knits, down jackets, and insulated accessories like caps and premium watches. Contrast the heavy top layers with neat slim-fit jeans and solid sneakers to keep the aesthetic clean and nimble.`,
    date: 'April 14, 2026',
    readTime: '6 min read',
    category: 'Inspiration',
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=800&auto=format&fit=crop&q=80',
    likes: 189,
    comments: []
  },
  {
    id: 'b4',
    title: 'Fashion Accessories That Elevate Your Style',
    excerpt: 'Explore accessories like classic watches, minimal sunglasses, caps and bags that can transform your basic looks effortlessly.',
    content: `If clothing is the canvas, accessories are the brushstrokes that define the personality. Often, we feel an outfit is missing something despite having all standard clothing components inline. That missing link is accessories.

A basic combination—such as a clean white t-shirt paired with slim-fit blue jeans—suddenly transitions from a casual chore outfit to an intentional fashion statement with just three subtle accents:
1. A Minimalist Watch: Gold accents or fine leather bands communicate punctual confidence and structured order.
2. Classic Rounded Sunglasses: Instantly shapes the facial framework and adds an air of premium privacy.
3. An Ergonomic Leather Cap or Crossbody Bag: Adds immediate modern utility and breaks up plain vertical lines.

The secret is restriction: limit your statement accessories to two or three per look. Over-adorning creates visual noise. Let one premium piece (like a fine dress watch) acts as the focal anchor, while others act as simple frame elements.`,
    date: 'March 09, 2026',
    readTime: '3 min read',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&auto=format&fit=crop&q=80',
    likes: 156,
    comments: []
  },
  {
    id: 'b5',
    title: 'Tips for Choosing the Perfect Sneakers',
    excerpt: 'A comprehensive, comfortable guide to selecting footwear that satisfies both modern sport ergonomics and casual fashion style.',
    content: `No other item of clothing in a wardrobe takes as much mechanical abuse while bearing as much visual responsibility as your sneakers. Your shoes define your physical energy and anchor your absolute silhouette.

When investing in a premium pair of sneakers, evaluate these key dimensions:
• Insole Cushioning & Arch Support: Look for anatomical support and breathable memory foam inserts. If your feet fatigue in two hours, the aesthetic holds no joy.
• Leather Integrity: Genuine full-grain or high-quality pebble grain leather stands up to rain, is simple to clean with standard solutions, and develops a beautiful natural flexibility.
• Outsole Stitching: Avoid footwear held together solely by adhesives. Stitched outsoles guarantee your soles will not peel during spontaneous sprints.
• Profile Height: Low-profile sneakers with clean cup soles work across the widest catalog of clothes—from professional trousers and tailored suits to activewear shorts.`,
    date: 'Feb 15, 2026',
    readTime: '4 min read',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
    likes: 420,
    comments: [
      { id: 'c4', name: 'Rohan Gupta', date: 'Feb 16, 2026', text: 'Low profile sneakers are truly the ultimate cheat code for semi-casual work days.' }
    ]
  }
];

export const whyChooseUs = [
  {
    id: 'w1',
    title: 'Latest Fashion Trends',
    description: 'We update our inventory weekly so you always have access to the freshest styles and contemporary apparel designs.',
    icon: 'Sparkles',
  },
  {
    id: 'w2',
    title: 'Premium Quality Products',
    description: 'Our products undergo rigorous multi-point validation to ensure they hold their colors, stitches, and textures.',
    icon: 'ShieldCheck',
  },
  {
    id: 'w3',
    title: 'Affordable Prices',
    description: 'We cut the middleman markups to deliver fine high-end fashion directly to your door at sensible, realistic rates.',
    icon: 'Tag',
  },
  {
    id: 'w4',
    title: 'Fast & Secure Delivery',
    description: 'Quick dispatched processing with reliable shipping partners ensuring your parcel arrives fully tracked and safe.',
    icon: 'Truck',
  },
  {
    id: 'w5',
    title: 'Customer Satisfaction',
    description: 'We handle your needs promptly with a 30-day hassle-free return window and 24/7 client response desk.',
    icon: 'SmileCheck',
  }
];

export const categoriesMeta = [
  { id: 'all', name: 'All Products', count: 8, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80' },
  { id: 'men', name: "Men's Fashion", count: 2, image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop&q=80' },
  { id: 'women', name: "Women's Fashion", count: 2, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80' },
  { id: 'accessories', name: 'Accessories', count: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80' },
  { id: 'footwear', name: 'Footwear', count: 1, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80' },
  { id: 'seasonal', name: 'Seasonal Collections', count: 2, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80' }
];
