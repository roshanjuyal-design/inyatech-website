import { motion } from 'framer-motion';
import { CheckCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import roshanImg from '../assets/roshdan.webp';

interface AboutProps {
  setActiveTab?: (tab: string) => void;
}

export default function About({ setActiveTab }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 85, damping: 18 }
    }
  };

  const highlights = [
    { title: "Modern Web Development", desc: "Crafting interfaces using the latest React stack and type-safe systems." },
    { title: "Performance Focused", desc: "Optimizing load speeds and clean assets for flawless response times." },
    { title: "Business-Oriented Solutions", desc: "Aligning digital architectures directly with automation and operations workflows." },
    { title: "Long-Term Support", desc: "Providing continuous maintenance, security updates, and active support." }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-24 md:pt-36 pb-16 md:pb-24 max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left min-h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Portrait & Card */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 relative w-full flex items-center justify-center"
        >
          {/* Neon Glow Behind */}
          <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 rounded-full filter blur-[70px] -z-10 animate-pulse duration-[10000ms]" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-brand-primary/40"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.15, 0.7, 0.15],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 6 + Math.random() * 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Portrait Container Frame */}
          <div className="w-full max-w-[340px] aspect-[4/5] rounded-[32px] p-[1.5px] bg-gradient-to-tr from-brand-primary/30 via-white/5 to-brand-accent/30 shadow-2xl relative group overflow-hidden">
            {/* Dark inner layer */}
            <div className="w-full h-full bg-[#0a0524]/90 rounded-[30.5px] relative overflow-hidden flex flex-col items-center justify-end border border-white/5">
              
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
              
              {/* Real Portrait Image */}
              <img 
                src={roshanImg} 
                alt="Roshan Juyal" 
                loading="lazy"
                className="w-full h-full object-cover object-top absolute inset-0 opacity-85 group-hover:scale-105 transition-transform duration-700 [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]" 
              />
              
              {/* Scanner/glimmer overlay */}
              <div className="animate-scan z-20" />
            </div>

            {/* Overlapping Glass Card details */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 90 }}
              className="absolute bottom-6 -right-4 md:-right-8 w-[230px] bg-[#0a0524]/80 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl flex flex-col space-y-2 text-left z-20 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono tracking-wider text-brand-primary font-bold">ROSHAN JUYAL</span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-[9px] font-bold text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available Now
                </span>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-white font-display">Founder &amp; Web Developer</h4>
                <p className="text-[10px] text-gray-400 font-semibold">Available for New Projects</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Copy & Timeline */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Section Badge & Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-primary select-none w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet the Founder</span>
            </div>
            
            <h1 className="text-3xl sm:text-4.5xl md:text-5xl lg:text-5.5xl font-extrabold font-display leading-[1.1] tracking-tight text-white">
              Helping Local Businesses Grow with <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent glow-text-purple">Modern Technology</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            I'm Roshan, the founder of InyaTech. I help local businesses establish a professional digital presence by building modern websites, fast web applications, and custom business solutions. My mission is to make high-quality technology accessible to businesses of every size.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-primary/25 backdrop-blur-md p-5 rounded-2xl flex items-start gap-3 hover:scale-[1.02] transition-all duration-300 hover:bg-white/[0.04]"
              >
                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white tracking-tight font-display">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="space-y-6 pt-6 border-t border-white/5">
            <h2 className="text-lg font-bold font-display text-white tracking-tight">Our Timeline</h2>
            <div className="relative border-l border-white/10 ml-3 space-y-8">
              {/* 2026 milestone */}
              <div className="relative pl-8 group">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-primary border-4 border-dark-bg transition-transform duration-300 group-hover:scale-125" />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded">
                    2026
                  </span>
                  <h3 className="text-sm font-bold text-white pt-1 font-display">Founded InyaTech</h3>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-xl font-sans">
                    Launched InyaTech to provide clean-coded websites and automated operations software for regional businesses.
                  </p>
                </div>
              </div>
              
              {/* Future Vision milestone */}
              <div className="relative pl-8 group">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-secondary border-4 border-dark-bg transition-transform duration-300 group-hover:scale-125" />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-brand-secondary bg-brand-secondary/10 px-2.5 py-0.5 rounded">
                    Future Vision
                  </span>
                  <h3 className="text-sm font-bold text-white pt-1 font-display">Expanding Solutions</h3>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-xl font-sans">
                    Building powerful business software and AI solutions for local businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button
              onClick={() => setActiveTab && setActiveTab('contact')}
              className="inline-flex items-center gap-2.5 px-8 py-4 font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-primary rounded-2xl shadow-xl shadow-brand-primary/10 hover:shadow-brand-accent/25 hover:scale-[1.02] transition-all duration-300 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
            >
              Let's Build Something Great Together
              <ArrowUpRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
