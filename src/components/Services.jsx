import React, { useState } from 'react';
import { Plus, X, MessageCircle } from 'lucide-react';
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
  const [openMobileIndex, setOpenMobileIndex] = useState(null);

  const toggleMobileCard = (index) => {
    setOpenMobileIndex((prev) => (prev === index ? null : index));
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
    const isMobileOpen = openMobileIndex === index;

    return (
      <div 
        key={`${service.title}-${index}`}
        className={`group rounded-2xl border p-5 md:p-6 transition-all duration-300 shadow-xl overflow-hidden ${
          isMobileOpen ? 'border-accent bg-[#2c2219]' : 'border-accent/40 bg-[#241c14] hover:border-accent'
        }`}
      >
        {/* Header: Service Title & Mobile Toggle Button */}
        <div 
          onClick={() => toggleMobileCard(index)}
          className="flex items-center justify-between cursor-pointer md:cursor-default"
        >
          <div className="flex items-center gap-3.5">
            <span className="font-serif text-xs text-accent font-semibold tracking-wider">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-accent font-light">
              {service.title}
            </h3>
          </div>

          {/* Toggle Icon Button — Visible only on Mobile (< md) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleMobileCard(index);
            }}
            aria-label={isMobileOpen ? 'Close card' : 'Open card'}
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-line/80 text-stone transition-all duration-300 shrink-0"
          >
            {isMobileOpen ? (
              <X className="h-4 w-4 text-accent" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Card Content Container */}
        <div 
          className={`grid transition-all duration-500 ease-out ${
            isMobileOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] md:grid-rows-[1fr]'
          }`}
        >
            <div className="pt-3 space-y-3">
              <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                {service.details}
              </p>
              <a 
                href={`https://wa.me/919046412124?text=${encodeURIComponent(`Hi Golden Moments Photography, I want to inquire about ${service.title} service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-full bg-emerald-600/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm mt-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
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



