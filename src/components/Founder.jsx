import React from 'react';
import { Camera, Award, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Founder() {
  return (
    <section 
      id="founder" 
      className="py-20 md:py-28 scroll-mt-20 md:scroll-mt-24 bg-paper px-6 md:px-16 lg:px-20 w-full mx-auto border-t border-accent/15"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Founder Details, Bio & Quote */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-accent flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Meet The Founder
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink leading-tight">
            Behind the <span className="italic text-gold-shimmer font-normal">Lens</span> &amp; Storytelling
          </h2>

          <div className="pt-2 pb-1 space-y-1">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-accent font-medium tracking-wide">
              Manoj Baidya
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] text-stone/80 font-medium">
              Founder &amp; Lead Photographer
            </p>
          </div>

          <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
            With over 8 years of passion in Bengali wedding cinematography, candid portraits, and event storytelling, our mission is to deliver timeless, high-definition visual legacies for every family in West Bengal.
          </p>

          {/* Badges / Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 rounded-xl bg-paper/80 border border-line/80 space-y-1">
              <Camera className="w-5 h-5 text-accent" />
              <h4 className="font-serif text-sm text-ink font-medium">Lead Director</h4>
              <p className="text-[10px] text-stone uppercase tracking-wider">Photography</p>
            </div>

            <div className="p-3.5 rounded-xl bg-paper/80 border border-line/80 space-y-1">
              <Award className="w-5 h-5 text-accent" />
              <h4 className="font-serif text-sm text-ink font-medium">8+ Years</h4>
              <p className="text-[10px] text-stone uppercase tracking-wider">Craft Experience</p>
            </div>

            <div className="p-3.5 sm:col-span-1 col-span-2 rounded-xl bg-paper/80 border border-line/80 space-y-1">
              <Sparkles className="w-5 h-5 text-accent" />
              <h4 className="font-serif text-sm text-ink font-medium">500+ Stories</h4>
              <p className="text-[10px] text-stone uppercase tracking-wider">Happy Families</p>
            </div>
          </div>

          {/* Direct WhatsApp Action Button */}
          <div className="pt-4">
            <a
              href="https://wa.me/919046412124?text=Hi%20Golden%20Moments%20Photography,%20I%20would%20like%20to%20connect%20with%20the%20Founder."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600/20 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-600 hover:text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Founder Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl group">
            <img 
              src="/founder/founder.webp" 
              alt="Founder - Golden Moments Photography" 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback photo until user replaces /founder.jpg
                e.target.src = '/about/about01.webp';
              }}
            />
            {/* Soft Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-left pointer-events-none">
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
                Founder &amp; Creative Director
              </span>
              <h3 className="font-serif text-2xl text-white font-medium mt-0.5">
                Manoj Baidya
              </h3>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
