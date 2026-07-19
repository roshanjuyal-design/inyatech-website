import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl bg-[#0a0524]/60 backdrop-blur-xl border border-white/[0.08] relative shadow-lg">
          
          {/* Logo */}
          <Link 
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded-xl"
            aria-label="InyaTech Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent p-[1px] shadow-lg shadow-brand-primary/20">
              <div className="w-full h-full bg-dark-bg rounded-[11px] flex items-center justify-center transition-transform group-hover:scale-95 duration-300">
                <Cpu className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent group-hover:glow-text-purple transition-all duration-300">
              Inya<span className="text-brand-primary">Tech</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id === 'home' ? '/' : `/${item.id}`}
                className={({ isActive }) => cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg",
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                )}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-accent hover:to-brand-primary shadow-lg shadow-brand-primary/20 hover:shadow-brand-accent/20 cursor-pointer overflow-hidden group hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
            >
              <span className="relative z-10 flex items-center gap-1">
                Book a Call <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg p-1"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu-drawer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
 
      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-[88px] z-40 md:hidden"
          >
            <div className="bg-[#0a0524]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 flex flex-col space-y-4 shadow-xl">
              {menuItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.id === 'home' ? '/' : `/${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => cn(
                    "text-left py-2 px-4 rounded-lg transition-all duration-200 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                    isActive
                      ? "bg-brand-primary/10 text-brand-primary border-l-2 border-brand-primary"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </NavLink>
              ))}
              <hr className="border-white/10" />
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-1 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary shadow-[0_0_15px_rgba(139,92,246,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0524]"
              >
                Book a Call <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
