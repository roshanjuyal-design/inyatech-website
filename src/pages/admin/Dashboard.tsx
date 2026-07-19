import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, LogOut, Sparkles, UserCheck } from 'lucide-react';
import { useAuth } from '../../components/AuthProvider';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
      navigate('/admin/login', { replace: true });
    } catch (err) {
      console.error('Error signing out:', err);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#030014] text-white px-4 relative overflow-hidden text-left">
      {/* Atmospheric Glowing Orbs */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-2xl bg-[#0a0524]/60 backdrop-blur-xl border border-white/[0.08] rounded-[32px] p-8 md:p-12 shadow-2xl relative z-10 space-y-8"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent p-[1px] shadow-lg shadow-brand-primary/20">
              <div className="w-full h-full bg-[#030014] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-6 h-6 text-brand-primary" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center space-x-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-2.5 py-0.5 text-[9px] font-semibold text-brand-primary select-none mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Admin Dashboard</span>
              </div>
              <h1 className="text-xl font-bold font-display tracking-tight">InyaTech CMS Control Panel</h1>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            disabled={loading}
            className="flex items-center justify-center gap-2 py-2.5 px-5 font-semibold text-xs text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl cursor-pointer disabled:cursor-not-allowed transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            {loading ? (
              <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            ) : (
              <>
                <LogOut className="w-4 h-4" />
                Sign Out
              </>
            )}
          </button>
        </div>

        {/* Welcome Section */}
        <div className="space-y-4">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-semibold font-mono">AUTHENTICATED USER</p>
              <p className="text-base font-bold text-white font-sans">{user?.email || 'Administrator'}</p>
            </div>
          </div>

          <div className="bg-white/[0.01] border border-white/[0.04] rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-gray-400">System Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-gray-300">
              <div className="bg-white/[0.01] border border-white/[0.04] p-4 rounded-xl space-y-1">
                <span className="text-[10px] text-gray-500 font-bold block uppercase">CMS Mode</span>
                <span className="text-white font-bold">Production Ready</span>
              </div>
              <div className="bg-white/[0.01] border border-white/[0.04] p-4 rounded-xl space-y-1">
                <span className="text-[10px] text-gray-500 font-bold block uppercase">Database Status</span>
                <span className="text-green-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Connected
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
