import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const allFiltered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  const displayedItems = activeFilter === 'All' && !showAll
    ? allFiltered.slice(0, 9)
    : allFiltered;

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
                className="relative aspect-[4/3] overflow-hidden bg-line group w-full border border-line/80 hover:border-accent transition-all duration-300 rounded-xl shadow-md"
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
                
                <div className="absolute bottom-4 left-4 right-4 z-20 text-left opacity-0 group-hover:opacity-100 transition-all duration-300 text-paper">
                  <p className="font-serif text-base md:text-xl tracking-wide font-light">{item.title}</p>
                  <p className="text-[10px] uppercase tracking-widest mt-1 text-accent font-medium">{item.location}</p>
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
    </section>
  );
}
