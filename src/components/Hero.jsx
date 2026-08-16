import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  '/hero/h01.webp',
  '/hero/h02.webp',
  '/hero/h03.webp',
  '/hero/h04.webp',
  '/hero/h05.webp',
  '/hero/h06.webp',
];

export default function Hero() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Preload all hero images so click transitions are instant and smooth
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-slide every 5 seconds, resetting interval when user manually clicks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIdx]);

  const handlePrev = () => {
    setCurrentImageIdx((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0], // smooth cubic-bezier
      },
    },
  };

  return (
    <section 
      id="home"
      className="vignette relative min-h-screen w-full flex items-end justify-center bg-paper select-none overflow-hidden"
    >
      {/* Background Image Slider with smooth 700ms crossfade + Ken Burns zoom-in */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {heroImages.map((src, index) => (
          <img
            key={`${src}-${index === currentImageIdx ? 'active' : 'idle'}`}
            src={src}
            alt={`Hero Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out filter brightness-[0.9] contrast-[0.98] ${
              index === currentImageIdx ? 'opacity-100 z-10 animate-kenburns' : 'opacity-0 z-0 pointer-events-none'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrow Buttons */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center h-11 w-11 rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-110 focus:outline-none group shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center h-11 w-11 rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-110 focus:outline-none group shadow-lg"
      >
        <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
      </button>


      {/* Hero Content Overlaid centered at bottom */}
      <div className="relative z-20 w-full px-6 sm:px-12 pb-20 sm:pb-24 text-white font-cormorant flex justify-center" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.3em] text-white/90 mb-3 font-cormorant"
          >
            Based in Ushti, West Bengal &middot; <span className="text-gold-shimmer font-semibold">Golden Moments Photography Studio</span>
          </motion.p>

          {/* Headline - Cormorant Garamond, balanced size, white with golden accent */}
          <motion.h1
            variants={itemVariants}
            className="font-cormorant text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wide leading-[1.2] mb-6 text-white font-light"
          >
            Every family has a story. <br className="hidden md:inline" /> We frame it in <span className="text-gold-shimmer font-bold">gold.</span>
          </motion.h1>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#portfolio"
              className="px-6 py-3 border border-white text-xs uppercase tracking-widest text-white hover:bg-white hover:text-paper transition-all duration-300 font-medium"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-accent border border-accent text-xs uppercase tracking-widest text-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 font-medium"
            >
              Book Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Golden Moments Marquee Ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden border-t border-accent/20 bg-paper/85 py-3 backdrop-blur-md">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {[
            'Pre Wedding / Post Wedding Shoot',
            'Engagement Shoot',
            'Wedding Shoot',
            'Maternity & New Born Shoot',
            'Rice Ceremony & Birthday Shoot',
            'Album & Cinematic Video',
            'Live Telecast & Online Mixing',
            'Pre Wedding / Post Wedding Shoot',
            'Engagement Shoot',
            'Wedding Shoot',
            'Maternity & New Born Shoot',
            'Rice Ceremony & Birthday Shoot',
            'Album & Cinematic Video',
            'Live Telecast & Online Mixing',
          ].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8 font-serif text-sm md:text-base italic text-stone/80">
              {item}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent/80">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
              </svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

