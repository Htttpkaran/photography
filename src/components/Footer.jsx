import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Studio', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Cinematic Films', href: '#cinema' },
    { name: 'Portfolio Showcase', href: '#portfolio' },
    { name: 'Golden Store (Prints)', href: '#shopping' },
    { name: 'Client Reviews', href: '#review' },
    { name: 'Book A Session', href: '#contact' },
  ];

  const specialistServices = [
    'Bengali Wedding Photography',
    'Cinematic Pre-Wedding Shoot',
    'Rice Ceremony (Mukhe Bhat)',
    'Maternity & Newborn Care',
    'Birthday Celebrations',
    'Drone & Live Telecast',
  ];

  const storeItems = [
    'Handcrafted Teak Frames',
    'Royal Velvet Photobooks',
    'Golden Glow Presets',
    'Cinematic Wedding LUTs',
    'Gift Vouchers',
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <InstagramIcon />, href: 'https://instagram.com' },
    { name: 'Facebook', icon: <FacebookIcon />, href: 'https://www.facebook.com/goldenmomentsofficial2021' },
    { name: 'YouTube', icon: <YoutubeIcon />, href: 'https://www.youtube.com/@goldenmomentsphotography2025' },
    { name: 'WhatsApp', icon: <MessageCircle className="w-4 h-4" />, href: 'https://wa.me/919046412124' },
    { name: 'Email', icon: <Mail className="w-4 h-4" />, href: 'mailto:goldenmomentsphotography2025@gmail.com' },
  ];

  return (
    <footer className="bg-paper border-t border-accent/20 pt-16 pb-8 px-6 md:px-12 lg:px-20 w-full mx-auto text-left">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top CTA Banner */}
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 via-paper to-accent/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-accent">
              Reserve Your Dates
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-ink mt-1">
              Planning a wedding or special milestone?
            </h3>
            <p className="text-xs text-stone font-light mt-1">
              Let's craft timeless memories together. Contact our team in Ushti today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919046412124"
              className="px-5 py-3 rounded-full border border-accent/50 text-accent hover:bg-accent hover:text-paper text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call 090464 12124
            </a>
            <a
              href="https://wa.me/919046412124"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* 4-Column Professional Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand Info & Studio Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Golden Moments Photography" 
                loading="lazy"
                className="h-10 w-auto object-contain" 
              />
              <span className="font-serif text-lg sm:text-xl leading-none flex items-center gap-1.5 flex-wrap">
                <span className="text-gold-shimmer font-semibold">Golden</span>
                <span className="text-ink font-light">Moments</span>
                <span className="text-accent font-semibold" >Photography</span>
              </span>
            </div>

            <p className="text-xs text-stone font-light leading-relaxed">
              Golden Moments Photography &amp; Films is Ushti’s premier wedding and story-telling studio. We capture pure emotions, golden rituals, and family love framed to last forever.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-stone font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Ushti, South 24 Parganas, West Bengal 743375, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+919046412124" className="hover:text-accent transition-colors">090464 12124 / +91 98300 12345</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:goldenmomentsphotography2025@gmail.com" className="hover:text-accent transition-colors break-all">
                  goldenmomentsphotography2025@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>Mon - Sun: 9:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-medium text-ink border-b border-line/60 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-stone hover:text-accent transition-colors font-light flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-accent/50 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-medium text-ink border-b border-line/60 pb-2">
              Specialist Services
            </h4>
            <ul className="space-y-2">
              {specialistServices.map((service) => (
                <li key={service} className="text-xs text-stone font-light flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60 shrink-0"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Golden Store Products (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-medium text-ink border-b border-line/60 pb-2">
              Golden Store
            </h4>
            <ul className="space-y-2">
              {storeItems.map((item) => (
                <li key={item}>
                  <a
                    href="#shopping"
                    className="text-xs text-stone hover:text-accent transition-colors font-light block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Bottom Bar */}
        <div className="border-t border-line/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-paper hover:bg-accent border border-line/80 hover:border-accent transition-all duration-300 p-2.5 rounded-full shadow-sm"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Location Tagline */}
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-widest text-stone font-light">
              &copy; {currentYear} <span className="text-gold-shimmer font-semibold">Golden Moments Photography &amp; Films</span>. All Rights Reserved.
            </p>
            <p className="text-[10px] text-stone/60 font-light">
              Crafted with excellence in Ushti, West Bengal, India.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
