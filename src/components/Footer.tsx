import { motion } from 'framer-motion';
import { Cpu, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function Footer() {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const servicesList = [
    { label: 'Business Websites' },
    { label: 'Landing Pages' },
    { label: 'Portfolio Websites' },
    { label: 'Website Maintenance' },
    { label: 'Web Applications', comingSoon: true, glowColor: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.15)]' },
    { label: 'AI Solutions', comingSoon: true, glowColor: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.15)]' },
    { label: 'Business Automation', comingSoon: true, glowColor: 'from-rose-500/20 to-orange-500/20 border-rose-500/30 text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.15)]' },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4 text-brand-primary" />,
      label: "Phone",
      value: "+91 9160693693",
      href: "tel:+919160693693"
    },
    {
      icon: <Mail className="w-4 h-4 text-brand-secondary" />,
      label: "Email",
      value: "hello@inyatech.com",
      href: "mailto:hello@inyatech.com"
    },
    {
      icon: <MapPin className="w-4 h-4 text-brand-accent" />,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: "hover:text-[#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 hover:shadow-[#0077b5]/15 hover:shadow-[0_0_15px_rgba(0,119,181,0.2)]"
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      color: "hover:text-[#e1306c] hover:bg-[#e1306c]/10 hover:border-[#e1306c]/30 hover:shadow-[#e1306c]/15 hover:shadow-[0_0_15px_rgba(225,48,108,0.2)]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <footer className="relative z-10 w-full mt-24 bg-gradient-to-b from-[#0a0524]/40 via-[#030014]/90 to-[#030014] border-t border-white/[0.06] backdrop-blur-xl pt-16 pb-8 px-4 md:px-8 overflow-hidden">
      {/* Top light streak divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent blur-[2px] opacity-70" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/6 h-[3px] bg-gradient-to-r from-transparent via-brand-accent to-transparent blur-[3px] opacity-50" />

      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-primary/10 rounded-full blur-[90px] pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-80 h-80 bg-brand-accent/5 rounded-full blur-[90px] pointer-events-none -z-10 animate-float-slower" />

      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Company Logo & Description */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <Link
              to="/"
              className="flex items-center space-x-2 group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded-xl"
              aria-label="InyaTech Logo, Back to Home"
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

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Building modern websites, web applications, and business software that help businesses grow.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/919160693693?text=Hi%20Roshan,%0A%0AI%20visited%20the%20InyaTech%20website%20and%20I'm%20interested%20in%20discussing%20a%20project.%0A%0APlease%20let%20me%20know%20when%20you're%20available.%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] hover:bg-[#22c55e] hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:scale-102 transition-all duration-300 text-xs font-semibold group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e] focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.713-1.448L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.003-2.637-1.023-5.118-2.882-6.98-1.859-1.862-4.343-2.887-6.984-2.888-5.439 0-9.865 4.42-9.869 9.865-.001 1.716.448 3.39 1.3 4.87l-.479 1.753 1.82-.478zm10.87-4.108c-.294-.148-1.74-.858-2.01-.956-.27-.098-.467-.147-.662.146-.196.293-.76.955-.932 1.15-.171.195-.343.22-.637.073-.295-.148-1.245-.459-2.37-1.465-.877-.782-1.47-1.747-1.64-2.04-.173-.294-.018-.453.13-.6.132-.133.294-.347.442-.52.146-.173.196-.296.294-.493.097-.197.049-.37-.024-.517-.074-.148-.662-1.595-.91-2.186-.24-.58-.487-.5-.668-.51-.173-.008-.37-.01-.568-.01-.197 0-.52.073-.79.37-.27.295-1.03 1.015-1.03 2.476 0 1.461 1.063 2.87 1.21 3.067.147.195 2.09 3.195 5.068 4.482.708.306 1.26.488 1.69.624.71.226 1.357.194 1.867.118.568-.085 1.74-.717 1.987-1.408.247-.693.247-1.288.172-1.411-.074-.123-.27-.196-.564-.345z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:hello@inyatech.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:scale-102 transition-all duration-300 text-xs font-semibold group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Email
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="relative text-white font-semibold text-sm tracking-wider uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-3 rounded-full bg-gradient-to-b from-brand-primary to-brand-secondary" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id === 'home' ? '/' : `/${link.id}`}
                    className="text-gray-400 hover:text-white text-sm transition-all duration-300 cursor-pointer flex items-center group/link hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded-md"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary scale-0 group-hover/link:scale-100 transition-transform duration-300 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants}>
            <h3 className="relative text-white font-semibold text-sm tracking-wider uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-3 rounded-full bg-gradient-to-b from-brand-secondary to-brand-accent" />
              Services
            </h3>
            <ul className="space-y-3">
              {servicesList.map((service, index) => (
                <li key={index} className="flex items-center text-sm py-0.5">
                  {service.comingSoon ? (
                    <div className="flex items-center gap-2.5">
                      <span className="text-gray-500 font-medium select-none">{service.label}</span>
                      <span className={cn(
                        "text-[9px] font-extrabold tracking-wider uppercase px-1.5 py-0.5 rounded-md border bg-gradient-to-r select-none",
                        service.glowColor
                      )}>
                        Soon
                      </span>
                    </div>
                  ) : (
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-white text-sm transition-all duration-300 cursor-pointer flex items-center group/link hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded-md"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary scale-0 group-hover/link:scale-100 transition-transform duration-300 mr-2" />
                      {service.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Information */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h3 className="relative text-white font-semibold text-sm tracking-wider uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-3 rounded-full bg-gradient-to-b from-brand-accent to-brand-primary" />
                Contact Info
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-bold">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-gray-300 hover:text-white text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded px-1">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-300 text-sm">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg",
                    social.color
                  )}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Beautiful divider line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="order-2 sm:order-1 font-medium">
            &copy; 2026 InyaTech. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
            <a href="#" className="hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded px-1">
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="#" className="hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded px-1">
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
