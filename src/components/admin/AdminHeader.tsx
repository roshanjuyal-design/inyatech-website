import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, LogOut, UserCheck } from 'lucide-react';
import { useAuth } from '../AuthProvider';

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Derive dynamic page title based on current pathname
  const getPageTitle = (pathname: string): string => {
    const cleaned = pathname.replace(/^\/|\/$/g, '');
    const parts = cleaned.split('/');
    if (parts.length <= 1) return 'Overview';
    
    const subRoute = parts[1];
    return subRoute.charAt(0).toUpperCase() + subRoute.slice(1);
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
      navigate('/admin/login', { replace: true });
    } catch (err) {
      console.error('Header sign out error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="h-16 border-b border-white/[0.06] bg-[#0a0524]/40 backdrop-blur-md flex items-center justify-between px-6 shrink-0 relative z-30 text-left">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={onMenuClick}
          className="text-gray-300 hover:text-white md:hidden p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Dynamic Page Title */}
        <h2 className="text-base font-bold font-display text-white tracking-tight">
          {getPageTitle(location.pathname)}
        </h2>
      </div>

      <div className="flex items-center gap-6">
        {/* User Info (Desktop only) */}
        {user?.email && (
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 bg-white/[0.02] border border-white/[0.06] px-3.5 py-1.5 rounded-xl">
            <UserCheck className="w-3.5 h-3.5 text-brand-primary" />
            <span className="font-medium font-sans truncate max-w-[180px]">{user.email}</span>
          </div>
        )}

        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          disabled={loading}
          className="flex items-center gap-1.5 py-1.5 px-3.5 font-semibold text-[11px] text-gray-400 hover:text-white hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10 cursor-pointer disabled:cursor-not-allowed transition-all duration-200"
        >
          {loading ? (
            <div className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
          ) : (
            <>
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
