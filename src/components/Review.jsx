import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      quote: "Recently Golden Moments Photography covered my sister's wedding. They did a great job with great management skills. Just love their captures. Highly recommended!",
      author: "Bipasha Halder",
      role: "Google Maps Reviewer"
    },
    {
      quote: "Highly recommended. Management was extremely professional, responsive, and captured every ritual, arrangement, and single moment to our needs.",
      author: "Saheli Saha",
      role: "Google Maps Reviewer"
    },
    {
      quote: "Best photography I have ever seen. The behavior of the owner and team was very impressive.",
      author: "Swastika Mandal",
      role: "Google Maps Reviewer"
    },
    {
      quote: "Amazing photography and cinematography! Very nice work and very nice editing done here.",
      author: "Mallika Khatun",
      role: "Google Maps Reviewer"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const active = reviews[currentIndex];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, reviews.length]);

  return (
    <section 
      id="review" 
      className="py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 bg-paper px-6 md:px-16 lg:px-20 w-full mx-auto border-t border-accent/15"
    >
      <div className="text-center mb-10 max-w-3xl mx-auto space-y-3">
        <h2 className="font-serif text-3xl md:text-5xl font-light text-ink">
          Client Reviews
        </h2>
        <p className="font-sans text-stone text-xs uppercase tracking-widest font-light leading-relaxed">
          Stories of love, trust, and beautiful memories from our clients
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Animated Review Card */}
        <div className="min-h-[260px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 text-center flex flex-col items-center"
            >
              {/* Gold Star Rating */}
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-relaxed font-light max-w-2xl italic">
                "{active.quote}"
              </blockquote>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-line w-24">
                <cite className="font-sans not-italic text-sm text-ink block font-medium">
                  {active.author}
                </cite>
                <span className="text-[10px] uppercase tracking-widest text-stone mt-1 block whitespace-nowrap">
                  {active.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button 
            onClick={handlePrev}
            className="p-3 border border-line hover:border-accent text-stone hover:text-ink transition-all rounded-full flex items-center justify-center bg-paper/50"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-accent' : 'w-2 bg-line'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="p-3 border border-line hover:border-accent text-stone hover:text-ink transition-all rounded-full flex items-center justify-center bg-paper/50"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
