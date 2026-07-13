import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

interface FaqItem {
  question: string;
  answer: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
  }
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "How much does a website cost?",
      answer: "Every business is unique. Pricing depends on your requirements. Contact us on WhatsApp for a free consultation and quotation."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Most business websites are completed within 1–3 weeks depending on project scope."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Yes. Every website is fully responsive and optimized for mobile, tablet, and desktop devices."
    },
    {
      question: "Do you provide domain and hosting setup?",
      answer: "Yes. We can help you purchase a domain, configure hosting, and deploy your website."
    },
    {
      question: "Can I update my website later?",
      answer: "Absolutely. We also provide website maintenance and future updates whenever needed."
    },
    {
      question: "Do you provide support after delivery?",
      answer: "Yes. We provide ongoing support, maintenance, and improvements after your website goes live."
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="space-y-16 relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4.5 py-1.5 text-xs font-semibold text-brand-primary select-none w-fit"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Questions &amp; Answers</span>
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">Frequently Asked Questions</motion.h2>
        <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto">
          Answers to the most common questions about our website development services.
        </motion.p>
      </div>

      {/* Accordion Container */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/[0.01] border border-white/[0.06] hover:border-white/12 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer hover:bg-white/[0.02] transition-all duration-300 relative"
            >
              {/* Question Bar */}
              <button
                id={`faq-question-${idx}`}
                aria-controls={`faq-answer-${idx}`}
                aria-expanded={isOpen}
                onClick={() => handleToggle(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-white text-base md:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg select-none cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className={cn(
                    "w-5 h-5 text-gray-500 transition-colors duration-300 shrink-0",
                    isOpen && "text-brand-primary"
                  )} />
                  <span className={cn(
                    "transition-colors duration-300",
                    isOpen && "text-brand-primary"
                  )}>
                    {faq.question}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-white/10 transition-colors">
                  <ChevronDown className={cn(
                    "w-4 h-4 text-gray-400 transition-transform duration-300",
                    isOpen && "transform rotate-180 text-white"
                  )} />
                </div>
              </button>

              {/* Answer Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed font-sans border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-8 border-t border-white/5 max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <p className="text-gray-300 text-base font-semibold font-display">Still have questions?</p>
        </div>
        <a
          href="https://wa.me/919160693693?text=Hi%20Roshan,%0A%0AI%20visited%20the%20InyaTech%20website%20and%20I'm%20interested%20in%20discussing%20a%20project.%0A%0APlease%20let%20me%20know%20when%20you're%20available.%0A%0AThank%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-primary rounded-2xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-accent/20 cursor-pointer transition-all duration-300 hover:scale-[1.03] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
        >
          Chat on WhatsApp
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 duration-300" />
        </a>
      </div>
    </section>
  );
}
