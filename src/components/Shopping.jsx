import React, { useState } from 'react';
import { ShoppingBag, Sparkles, MessageCircle, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'All',
  'Photo Frames',
  'Photo Books',
  'Gift Items',
  'Gift Vouchers',
];

const products = [
  {
    id: 'prod-1',
    name: '4x6 Photo Frame',
    category: 'Photo Frames',
    price: '₹150',
    tag: 'Single Frame',
    image: '/Gallery/wedding/01.webp',
    description: 'Standard 4x6 size photo frame with crystal clear glass and sleek frame border.',
    specs: ['4x6 inch size', 'High quality photo print', 'Tabletop & wall mount support']
  },
  {
    id: 'prod-2',
    name: '4x6 Double Photo Frame',
    category: 'Photo Frames',
    price: '₹250',
    tag: 'Double Frame',
    image: '/Gallery/pre wedding/DSC_5041 copy.webp',
    description: '4x6 size dual side-by-side folding photo frame to showcase two memorable moments.',
    specs: ['4x6 inch double frame', 'Dual display layout', 'Premium folding hinge']
  },
  {
    id: 'prod-3',
    name: '8x12 Photo Frame',
    category: 'Photo Frames',
    price: '₹500',
    tag: 'Popular',
    image: '/Gallery/wedding/03.webp',
    description: 'Medium 8x12 size elegant photo frame for wall decoration.',
    specs: ['8x12 inch size', 'Anti-reflective glass cover', 'Sturdy wall hook attached']
  },
  {
    id: 'prod-4',
    name: '12x18 Photo Frame',
    category: 'Photo Frames',
    price: '₹700',
    tag: 'Large Frame',
    image: '/Gallery/pre wedding/1a.webp',
    description: 'Large 12x18 wall hanging photo frame with vivid HD lustre print.',
    specs: ['12x18 inch size', 'HD photo printing', 'Solid border finish']
  },
  {
    id: 'prod-5',
    name: 'Mini Photo Book',
    category: 'Photo Books',
    price: '₹1,000',
    tag: 'Compact',
    image: '/Gallery/baby shower/01.webp',
    description: 'Compact mini photo album book for storing your favorite memories in style.',
    specs: ['Compact mini size album', '20 layflat inner pages', 'Hardcover binding']
  },
  {
    id: 'prod-6',
    name: '12x36 Size Photo Book',
    category: 'Photo Books',
    price: '₹5,000',
    tag: 'Grand Album',
    image: '/Gallery/wedding/02.webp',
    description: 'Luxury 12x36 panoramic spread full-size flush mount wedding album.',
    specs: ['12x36 inch panoramic spread', 'Ultra-HD layflat silk paper', 'Custom printed cover & storage box']
  },
  {
    id: 'prod-7',
    name: 'Customized T-Shirt',
    category: 'Gift Items',
    price: '₹500',
    tag: 'Custom Gift',
    image: '/services/Cinematic.jpg',
    description: 'Personalized high-quality t-shirt printed with your photo or custom graphic.',
    specs: ['100% Premium cotton', 'Washable HD print', 'Multiple sizes available']
  },
  {
    id: 'prod-8',
    name: 'Printed Coffee Mug',
    category: 'Gift Items',
    price: '₹400',
    tag: 'Gift Special',
    image: '/services/Wedding.jpg',
    description: 'Custom printed ceramic coffee mug with brilliant photo clarity.',
    specs: ['325ml Ceramic mug', 'Microwave & dishwasher safe', 'Glossy finish']
  },
  {
    id: 'prod-9',
    name: 'Metal Key Chain',
    category: 'Gift Items',
    price: '₹200',
    tag: 'Souvenir',
    image: '/Gallery/pre wedding/2.webp',
    description: 'Durable metal keychain customized with high-res photo prints on both sides.',
    specs: ['Stainless metal alloy', 'Double-sided photo print', 'Scratch resistant']
  },
  {
    id: 'prod-10',
    name: 'Special Gift Voucher',
    category: 'Gift Vouchers',
    price: '₹1,000',
    originalPrice: '₹1,500 Value',
    tag: 'Gift Card',
    image: '/Gallery/baby shower/01.webp',
    description: 'Gift card redeemable on any photography package, frame, or album purchase.',
    specs: ['Valid for 1 full year', 'Transferable gift voucher', 'Digital code & physical card options']
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

              {/* Price & WhatsApp Order Button */}
              <div className="mt-5 pt-4 border-t border-line/60 flex items-center justify-between gap-2">
                <div className="flex items-baseline gap-1.5">
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
                  className="py-1.5 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-sm hover:shadow-emerald-600/30 transition-all shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Order Now
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



