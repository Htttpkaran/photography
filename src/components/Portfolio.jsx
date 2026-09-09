import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const categories = [
  'All',
  'Wedding',
  'Pre Wedding',
  'Baby Shower',
  'Rice Ceremony',
  'Birthday',
];

const portfolioItems = [
  // Wedding
  {
    id: 1,
    category: 'Wedding',
    title: 'The Eternal Vows',
    location: 'Bengali Wedding',
    src: '/Gallery/wedding/01.webp',
  },
  {
    id: 2,
    category: 'Wedding',
    title: 'Bridal Splendor',
    location: 'Kolkata',
    src: '/Gallery/wedding/02.webp',
  },
  {
    id: 3,
    category: 'Wedding',
    title: 'Sacred Rituals',
    location: 'Wedding Ceremony',
    src: '/Gallery/wedding/03.webp',
  },
  {
    id: 4,
    category: 'Wedding',
    title: 'Sindoor Daan',
    location: 'Heritage Mandap',
    src: '/Gallery/wedding/04.webp',
  },
  {
    id: 5,
    category: 'Wedding',
    title: 'The Royal Couple',
    location: 'Golden Moments Photography Studio',
    src: '/Gallery/wedding/05.webp',
  },
  {
    id: 6,
    category: 'Wedding',
    title: 'Warm Smiles & Heritage',
    location: 'Classic Reception',
    src: '/Gallery/wedding/06.webp',
  },
  {
    id: 7,
    category: 'Wedding',
    title: 'Divine Grace',
    location: 'Traditional Rituals',
    src: '/Gallery/wedding/07.webp',
  },
  {
    id: 8,
    category: 'Wedding',
    title: 'Royal Heritage Frame',
    location: 'Palace Wedding',
    src: '/Gallery/wedding/08.webp',
  },
  {
    id: 9,
    category: 'Wedding',
    title: 'The Golden Promise',
    location: 'Golden Moments Studio',
    src: '/Gallery/wedding/09.webp',
  },
  {
    id: 10,
    category: 'Wedding',
    title: 'Ceremonial Elegance',
    location: 'Bengal Tradition',
    src: '/Gallery/wedding/10.webp',
  },
  {
    id: 11,
    category: 'Wedding',
    title: 'Forever Together',
    location: 'Kolkata Mandap',
    src: '/Gallery/wedding/11.webp',
  },
  {
    id: 12,
    category: 'Wedding',
    title: 'Celebration of Joy',
    location: 'Grand Reception',
    src: '/Gallery/wedding/12.webp',
  },
  // Pre Wedding
  {
    id: 13,
    category: 'Pre Wedding',
    title: 'Sunset Whispers',
    location: 'Riverside Romance',
    src: '/Gallery/pre wedding/1a.webp',
  },
  {
    id: 14,
    category: 'Pre Wedding',
    title: 'Shadows & Sunlight',
    location: 'Heritage Ruins',
    src: '/Gallery/pre wedding/2.webp',
  },
  {
    id: 15,
    category: 'Pre Wedding',
    title: 'Romantic Stroll',
    location: 'Botanical Garden',
    src: '/Gallery/pre wedding/3.webp',
  },
  {
    id: 16,
    category: 'Pre Wedding',
    title: 'Golden Hour Embrace',
    location: 'Lakeside Bliss',
    src: '/Gallery/pre wedding/4.webp',
  },
  {
    id: 17,
    category: 'Pre Wedding',
    title: 'Cinematic Gazes',
    location: 'Vintage Alley',
    src: '/Gallery/pre wedding/5.webp',
  },
  {
    id: 18,
    category: 'Pre Wedding',
    title: 'Timeless Connection',
    location: 'Maidan Kolkata',
    src: '/Gallery/pre wedding/6.webp',
  },
  {
    id: 19,
    category: 'Pre Wedding',
    title: 'Hand in Hand',
    location: 'Howrah Promenade',
    src: '/Gallery/pre wedding/DSC_5041 copy.webp',
  },
  {
    id: 20,
    category: 'Pre Wedding',
    title: 'Monochrome Passion',
    location: 'Golden Studio',
    src: '/Gallery/pre wedding/MON_5694 copy.webp',
  },
  {
    id: 21,
    category: 'Pre Wedding',
    title: 'Subtle Spark',
    location: 'Eco Park',
    src: '/Gallery/pre wedding/MON_5699 copy.webp',
  },
  {
    id: 22,
    category: 'Pre Wedding',
    title: 'Love & Laughter',
    location: 'Princep Ghat',
    src: '/Gallery/pre wedding/MON_5700 copy.webp',
  },
  {
    id: 23,
    category: 'Pre Wedding',
    title: 'Fairytale Moment',
    location: 'Palace Grounds',
    src: '/Gallery/pre wedding/MON_5702 copy.webp',
  },
  {
    id: 24,
    category: 'Pre Wedding',
    title: 'Endless Horizons',
    location: 'Ganga Ghat',
    src: '/Gallery/pre wedding/MON_5704 copy.webp',
  },
  // Baby Shower
  {
    id: 25,
    category: 'Baby Shower',
    title: 'Maternal Glow',
    location: 'Sadh Ceremony',
    src: '/Gallery/baby shower/01.webp',
  },
  {
    id: 26,
    category: 'Baby Shower',
    title: 'Awaiting the Miracle',
    location: 'Family Blessings',
    src: '/Gallery/baby shower/02.webp',
  },
  {
    id: 27,
    category: 'Baby Shower',
    title: 'Blissful Smiles',
    location: 'Home Celebration',
    src: '/Gallery/baby shower/03.webp',
  },
  {
    id: 28,
    category: 'Baby Shower',
    title: 'Traditional Sadh Feast',
    location: 'Ancestral Home',
    src: '/Gallery/baby shower/04.webp',
  },
  {
    id: 29,
    category: 'Baby Shower',
    title: 'Radiant Motherhood',
    location: 'Studio Session',
    src: '/Gallery/baby shower/05.webp',
  },
  {
    id: 30,
    category: 'Baby Shower',
    title: 'Shower of Blessings',
    location: 'Kolkata Rituals',
    src: '/Gallery/baby shower/06.webp',
  },
  {
    id: 31,
    category: 'Baby Shower',
    title: 'Warm Family Hugs',
    location: 'Golden Moments Studio',
    src: '/Gallery/baby shower/07.webp',
  },
  {
    id: 32,
    category: 'Baby Shower',
    title: 'Sweet Expectations',
    location: 'Flower Decoration',
    src: '/Gallery/baby shower/08.webp',
  },
  // Rice Ceremony
  {
    id: 33,
    category: 'Rice Ceremony',
    title: 'First Solid Bite',
    location: 'Mukhe Bhaat',
    src: '/Gallery/rice ceremony/01.webp',
  },
  {
    id: 34,
    category: 'Rice Ceremony',
    title: 'Little Prince Attire',
    location: 'Annaprashan',
    src: '/Gallery/rice ceremony/02.webp',
  },
  {
    id: 35,
    category: 'Rice Ceremony',
    title: 'Grandparents Blessings',
    location: 'Heritage House',
    src: '/Gallery/rice ceremony/03.webp',
  },
  {
    id: 36,
    category: 'Rice Ceremony',
    title: 'Curious Eyes & Rice Bowl',
    location: 'Bengali Tradition',
    src: '/Gallery/rice ceremony/04.webp',
  },
  {
    id: 37,
    category: 'Rice Ceremony',
    title: 'Joyful Family Gathers',
    location: 'Home Ritual',
    src: '/Gallery/rice ceremony/05.webp',
  },
  {
    id: 38,
    category: 'Rice Ceremony',
    title: 'Tiny Dhoti Elegance',
    location: 'Golden Moments Studio',
    src: '/Gallery/rice ceremony/06.webp',
  },
  {
    id: 39,
    category: 'Rice Ceremony',
    title: 'Sacred Fire Blessings',
    location: 'Puja Mandap',
    src: '/Gallery/rice ceremony/07.webp',
  },
  {
    id: 40,
    category: 'Rice Ceremony',
    title: 'Celebration of Life',
    location: 'Banquet Hall',
    src: '/Gallery/rice ceremony/08.webp',
  },
  // Birthday
  {
    id: 41,
    category: 'Birthday',
    title: 'First Cake Smash',
    location: '1st Birthday Bash',
    src: '/Gallery/birthday/01.webp',
  },
  {
    id: 42,
    category: 'Birthday',
    title: 'Balloons & Smiles',
    location: 'Themed Party',
    src: '/Gallery/birthday/02.webp',
  },
  {
    id: 43,
    category: 'Birthday',
    title: 'Little Princess Celebration',
    location: 'Kolkata',
    src: '/Gallery/birthday/03.webp',
  },
  {
    id: 44,
    category: 'Birthday',
    title: 'Candle Blowing Magic',
    location: 'Family Banquet',
    src: '/Gallery/birthday/04.webp',
  },
  {
    id: 45,
    category: 'Birthday',
    title: 'Playful Laughter',
    location: 'Golden Studio',
    src: '/Gallery/birthday/05.webp',
  },
  {
    id: 46,
    category: 'Birthday',
    title: 'Confetti Rain',
    location: 'Outdoor Bash',
    src: '/Gallery/birthday/06.webp',
  },
  {
    id: 47,
    category: 'Birthday',
    title: 'Superhero Fun',
    location: 'Party Zone',
    src: '/Gallery/birthday/07.webp',
  },
  {
    id: 48,
    category: 'Birthday',
    title: 'Pure Innocence',
    location: 'Golden Moments Photography',
    src: '/Gallery/birthday/MON_5793 copy.webp',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const allFiltered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  const displayedItems = activeFilter === 'All' && !showAll
    ? allFiltered.slice(0, 9)
    : allFiltered;

  const activeItem = selectedItemIndex !== null ? displayedItems[selectedItemIndex] : null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedItemIndex((prev) => (prev > 0 ? prev - 1 : displayedItems.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedItemIndex((prev) => (prev < displayedItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section 
      id="portfolio" 
      className="py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 bg-paper px-6 md:px-12 w-full mx-auto"
    >
      <div className="text-center mb-8 max-w-3xl mx-auto space-y-3">
        <h2 className="font-serif text-3xl md:text-5xl font-light text-ink">
          Gallery
        </h2>
        <p className="font-sans text-stone text-xs uppercase tracking-widest font-light leading-relaxed">
          Moments we turned into gold
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center mb-8 border-b border-line pb-4 max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setShowAll(false);
                setSelectedItemIndex(null);
              }}
              className={`text-xs uppercase tracking-widest transition-colors py-1 ${
                activeFilter === cat ? 'text-accent border-b-2 border-accent font-medium' : 'text-stone hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start"
        >
          {displayedItems.map((item, index) => {
            const isNewItem = index >= 9;

            return (
              <motion.div
                key={item.id}
                initial={isNewItem ? { opacity: 0, y: 15 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: isNewItem ? Math.min((index - 9) * 0.04, 0.3) : 0 }}
                onClick={() => setSelectedItemIndex(index)}
                className="relative aspect-[4/3] overflow-hidden bg-line group w-full border border-line/80 hover:border-accent transition-all duration-300 rounded-xl shadow-md cursor-pointer"
              >
                {/* Image */}
                <img
                  src={encodeURI(item.src)}
                  alt={`${item.title} - ${item.location}`}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  fetchPriority={index < 3 ? 'high' : 'low'}
                  decoding="async"
                  onError={(e) => {
                    e.target.src = '/services/baby-born.jpg';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Hover Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 z-10" />
                
                <div className="absolute bottom-4 left-4 right-4 z-20 text-left opacity-0 group-hover:opacity-100 transition-all duration-300 text-paper flex items-end justify-between">
                  <div>
                    <p className="font-serif text-base md:text-xl tracking-wide font-light">{item.title}</p>
                    <p className="text-[10px] uppercase tracking-widest mt-1 text-accent font-medium">{item.location}</p>
                  </div>
                  <span className="p-2 rounded-full bg-paper/20 backdrop-blur-md text-paper hover:bg-accent transition-colors shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Load More Button */}
      {activeFilter === 'All' && allFiltered.length > 9 && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => {
              if (showAll) {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }
              setShowAll(!showAll);
            }}
            className="px-8 py-3.5 rounded-full border border-accent/50 bg-accent/10 text-accent hover:bg-accent hover:text-paper text-xs uppercase tracking-widest font-semibold transition-all duration-300 focus:outline-none shadow-md hover:shadow-lg"
          >
            {showAll ? 'Show Less' : 'Load More'}
          </button>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex flex-col items-center justify-between p-4 sm:p-6"
              onClick={() => setSelectedItemIndex(null)}
            >
              {/* Top Header Bar */}
              <div 
                className="w-full max-w-5xl flex items-center justify-between z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-xs uppercase tracking-widest text-accent font-mono">
                  {activeItem.category} &middot; {selectedItemIndex + 1} of {displayedItems.length}
                </span>
                <button
                  onClick={() => setSelectedItemIndex(null)}
                  className="p-2 rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-paper hover:border-accent transition-all shadow-md backdrop-blur-md group"
                  title="Close"
                >
                  <X className="w-6 h-6 text-accent group-hover:text-paper transition-colors" />
                </button>
              </div>

              {/* Main Large Image Container */}
              <div 
                className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-2"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/70 border border-accent/60 text-accent hover:bg-accent hover:text-paper hover:border-accent transition-all shadow-lg shadow-accent/20 backdrop-blur-md group"
                  title="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6 text-accent group-hover:text-paper transition-colors" />
                </button>

                {/* Image */}
                <motion.img
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={encodeURI(activeItem.src)}
                  alt={activeItem.title}
                  onError={(e) => {
                    e.target.src = '/services/baby-born.jpg';
                  }}
                  className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl border border-accent/30"
                />

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/70 border border-accent/60 text-accent hover:bg-accent hover:text-paper hover:border-accent transition-all shadow-lg shadow-accent/20 backdrop-blur-md group"
                  title="Next Image"
                >
                  <ChevronRight className="w-6 h-6 text-accent group-hover:text-paper transition-colors" />
                </button>
              </div>

              {/* Bottom Caption Bar */}
              <div 
                className="w-full max-w-5xl text-center space-y-1 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="font-serif text-xl sm:text-2xl font-light text-paper tracking-wide">
                  {activeItem.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-accent font-medium">
                  {activeItem.location}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
