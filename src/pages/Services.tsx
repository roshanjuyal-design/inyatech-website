import { motion } from 'framer-motion';
import { Globe, Code2, Workflow, Brain, Gauge, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 85,
        damping: 16,
      }
    }
  };

  const serviceList = [
    {
      icon: Globe,
      title: "Premium Business Websites",
      description: "Modern, responsive, SEO-friendly websites designed to build trust and convert visitors into customers.",
      tech: ["Next.js", "Vite", "Tailwind CSS", "SEO Setup", "Analytics"],
      glowColor: "rgba(59, 130, 246, 0.15)", // Blue
      accentColor: "text-blue-400",
      iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59, 130, 246, 0.4)]",
    },
    {
      icon: Code2,
      title: "Custom Web Applications",
      description: "Powerful web applications tailored to your business workflow with secure authentication and scalable architecture.",
      tech: ["React / TS", "Node.js", "PostgreSQL", "REST / GraphQL", "Auth"],
      glowColor: "rgba(139, 92, 246, 0.15)", // Purple
      accentColor: "text-purple-400",
      iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139, 92, 246, 0.4)]",
      comingSoon: true,
    },
    {
      icon: Workflow,
      title: "Business Automation",
      description: "Automate repetitive tasks, manage data efficiently, and improve productivity with custom software solutions.",
      tech: ["Zapier / Make", "n8n", "Node.js", "APIs", "Webhooks"],
      glowColor: "rgba(16, 185, 129, 0.15)", // Emerald
      accentColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16, 185, 129, 0.4)]",
      comingSoon: true,
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Integrate modern AI features to improve customer experience, productivity, and business operations.",
      tech: ["OpenAI API", "Anthropic", "LangChain", "Vector DBs", "RAG"],
      glowColor: "rgba(217, 70, 239, 0.15)", // Magenta
      accentColor: "text-pink-400",
      iconBg: "bg-pink-500/10 border-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]",
      comingSoon: true,
    },
    {
      icon: Gauge,
      title: "Website Optimization",
      description: "Improve loading speed, SEO, accessibility, and performance for maximum user experience.",
      tech: ["Lighthouse", "Edge Caching", "Minification", "CDN", "Core Web Vitals"],
      glowColor: "rgba(245, 158, 11, 0.15)", // Amber
      accentColor: "text-amber-400",
      iconBg: "bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(245, 158, 11, 0.4)]",
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Continuous updates, security improvements, bug fixes, backups, and technical support.",
      tech: ["Monitoring", "Backups", "SLA Support", "Security Audits", "Fixes"],
      glowColor: "rgba(6, 182, 212, 0.15)", // Cyan
      accentColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(6, 182, 212, 0.4)]",
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-24 md:pt-36 pb-16 md:pb-24 max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left space-y-20 md:space-y-32 overflow-x-hidden"
    >
      {/* Intro Section */}
      <section className="max-w-3xl space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4.5 py-1.5 text-xs font-semibold text-brand-primary select-none w-fit"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Services Overview</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6.5xl font-extrabold font-display leading-[1.1] tracking-tight text-white"
        >
          What We <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent glow-text-purple">Build</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-sans"
        >
          We create modern digital solutions that help businesses grow, automate operations, and build a strong online presence.
        </motion.p>
      </section>

      {/* Services Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {serviceList.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative h-full flex flex-col justify-between p-8 md:p-9 rounded-[32px] border border-white/[0.06] bg-white/[0.01] backdrop-blur-xl transition-all duration-500 overflow-hidden group hover:scale-[1.02] hover:-translate-y-1.5 hover:border-white/15"
              style={{
                boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.05)'
              }}
            >
              {service.comingSoon && (
                <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center px-2.5 py-0.5 text-[9px] font-extrabold tracking-wider uppercase rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.45)] border border-purple-400/20 select-none animate-pulse">
                  Coming Soon
                </span>
              )}
              {/* Radial gradient glow behind the icon / card top on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle 220px at 50% 0%, ${service.glowColor}, transparent 80%)`
                }}
              />

              {/* Glowing vertical border light accent on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6">
                {/* Icon Wrapper */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${service.iconBg}`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="space-y-3.5">
                  <h2 className="text-2xl font-bold font-display text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Technical / Key tags */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.tech.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full group-hover:bg-white/10 group-hover:border-white/10 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 max-w-lg"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-9 py-4.5 rounded-2xl font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:from-brand-accent hover:via-brand-primary hover:to-brand-secondary shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:scale-[1.02] transition-all duration-300 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg text-center"
          >
            Let's Build Your Project
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
