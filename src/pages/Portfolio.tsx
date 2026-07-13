import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Calendar, User, Tag, CheckCircle, Sparkles,
  Utensils, GraduationCap, Award, TrendingUp, Dumbbell, Briefcase,
  Atom, Zap, Wind, Code2, Layers, Database, Workflow, CreditCard,
  Compass, Network, Mail, Server, ShoppingBag, FileText
} from 'lucide-react';
import { cn } from '../utils/cn';

interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: 'Corporate' | 'Hospitality' | 'Creative';
  description: string;
  client: string;
  date: string;
  tags: string[];
  gradient: string;
  challenge: string;
  solution: string;
  results: string[];
  icon: React.ComponentType<any>;
  status: 'Available';
  year: string;
  industry: string;
  addressBar: string;
}

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react': return Atom;
    case 'vite': return Zap;
    case 'tailwind css': return Wind;
    case 'framer motion': return Sparkles;
    case 'opentable api': return Calendar;
    case 'typescript': return Code2;
    case 'next.js': return Layers;
    case 'postgresql': return Database;
    case 'prisma': return Workflow;
    case 'stripe api': 
    case 'stripe': return CreditCard;
    case 'gatsby': return Compass;
    case 'graphql': return Network;
    case 'mailchimp api': return Mail;
    case 'node.js': return Server;
    case 'chart.js': return TrendingUp;
    case 'mongodb': return Database;
    case 'shopify': return ShoppingBag;
    case 'sanity cms': return FileText;
    case 'emailjs': return Mail;
    default: return Code2;
  }
};

