import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default function ProtectedRoute() {
  const { session, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#030014]" aria-live="polite" aria-busy="true">
        <div className="relative w-12 h-12">
          {/* Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-brand-primary/10 border-t-brand-primary animate-spin" />
          {/* Glow */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-accent/30 animate-spin blur-[2px]" />
        </div>
        <p className="mt-4 text-xs text-gray-400 font-display tracking-widest uppercase animate-pulse">
          Verifying Admin Session...
        </p>
      </div>
    );
  }

  if (!session) {
    // Redirect to login page and preserve the location they attempted to access
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
