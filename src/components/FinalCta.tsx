import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  setActiveTab: (tab: string) => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
  }
};

export default function FinalCta({ setActiveTab }: FinalCtaProps) {
  const features = [
    'Free Consultation',
    'Mobile-Friendly Website',
    'Fast Delivery'
  ];

  return (
    <section className="relative w-full py-6">
      {/* Premium Full-Width Glass Card */}
      <motion.div
        variants={itemVariants}
        className="w-full bg-gradient-to-tr from-[#0a0524]/90 to-[#120736]/90 border border-white/10 rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl space-y-8 backdrop-blur-2xl"
      >
        {/* Soft Glowing Orbs */}
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-brand-primary/20 rounded-full blur-[90px] -z-10 animate-pulse duration-[8000ms] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-brand-accent/20 rounded-full blur-[90px] -z-10 animate-pulse duration-[8000ms] pointer-events-none" />

        {/* Subtle Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-brand-secondary/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.15, 0.6, 0.15],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Grid backdrop pattern inside card */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none -z-10" />

        {/* Content Group */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-primary select-none w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Transform Your Business?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
            Let's Build Something Your <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent glow-text-purple">Customers Will Love.</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-lg mx-auto">
            Whether you need a modern business website, a landing page, or a custom digital solution, InyaTech is ready to help you build a strong online presence.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-gray-300 pt-2">
          {features.map((feat) => (
            <span key={feat} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4.5 py-2 font-bold select-none">
              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              {feat}
            </span>
          ))}
        </div>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Primary CTA */}
          <a
            href="https://wa.me/919160693693?text=Hi%20Roshan,%0A%0AI%20visited%20the%20InyaTech%20website%20and%20I'm%20interested%20in%20discussing%20a%20project.%0A%0APlease%20let%20me%20know%20when%20you're%20available.%0A%0AThank%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-primary rounded-2xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-accent/20 cursor-pointer transition-all duration-300 hover:scale-[1.03] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            Chat on WhatsApp
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
          </a>

          {/* Secondary CTA */}
          <button
            onClick={() => {
              setActiveTab('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            View Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
}
