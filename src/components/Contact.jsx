import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    service: 'Wedding Photography',
    eventDate: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How far in advance should we book for our wedding?',
      a: 'We recommend booking 3 to 6 months in advance, especially during peak wedding months in West Bengal, to ensure date availability for your event.'
    },
    {
      q: 'Do you travel outside Usthi & Kolkata for destination shoots?',
      a: 'Yes! We travel all across West Bengal, neighboring states, and all over India for Pre-Wedding shoots and Destination Weddings.'
    },
    {
      q: 'What is the turnaround time for edited photos and full cinematic videos?',
      a: 'Quick preview highlights are delivered within 5-7 days. Complete color-graded photos, full cinematic films, and photobooks are delivered within 3-4 months.'
    },
    {
      q: 'Can we customize our photography and videography package?',
      a: 'Abolutely. Every wedding and ceremony is unique. We offer customizable packages including drone photography, candid stills, live streaming, and luxury layflat albums.'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submission received:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', contactInfo: '', service: 'Wedding Photography', eventDate: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-28 scroll-mt-20 md:scroll-mt-24 bg-paper px-6 sm:px-8 lg:px-16 w-full mx-auto border-t border-accent/15"
    >
      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
          Get In Touch
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink">
          Let's plan your <span className="italic text-accent">golden day</span>
        </h2>
        <p className="font-sans text-stone text-xs sm:text-sm tracking-wide font-light leading-relaxed max-w-xl mx-auto">
          Whether it's a wedding, pre-wedding shoot, or a family milestone — send us a message or give us a call. We'd love to tell your story.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Contact Information & Interactive Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 text-left space-y-8"
        >
          {/* Contact Details Cards Stack */}
          <div className="space-y-4">
            {/* Phone & Direct Call */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-line bg-paper/60 backdrop-blur-sm transition-colors hover:border-accent/40">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone font-semibold">Direct Calls</p>
                <div className="mt-1 space-y-0.5">
                  <a href="tel:+919046412124" className="block text-sm sm:text-base font-medium text-ink hover:text-accent transition-colors">
                    090464 12124
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-line bg-paper/60 backdrop-blur-sm transition-colors hover:border-accent/40">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone font-semibold">Email Studio</p>
                <a href="mailto:goldenmomentsphotography2026@gmail.com" className="mt-1 block text-xs sm:text-sm font-medium text-ink hover:text-accent transition-colors break-all">
                  goldenmomentsphotography2026@gmail.com
                </a>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-line bg-paper/60 backdrop-blur-sm transition-colors hover:border-accent/40">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone font-semibold">Studio Location</p>
                <p className="mt-1 text-xs sm:text-sm text-ink font-medium">
                  Ushti, West Bengal 743375, India
                </p>
                <p className="mt-0.5 text-[11px] text-stone">
                  Mon - Sun: 9:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Action Button */}
          <a
            href="https://wa.me/919046412124?text=Hi%20Golden%20Moments,%20I'd%20like%20to%20enquire%20about%20your%20photography%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
            Chat on WhatsApp
          </a>

          {/* Embedded Google Map */}
          <div className="overflow-hidden rounded-2xl border-2 border-line/80 shadow-xl">
            <iframe
              title="Golden Moments Photography Location Map"
              src="https://maps.google.com/maps?q=Golden%20Moments%20Photography,%20Ushti&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-52 border-0 filter contrast-[0.9] brightness-[0.95]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Side: Form Container */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 w-full text-left"
        >
          <div className="rounded-2xl border border-line bg-paper/50 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 border border-accent/40 bg-accent/5 rounded-xl text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/50 bg-accent/10 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                    <path d="20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-medium text-ink">Message Sent</h3>
                <p className="font-sans text-xs uppercase tracking-widest text-stone max-w-sm mx-auto">
                  Thank you! We have logged your request and will call you back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl font-light text-ink border-b border-line pb-4">
                  Book Your Session
                </h3>

                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="contact-name" className="text-[10px] uppercase tracking-widest text-stone font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    className="bg-paper/80 border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder-stone/40 focus:border-accent focus:outline-none transition-colors w-full font-light"
                  />
                </div>

                {/* Phone / Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="contact-info" className="text-[10px] uppercase tracking-widest text-stone font-semibold">
                    Phone Number or Email *
                  </label>
                  <input
                    type="text"
                    id="contact-info"
                    name="contactInfo"
                    required
                    value={formData.contactInfo}
                    onChange={handleChange}
                    placeholder=""
                    className="bg-paper/80 border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder-stone/40 focus:border-accent focus:outline-none transition-colors w-full font-light"
                  />
                </div>

                {/* Service Selection Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="contact-service" className="text-[10px] uppercase tracking-widest text-stone font-semibold">
                      Service Needed
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-paper/80 border border-line rounded-lg px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none transition-colors w-full font-light cursor-pointer"
                    >
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                      <option value="Engagement Shoot">Engagement Shoot</option>
                      <option value="Maternity & Newborn">Maternity & Newborn</option>
                      <option value="Rice Ceremony & Birthday">Rice Ceremony & Birthday</option>
                      <option value="Cinematic Video & Album">Cinematic Video & Album</option>
                      <option value="Live Telecast">Live Telecast & Mixing</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="contact-date" className="text-[10px] uppercase tracking-widest text-stone font-semibold">
                      Event Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="contact-date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="bg-paper/80 border border-line rounded-lg px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none transition-colors w-full font-light"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest text-stone font-semibold">
                    Tell us about your event details *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share venue location, timeline, and special requests..."
                    className="bg-paper/80 border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder-stone/40 focus:border-accent focus:outline-none transition-colors w-full resize-none font-light"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 bg-accent hover:bg-amber-600 text-paper text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(235,160,52,0.4)] focus:outline-none"
                >
                  Send Booking Enquiry
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* Lower Part: Frequently Asked Questions Accordion */}
      <div className="mt-20 max-w-4xl mx-auto border-t border-line/80 pt-16 text-left">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            Got Questions?
          </span>
          <h3 className="font-serif text-2xl md:text-4xl font-light text-ink">
            Frequently Asked <span className="italic text-gold-shimmer font-normal">Questions</span>
          </h3>
          <p className="text-stone text-xs uppercase tracking-widest font-light">
            Everything you need to know before booking your golden session
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-line/80 bg-paper/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/40"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left font-serif text-lg font-light text-ink hover:text-accent transition-colors"
              >
                <span>{faq.q}</span>
                <span className="ml-4 text-accent text-xl font-bold">{openFaq === idx ? '−' : '+'}</span>
              </button>
              {openFaq === idx && (
                <p className="mt-3 text-xs sm:text-sm text-stone font-light leading-relaxed border-t border-line/40 pt-3">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

