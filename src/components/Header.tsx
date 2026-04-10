import { Bell, Moon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-16 border-b border-cyber-border flex items-center justify-between px-8 bg-cyber-bg/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <nav className="flex items-center gap-6 h-full">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => `
              text-[11px] font-bold tracking-widest transition-all h-16 flex items-center border-b-2 
              ${isActive ? 'text-cyber-accent border-cyber-accent' : 'text-cyber-text-muted hover:text-cyber-text border-transparent'}
            `}
          >
            DASHBOARD
          </NavLink>
          <NavLink 
            to="/analytics" 
            className={({ isActive }) => `
              text-[11px] font-bold tracking-widest transition-all h-16 flex items-center border-b-2 
              ${isActive ? 'text-cyber-accent border-cyber-accent' : 'text-cyber-text-muted hover:text-cyber-text border-transparent'}
            `}
          >
            ANALYTICS
          </NavLink>
          <NavLink 
            to="/candidates" 
            className={({ isActive }) => `
              text-[11px] font-bold tracking-widest transition-all h-16 flex items-center border-b-2 
              ${isActive ? 'text-cyber-accent border-cyber-accent' : 'text-cyber-text-muted hover:text-cyber-text border-transparent'}
            `}
          >
            CANDIDATES
          </NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="text-cyber-text-muted hover:text-cyber-accent transition-colors">
            <Moon size={18} />
          </button>
          <button className="text-cyber-text-muted hover:text-cyber-accent transition-colors relative">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-accent rounded-full shadow-[0_0_8px_rgba(0,242,255,0.8)]"></span>
          </button>
        </div>

        <div className="flex items-center gap-3 border-l border-cyber-border pl-6">
          <div className="text-right">
            <div className="text-[11px] font-bold tracking-wider">EVGENYA GRIGOREVA</div>
          </div>
          <div className="w-8 h-8 rounded-sm overflow-hidden border border-cyber-border">
            <img 
              src="https://picsum.photos/seed/evgenya/100/100" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
