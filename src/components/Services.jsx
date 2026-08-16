import React, { useState } from 'react';
import { MessageCircle, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const offerings = [
  {
    title: 'Engagement',
    details: 'Candid storytelling / Natural lighting / Muted tones',
    features: ['Candid emotional moments', 'Natural ambient light setups', 'Muted aesthetic tones', 'HD digital gallery delivery']
  },
  {
    title: 'Pre Wedding',
    details: 'Outdoor portraits / Location scouting / Cinematic frames',
    features: ['Location scouting support', 'Multiple outfit changes', 'Drone aerial perspective', 'Cinematic video highlight reel']
  },
  {
    title: 'Wedding',
    details: 'Full ritual coverage / Premium cinematography / Legacy albums',
    features: ['Full traditional Bengali ritual coverage', 'Dual photographer & videographer team', 'Custom hardbound legacy photo album', '4K cinematic film trailer']
  },
  {
    title: 'Post Wedding',
    details: 'Creative couple portraits / Reception highlights / After-shoots',
    features: ['Sunset outdoor portraits', 'Reception party coverage', 'Creative couple posing', 'High-res retouched album images']
  },
  {
    title: 'Maternity',
    details: 'Soft studio lighting / Cozy family setups / Quiet sessions',
    features: ['Indoor studio setup', 'Comfortable relaxed pacing', 'Props & theme styling', 'Family portrait sessions']
  },
  {
    title: 'Baby Shower',
    details: 'Event details / Family celebrations / Candid moments',
    features: ['Sadh Bhakshan ritual coverage', 'Family & guest candid shots', 'Decor & gift highlights', 'Fast 48-hour preview delivery']
  },
  {
    title: 'Rice Ceremony',
    details: 'Traditional rituals / Intimate documentation / Family sessions',
    features: ['Mukhe Bhat ceremony capture', 'Grandparents & baby portraits', 'Festive traditional colors', 'Custom printed photo book']
  },
  {
    title: 'Birthday',
    details: 'Kids & adult birthday stories / Fun highlights / Custom themes',
    features: ['Cake smash & party moments', 'Theme decoration shots', 'Action & candid party clips', 'Online sharing link']
  },
  {
    title: 'Drone Shot',
    details: 'Aerial venue views / Cinematic patterns / Creative perspective',
    features: ['Licensed drone operators', '4K ultra HD aerial footage', 'Venue landscape & entry shots', 'Integrated into main film']
  },
  {
    title: 'Model Shoot',
    details: 'Editorial portfolios / Studio lookbooks / Creative direction',
    features: ['Professional lighting rig', 'High-fashion editorial posing', 'Color-graded retouched masters', 'Social media ready cuts']
  },
  {
    title: 'Cinematic Shoot',
    details: '4K cinema storytelling / Creative pacing / Audio design',
    features: ['Cinema camera gear & gimbals', 'Crisp audio recording', 'Custom color grading', 'Teaser + full length film']
  },
  {
    title: 'Album Designing',
    details: 'Curated custom layouts / Flushmount styling / Premium paper selection',
    features: ['Custom layout design', 'Velvet, leather & acrylic cover options', 'Silk matte & gloss non-tearable paper', '3 design revision rounds']
  },
  {
    title: 'Printing',
    details: 'Fine art prints / High definition custom sizes / Matte & glossy finishes',
    features: ['Museum-grade cotton canvas', 'Teak wood frames & acrylic desk mounts', 'UV fade-resistant inks', 'Custom dimensions available']
  }
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

  const handleToggleShowAll = () => {
    if (showAll) {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll((prev) => !prev);
  };

  const displayedOfferings = showAll ? offerings : offerings.slice(0, 6);
  const activeServiceItem = selectedServiceIndex !== null ? displayedOfferings[selectedServiceIndex] : null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedServiceIndex((prev) => (prev > 0 ? prev - 1 : displayedOfferings.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedServiceIndex((prev) => (prev < displayedOfferings.length - 1 ? prev + 1 : 0));
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {displayedOfferings.map((service, index) => (
          <div 
            key={`${service.title}-${index}`}
            onClick={() => setSelectedServiceIndex(index)}
            className="group rounded-2xl border border-accent/35 bg-[#251c14] hover:border-accent hover:bg-[#2e2319] p-6 transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Header: Service Title & Number */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/15 border border-accent/30 text-accent font-semibold tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-accent font-light group-hover:text-gold-shimmer transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                {service.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / Show Less Button */}
      <div className="flex justify-center mt-12">
        <button 
          onClick={handleToggleShowAll}
          className="px-8 py-3.5 rounded-full border border-accent/50 bg-accent/10 text-accent hover:bg-accent hover:text-paper text-xs uppercase tracking-widest font-semibold transition-all duration-300 focus:outline-none shadow-md hover:shadow-lg"
        >
          {showAll ? 'Show Less' : 'Load All Services'}
        </button>
      </div>

      {/* Service Details Lightbox Modal Popup */}
      <AnimatePresence>
        {activeServiceItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedServiceIndex(null)}
          >
            <div 
              className="relative w-full max-w-xl bg-[#251c14] border border-accent/40 rounded-2xl p-6 sm:p-8 text-ink shadow-2xl space-y-6 my-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Header Bar */}
              <div className="flex items-center justify-between border-b border-accent/20 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/20 border border-accent/40 text-accent font-semibold">
                    {String(selectedServiceIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-accent font-mono font-medium">
                    Service Overview
                  </span>
                </div>
                <button
                  onClick={() => setSelectedServiceIndex(null)}
                  className="p-2 rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-paper transition-all"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Content Body */}
              <div className="space-y-5 text-left">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-accent">
                    {activeServiceItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/90 font-light leading-relaxed mt-2">
                    {activeServiceItem.details}
                  </p>
                </div>

                {activeServiceItem.features && (
                  <div className="pt-4 border-t border-accent/20 space-y-3">
                    <p className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                      Key Package Inclusions:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeServiceItem.features.map((feat, i) => (
                        <li key={i} className="text-xs text-ink/90 font-medium flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <a 
                  href={`https://wa.me/919046412124?text=${encodeURIComponent(`Hi Golden Moments Photography, I want to inquire about ${activeServiceItem.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase font-semibold tracking-wider shadow-lg hover:shadow-emerald-600/30 transition-all text-center mt-4"
                >
                  <MessageCircle className="w-4 h-4" /> Book on WhatsApp
                </a>
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
                  {selectedServiceIndex + 1} of {displayedOfferings.length}
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






