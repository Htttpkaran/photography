import React from 'react';
import CountUpModule from 'react-countup';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const CountUp = typeof CountUpModule === 'function'
  ? CountUpModule
  : (CountUpModule.default?.default || CountUpModule.default || CountUpModule);

export default function Stats() {
  const stats = [
    {
      end: 350,
      suffix: '+',
      label: 'EVENTS CAPTURED',
    },
    {
      end: 8,
      suffix: '+',
      label: 'YEARS OF EXPERIENCE',
    },
    {
      end: 500,
      suffix: '+',
      label: 'HAPPY FAMILIES',
    },
    {
      end: 5.0,
      decimals: 1,
      label: 'GOOGLE RATING',
      hasStar: true,
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#1a140e] border-y border-line/70 w-full mx-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center items-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-2"
            >
              <div className="font-serif font-light md:font-normal tabular-nums text-4xl sm:text-5xl md:text-6xl text-gold-shimmer tracking-wide flex items-center justify-center gap-1">
                <CountUp
                  end={stat.end}
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix || ''}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.hasStar && (
                  <Star className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 fill-accent text-accent inline-block -mt-1" />
                )}
              </div>
              <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-stone font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
