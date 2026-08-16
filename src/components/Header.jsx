import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Cinema', href: '#cinema' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Shopping', href: '#shopping' },
    { name: 'Review', href: '#review' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-paper/95 backdrop-blur-md border-b border-line py-3 shadow-lg' 
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="w-full px-5 sm:px-8 md:px-16 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" id="nav-logo" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-paper transition-all duration-300 shadow-md group-hover:scale-105 shrink-0">
              <Camera className="w-5 h-5 stroke-[1.75]" />
            </div>
            <span className="font-serif text-lg sm:text-xl leading-none flex items-center gap-1.5">
              <span className="text-gold-shimmer font-semibold">Golden</span>
              <span className="text-ink font-light">Moments</span>
              <span className="text-accent font-semibold" >Photography</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-xs uppercase tracking-widest text-stone hover:text-accent transition-colors py-1 font-medium"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right side: Phone Call CTA + Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919046412124"
              className="hidden sm:flex items-center gap-2 rounded-full border border-accent/50 px-4 py-2 text-xs uppercase tracking-widest text-accent transition-all duration-300 hover:bg-accent hover:text-paper hover:shadow-[0_0_20px_rgba(235,160,52,0.35)]"
            >
              <Phone width={14} height={14} />
              <span>090464 12124</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-paper/80 text-accent transition-colors hover:bg-accent hover:text-paper focus:outline-none"
            >
              {isMobileMenuOpen ? <X width={20} height={20} /> : <Menu width={20} height={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-40 lg:hidden bg-paper/98 border-b border-line shadow-2xl backdrop-blur-xl px-6 py-8"
          >
            <div className="flex flex-col space-y-5 text-center max-w-sm mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl text-ink hover:text-accent transition-colors py-1 tracking-wide border-b border-line/40 pb-3"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile CTAs Stack */}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+919046412124"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-accent text-paper text-xs uppercase tracking-widest font-semibold shadow-lg hover:bg-amber-600 transition-colors"
                >
                  <Phone width={16} height={16} />
                  Call Studio: 090464 12124
                </a>

                <a
                  href="https://wa.me/919046412124"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 text-xs uppercase tracking-widest font-semibold hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  <MessageCircle width={16} height={16} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

