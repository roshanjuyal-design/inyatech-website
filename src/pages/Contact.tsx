import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Sparkles
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phoneNumber: '',
    service: 'Premium Business Website',
    budget: '₹10,000 – ₹25,000',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Premium Business Website',
    'Custom Web Application',
    'Business Automation',
    'AI Solution Integration',
    'Website Optimization',
    'Maintenance & Support',
    'Other'
  ];

  const budgetOptions = [
    '₹10,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,50,000',
    '₹2,50,000+',
    "Let's Discuss"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.description) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        trackEvent('contact_form_submit', {
          service: formData.service,
          budget: formData.budget
        });
      }, 1500);
    }
  };

  const whatsappUrl = "https://wa.me/919160693693?text=Hi%20Roshan,%0A%0AI%20visited%20the%20InyaTech%20website%20and%20I'm%20interested%20in%20discussing%20a%20project.%0A%0APlease%20let%20me%20know%20when%20you're%20available.%0A%0AThank%20you.";

  const contactCards = [
    { 
      icon: Phone, 
      title: "Phone", 
      value: "+91 9160 693 693", 
      href: "tel:+919160693693",
      glow: "blue",
      accent: "text-blue-400"
    },
    { 
      icon: WhatsAppIcon, 
      title: "WhatsApp", 
      value: "+91 9160693693", 
      href: whatsappUrl,
      glow: "green",
      accent: "text-green-400"
    },
    { 
      icon: Mail, 
      title: "Email", 
      value: "hello@inyatech.com", 
      href: "mailto:hello@inyatech.com",
      glow: "purple",
      accent: "text-purple-400"
    },
    { 
      icon: MapPin, 
      title: "Location", 
      value: "Andhra Pradesh, India", 
      href: "https://maps.google.com/?q=Andhra+Pradesh,+India",
      glow: "pink",
      accent: "text-pink-400"
    },
    { 
      icon: Clock, 
      title: "Working Hours", 
      value: "Mon - Sat | 9:00 AM - 7:00 PM", 
      href: "#",
      glow: "emerald",
      accent: "text-emerald-400"
    }
  ];

  const socialLinks = [
    { icon: LinkedInIcon, name: "LinkedIn", href: "https://linkedin.com", color: "hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" },
    { icon: GitHubIcon, name: "GitHub", href: "https://github.com", color: "hover:bg-neutral-800 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]" },
    { icon: InstagramIcon, name: "Instagram", href: "https://instagram.com", color: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]" }
  ];

  return (
    <div className="space-y-16 pt-24 md:pt-36 pb-16 md:pb-24 max-w-7xl mx-auto px-4 md:px-8 text-left min-h-screen relative z-10 overflow-x-hidden">
      {/* Header */}
      <div className="max-w-2xl space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4.5 py-1.5 text-xs font-semibold text-brand-primary select-none w-fit"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </motion.div>
        
        <h1 className="text-4xl md:text-5.5xl font-extrabold font-display leading-[1.1] tracking-tight text-white">
          Let's Build Something <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent glow-text-purple">Great Together</span>
        </h1>
        
        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
          Have a project in mind? Let's discuss your ideas and turn them into reality.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Contact Cards & Socials */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <a
                  key={idx}
                  href={card.href}
                  target={card.href.startsWith('http') ? "_blank" : undefined}
                  rel={card.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="relative p-[1.5px] rounded-2xl overflow-hidden group block transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
                >
                  {/* Glowing border highlight */}
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-gradient-to-tr group-hover:from-brand-primary/30 group-hover:via-brand-secondary/10 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Card Body */}
                  <div className="w-full h-full bg-[#0a0524]/80 backdrop-blur-xl rounded-[15px] p-5 flex items-start gap-4 relative z-10 overflow-hidden border border-white/[0.06]">
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 bg-gradient-to-tr"
                      style={{
                        background: `radial-gradient(150px circle at 20px 20px, ${card.glow === 'blue' ? 'rgba(59,130,246,0.1)' : card.glow === 'purple' ? 'rgba(139,92,246,0.1)' : card.glow === 'pink' ? 'rgba(217,70,239,0.1)' : card.glow === 'green' ? 'rgba(34,197,94,0.1)' : 'rgba(16,185,129,0.1)'}, transparent 80%)`
                      }}
                    />
                    
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-primary/30 transition-colors shrink-0">
                      <CardIcon className={`w-5 h-5 ${card.accent}`} />
                    </div>
                    <div className="space-y-1 text-left">
                      <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-mono font-bold">{card.title}</span>
                      <span className="text-sm font-semibold text-white group-hover:text-brand-primary transition-colors duration-300 font-sans block break-all">{card.value}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Links Card */}
          <div className="bg-white/[0.01] border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl backdrop-blur-md">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-display">
              <MessageSquare className="w-5 h-5 text-brand-primary" />
              Social Channels
            </h3>
            
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, idx) => {
                const SocialIcon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-gray-300 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg ${link.color}`}
                  >
                    <SocialIcon />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Form / Success Card */}
        <div className="lg:col-span-7">
          <div className="bg-white/[0.01] border border-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 relative shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Roshan Juyal"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/40 transition-all duration-300 font-sans"
                      />
                    </div>

                    {/* Business Name */}
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Business Name</label>
                      <input
                        type="text"
                        id="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="InyaTech Agency"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/40 transition-all duration-300 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="hello@inyatech.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/40 transition-all duration-300 font-sans"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phoneNumber" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Phone Number</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+91 9160 693 693"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/40 transition-all duration-300 font-sans"
                      />
                    </div>
                  </div>

                  {/* Dropdowns row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Required */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Service Required</label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={handleSelectChange}
                        className="w-full bg-[#0a0524] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/40 transition-all duration-300 cursor-pointer font-sans"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#030014] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Project Budget</label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={handleSelectChange}
                        className="w-full bg-[#0a0524] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/40 transition-all duration-300 cursor-pointer font-sans"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#030014] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Project Description</label>
                    <textarea
                      id="description"
                      required
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about the project timelines, parameters, or specifications..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/40 transition-all duration-300 resize-none font-sans"
                    />
                  </div>

                  {/* Submit Button & Subtext */}
                  <div className="space-y-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4.5 font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-primary disabled:opacity-50 rounded-2xl shadow-xl shadow-brand-primary/25 hover:shadow-brand-accent/40 cursor-pointer transition-all duration-300 hover:scale-[1.01] group font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting Enquiry...
                        </span>
                      ) : (
                        <>
                          Send Enquiry <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10.5px] text-gray-500 font-mono text-center">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-400 shadow-xl shadow-green-500/5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white font-display">Enquiry Submitted!</h2>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto font-sans">
                      Thank you, <span className="text-brand-primary font-semibold">{formData.fullName}</span>. Roshan will review your request and reach out to you at <span className="text-brand-primary font-semibold">{formData.email}</span> within 24 hours.
                    </p>
                  </div>
                  
                  {/* Summary Box Receipt */}
                  <div className="max-w-md mx-auto p-6 bg-white/5 border border-white/10 rounded-2xl text-xs space-y-3.5 font-mono text-gray-400">
                    <div className="text-left text-[10px] text-gray-500 uppercase tracking-wider font-extrabold border-b border-white/5 pb-2">
                      ENQUIRY RECEIPT
                    </div>
                    {formData.businessName && (
                      <div className="flex justify-between">
                        <span>Business:</span>
                        <span className="text-white font-sans font-medium">{formData.businessName}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Service Required:</span>
                      <span className="text-white font-sans font-medium">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Project Budget:</span>
                      <span className="text-white font-sans font-medium">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-white/5">
                      <span>Routing Status:</span>
                      <span className="text-green-400 font-extrabold uppercase">Queued for Roshan</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        email: '',
                        phoneNumber: '',
                        service: 'Premium Business Website',
                        budget: '$5,000 - $10,000',
                        description: ''
                      });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:text-brand-accent transition-colors font-semibold cursor-pointer font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
