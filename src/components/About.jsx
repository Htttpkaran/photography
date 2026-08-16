import React from 'react';
import { Camera, Handshake, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const features = [
    {
      title: 'Cinematic Craft',
      description: 'Story-driven photography and films with rich, timeless colour.',
      icon: <Camera className="w-5 h-5" />
    },
    {
      title: 'Personal Touch',
      description: 'We blend into your family so every candid moment stays natural.',
      icon: <Handshake className="w-5 h-5" />
    },
    {
      title: 'Trusted Locally',
      description: 'Rated 5.0 stars by families across West Bengal.',
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section 
      id="about" 
      className="relative overflow-hidden py-20 md:py-28 scroll-mt-20 md:scroll-mt-24 bg-paper px-6 sm:px-8 lg:px-16 w-full mx-auto"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Side: Overlapping Dual Tilted Photos with Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="relative mx-auto h-[440px] sm:h-[480px] w-full max-w-md"
        >
          {/* Top Left Tilted Photo */}
          <div className="absolute left-0 top-6 h-72 sm:h-80 w-60 sm:w-64 -rotate-6 overflow-hidden rounded-2xl border-4 border-line/80 shadow-2xl shadow-black/60 transition-transform duration-500 hover:rotate-0">
            <img
              src="/about/about01.webp"
              alt="Golden Moments wedding moment 1"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Bottom Right Tilted Photo */}
          <div className="absolute bottom-0 right-0 h-72 sm:h-80 w-60 sm:w-64 rotate-6 overflow-hidden rounded-2xl border-4 border-line/80 shadow-2xl shadow-black/60 transition-transform duration-500 hover:rotate-0">
            <img
              src="/about/about02.webp"
              alt="Golden Moments wedding moment 2"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Central Floating Badge Overlay */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/40 bg-paper/90 text-center shadow-xl shadow-black/60 backdrop-blur-md"
          >
            <span className="font-serif text-3xl text-accent font-semibold">8+</span>
            <span className="px-2 text-[10px] uppercase tracking-widest text-stone font-medium leading-tight">
              Years of Stories
            </span>
          </motion.div>
        </motion.div>

        {/* Right Side: Text & Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-left space-y-6"
        >
          {/* Eyebrow Tag */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
              About Us
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-ink font-light">
            Every family has a story.{' '}
            <span className="italic text-accent block sm:inline font-normal">We frame it in gold.</span>
          </h2>

          {/* Story Body Paragraph */}
          <p className="leading-relaxed text-stone text-sm sm:text-base font-light">
            Based in <strong className="text-ink font-medium">Ushti, West Bengal 743375</strong>, Golden Moments Photography is a full-service photography and film studio for life's most precious celebrations. From the first haldi smear to the final vidaai tear, from a newborn's first yawn to a birthday's hundredth smile — we are there, quietly turning seconds into heirlooms.
          </p>

          {/* Feature Rows */}
          <div className="pt-4 space-y-5">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex items-start gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-paper">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-ink font-medium">{feature.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-stone font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

