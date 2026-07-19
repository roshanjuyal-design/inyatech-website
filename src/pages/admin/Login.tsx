import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Sparkles, Cpu, ArrowRight, ShieldAlert } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../components/AuthProvider';

export default function Login() {
  const { session, loading: authLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect path from location state or default to /admin
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/admin';

  // Automatically redirect if already authenticated
  useEffect(() => {
    if (!authLoading && session) {
      navigate('/admin', { replace: true });
    }
  }, [session, authLoading, navigate]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Strict client-side validation
    if (!trimmedEmail) {
      setError('Email address is required.');
      return;
    }

    if (!trimmedPassword) {
      setError('Password is required.');
      return;
    }

    setLoading(true);

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password: trimmedPassword,
      });

      if (authError) throw authError;

      // Navigate to the targeted dashboard route
      navigate(from, { replace: true });
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err?.message || 'Failed to authenticate. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#030014]" aria-live="polite" aria-busy="true">
        <div className="relative w-12 h-12">
          {/* Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-brand-primary/10 border-t-brand-primary animate-spin" />
          {/* Glow */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-accent/30 animate-spin blur-[2px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#030014] text-white px-4 relative overflow-hidden">
      {/* Atmospheric Glowing Orbs */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md bg-[#0a0524]/60 backdrop-blur-xl border border-white/[0.08] rounded-[32px] p-8 md:p-10 shadow-2xl relative z-10 space-y-8"
      >
        {/* Header */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent p-[1px] shadow-lg shadow-brand-primary/20 animate-pulse">
            <div className="w-full h-full bg-[#030014] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-6 h-6 text-brand-primary" />
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-3 py-1 text-[10px] font-semibold text-brand-primary select-none">
              <Sparkles className="w-3 h-3" />
              <span>InyaTech CMS</span>
            </div>
            <h1 className="text-2xl font-bold font-display tracking-tight">Admin Portal</h1>
            <p className="text-gray-400 text-xs font-sans">
              Sign in to manage your website content.
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Error notice */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-left"
            >
              <ShieldAlert className="w-4.5 h-4.5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </motion.div>
          )}

          {/* Email input field */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                <Mail className="w-4 h-4" />
              </div>
              <input
                id="email"
                type="email"
                required
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 text-white placeholder-gray-500 text-sm font-sans focus:outline-none transition-all disabled:opacity-50"
              />
            </div>
          </div>

          {/* Password input field */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="password" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id="password"
                type="password"
                required
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 text-white placeholder-gray-500 text-sm font-sans focus:outline-none transition-all disabled:opacity-50"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 font-bold text-white rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-accent hover:to-brand-primary shadow-lg shadow-brand-primary/15 hover:shadow-brand-accent/20 cursor-pointer disabled:cursor-not-allowed transition-all duration-300 disabled:opacity-75 relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            {loading ? (
              <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            ) : (
              <>
                Sign In
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 duration-300" />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
