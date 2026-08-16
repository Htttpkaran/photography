import React, { useState } from 'react';
import { ShoppingBag, Tag, Check, Sparkles, X, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'All',
  'Canvas & Frames',
  'Photobooks',
  'Presets & LUTs',
  'Gift Vouchers',
];

const products = [
  {
    id: 'prod-1',
    name: 'Handcrafted Teak Frame Print',
    category: 'Canvas & Frames',
    price: '₹1,499',
    originalPrice: '₹1,999',
    tag: 'Bestseller',
    image: '/Gallery/wedding/01.webp',
    description: 'Ultra-HD photo print mounted inside a hand-finished solid teak wood frame with anti-reflective glass.',
    specs: ['12x18 inch size', 'Matte Silk paper 300 GSM', 'Teak wood border', 'Wall hook attached']
  },
  {
    id: 'prod-2',
    name: 'Frameless Acrylic Desk Print',
    category: 'Canvas & Frames',
    price: '₹2,299',
    originalPrice: '₹2,999',
    tag: 'Modern',
    image: '/Gallery/pre wedding/DSC_5041 copy.webp',
    description: 'High-gloss acrylic glass photo panel with depth and vivid colors. Comes with solid aluminum stand legs.',
    specs: ['8x12 inch size', '5mm clear acrylic sheet', 'UV fade-proof ink', 'Includes metal stand']
  },
  {
    id: 'prod-3',
    name: 'Royal Velvet Layflat Photobook',
    category: 'Photobooks',
    price: '₹8,500',
    originalPrice: '₹10,500',
    tag: 'Premium',
    image: '/Gallery/wedding/02.webp',
    description: '40-page flush mount luxury album bound in soft velvet cloth with custom gold foil embossing.',
    specs: ['12x36 spread layout', '40 thick layflat pages', 'Custom gold embossing', 'Velvet storage box']
  },
  {
    id: 'prod-4',
    name: 'Golden Glow Lightroom Presets',
    category: 'Presets & LUTs',
    price: '₹499',
    originalPrice: '₹999',
    tag: 'Digital Pack',
    image: '/Gallery/pre wedding/1a.webp',
    description: '12 signature warm gold Lightroom color presets created specifically for Bengali wedding and outdoor portrait tones.',
    specs: ['Desktop & Mobile compatible', 'Includes DNG & XMP files', 'Instant digital delivery', '1-Click color grading']
  },
  {
    id: 'prod-5',
    name: 'Cinematic Wedding LUTs Pack',
    category: 'Presets & LUTs',
    price: '₹799',
    originalPrice: '₹1,499',
    tag: 'Video LUTs',
    image: '/services/Cinematic.jpg',
    description: '8 Cinematic video color grading LUTs for Premiere Pro, DaVinci Resolve, Final Cut Pro & CapCut.',
    specs: ['.cube format LUTs', 'Optimized for Sony S-Log & Flat profiles', 'Skin-tone preservation', 'Installation guide']
  },
  {
    id: 'prod-6',
    name: 'Pre-Wedding Saver Voucher',
    category: 'Gift Vouchers',
    price: '₹1,200',
    originalPrice: '₹2,000 Value',
    tag: 'Gift Voucher',
    image: '/Gallery/pre wedding/2.webp',
    description: 'Gift or save ₹2,000 on any full Pre-Wedding photography package booked with Golden Moments Photography Studio.',
    specs: ['Valid for 1 year from purchase', 'Transferable to friends & family', 'Digital voucher card with custom code']
  },
  {
    id: 'prod-7',
    name: 'Gallery Wrapped Canvas (24x36)',
    category: 'Canvas & Frames',
    price: '₹3,999',
    originalPrice: '₹4,999',
    tag: 'Wall Decor',
    image: '/Gallery/wedding/03.webp',
    description: 'Large museum-grade cotton canvas stretched over 1.5-inch wooden gallery bars. Vibrant colors and textured feel.',
    specs: ['24x36 inch canvas', 'Waterproof coating', 'Ready to hang', '10-Year color guarantee']
  },
  {
    id: 'prod-8',
    name: 'Maternity & Newborn Gift Card',
    category: 'Gift Vouchers',
    price: '₹3,500',
    originalPrice: '₹4,500 Value',
    tag: 'Gift Voucher',
    image: '/Gallery/baby shower/01.webp',
    description: 'Special gift card covering a complete 2-hour Maternity or Rice Ceremony session with 15 retouched prints.',
    specs: ['Includes studio session', '15 printed 5x7 photos', 'Digital gallery link', 'Valid for 6 months']
  }
];