function ProjectCard({ project, onOpenCaseStudy }: { project: Project; onOpenCaseStudy: () => void }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const renderMockup = () => {
    switch (project.id) {
      case 'business-website':
        return (
          <div className="w-[85%] h-[75%] rounded-xl bg-[#0a0524]/60 backdrop-blur-md border border-white/10 p-3 flex flex-col justify-between text-left space-y-2 group-hover:scale-105 transition-transform duration-700 shadow-xl select-none">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full font-mono">Web Showcase</span>
              <span className="text-[10px] text-gray-400 font-mono">★ 5.0</span>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-white font-display">Corporate Website</div>
              <div className="text-[9px] text-gray-400 line-clamp-2 font-sans">High-performance corporate layout featuring robust architecture and optimized SEO mapping.</div>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-white/5">
              <span className="text-xs font-bold text-white font-mono">Lighthouse 100%</span>
              <button className="text-[8px] bg-orange-500 text-white px-2.5 py-1 rounded-lg font-bold pointer-events-none select-none">Explore Template</button>
            </div>
          </div>
        );
      case 'restaurant-website':
        return (
          <div className="w-[85%] h-[75%] rounded-xl bg-[#0a0524]/60 backdrop-blur-md border border-white/10 p-3 flex flex-col justify-between text-left space-y-2 group-hover:scale-105 transition-transform duration-700 shadow-xl select-none">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded-full font-mono">Restaurant Website</span>
              <span className="text-[9px] text-green-400 font-bold font-mono">Available</span>
            </div>
            <div className="space-y-1 py-1 font-sans text-xs text-white">
              <div className="flex justify-between text-[9px] border-b border-white/5 pb-1">
                <span className="text-gray-300">Truffle Pasta</span>
                <span className="text-rose-400">₹850</span>
              </div>
              <div className="flex justify-between text-[9px]">
                <span className="text-gray-300">Woodfired Pizza</span>
                <span className="text-rose-400">₹650</span>
              </div>
            </div>
            <div className="w-full bg-rose-500 text-center text-[8px] text-white py-1 rounded-md font-bold font-mono pointer-events-none select-none">
              Book Table Concept
            </div>
          </div>
        );
      case 'political-website':
        return (
          <div className="w-[85%] h-[75%] rounded-xl bg-[#0a0524]/60 backdrop-blur-md border border-white/10 p-3 flex flex-col justify-between text-left space-y-2 group-hover:scale-105 transition-transform duration-700 shadow-xl select-none">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full font-mono">Political Website</span>
              <span className="text-[8px] text-gray-500 font-mono">Campaign Live</span>
            </div>
            <div className="space-y-1.5 py-1 font-sans">
              <div className="flex items-center gap-1.5 text-[8.5px] text-white font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Vision 2026 Campaign
              </div>
              <p className="text-[8px] text-gray-400 line-clamp-2">Biography timeline representation, community newsletters, and action items...</p>
            </div>
            <div className="w-full bg-white/5 border border-white/5 text-center text-[7.5px] text-gray-300 py-1 rounded-md font-mono select-none">
              Read Biography
            </div>
          </div>
        );
      case 'gym-website':
        return (
          <div className="w-[85%] h-[75%] rounded-xl bg-[#0a0524]/60 backdrop-blur-md border border-white/10 p-3 flex flex-col justify-between text-left space-y-2 group-hover:scale-105 transition-transform duration-700 shadow-xl select-none">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full font-mono">Gym Website</span>
              <span className="text-[8px] text-gray-400 font-mono">Active</span>
            </div>
            <div className="space-y-1">
              <div className="text-[8.5px] font-bold text-white font-display">Daily Class Schedule</div>
              <div className="grid grid-cols-2 gap-1.5 text-[7px] font-mono text-gray-400">
                <div className="bg-white/5 p-1 rounded border border-white/5">06:00 AM • Yoga</div>
                <div className="bg-white/5 p-1 rounded border border-white/5">08:00 AM • Cardio</div>
              </div>
            </div>
            <div className="w-full text-center text-[8px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-1 rounded-md font-bold font-mono">
              Join Membership Tier
            </div>
          </div>
        );
      case 'school-website':
        return (
          <div className="w-[85%] h-[75%] rounded-xl bg-[#0a0524]/60 backdrop-blur-md border border-white/10 p-3 flex flex-col justify-between text-left space-y-2 group-hover:scale-105 transition-transform duration-700 shadow-xl select-none">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded-full font-mono">School Website</span>
              <span className="text-[8px] text-gray-400 font-mono">EduPortal</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-white/5 rounded p-1 border border-white/5 text-center">
                <span className="text-[6px] text-gray-500 block">Classes</span>
                <span className="text-[8px] font-bold text-white">40+</span>
              </div>
              <div className="bg-white/5 rounded p-1 border border-white/5 text-center">
                <span className="text-[6px] text-gray-500 block">Faculty</span>
                <span className="text-[8px] font-bold text-white">80+</span>
              </div>
              <div className="bg-white/5 rounded p-1 border border-white/5 text-center">
                <span className="text-[6px] text-gray-500 block">Labs</span>
                <span className="text-[8px] font-bold text-white">12+</span>
              </div>
            </div>
            <div className="w-full bg-white/5 border border-white/5 text-center text-[7.5px] text-gray-400 py-1 rounded-md font-mono select-none">
              Admission Inquiry Route
            </div>
          </div>
        );
      case 'portfolio-website':
        return (
          <div className="w-[85%] h-[75%] rounded-xl bg-[#0a0524]/60 backdrop-blur-md border border-white/10 p-3 flex flex-col justify-between text-left space-y-2 group-hover:scale-105 transition-transform duration-700 shadow-xl select-none">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full font-mono">Portfolio Website</span>
              <span className="text-[8px] text-gray-500 font-mono">Interactive</span>
            </div>
            <div className="space-y-1">
              <div className="text-[9px] font-bold text-white font-display">Creative Portfolio Layout</div>
              <div className="flex gap-1">
                <span className="text-[6px] bg-white/5 border border-white/5 text-gray-400 px-1 rounded">UI/UX</span>
                <span className="text-[6px] bg-white/5 border border-white/5 text-gray-400 px-1 rounded">Webdev</span>
                <span className="text-[6px] bg-white/5 border border-white/5 text-gray-400 px-1 rounded">Glows</span>
              </div>
            </div>
            <div className="w-full text-center text-[8px] text-amber-400 bg-amber-500/10 border border-amber-500/20 py-1 rounded-md font-bold font-mono">
              View Showcase Details
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getStatusBadge = () => {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-semibold font-mono tracking-wider bg-green-500/10 border border-green-500/20 text-green-400 uppercase shadow-[0_0_10px_rgba(34,197,94,0.05)]">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Available
      </span>
    );
  };

  const glowColorMap: Record<string, string> = {
    'business-website': 'rgba(249, 115, 22, 0.15)',
    'restaurant-website': 'rgba(244, 63, 94, 0.15)',
    'political-website': 'rgba(59, 130, 246, 0.15)',
    'gym-website': 'rgba(16, 185, 129, 0.15)',
    'school-website': 'rgba(168, 85, 247, 0.15)',
    'portfolio-website': 'rgba(245, 158, 11, 0.15)',
  };
  const currentGlowColor = glowColorMap[project.id] || 'rgba(139, 92, 246, 0.15)';

  return (
    <div
      onClick={onOpenCaseStudy}
      onMouseMove={handleMouseMove}
      className="relative p-[1.5px] rounded-[32px] overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary cursor-pointer"
      tabIndex={0}
      role="button"
      aria-label={`View case study for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenCaseStudy();
        }
      }}
    >
      {/* Dynamic Hover Gradient Border */}
      <div 
        className="absolute inset-0 bg-white/10 group-hover:bg-gradient-to-tr group-hover:from-brand-primary group-hover:via-brand-secondary group-hover:to-brand-accent transition-all duration-700 -z-20" 
      />
      
      {/* Card Inner Body */}
      <div 
        className="w-full h-full bg-[#0a0524]/90 backdrop-blur-xl rounded-[30.5px] flex flex-col justify-between overflow-hidden relative z-10"
        style={{
          boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.05)'
        }}
      >
        {/* Dynamic Mouse Follow Glow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${currentGlowColor}, transparent 80%)`
          }}
        />

        {/* Large Mockup Image Placeholder - Aspect 16/9 Dominance */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950/80 border-b border-white/5">
          {/* Browser Header Mockup */}
          <div className="h-8 bg-white/[0.03] border-b border-white/5 flex items-center px-4.5 space-x-1.5 relative z-20">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
            <div className="h-4 flex-grow max-w-[130px] md:max-w-[180px] bg-white/5 border border-white/5 rounded-md mx-auto text-[7.5px] text-gray-500 flex items-center justify-center font-mono select-none">
              {project.addressBar}
            </div>
            <div className="text-[8px] font-mono text-gray-500">{project.year}</div>
          </div>

          {/* Grid Pattern backdrop */}
          <div className="absolute inset-0 top-8 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1rem_1rem] z-10 pointer-events-none" />
          
          {/* Ambient Glow Orb */}
          <div className={cn(
            "absolute inset-0 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 blur-[30px] -z-10 bg-gradient-to-tr",
            project.gradient
          )} />

          {/* Subtle Glass Reflection swipe effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out pointer-events-none z-30" />

          {/* High fidelity responsive mockup dashboard representation */}
          <div className="absolute inset-0 top-8 flex items-center justify-center p-4 select-none z-20 overflow-hidden">
            {renderMockup()}
          </div>
        </div>

        {/* Card Metadata & Content */}
        <div className="p-6 md:p-8 flex-grow flex flex-col justify-between text-left relative z-20">
          <div className="space-y-4">
            {/* Industry, Status Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <span className="text-[9px] font-bold text-brand-primary uppercase tracking-wider font-mono">
                {project.industry}
              </span>
              <div className="flex items-center gap-2">
                {getStatusBadge()}
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold font-display text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
              {project.title}
            </h2>
            
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              {project.description}
            </p>
            
            {/* Technology tags with icons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, i) => {
                const TechIcon = getTechIcon(tag);
                return (
                  <span 
                    key={i} 
                    className="inline-flex items-center gap-1.5 text-[9.5px] font-mono text-gray-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full group-hover:bg-white/10 group-hover:border-white/10 transition-colors duration-300"
                  >
                    <TechIcon className="w-3 h-3 text-brand-primary/80 group-hover:text-brand-accent transition-colors" />
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Premium Case Study Buttons */}
          <div className="mt-8 pt-6 border-t border-white/5 flex gap-4 items-center">
            {/* Case Study */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onOpenCaseStudy();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-white/10 hover:border-brand-primary/30 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-brand-primary/10 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] shadow-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0524]"
            >
              Showcase Features
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Corporate', 'Hospitality', 'Creative'];

  // Accessibility: Close modal on escape press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: "business-website",
      title: "Business Website",
      category: "Corporate Showcase Template",
      filterCategory: "Corporate",
      description: "A premium corporate website template featuring high-conversion landing page layouts, smooth scroll animations, and professional branding structures.",
      client: "InyaTech Template Library",
      date: "Showcase Concept",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "SEO Setup"],
      gradient: "from-orange-500 via-amber-500 to-red-500",
      challenge: "Standard business websites often suffer from slow loading times, poor mobile layouts, and generic designs that fail to build client trust.",
      solution: "Designed an interactive, dark-themed static template featuring smooth animations, responsive service grids, clear CTAs, and highly optimized core web vitals.",
      results: [
        "Lighthouse Performance score at 100/100",
        "Optimized for quick load speeds under 0.8 seconds",
        "Designed with accessible navigation and clean typography"
      ],
      icon: Briefcase,
      status: "Available",
      year: "2026",
      industry: "Corporate & Consulting",
      addressBar: "business.inyatech.template"
    },
    {
      id: "restaurant-website",
      title: "Restaurant Website",
      category: "Food & Hospitality Showcase Template",
      filterCategory: "Hospitality",
      description: "A premium restaurant template featuring dynamic menu layouts, online table reservation concepts, and atmospheric dark-mode layouts.",
      client: "InyaTech Template Library",
      date: "Showcase Concept",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "OpenTable API"],
      gradient: "from-rose-500 via-pink-500 to-red-500",
      challenge: "Restaurant sites typically require high-quality imagery layouts, clear reservation pathways, and readable menus on mobile devices.",
      solution: "Developed a modern food showcase layout with an inline reservation concept, filterable menu grids, and smooth visual loading transitions.",
      results: [
        "Interactive filterable menu sections",
        "Fluid reservation flows optimized for mobile screens",
        "Embedded maps and contact integrations for local SEO"
      ],
      icon: Utensils,
      status: "Available",
      year: "2026",
      industry: "Hospitality & Dining",
      addressBar: "restaurant.inyatech.template"
    },
    {
      id: "political-website",
      title: "Political Leader Website",
      category: "Campaign & Public Figure Showcase Template",
      filterCategory: "Corporate",
      description: "A premium biography and campaign template featuring biography timelines, press release grids, and secure newsletter subscription setups.",
      client: "InyaTech Template Library",
      date: "Showcase Concept",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS"],
      gradient: "from-blue-500 via-indigo-500 to-brand-primary",
      challenge: "Public figure platforms require clear typography hierarchy, secure newsletter signup setups, and accessible biography layouts.",
      solution: "Engineered a high-performance political portfolio showcase with clean timelines, media download blocks, and custom-styled newsletter setups.",
      results: [
        "Accessible timeline for historical achievements",
        "Optimized newsletter subscription form flow",
        "Clean responsive layout designed for all screen types"
      ],
      icon: Award,
      status: "Available",
      year: "2026",
      industry: "Public Relations & Media",
      addressBar: "campaign.inyatech.template"
    },
    {
      id: "gym-website",
      title: "Gym Website",
      category: "Fitness & Wellness Showcase Template",
      filterCategory: "Hospitality",
      description: "A premium fitness template featuring interactive class timetables, membership plan grids, and energetic high-contrast styling.",
      client: "InyaTech Template Library",
      date: "Showcase Concept",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Chart.js"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      challenge: "Fitness websites require interactive schedules, highly readable pricing grids, and engaging media to drive memberships.",
      solution: "Built a high-contrast layout showing class timetables, membership card options with hover indicators, and contact pathways.",
      results: [
        "Highly responsive class timetable grids",
        "Translucent glass membership calculator concepts",
        "Modern, energetic dark theme with vibrant action colors"
      ],
      icon: Dumbbell,
      status: "Available",
      year: "2026",
      industry: "Sports & Wellness",
      addressBar: "fitness.inyatech.template"
    },
    {
      id: "school-website",
      title: "School Website",
      category: "Education Showcase Template",
      filterCategory: "Corporate",
      description: "A premium educational institute template featuring program information tabs, academic calendar layouts, and student/parent portal routes.",
      client: "InyaTech Template Library",
      date: "Showcase Concept",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Calendar"],
      gradient: "from-purple-500 via-pink-500 to-brand-accent",
      challenge: "Educational sites need to display dense multi-level information without confusing parents, students, or visitors.",
      solution: "Designed an intuitive portal site with tabbed course layouts, academic calendar visualizations, and clear navigation paths.",
      results: [
        "Tabbed navigation for grade-specific curriculum info",
        "Accessible academic schedule layouts",
        "Consistent professional visual branding"
      ],
      icon: GraduationCap,
      status: "Available",
      year: "2026",
      industry: "Education & Academy",
      addressBar: "academy.inyatech.template"
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      category: "Personal Branding Showcase Template",
      filterCategory: "Creative",
      description: "An ultra-premium personal portfolio template featuring dynamic project filtering, case study modal transitions, and terminal-inspired design features.",
      client: "InyaTech Template Library",
      date: "Showcase Concept",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Prisma"],
      gradient: "from-yellow-500 via-amber-500 to-orange-600",
      challenge: "Individual portfolios need to balance personal branding, technical skills display, and clean case studies in a compact space.",
      solution: "Created a glassmorphic portfolio layout featuring mouse-glow interactions, categories filtering, and immersive slide-in modals.",
      results: [
        "Fluid AnimatePresence modal transitions",
        "Dynamic mouse-following hover illumination",
        "Highly compact, optimized responsive layout"
      ],
      icon: Code2,
      status: "Available",
      year: "2026",
      industry: "Design & Technology",
      addressBar: "portfolio.inyatech.template"
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.filterCategory === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16 pt-24 md:pt-36 pb-16 md:pb-24 max-w-8xl mx-auto px-4 md:px-8 text-left min-h-screen relative z-10"
    >
      {/* Intro */}
      <div className="max-w-2xl space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4.5 py-1.5 text-xs font-semibold text-brand-primary select-none w-fit"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Portfolio Showcase</span>
        </motion.div>
        
        <h1 className="text-4xl md:text-5.5xl font-extrabold font-display leading-[1.1] tracking-tight text-white">
          Featured <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent glow-text-purple">Projects</span>
        </h1>
        
        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
          Explore a collection of modern website designs created to showcase the quality, creativity, and performance standards of InyaTech.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 pb-4 border-b border-white/5 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer overflow-hidden border border-white/5 hover:border-white/10 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg",
              activeCategory === cat ? "text-dark-bg font-bold" : "text-gray-400 hover:text-white"
            )}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="activeFilterBackground"
                className="absolute inset-0 bg-white rounded-xl"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                style={{ zIndex: -1 }}
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* Spaced Grid of Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenCaseStudy={() => setSelectedProject(project)} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-3xl bg-[#0a0524]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              {/* Header block with gradient background */}
              <div className={cn(
                "p-8 bg-gradient-to-r text-white relative shrink-0",
                selectedProject.gradient
              )}>
                <div className="absolute inset-0 bg-black/25" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-6 top-6 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer border border-white/10 z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="space-y-2 relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-semibold font-mono tracking-wider bg-white/10 border border-white/20 text-white/90 uppercase">
                    Showcase Template
                  </span>
                  <h2 className="text-3xl font-bold font-display">{selectedProject.title}</h2>
                  <p className="text-white/80 max-w-xl text-sm leading-relaxed font-sans">{selectedProject.description}</p>
                </div>
              </div>

              {/* Scrollable details */}
              <div className="p-8 space-y-6 overflow-y-auto flex-1 text-sm leading-relaxed text-left custom-scrollbar">
                {/* Meta details */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-primary" />
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold">Type</span>
                      <span className="font-semibold text-white text-xs block truncate">{selectedProject.client}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-secondary" />
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold">Status</span>
                      <span className="font-semibold text-white text-xs block truncate">{selectedProject.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-brand-accent" />
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold">Category</span>
                      <span className="font-semibold text-white text-xs block truncate">{selectedProject.category}</span>
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="space-y-2 text-left">
                  <h3 className="text-base font-bold text-brand-primary font-display">Target Obstacles</h3>
                  <p className="text-gray-300 font-sans">{selectedProject.challenge}</p>
                </div>

                {/* Solution */}
                <div className="space-y-2 text-left">
                  <h3 className="text-base font-bold text-brand-secondary font-display">Design Architecture</h3>
                  <p className="text-gray-300 font-sans">{selectedProject.solution}</p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-3 text-left">
                  <h3 className="text-base font-bold text-brand-accent font-display">Showcase Milestones</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((res, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-300 font-sans">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack items with Icons */}
                <div className="space-y-2 text-left pt-4 border-t border-white/5">
                  <h4 className="text-xs uppercase text-gray-400 tracking-wider font-semibold font-mono">Technologies Utilized</h4>
                  <div className="flex flex-wrap gap-2 pt-1.5">
                    {selectedProject.tags.map((tag) => {
                      const TechIcon = getTechIcon(tag);
                      return (
                        <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                          <TechIcon className="w-3.5 h-3.5 text-brand-primary/80" />
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
