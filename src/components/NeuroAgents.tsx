import { motion } from 'motion/react';
import { Cpu, Mic, Activity } from 'lucide-react';

interface AgentProps {
  name: string;
  version: string;
  status: 'active' | 'standby' | 'error';
  load: number;
  description: string;
  icon: any;
}

function AgentCard({ name, version, status, load, description, icon: Icon }: AgentProps) {
  return (
    <div className="bg-white/2 border border-cyber-border p-4 rounded-sm relative overflow-hidden group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-sm ${status === 'active' ? 'bg-cyber-accent/10 text-cyber-accent' : 'bg-white/5 text-cyber-text-muted'}`}>
            <Icon size={16} />
          </div>
          <div>
            <div className="text-[11px] font-black tracking-wider uppercase">{name} <span className="text-cyber-text-muted font-mono text-[9px]">({version})</span></div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${status === 'active' ? 'bg-cyber-accent animate-pulse' : 'bg-cyber-text-muted'}`}></div>
              <span className="text-[8px] font-mono uppercase tracking-widest">{status}</span>
            </div>
          </div>
        </div>
        <div className="text-[10px] font-mono text-cyber-accent">{load}%</div>
      </div>
      
      <div className="space-y-2">
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${load}%` }}
            className={`h-full ${status === 'active' ? 'bg-cyber-accent' : 'bg-cyber-text-muted'}`}
          ></motion.div>
        </div>
        <p className="text-[9px] text-cyber-text-muted italic leading-tight">{description}</p>
      </div>
    </div>
  );
}

export default function NeuroAgents() {
  return (
    <div className="cyber-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-black tracking-widest uppercase flex items-center gap-2">
          <Activity size={14} className="text-cyber-accent" />
          Нейро-агенты
        </h3>
        <span className="text-[9px] font-mono text-cyber-success bg-cyber-success/10 px-2 py-0.5 rounded-sm">ONLINE</span>
      </div>

      <div className="space-y-4">
        <AgentCard 
          name="SCREENER-AI" 
          version="V.4.2" 
          status="active" 
          load={75} 
          description="Анализ резюме: Python Developer (Senior)..." 
          icon={Cpu}
        />
        <AgentCard 
          name="VOICE-SYNTH" 
          version="V.2.0" 
          status="active" 
          load={24} 
          description="Аудио-скрининг: Активный вызов +7(900)..." 
          icon={Mic}
        />
        <AgentCard 
          name="LOGIC-NODE" 
          version="V.1.5" 
          status="standby" 
          load={0} 
          description="Ожидание (Ждем подтверждения)..." 
          icon={Activity}
        />
      </div>

      <button className="w-full mt-6 py-2 border border-dashed border-cyber-border text-[10px] font-bold text-cyber-text-muted hover:text-cyber-accent hover:border-cyber-accent transition-all uppercase tracking-widest">
        + Deploy New Neural Agent
      </button>
    </div>
  );
}
