import { motion } from 'framer-motion';
import { 
  Utensils, Stethoscope, GraduationCap, Dumbbell, ShoppingBag, Briefcase, Award, Building2, Sparkles, ArrowRight 
} from 'lucide-react';
import { cn } from '../utils/cn';

interface IndustryItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  glowColor: string;
  iconBg: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
  }
};

export default function IndustriesWeServe() {
  const industries: IndustryItem[] = [
    {
      name: "Restaurants & Cafes",
      description: "Beautiful online menus, local maps SEO, and table booking reservation templates.",
      icon: <Utensils className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(244, 63, 94, 0.15)",
      iconBg: "bg-rose-500/10 border-rose-500/20 text-rose-400"
    },
    {
      name: "Clinics & Hospitals",
      description: "Doctor schedules, healthcare services information, and patient booking portals.",
      icon: <Stethoscope className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(20, 184, 166, 0.15)",
      iconBg: "bg-teal-500/10 border-teal-500/20 text-teal-400"
    },
    {
      name: "Schools & Academies",
      description: "Academic calendars, curriculum guides, parent inquiries, and educational portals.",
      icon: <GraduationCap className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(168, 85, 247, 0.15)",
      iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    },
    {
      name: "Gyms & Fitness Centers",
      description: "Daily class timetables, trainer profiles, and membership pricing tier calculations.",
      icon: <Dumbbell className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(16, 185, 129, 0.15)",
      iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
    },
    {
      name: "Retail & Local Stores",
      description: "Interactive digital catalogs, local business hour listings, and click-and-collect pathways.",
      icon: <ShoppingBag className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(245, 158, 11, 0.15)",
      iconBg: "bg-amber-500/10 border-amber-500/20 text-amber-400"
    },
    {
      name: "Small & Medium Businesses",
      description: "Modern consulting portfolio grids, lead capture forms, and client services listings.",
      icon: <Briefcase className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(59, 130, 246, 0.15)",
      iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400"
    },
    {
      name: "Political Leaders & Campaigners",
      description: "Biography achievement timelines, press announcements, and volunteer signups.",
      icon: <Award className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(236, 72, 153, 0.15)",
      iconBg: "bg-pink-500/10 border-pink-500/20 text-pink-400"
    },
    {
      name: "Real Estate & Construction",
      description: "Stunning property project galleries, virtual tours, and consultation request pipelines.",
      icon: <Building2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(6, 182, 212, 0.15)",
      iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
    }
  ];

  return (
    <section className="space-y-16 relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4.5 py-1.5 text-xs font-semibold text-brand-primary select-none w-fit"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Focus Areas</span>
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">Industries We Serve</motion.h2>
        <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto">
          We help businesses across multiple industries establish a strong digital presence with modern, high-performance websites.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {industries.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-white/[0.01] border border-white/[0.06] hover:border-white/12 backdrop-blur-md rounded-[24px] p-6 text-left flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1.5 hover:bg-white/[0.03] shadow-lg relative group"
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle 180px at 50% 0%, ${item.glowColor}, transparent 80%)`
              }}
            />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-4">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-110 duration-500",
                item.iconBg
              )}>
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white tracking-tight font-display">{item.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">{item.description}</p>
              </div>
            </div>

            {/* solutions badge */}
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-[9.5px] font-semibold font-mono text-gray-400 uppercase tracking-wider group-hover:text-green-400 transition-colors duration-300">
                Website Solutions Available
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-8 border-t border-white/5 max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <p className="text-gray-300 text-base font-semibold font-display">Don't see your industry?</p>
          <p className="text-gray-400 text-sm font-sans">We build custom websites for every type of business.</p>
        </div>
        <a
          href="https://wa.me/919160693693?text=Hi%20Roshan,%0A%0AI%20visited%20the%20InyaTech%20website%20and%20I'm%20interested%20in%20discussing%20a%20project.%0A%0APlease%20let%20me%20know%20when%20you're%20available.%0A%0AThank%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-primary rounded-2xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-accent/20 cursor-pointer transition-all duration-300 hover:scale-[1.03] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
        >
          Discuss Your Project
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 duration-300" />
        </a>
      </div>
    </section>
  );
}
