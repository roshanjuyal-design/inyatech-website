import { motion } from 'framer-motion';
import { FolderKanban, Cpu, Mail, Calendar, Activity, Sparkles, ExternalLink } from 'lucide-react';

export default function DashboardHome() {
  const stats = [
    { label: 'Total Projects', value: '12', icon: FolderKanban, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
    { label: 'Active Services', value: '6', icon: Cpu, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
    { label: 'Unread Messages', value: '4', icon: Mail, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  ];

  const quickActions = [
    { title: 'Add Project', desc: 'Create a new case study entry.', icon: FolderKanban, path: '/admin/projects' },
    { title: 'Update Services', desc: 'Modify pricing or listings.', icon: Cpu, path: '/admin/services' },
    { title: 'Inbox', desc: 'Read contact inquiries.', icon: Mail, path: '/admin/messages' },
  ];

  const recentLogs = [
    { event: 'Database Backup', time: '10 mins ago', status: 'Success', detail: 'Automated daily backup completed successfully.' },
    { event: 'Project Added', time: '2 hours ago', status: 'InyaTech UI', detail: 'Roshan added "InyaTech Corporate Website" to portfolio.' },
    { event: 'Message Received', time: '4 hours ago', status: 'Lead', detail: 'New inquiry regarding "Business Website" maintenance.' },
    { event: 'User Login', time: '1 day ago', status: 'Admin', detail: 'Admin session authenticated from Andhra Pradesh.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8 text-left"
    >
      {/* 1. Welcoming Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-white tracking-tight">Welcome Back, Admin</h1>
          <p className="text-sm text-gray-400">Here's a quick overview of your website performance metrics.</p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary select-none w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          <span>All Systems Operational</span>
        </div>
      </div>

      {/* 2. Responsive Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-2xl border border-white/[0.06] bg-[#0a0524]/20 backdrop-blur-md flex items-center justify-between gap-4 hover:border-white/15 transition-all duration-300 group"
            >
              <div className="space-y-1">
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">{stat.label}</span>
                <span className="text-3xl font-bold font-display text-white block group-hover:scale-105 transition-transform origin-left">{stat.value}</span>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${stat.bg} ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Split layout: Recent Activity / Logs (Left) + Quick Actions (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 3. Recent Activity Section */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-8 p-6 rounded-2xl border border-white/[0.06] bg-[#0a0524]/10 backdrop-blur-md space-y-6"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.06] pb-4">
            <Activity className="w-5 h-5 text-brand-primary" />
            <h3 className="text-base font-bold font-display text-white">Recent CMS Activity Logs</h3>
          </div>
          <div className="divide-y divide-white/[0.04] space-y-4">
            {recentLogs.map((log, idx) => (
              <div key={idx} className="flex gap-4 pt-4 first:pt-0 items-start text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="flex-grow space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-white tracking-tight">{log.event}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{log.time}</span>
                  </div>
                  <p className="text-gray-400 text-xs truncate max-w-full font-sans">{log.detail}</p>
                </div>
                <span className="shrink-0 text-[10px] font-mono font-bold bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-400">
                  {log.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. Quick Actions Section */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 p-6 rounded-2xl border border-white/[0.06] bg-[#0a0524]/10 backdrop-blur-md space-y-6"
        >
          <div className="border-b border-white/[0.06] pb-4">
            <h3 className="text-base font-bold font-display text-white">Quick Tasks</h3>
          </div>
          <div className="space-y-4">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.04] hover:border-brand-primary/20 transition-all text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-all shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white tracking-tight">{action.title}</span>
                      <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug truncate font-sans">{action.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
