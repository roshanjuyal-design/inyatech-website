import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import { initAnalytics, trackPageView } from './utils/analytics';
import Home from './pages/Home';

// Lazy-loaded page components for code splitting
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function LoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] w-full" aria-live="polite" aria-busy="true">
      <div className="relative w-12 h-12">
        {/* Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-brand-primary/10 border-t-brand-primary animate-spin" />
        {/* Glow */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-accent/30 animate-spin blur-[2px]" />
      </div>
      <p className="mt-4 text-xs text-gray-400 font-display tracking-widest uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Initialize analytics on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // Scroll to top and track page view on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(activeTab);
  }, [activeTab]);

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home key="home" setActiveTab={setActiveTab} />;
      case 'services':
        return <Services key="services" setActiveTab={setActiveTab} />;
      case 'portfolio':
        return <Portfolio key="portfolio" />;
      case 'about':
        return <About key="about" setActiveTab={setActiveTab} />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Home key="home" setActiveTab={setActiveTab} />;
    }
  };

  const pageTransitionVariants = {
    initial: {
      opacity: 0,
      y: 15,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const // Premium ease-out cubic
      }
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.3,
        ease: [0.7, 0, 0.84, 0] as const // Premium ease-in
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-brand-primary/30 selection:text-white">
      {/* Immersive Space Atmosphere */}
      <BackgroundEffect />

      {/* Persistent Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area with Page Animations */}
      <main className="flex-grow pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionVariants}
          >
            <Suspense fallback={<LoadingFallback />}>
              {renderPage()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 group flex items-center justify-end">
        {/* Tooltip */}
        <div className="absolute right-14 bg-[#0a0524]/95 border border-white/10 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl backdrop-blur-md z-50">
          Chat with us on WhatsApp
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#0a0524] border-t border-r border-white/10" />
        </div>

        {/* Pulse Animations */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-3 rounded-full border border-green-500/30 pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.45, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-6 rounded-full border border-green-500/20 pointer-events-none"
        />

        {/* Floating Button Anchor */}
        <a
          href="https://wa.me/919160693693?text=Hi%20Roshan,%0A%0AI%20visited%20the%20InyaTech%20website%20and%20I'm%20interested%20in%20discussing%20a%20project.%0A%0APlease%20let%20me%20know%20when%20you're%20available.%0A%0AThank%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:shadow-[0_0_30px_rgba(34,197,94,0.65)] hover:scale-105 transition-all duration-300 cursor-pointer relative"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Official WhatsApp Logo SVG */}
          <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
