import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Zap, Sparkles, CheckCircle, Rocket, MessageSquare, Target, Handshake, MonitorSmartphone } from 'lucide-react';
import roshanImg from '../assets/roshdan.webp';
import DevelopmentProcess from '../components/DevelopmentProcess';
import IndustriesWeServe from '../components/IndustriesWeServe';
import Faq from '../components/Faq';
import FinalCta from '../components/FinalCta';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 125, damping: 20 }
    }
  };

  const features = [
    {
      icon: <Code className="w-5 h-5 text-brand-primary" />,
      title: "Clean & Modern Code",
      description: "We build systems using robust, scalable, type-safe structures that guarantee maintainability."
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-secondary" />,
      title: "Blazing Performance",
      description: "Optimized for speed and flawless load times, providing an exceptional experience on any device."
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-accent" />,
      title: "Secure by Design",
      description: "Enterprise-grade encryption and protocol standards integrated into the foundation."
    }
  ];

  const trustItems = [
    { title: "Trusted by Local Businesses", desc: "Verifiable partnerships and custom deployments built for regional leaders.", icon: <CheckCircle className="w-5 h-5 text-brand-primary" /> },
    { title: "Fast Delivery", desc: "Agile sprints and clean code templates to accelerate your speed-to-market.", icon: <CheckCircle className="w-5 h-5 text-brand-secondary" /> },
    { title: "Mobile Friendly", desc: "Fluid layouts audited on real iOS and Android devices for seamless interactions.", icon: <CheckCircle className="w-5 h-5 text-brand-accent" /> },
    { title: "SEO Optimized", desc: "Fast indexing, structured markup metadata, and optimal core web vitals.", icon: <CheckCircle className="w-5 h-5 text-teal-400" /> },
    { title: "Modern UI/UX", desc: "Vibrant dark mode aesthetics, intuitive flows, and micro-interactions.", icon: <CheckCircle className="w-5 h-5 text-pink-400" /> }
  ];

  const statsItems = [
    {
      icon: <MonitorSmartphone className="w-5 h-5 text-brand-primary animate-pulse" />,
      title: "Responsive Design",
      desc: "Optimized for desktop, tablet, and mobile devices."
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-secondary" />,
      title: "Fast Performance",
      desc: "Built for speed, SEO, and excellent user experience."
    },
    {
      icon: <Code className="w-5 h-5 text-brand-accent" />,
      title: "Modern Technologies",
      desc: "Built using modern web technologies and best practices."
    },
    {
      icon: <Handshake className="w-5 h-5 text-teal-400" />,
      title: "Founder-Led Support",
      desc: "Work directly with the founder from consultation to delivery."
    }
  ];

  const whyChooseItems = [
    {
      icon: <Rocket className="w-5 h-5 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />,
      title: "Modern Design",
      description: "Beautiful, premium, and mobile-first websites designed to impress your customers.",
      glowColor: "rgba(139, 92, 246, 0.15)",
      iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />,
      title: "Fast Performance",
      description: "Optimized for speed, SEO, accessibility, and an excellent user experience.",
      glowColor: "rgba(59, 130, 246, 0.15)",
      iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400"
    },
    {
      icon: <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />,
      title: "Secure & Reliable",
      description: "Built with modern technologies following security best practices.",
      glowColor: "rgba(6, 182, 212, 0.15)",
      iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-green-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />,
      title: "Direct Support",
      description: "Talk directly with the founder through WhatsApp. No middlemen.",
      glowColor: "rgba(34, 197, 94, 0.15)",
      iconBg: "bg-green-500/10 border-green-500/20 text-green-400"
    },
    {
      icon: <Target className="w-5 h-5 text-pink-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />,
      title: "Business Focused",
      description: "Every website is designed with your business goals and customer conversion in mind.",
      glowColor: "rgba(217, 70, 239, 0.15)",
      iconBg: "bg-pink-500/10 border-pink-500/20 text-pink-400"
    },
    {
      icon: <Handshake className="w-5 h-5 text-amber-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />,
      title: "Long-Term Partnership",
      description: "We don't disappear after delivery. We provide ongoing improvements and support.",
      glowColor: "rgba(245, 158, 11, 0.15)",
      iconBg: "bg-amber-500/10 border-amber-500/20 text-amber-400"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-20 md:space-y-32 pt-24 md:pt-36 pb-16 md:pb-24 max-w-7xl mx-auto px-4 md:px-8 overflow-x-hidden"
    >
      {/* HERO SECTION */}
      <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[70vh]">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-primary select-none w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted Website Development Partner</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7.5xl font-extrabold font-display leading-[1.1] md:leading-[1.05] tracking-tight text-white"
          >
            Professional <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent glow-text-purple">Websites</span> <br />
            That Help <br />
            Businesses Grow.
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed"
          >
            We design and build modern, fast, and conversion-focused business websites that help local businesses establish a strong online presence and attract more customers.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="https://wa.me/919160693693?text=Hi%20Roshan,%0A%0AI%20visited%20the%20InyaTech%20website%20and%20I'm%20interested%20in%20discussing%20a%20project.%0A%0APlease%20let%20me%20know%20when%20you're%20available.%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-accent hover:to-brand-primary rounded-2xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-accent/20 cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
            >
              Chat on WhatsApp
            </a>
            <button
              onClick={() => setActiveTab('portfolio')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl cursor-pointer transition-all duration-300 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg group"
            >
              Explore Portfolio
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right Column - Premium Portrait Section */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          {/* Neon Glow Behind */}
          <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-brand-primary/20 to-brand-accent/25 rounded-full filter blur-[90px] -z-10 animate-pulse duration-[10000ms]" />
          
          {/* Interactive Floating Particles */}
          <div className="absolute inset-0 pointer-events-none -z-5">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-brand-primary/40"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.15, 0.7, 0.15],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Photo Container Frame */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[350px] aspect-[4/5] rounded-[32px] p-[1.5px] bg-gradient-to-tr from-brand-primary/40 via-white/5 to-brand-accent/40 shadow-2xl relative group overflow-hidden animate-float-slow"
          >
            {/* Dark inner layer */}
            <div className="w-full h-full bg-[#0a0524]/90 rounded-[30.5px] relative overflow-hidden flex flex-col items-center justify-end border border-white/5">
              
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] z-10 pointer-events-none" />
              
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
              transition={{ delay: 0.6, type: "spring", stiffness: 90 }}
              className="absolute bottom-6 -right-4 md:-right-8 w-[230px] bg-[#0a0524]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col space-y-2 text-left z-20 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono tracking-wider text-brand-primary font-bold">ROSHAN JUYAL</span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-[9px] font-bold text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available for Projects
                </span>
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-white font-display">Founder &amp; Web Developer</p>
                <p className="text-[10px] text-gray-400 font-semibold">InyaTech Agency</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM TRUST SECTION */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-primary select-none w-fit"
          >
            <span>Our Standards</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">Why Businesses Choose InyaTech</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-base leading-relaxed">
            We deliver production-ready software solutions built with transparency, speed, and modern architectural principles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-primary/20 backdrop-blur-md rounded-2xl p-6 text-left flex flex-col justify-between space-y-5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:bg-white/[0.04]"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-white tracking-tight leading-snug">{item.title}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed font-sans">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="relative w-full py-16 border border-white/10 bg-white/[0.01] backdrop-blur-[4px] rounded-3xl px-6 md:px-12 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-secondary/5 to-transparent blur-md -z-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-start">
          {statsItems.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:border-r last:border-r-0 border-white/5 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner group-hover:border-brand-primary/30 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight leading-snug font-display">
                {card.title}
              </h3>
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans max-w-[200px]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THREE CORE PRINCIPLES / FEATURES */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">Designed for Performance</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We merge premium aesthetics with production-grade engineering principles to ensure your platform runs perfectly at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-primary/20 backdrop-blur-md rounded-2xl p-8 text-left space-y-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:bg-white/[0.04]"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                {feat.icon}
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight font-display">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW CALLOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/[0.01] border border-white/10 rounded-3xl p-8 md:p-16 text-left relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[90px] -z-10" />
        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight tracking-tight text-white">
            High-Performance <br />
            Services for Scale.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md font-sans">
            From architecture planning to UI designs and custom model deployments, we support you through every stage of development.
          </p>
          <div>
            <button
              onClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-brand-primary font-semibold hover:text-brand-accent transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg px-2 py-1"
            >
              View all services 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-brand-primary/30 transition-all duration-300 hover:bg-white/[0.04]">
            <h3 className="font-semibold text-white mb-2 text-sm font-display">Enterprise Web Apps</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-sans">Highly responsive systems utilizing modern React stack.</p>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-brand-secondary/30 transition-all duration-300 hover:bg-white/[0.04]">
            <h3 className="font-semibold text-white mb-2 text-sm font-display">Cloud Infrastructure</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-sans">Secure server configurations and serverless APIs.</p>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-brand-accent/30 transition-all duration-300 hover:bg-white/[0.04]">
            <h3 className="font-semibold text-white mb-2 text-sm font-display">Custom AI Solutions</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-sans">LLM integrations, agentic workflows, and pipelines.</p>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]">
            <h3 className="font-semibold text-white mb-2 text-sm font-display">Branding & UI/UX</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-sans">Vibrant dark interfaces that capture attention.</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: WHY CHOOSE INYATECH */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4.5 py-1.5 text-xs font-semibold text-brand-primary select-none w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Us</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">Why Choose InyaTech?</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            We don't just build websites. We build digital experiences that help businesses establish trust, attract customers, and grow online.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyChooseItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/[0.01] border border-white/[0.06] hover:border-white/15 backdrop-blur-md rounded-[24px] p-8 text-left space-y-5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1.5 hover:bg-white/[0.03] relative group overflow-hidden shadow-2xl"
            >
              {/* Hover Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle 200px at 50% 0%, ${item.glowColor}, transparent 80%)`
                }}
              />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110 duration-500 ${item.iconBg}`}>
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight font-display">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO CALLOUT SECTION */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="text-left space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">Featured Projects</h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">Explore a collection of modern website designs created to showcase the quality, creativity, and performance standards of InyaTech.</p>
          </div>
          <button
            onClick={() => {
              setActiveTab('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 font-semibold text-sm text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
          >
            Explore Portfolio <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            onClick={() => {
              setActiveTab('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white/[0.01] border border-white/[0.06] hover:border-brand-primary/20 backdrop-blur-md rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 shadow-2xl"
          >
            <div className="h-64 bg-gradient-to-tr from-brand-primary/30 to-brand-secondary/30 relative overflow-hidden flex items-center justify-center">
              <span className="text-white font-display font-semibold text-lg opacity-85 group-hover:scale-105 transition-transform duration-500 select-none">Business Website Showcase</span>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-white bg-brand-primary/95 px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-brand-primary/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label="Business Website Showcase - View Details"
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="p-6 text-left space-y-2">
              <span className="text-xs text-brand-primary font-semibold uppercase tracking-wider font-mono">Corporate &amp; Consulting</span>
              <h3 className="text-xl font-bold text-white tracking-tight font-display">Business Website</h3>
              <p className="text-gray-400 text-sm font-sans">A premium corporate website template featuring high-conversion landing page layouts and professional branding.</p>
            </div>
          </div>

          <div 
            onClick={() => {
              setActiveTab('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white/[0.01] border border-white/[0.06] hover:border-brand-accent/20 backdrop-blur-md rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 shadow-2xl"
          >
            <div className="h-64 bg-gradient-to-tr from-brand-accent/30 to-brand-primary/30 relative overflow-hidden flex items-center justify-center">
              <span className="text-white font-display font-semibold text-lg opacity-85 group-hover:scale-105 transition-transform duration-500 select-none">Developer Portfolio Showcase</span>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-white bg-brand-accent/95 px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-brand-accent/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label="Developer Portfolio Showcase - View Details"
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="p-6 text-left space-y-2">
              <span className="text-xs text-brand-accent font-semibold uppercase tracking-wider font-mono">Design &amp; Technology</span>
              <h3 className="text-xl font-bold text-white tracking-tight font-display">Portfolio Website</h3>
              <p className="text-gray-400 text-sm font-sans">An ultra-premium personal portfolio template featuring dynamic project filtering and case study modal transitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS TIMELINE SECTION */}
      <DevelopmentProcess />

      {/* INDUSTRIES WE SERVE SECTION */}
      <IndustriesWeServe />

      {/* FAQ SECTION */}
      <Faq />

      {/* FINAL CALL TO ACTION SECTION */}
      <FinalCta setActiveTab={setActiveTab} />
      
    </motion.div>
  );
}
