import React, { useState } from 'react';
import { ShoppingBag, Sparkles, MessageCircle, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'All',
  'Photo Frames',
  'Photo Books',
  'Gift Items',
  'Gift Vouchers',
  'Presets & LUTs',
];

const products = [
  // --- Photo Frames ---
  {
    id: 'frame-1',
    name: '4x6 Size Photo Frame',
    category: 'Photo Frames',
    price: '₹150',
    originalPrice: '₹250',
    tag: 'Popular',
    image: '/Gallery/wedding/01.webp',
    description: 'Ultra-HD photo print mounted inside a stylish 4x6 inch tabletop or wall frame.',
    specs: ['4x6 inch size', 'Matte / Glossy photo print', 'Sturdy wooden border', 'Desk stand & wall hook']
  },
  {
    id: 'frame-2',
    name: '4x6 Size Double Photo Frame',
    category: 'Photo Frames',
    price: '₹250',
    originalPrice: '₹400',
    tag: 'Couple Special',
    image: '/Gallery/wedding/02.webp',
    description: 'Elegant hinged double photo frame for displaying two cherished memories side-by-side.',
    specs: ['4x6 inch dual slots', 'Foldable tabletop display', 'Glass protection front', 'Dual photo mount']
  },
  {
    id: 'frame-3',
    name: '8x12 Size Photo Frame',
    category: 'Photo Frames',
    price: '₹500',
    originalPrice: '₹750',
    tag: 'Bestseller',
    image: '/Gallery/pre wedding/DSC_5041 copy.webp',
    description: 'Medium luxury wall or desk photo frame crafted with anti-reflective glass and archival ink print.',
    specs: ['8x12 inch size', '300 GSM silk paper print', 'Rich teak wood style border', 'Includes metal wall mount']
  },
  {
    id: 'frame-4',
    name: '12x18 Size Photo Frame',
    category: 'Photo Frames',
    price: '₹700',
    originalPrice: '₹1,000',
    tag: 'Wall Decor',
    image: '/Gallery/wedding/03.webp',
    description: 'Large statement wall frame ideal for living room and bedroom portrait displays.',
    specs: ['12x18 inch size', 'Vivid fade-resistant inks', 'Premium synthetic wood frame', 'Heavy-duty wall hanging']
  },

  // --- Photo Books ---
  {
    id: 'book-1',
    name: 'Mini Photo Book',
    category: 'Photo Books',
    price: '₹1,000',
    originalPrice: '₹1,500',
    tag: 'Compact Album',
    image: '/Gallery/wedding/05.webp',
    description: 'Handy pocket-friendly softbound mini photo album for keeping personal memories close.',
    specs: ['Compact mini size layout', '20 thick layflat pages', 'Silk matte non-tear paper', 'Custom photo cover']
  },
  {
    id: 'book-2',
    name: '12x36 Size Luxury Photo Book',
    category: 'Photo Books',
    price: '₹5,000',
    originalPrice: '₹7,500',
    tag: 'Grand Album',
    image: '/Gallery/wedding/02.webp',
    description: 'Grand 12x36 panorama flush mount luxury album bound in velvet with gold foil embossing.',
    specs: ['12x36 spread layout', '40 thick layflat pages', 'Custom gold embossing', 'Velvet storage box included']
  },

  // --- Gift Items ---
  {
    id: 'gift-1',
    name: 'Customized T-Shirt',
    category: 'Gift Items',
    price: '₹500',
    originalPrice: '₹799',
    tag: 'Custom Apparel',
    image: '/Gallery/pre wedding/2.webp',
    description: 'High-quality 100% cotton T-shirt custom printed with your portrait, graphic, or quote.',
    specs: ['100% soft breathable cotton', 'Custom photo & text print', 'Available in sizes S - XXL', 'Fade-resistant DTF print']
  },
  {
    id: 'gift-2',
    name: 'Printed Coffee Mug',
    category: 'Gift Items',
    price: '₹400',
    originalPrice: '₹599',
    tag: 'Personalized',
    image: '/Gallery/pre wedding/1a.webp',
    description: 'Premium 325ml ceramic mug custom printed with vibrant high-definition photos.',
    specs: ['325ml premium ceramic', 'Microwave & dishwasher safe', 'Vivid glossy print', 'Safe box packaging']
  },
  {
    id: 'gift-3',
    name: 'Metal Key Chain',
    category: 'Gift Items',
    price: '₹200',
    originalPrice: '₹350',
    tag: 'Souvenir',
    image: '/Gallery/pre wedding/DSC_5060.webp',
    description: 'Durable double-sided stainless steel alloy keychain with high-gloss custom photo print.',
    specs: ['Solid metal alloy build', 'Double-sided custom print', 'Scratch-resistant coating', 'Sturdy keyring attached']
  },

  // --- Gift Vouchers ---
  {
    id: 'voucher-1',
    name: 'Pre-Wedding Saver Voucher',
    category: 'Gift Vouchers',
    price: '₹1,200',
    originalPrice: '₹2,000 Value',
    tag: 'Gift Voucher',
    image: '/Gallery/pre wedding/DSC_5073.webp',
    description: 'Gift or save ₹2,000 on any full Pre-Wedding shoot package booked with us.',
    specs: ['Valid for 1 year from purchase', 'Transferable to friends & family', 'Digital voucher card with code']
  },
  {
    id: 'voucher-2',
    name: 'Maternity & Newborn Gift Card',
    category: 'Gift Vouchers',
    price: '₹3,500',
    originalPrice: '₹4,500 Value',
    tag: 'Gift Voucher',
    image: '/Gallery/baby shower/01.webp',
    description: 'Special gift card covering a complete 2-hour Maternity or Rice Ceremony session.',
    specs: ['Includes studio session', '15 printed 5x7 photos', 'Digital gallery link', 'Valid for 6 months']
  },

  // --- Presets & LUTs ---
  {
    id: 'preset-1',
    name: 'Golden Glow Lightroom Presets',
    category: 'Presets & LUTs',
    price: '₹499',
    originalPrice: '₹999',
    tag: 'Digital Pack',
    image: '/Gallery/pre wedding/1a.webp',
    description: '12 signature warm gold Lightroom color presets created for Bengali wedding and portrait tones.',
    specs: ['Desktop & Mobile compatible', 'Includes DNG & XMP files', 'Instant digital delivery', '1-Click color grading']
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

              {/* Price & Action */}
              <div className="mt-5 pt-4 border-t border-line/60 flex items-center justify-between">
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

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsAppOrder(product);
                  }}
                  className="py-2 px-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] uppercase font-semibold tracking-wider flex items-center gap-1.5 shadow-md hover:shadow-emerald-600/30 transition-all shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Order
                </button>
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



