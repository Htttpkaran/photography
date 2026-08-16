import React, { useState } from 'react';
import { ShoppingBag, Sparkles, MessageCircle, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
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
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const activeProduct = selectedProductIndex !== null ? filteredProducts[selectedProductIndex] : null;

  const handleWhatsAppOrder = (product) => {
    const text = `Hi Golden Moments Photography! I would like to order/inquire about: *${product.name}* (${product.price}). Please let me know how to proceed.`;
    const url = `https://wa.me/919046412124?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedProductIndex((prev) => (prev > 0 ? prev - 1 : filteredProducts.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedProductIndex((prev) => (prev < filteredProducts.length - 1 ? prev + 1 : 0));
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
              setSelectedProductIndex(null);
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
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              onClick={() => setSelectedProductIndex(index)}
              className="group flex flex-col justify-between rounded-2xl border border-line/80 bg-paper/60 p-4 shadow-md hover:border-accent hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-line mb-4">
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
                    <span className="absolute top-3 left-3 z-10 rounded-md bg-accent/90 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase font-semibold tracking-wider text-paper shadow-sm">
                      {product.tag}
                    </span>
                  )}
                  {/* Hover icon indicator */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-paper/20 backdrop-blur-md text-paper border border-paper/40 shadow-lg">
                      <Maximize2 className="w-5 h-5 text-accent" />
                    </span>
                  </div>
                </div>

                {/* Category & Title */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                  {product.category}
                </span>
                <h3 className="font-serif text-lg font-medium text-ink mt-1 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-stone font-light line-clamp-2 mt-1.5 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-5 pt-4 border-t border-line/60 flex items-baseline gap-2">
                <span className="font-serif text-xl font-semibold text-accent">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-stone/60 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Product Details Modal Popup */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedProductIndex(null)}
          >
            <div 
              className="relative w-full max-w-2xl bg-[#1e1711] border border-accent/40 rounded-2xl p-6 sm:p-8 text-ink shadow-2xl space-y-6 my-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Header */}
              <div className="flex items-center justify-between border-b border-accent/20 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-accent font-mono">
                    {activeProduct.category}
                  </span>
                  {activeProduct.tag && (
                    <span className="rounded-md bg-accent/90 px-2 py-0.5 text-[10px] font-semibold text-paper uppercase tracking-wider">
                      {activeProduct.tag}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProductIndex(null)}
                  className="p-2 rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-paper transition-all"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content Body */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-line border border-accent/30">
                  <img
                    src={encodeURI(activeProduct.image)}
                    alt={activeProduct.name}
                    onError={(e) => { e.target.src = '/services/Wedding.jpg'; }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-left">
                  <h3 className="font-serif text-2xl font-light text-ink">
                    {activeProduct.name}
                  </h3>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-2xl font-semibold text-accent">
                      {activeProduct.price}
                    </span>
                    {activeProduct.originalPrice && (
                      <span className="text-sm text-stone line-through">
                        {activeProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-ink/90 font-light leading-relaxed">
                    {activeProduct.description}
                  </p>
                  {activeProduct.specs && (
                    <div className="pt-3 border-t border-accent/20 space-y-2">
                      <p className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                        Specifications &amp; Features:
                      </p>
                      <ul className="space-y-1.5">
                        {activeProduct.specs.map((spec, i) => (
                          <li key={i} className="text-xs text-ink/90 font-medium flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button
                    onClick={() => handleWhatsAppOrder(activeProduct)}
                    className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-600/30 transition-all mt-4"
                  >
                    <MessageCircle className="w-4 h-4" /> Order on WhatsApp
                  </button>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between border-t border-accent/20 pt-4 text-xs text-ink/80">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 text-ink/80 hover:text-accent transition-colors font-medium"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <span className="font-mono text-[11px] text-accent font-semibold">
                  {selectedProductIndex + 1} of {filteredProducts.length}
                </span>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1 text-ink/80 hover:text-accent transition-colors font-medium"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}



