import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Cpu, Settings, X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AdminSidebarProps {
  onClose?: () => void;
}

export default function AdminSidebar({ onClose }: AdminSidebarProps) {
  const menuItems = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard, end: true },
    { label: 'Projects', path: '/admin/projects', icon: Briefcase },
    { label: 'Services', path: '/admin/services', icon: Cpu },
    { label: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <aside className="w-full h-full flex flex-col justify-between p-6 bg-[#0a0524]/90 backdrop-blur-xl border-r border-white/[0.06] text-left">
      <div className="space-y-8">
        {/* Logo Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center space-x-2.5">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-accent p-[1px] shadow-lg shadow-brand-primary/20">
              <div className="w-full h-full bg-[#030014] rounded-[7px] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-brand-primary" />
              </div>
            </div>
            <span className="font-bold tracking-tight text-base font-display">InyaTech CMS</span>
          </div>
          {onClose && (
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white md:hidden focus:outline-none cursor-pointer p-1 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={onClose}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium border-l-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                  isActive
                    ? "bg-brand-primary/10 text-brand-primary border-brand-primary"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border-transparent"
                )}
              >
                <Icon className="w-4.5 h-4.5 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer Branding */}
      <div className="pt-4 border-t border-white/[0.06] text-center">
        <p className="text-[10px] text-gray-500 font-mono">
          &copy; 2026 InyaTech
        </p>
      </div>
    </aside>
  );
}