export default function Shopping() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProduct, setActiveModalProduct] = useState(null); // Desktop modal
  const [expandedProductId, setExpandedProductId] = useState(null); // Mobile inline expand

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const handleWhatsAppOrder = (product) => {
    const text = `Hi Golden Moments Photography! I would like to order/inquire about: *${product.name}* (${product.price}). Please let me know how to proceed.`;
    const url = `https://wa.me/919046412124?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleDetailsClick = (product) => {
    if (window.innerWidth < 768) {
      // Mobile: Inline card expansion
      setExpandedProductId((prev) => (prev === product.id ? null : product.id));
    } else {
      // Desktop: Modal popup
      setActiveModalProduct(product);
    }
  };

  return (
    <section 
      id="shopping" 
      className="py-20 md:py-28 scroll-mt-20 md:scroll-mt-24 bg-paper px-6 md:px-16 lg:px-20 w-full mx-auto border-t border-accent/15"
    >
      <div className="text-center mb-12 max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-accent flex items-center justify-center gap-2">
          <ShoppingBag className="w-4 h-4" /> Golden Store
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-ink">
          Prints, Albums &amp; <span className="italic text-gold-shimmer font-normal">Presets</span>
        </h2>
        <p className="font-sans text-stone text-xs sm:text-sm tracking-wide font-light leading-relaxed max-w-xl mx-auto">
          Preserve your golden memories with luxury canvas frames, custom photo albums, color LUTs, and gift vouchers.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setExpandedProductId(null);
            }}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-medium ${
              selectedCategory === cat
                ? 'bg-accent text-paper shadow-md shadow-accent/25 border border-accent'
                : 'bg-paper/80 border border-line text-stone hover:border-accent/50 hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start"
        >
          {filteredProducts.map((product) => {
            const isExpanded = expandedProductId === product.id;

            return (
              <div
                key={product.id}
                className={`group flex flex-col justify-between rounded-2xl border bg-paper/60 p-4 shadow-md transition-all duration-300 ${
                  isExpanded ? 'border-accent shadow-xl bg-paper/90 ring-1 ring-accent/30' : 'border-line/80 hover:border-accent/50 hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Product Image */}
                  <div 
                    className="relative aspect-square w-full overflow-hidden rounded-xl bg-line mb-4 cursor-pointer"
                    onClick={() => handleDetailsClick(product)}
                  >
                    <img
                      src={encodeURI(product.image)}
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = '/services/Wedding.jpg';
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.tag && (
                      <span className="absolute top-3 left-3 rounded-md bg-accent/90 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase font-semibold tracking-wider text-paper shadow-sm">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* Category & Title */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                    {product.category}
                  </span>
                  <h3 
                    className="font-serif text-lg font-medium text-ink mt-1 group-hover:text-accent transition-colors cursor-pointer"
                    onClick={() => handleDetailsClick(product)}
                  >
                    {product.name}
                  </h3>

                  {/* Description (short if not expanded) */}
                  {!isExpanded && (
                    <p className="text-xs text-stone font-light line-clamp-2 mt-1.5 leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  {/* Inline Expanded Details (Mobile view) */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-line/60 space-y-3 text-left md:hidden"
                    >
                      <p className="text-xs text-stone font-light leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-1.5 pt-1">
                        <p className="text-[10px] uppercase tracking-widest text-stone font-semibold">
                          Highlights &amp; Specs:
                        </p>
                        {product.specs.map((spec, i) => (
                          <div key={i} className="text-xs text-ink/90 flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Price & Actions */}
                <div className="mt-5 pt-4 border-t border-line/60 flex flex-col space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-xl font-semibold text-accent">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-stone/60 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider flex items-center gap-1">
                      <Check className="w-3 h-3" /> In Stock
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleDetailsClick(product)}
                      className={`py-2.5 px-3 rounded-full border text-[11px] uppercase font-medium tracking-wider transition-all text-center flex items-center justify-center gap-1 ${
                        isExpanded 
                          ? 'border-accent bg-accent/15 text-accent font-semibold' 
                          : 'border-line text-stone hover:text-ink hover:border-stone'
                      }`}
                    >
                      <span>{isExpanded ? 'Hide' : 'Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => handleWhatsAppOrder(product)}
                      className="py-2.5 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] uppercase font-semibold tracking-wider flex items-center justify-center gap-1 shadow-md hover:shadow-emerald-600/30 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Desktop Modal Product Detail Overlay (Only visible on >= 768px) */}
      {activeModalProduct && (
        <div 
          id="product-modal-overlay"
          className="fixed inset-0 bg-black/75 backdrop-blur-xl z-[100] hidden md:flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target.id === 'product-modal-overlay') setActiveModalProduct(null);
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-2xl"
          >
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 text-stone hover:text-ink p-1 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-line border border-line">
                <img
                  src={encodeURI(activeModalProduct.image)}
                  alt={activeModalProduct.name}
                  onError={(e) => {
                    e.target.src = '/services/Wedding.jpg';
                  }}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between space-y-4 text-left">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-accent">
                    {activeModalProduct.category}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-ink mt-1">
                    {activeModalProduct.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-serif text-2xl font-semibold text-accent">
                      {activeModalProduct.price}
                    </span>
                    {activeModalProduct.originalPrice && (
                      <span className="text-xs text-stone/60 line-through">
                        {activeModalProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone leading-relaxed mt-3 font-light">
                    {activeModalProduct.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-line/60">
                    <p className="text-[10px] uppercase tracking-widest text-stone font-semibold mb-2">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1.5">
                      {activeModalProduct.specs.map((spec, i) => (
                        <li key={i} className="text-xs text-ink/90 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleWhatsAppOrder(activeModalProduct);
                    setActiveModalProduct(null);
                  }}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-widest font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Order via WhatsApp Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
