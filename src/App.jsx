import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Cinema = lazy(() => import('./components/Cinema'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Shopping = lazy(() => import('./components/Shopping'));
const Stats = lazy(() => import('./components/Stats'));
const Review = lazy(() => import('./components/Review'));
const Founder = lazy(() => import('./components/Founder'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'));

export default function App() {
  return (
    <div className="bg-paper text-ink min-h-screen selection:bg-accent selection:text-paper font-sans">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Services />
          <Cinema />
          <Portfolio />
          <Shopping />
          <Stats />
          <Review />
          <Founder />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}
