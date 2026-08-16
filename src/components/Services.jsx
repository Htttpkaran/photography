import React, { useState } from 'react';
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const offerings = [
  {
    title: 'Engagement',
    details: 'Candid storytelling / Natural lighting / Muted tones',
  },
  {
    title: 'Pre Wedding',
    details: 'Outdoor portraits / Location scouting / Cinematic frames',
  },
  {
    title: 'Wedding',
    details: 'Full ritual coverage / Premium cinematography / Legacy albums',
  },
  {
    title: 'Post Wedding',
    details: 'Creative couple portraits / Reception highlights / After-shoots',
  },
  {
    title: 'Maternity',
    details: 'Soft studio lighting / Cozy family setups / Quiet sessions',
  },
  {
    title: 'Baby Shower',
    details: 'Event details / Family celebrations / Candid moments',
  },
  {
    title: 'Rice Ceremony',
    details: 'Traditional rituals / Intimate documentation / Family sessions',
  },
  {
    title: 'Birthday',
    details: 'Kids & adult birthday stories / Fun highlights / Custom themes',
  },
  {
    title: 'Drone Shot',
    details: 'Aerial venue views / Cinematic patterns / Creative perspective',
  },
  {
    title: 'Model Shoot',
    details: 'Editorial portfolios / Studio lookbooks / Creative direction',
  },
  {
    title: 'Cinematic Shoot',
    details: '4K cinema storytelling / Creative pacing / Audio design',
  },
  {
    title: 'Album Designing',
    details: 'Curated custom layouts / Flushmount styling / Premium paper selection',
  },
  {
    title: 'Printing',
    details: 'Fine art prints / High definition custom sizes / Matte & glossy finishes',
  }
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [activeService, setActiveService] = useState('All');
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenCardIndex((prev) => (prev === index ? null : index));
  };

  const handleToggleShowAll = () => {
    if (showAll) {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll((prev) => !prev);
  };

  // Filter offerings based on active selection
  const filteredOfferings = activeService === 'All' 
    ? offerings 
    : offerings.filter(item => item.title === activeService);

  // Split offerings for smooth collapse animation
  const initialOfferings = activeService === 'All' ? filteredOfferings.slice(0, 6) : filteredOfferings;
  const extraOfferings = activeService === 'All' ? filteredOfferings.slice(6) : [];

  const renderCard = (service, index) => {
    const isExpanded = openCardIndex === index;

    return (
      <div 
        key={`${service.title}-${index}`}
        className={`group rounded-2xl border p-5 md:p-6 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between ${
          isExpanded 
            ? 'border-accent bg-[#35281d] ring-1 ring-accent/40 shadow-2xl shadow-accent/10' 
            : 'border-accent/35 bg-[#251c14] hover:border-accent hover:bg-[#2e2319] hover:shadow-2xl'
        }`}
      >
        <div>
          {/* Header: Service Title & Number */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/15 border border-accent/30 text-accent font-semibold tracking-wider">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-accent font-light group-hover:text-gold-shimmer transition-colors">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Expandable Details & Book Button (Slides down when Details button clicked) */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-3 border-t border-accent/20 space-y-4">
                  <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                    {service.details}
                  </p>
                  <a 
                    href={`https://wa.me/919046412124?text=${encodeURIComponent(`Hi Golden Moments Photography, I want to inquire about ${service.title} service.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] uppercase font-semibold tracking-wider shadow-md hover:shadow-emerald-600/30 transition-all text-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Book on WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-4 border-t border-accent/20">
          <button
            onClick={() => toggleCard(index)}
            className={`w-full py-2.5 px-4 rounded-full border text-[11px] uppercase font-medium tracking-wider transition-all text-center flex items-center justify-center gap-1.5 ${
              isExpanded 
                ? 'border-accent bg-accent/20 text-accent font-semibold shadow-inner' 
                : 'border-accent/40 bg-accent/10 text-stone hover:text-accent hover:border-accent hover:bg-accent/15'
            }`}
          >
            <span>{isExpanded ? 'Hide Details' : 'Details'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-accent" /> : <ChevronDown className="w-3.5 h-3.5 text-accent" />}
          </button>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="services" 
      className="py-20 md:py-28 scroll-mt-20 md:scroll-mt-24 bg-[#17120c] px-6 md:px-16 lg:px-20 w-full mx-auto border-t border-accent/15"
    >
      <div className="text-center mb-14 max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
          Our Offerings
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-ink">
          Services We <span className="italic text-accent">Provide</span>
        </h2>
        <p className="font-sans text-stone text-xs sm:text-sm uppercase tracking-widest font-light leading-relaxed">
          Bespoke photography and film coverage for life's precious milestones
        </p>
      </div>

      {/* Primary Initial Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {initialOfferings.map((service, index) => renderCard(service, index))}
      </div>

      {/* Smooth Expanding & Collapsing Extra Services Grid */}
      <AnimatePresence>
        {showAll && extraOfferings.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start pt-6">
              {extraOfferings.map((service, index) => renderCard(service, index + 6))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Load More / Show Less Button */}
      {activeService === 'All' && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={handleToggleShowAll}
            className="px-8 py-3.5 rounded-full border border-accent/50 bg-accent/10 text-accent hover:bg-accent hover:text-paper text-xs uppercase tracking-widest font-semibold transition-all duration-300 focus:outline-none shadow-md hover:shadow-lg"
          >
            {showAll ? 'Show Less' : 'Load All Services'}
          </button>
        </div>
      )}
    </section>
  );
}




