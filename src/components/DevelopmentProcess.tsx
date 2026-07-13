import { motion } from 'framer-motion';
import { 
  MessageCircle, FileText, Palette, Code, CheckCircle, Rocket, Sparkles, ArrowRight 
} from 'lucide-react';
import { cn } from '../utils/cn';

interface ProcessStep {
  title: string;
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

export default function DevelopmentProcess() {
  const processSteps: ProcessStep[] = [
    {
      title: "Discovery",
      description: "We understand your business, goals, audience, and requirements.",
      icon: <MessageCircle className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(139, 92, 246, 0.15)",
      iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    },
    {
      title: "Planning",
      description: "We prepare the structure, content strategy, and user experience.",
      icon: <FileText className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(59, 130, 246, 0.15)",
      iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400"
    },
    {
      title: "Design",
      description: "Modern UI/UX design focused on branding, trust, and conversions.",
      icon: <Palette className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(217, 70, 239, 0.15)",
      iconBg: "bg-pink-500/10 border-pink-500/20 text-pink-400"
    },
    {
      title: "Development",
      description: "We build a fast, secure, responsive, and scalable website.",
      icon: <Code className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(6, 182, 212, 0.15)",
      iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
    },
    {
      title: "Testing",
      description: "Every page is tested across devices, browsers, and screen sizes.",
      icon: <CheckCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(16, 185, 129, 0.15)",
      iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
    },
    {
      title: "Launch & Support",
      description: "We deploy your website and continue providing updates and long-term support.",
      icon: <Rocket className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "rgba(249, 115, 22, 0.15)",
      iconBg: "bg-orange-500/10 border-orange-500/20 text-orange-400"
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
          <span>How We Work</span>
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">Our Development Process</motion.h2>
        <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto">
          A transparent and structured process that ensures every project is delivered with quality, performance, and attention to detail.
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Background Connector Lines */}
        {/* Desktop Horizontal Line */}
        <div className="absolute top-[4.5rem] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent opacity-20 hidden lg:block -z-10" />
        
        {/* Mobile Vertical Line */}
        <div className="absolute left-[3.25rem] top-10 bottom-10 w-[1.5px] bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent opacity-20 block lg:hidden -z-10" />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/[0.01] border border-white/[0.06] hover:border-white/12 backdrop-blur-md rounded-[24px] p-6 lg:p-7 flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-4 lg:gap-5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:bg-white/[0.03] shadow-lg relative group"
            >
              {/* Hover Glow inside card */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle 180px at 50% 0%, ${step.glowColor}, transparent 80%)`
                }}
              />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Step Icon Container */}
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-110 duration-500",
                step.iconBg
              )}>
                {step.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-1.5">
                <div className="flex flex-col lg:items-center gap-0.5">
                  <span className="text-[9px] font-mono font-bold text-brand-primary uppercase tracking-wider">Step {idx + 1}</span>
                  <h3 className="text-base font-bold text-white font-display tracking-tight">{step.title}</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Centered CTA */}
      <div className="text-center pt-8 space-y-6">
        <p className="text-gray-300 text-sm font-semibold tracking-wide uppercase">Ready to start your project?</p>
        <a
          href="https://wa.me/919160693693?text=Hi%20Roshan,%0A%0AI%20visited%20the%20InyaTech%20website%20and%20I'm%20interested%20in%20discussing%20a%20project.%0A%0APlease%20let%20me%20know%20when%20you're%20available.%0A%0AThank%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-primary rounded-2xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-accent/20 cursor-pointer transition-all duration-300 hover:scale-[1.03] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
        >
          Start Your Project
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 duration-300" />
        </a>
      </div>
    </section>
  );
}
