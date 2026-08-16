import React, { useState } from 'react';
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
    title: 'Shubho Drishti',
    location: 'Wedding Rituals',
    src: '/Gallery/wedding/06.webp',
  },
  {
    id: 7,
    category: 'Wedding',
    title: 'Vidaai Tears & Joy',
    location: 'Home Ceremony',
    src: '/Gallery/wedding/07.webp',
  },
  {
    id: 8,
    category: 'Wedding',
    title: 'Seven Sacred Vows',
    location: 'West Bengal',
    src: '/Gallery/wedding/08.webp',
  },
  {
    id: 9,
    category: 'Wedding',
    title: 'Celebration of Love',
    location: 'Wedding Highlights',
    src: '/Gallery/wedding/09.webp',
  },

  // Pre Wedding
  {
    id: 10,
    category: 'Pre Wedding',
    title: 'Romantic Sunset',
    location: 'Outdoor Location',
    src: '/Gallery/pre wedding/2.webp',
  },
  {
    id: 11,
    category: 'Pre Wedding',
    title: 'Riverfront Melodies',
    location: 'Riverside Shoot',
    src: '/Gallery/pre wedding/1a.webp',
  },
  {
    id: 12,
    category: 'Pre Wedding',
    title: 'Walk in the Woods',
    location: 'Nature Trail',
    src: '/Gallery/pre wedding/DSC_5041 copy.webp',
  },
  {
    id: 13,
    category: 'Pre Wedding',
    title: 'Together Forever',
    location: 'Scenic Outdoor',
    src: '/Gallery/pre wedding/DSC_5054.webp',
  },
  {
    id: 14,
    category: 'Pre Wedding',
    title: 'Cinematic Glow',
    location: 'Pre-Wedding Shoot',
    src: '/Gallery/pre wedding/DSC_5060.webp',
  },
  {
    id: 15,
    category: 'Pre Wedding',
    title: 'Whispers of Love',
    location: 'Golden Hour',
    src: '/Gallery/pre wedding/DSC_5073.webp',
  },
  {
    id: 16,
    category: 'Pre Wedding',
    title: 'Hand in Hand',
    location: 'Location Shoot',
    src: '/Gallery/pre wedding/DSC_5077 copy.webp',
  },
  {
    id: 17,
    category: 'Pre Wedding',
    title: 'Golden Moments Photography',
    location: 'Outdoor Portraits',
    src: '/Gallery/pre wedding/DSC_5086 copy.webp',
  },
  {
    id: 18,
    category: 'Pre Wedding',
    title: 'Love & Reflections',
    location: 'Park Session',
    src: '/Gallery/pre wedding/DSC_5235.webp',
  },

  // Baby Shower
  {
    id: 19,
    category: 'Baby Shower',
    title: 'Blessings & Joy',
    location: 'Sadh Bhakshan',
    src: '/Gallery/baby shower/001.webp',
  },
  {
    id: 20,
    category: 'Baby Shower',
    title: 'Motherhood Glow',
    location: 'Family Celebration',
    src: '/Gallery/baby shower/01.webp',
  },
  {
    id: 21,
    category: 'Baby Shower',
    title: 'Sacred Rituals',
    location: 'Home Ceremony',
    src: '/Gallery/baby shower/02.webp',
  },
  {
    id: 22,
    category: 'Baby Shower',
    title: 'Warm Wishes',
    location: 'Traditional Celebration',
    src: '/Gallery/baby shower/03.webp',
  },
  {
    id: 23,
    category: 'Baby Shower',
    title: 'Family Embrace',
    location: 'Baby Shower Session',
    src: '/Gallery/baby shower/13.webp',
  },
  {
    id: 24,
    category: 'Baby Shower',
    title: 'Cherished Moments',
    location: 'Ushti Studio',
    src: '/Gallery/baby shower/20.webp',
  },

  // Rice Ceremony
  {
    id: 25,
    category: 'Rice Ceremony',
    title: 'Mukhe Bhat Ritual',
    location: 'First Rice Ceremony',
    src: '/Gallery/rice ceremony/00 copy.webp',
  },
  {
    id: 26,
    category: 'Rice Ceremony',
    title: 'First Taste of Feast',
    location: 'Grand Rituals',
    src: '/Gallery/rice ceremony/001.webp',
  },
  {
    id: 27,
    category: 'Rice Ceremony',
    title: 'Little Prince',
    location: 'Rice Ceremony',
    src: '/Gallery/rice ceremony/003.webp',
  },
  {
    id: 28,
    category: 'Rice Ceremony',
    title: 'Family Blessings',
    location: 'Traditional Event',
    src: '/Gallery/rice ceremony/004.webp',
  },
  {
    id: 29,
    category: 'Rice Ceremony',
    title: 'Golden Smirks',
    location: 'Ushti Studio',
    src: '/Gallery/rice ceremony/006.webp',
  },
  {
    id: 30,
    category: 'Rice Ceremony',
    title: 'Precious Smile',
    location: 'Family Celebration',
    src: '/Gallery/rice ceremony/007.webp',
  },

  // Birthday
  {
    id: 31,
    category: 'Birthday',
    title: '1st Birthday Magic',
    location: 'Party Celebration',
    src: '/Gallery/birthday/1.webp',
  },
  {
    id: 32,
    category: 'Birthday',
    title: 'Cake Smash Fun',
    location: 'Birthday Session',
    src: '/Gallery/birthday/2a.webp',
  },
  {
    id: 33,
    category: 'Birthday',
    title: 'Little Star',
    location: 'Birthday Party',
    src: '/Gallery/birthday/3.webp',
  },
  {
    id: 34,
    category: 'Birthday',
    title: 'Joy & Balloons',
    location: 'Festive Celebration',
    src: '/Gallery/birthday/4.webp',
  },
  {
    id: 35,
    category: 'Birthday',
    title: 'Golden Childhood',
    location: 'Birthday Shoot',
    src: '/Gallery/birthday/MON_5247.webp',
  },
  {
    id: 36,
    category: 'Birthday',
    title: 'Birthday Smiles',
    location: 'Ushti Studio',
    src: '/Gallery/birthday/MON_5661 copy 2a.webp',
  },
  {
    id: 37,
    category: 'Birthday',
    title: 'Warm Memories',
    location: 'Party Session',
    src: '/Gallery/birthday/MON_5741 copy 1.webp',
  },
  {
    id: 38,
    category: 'Birthday',
    title: 'Family Celebrations',
    location: 'West Bengal',
    src: '/Gallery/birthday/MON_5770 copy.webp',
  },
  {
    id: 39,
    category: 'Birthday',
    title: 'Grand Birthday Party',
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
              className="w-full max-w-5xl flex items-center justify-start z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs uppercase tracking-widest text-accent font-mono">
                {activeItem.category} &middot; {selectedItemIndex + 1} of {displayedItems.length}
              </span>
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

              {/* Image Container with Close Button on Top Right */}
              <div className="relative flex items-center justify-center max-h-[75vh] max-w-full">
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

                {/* Close Button (X) right on image top right */}
                <button
                  onClick={() => setSelectedItemIndex(null)}
                  className="absolute top-3 right-3 z-30 p-2 sm:p-2.5 rounded-full bg-black/75 border border-accent/60 text-accent hover:bg-accent hover:text-paper hover:border-accent transition-all shadow-xl backdrop-blur-md group"
                  title="Close"
                >
                  <X className="w-5 h-5 text-accent group-hover:text-paper transition-colors" />
                </button>
              </div>

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
      </AnimatePresence>
    </section>
  );
}

