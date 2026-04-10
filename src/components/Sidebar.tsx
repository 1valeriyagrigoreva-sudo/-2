import { 
  LayoutDashboard, 
  Briefcase, 
  Cpu, 
  FileText, 
  Share2, 
  Wallet, 
  GraduationCap, 
  Settings, 
  LogOut,
  Monitor,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { id: 'dashboard', label: 'DASHBOARD', icon: LayoutDashboard, path: '/dashboard' },
  { id: 'vacancies', label: 'МОИ ВАКАНСИИ', icon: Briefcase, path: '/vacancies' },
  { id: 'brief', label: 'БРИФ ВАКАНСИИ', icon: FileText, path: '/brief' },
  { id: 'integration', label: 'ИНТЕГРАЦИЯ HH.RU', icon: Share2, path: '/integration' },
  { id: 'finance', label: 'ФИНАНСЫ', icon: Wallet, path: '/finance' },
  { id: 'academy', label: 'АКАДЕМИЯ РОСТА', icon: GraduationCap, path: '/academy' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-cyber-border h-screen flex flex-col bg-cyber-bg/50 backdrop-blur-md sticky top-0">
      <div className="p-6 flex flex-col gap-1">
        <NavLink to="/dashboard" className="group flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-14 h-14 relative flex items-center justify-center"
              animate={{ 
                y: [0, -3, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="absolute inset-0 bg-cyber-accent/20 blur-xl rounded-full group-hover:bg-cyber-accent/40 transition-all animate-pulse" />
              <svg viewBox="0 0 120 120" className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(0,242,255,0.6)]">
                <defs>
                  <linearGradient id="logo-grad-animated" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2ff">
                      <animate attributeName="offset" values="0;0.2;0" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#0066ff">
                      <animate attributeName="offset" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#00f2ff">
                      <animate attributeName="offset" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>
                
                {/* Human Head */}
                <motion.circle 
                  cx="45" cy="30" r="10" 
                  fill="url(#logo-grad-animated)"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Top Segment with Arrow */}
                <motion.path 
                  d="M35 60 C35 40, 45 30, 80 15 L85 10 L95 20 L90 25 C70 40, 55 50, 55 80 Z" 
                  fill="url(#logo-grad-animated)"
                  animate={{ 
                    d: [
                      "M35 60 C35 40, 45 30, 80 15 L85 10 L95 20 L90 25 C70 40, 55 50, 55 80 Z",
                      "M37 58 C37 38, 47 28, 82 13 L87 8 L97 18 L92 23 C72 38, 57 48, 57 78 Z",
                      "M35 60 C35 40, 45 30, 80 15 L85 10 L95 20 L90 25 C70 40, 55 50, 55 80 Z"
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Middle Segment */}
                <motion.path 
                  d="M30 80 C30 60, 40 50, 70 35 L75 30 L85 40 L80 45 C60 60, 45 70, 45 100 Z" 
                  fill="url(#logo-grad-animated)"
                  opacity="0.8"
                  animate={{ 
                    opacity: [0.6, 0.9, 0.6],
                    x: [0, 2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Bottom Segment */}
                <motion.path 
                  d="M25 100 C25 80, 35 70, 60 55 L65 50 L75 60 L70 65 C50 80, 35 90, 35 120 Z" 
                  fill="url(#logo-grad-animated)"
                  opacity="0.5"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 4, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Arrow Tip Detail */}
                <path d="M80 15 L95 10 L90 25 Z" fill="url(#logo-grad-animated)" />
              </svg>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white font-display font-extrabold text-2xl tracking-tight leading-none group-hover:text-cyber-accent transition-colors">GetProFi<span className="text-cyber-accent group-hover:text-white transition-colors">.me</span></span>
              <motion.div 
                className="h-0.5 w-full bg-gradient-to-r from-cyber-accent to-transparent mt-1"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </NavLink>
      </div>

      <div className="px-4 py-2">
        <div className="flex items-center gap-2 text-[10px] text-cyber-accent font-mono mb-4 px-2">
          <Monitor size={12} />
          <span>OPERATING SYSTEM</span>
          <span className="opacity-50">v4.0.2-ALPHA</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `
                w-full flex items-center gap-3 px-3 py-2.5 text-[11px] font-bold tracking-wider transition-all rounded-sm
                ${isActive 
                  ? 'bg-cyber-accent-muted text-cyber-accent border-l-2 border-cyber-accent' 
                  : 'text-cyber-text-muted hover:text-cyber-text hover:bg-white/5'}
              `}
            >
              <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3 w-full">
                <item.icon size={16} />
                <span>{item.label}</span>
              </motion.div>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 space-y-1">
        <NavLink 
          to="/settings"
          className={({ isActive }) => `
            w-full flex items-center gap-3 px-3 py-2 text-[11px] font-bold transition-colors rounded-sm
            ${isActive ? 'text-cyber-accent' : 'text-cyber-text-muted hover:text-cyber-text'}
          `}
        >
          <Settings size={16} />
          <span>SETTINGS</span>
        </NavLink>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-[11px] font-bold text-cyber-text-muted hover:text-cyber-danger transition-colors">
          <LogOut size={16} />
          <span>LOGOUT</span>
        </button>
      </div>
    </aside>
  );
}
