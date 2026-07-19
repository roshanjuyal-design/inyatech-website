import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { cn } from '../../utils/cn';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030014] text-white flex overflow-hidden relative">
      {/* Decorative Atmospheric Glows */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none -z-10" />

      {/* Mobile Sidebar Backdrop overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 1. Sidebar Container Area */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 h-screen transition-transform duration-300 ease-in-out md:translate-x-0 md:static shrink-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <AdminSidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Right Side container (Header + Main Content) */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* 2. Header Container Area */}
        <AdminHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* 3. Main Content Container Area */}
        <main className="flex-grow overflow-y-auto p-6 md:p-8 relative z-20">
          {/* Render child admin views */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
