import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import NeuroFunnel from './NeuroFunnel';
import NeuroAgents from './NeuroAgents';
import DailyInterviews from './DailyInterviews';
import { Activity, Clock, Target, TrendingDown } from 'lucide-react';

export default function Analytics() {
  const navigate = useNavigate();
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 p-8 overflow-y-auto space-y-8"
    >
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-cyber-accent text-cyber-bg text-[10px] font-black px-2 py-0.5 rounded-sm uppercase">Analytics_Module</span>
            <span className="text-[10px] font-mono text-cyber-text-muted uppercase tracking-widest">Session Active: 04:12:10</span>
          </div>
          <h1 className="text-6xl font-mono font-bold tracking-tighter uppercase leading-none">
            Нейро-воронка <br /> <span className="text-cyber-accent">кандидатов</span>
          </h1>
        </div>
        
        <div className="flex gap-4">
          <div 
            onClick={() => navigate('/integration')}
            className="cyber-card p-4 flex items-center gap-4 border-cyber-accent/30 cursor-pointer hover:border-cyber-accent transition-all"
          >
            <div className="w-10 h-10 rounded-sm bg-cyber-accent/10 flex items-center justify-center text-cyber-accent">
              <Activity size={20} />
            </div>
            <div>
              <div className="text-[9px] font-bold text-cyber-text-muted uppercase">Status: Connected</div>
              <div className="text-sm font-black">Интеграция HH.ru</div>
            </div>
          </div>
          <button className="cyber-button-primary px-8 flex items-center justify-center font-black italic tracking-tighter">
            ОБНОВИТЬ СОЕДИНЕНИЕ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <NeuroFunnel />
          <DailyInterviews />
        </div>
        <div className="space-y-8">
          <NeuroAgents />
          
          <div className="cyber-card p-6 bg-gradient-to-b from-cyber-bg to-cyber-danger/5 border-cyber-danger/20">
            <div className="flex justify-between items-start mb-4">
              <div className="text-[10px] font-bold text-cyber-danger uppercase tracking-widest">System Leak Alert</div>
              <TrendingDown size={16} className="text-cyber-danger" />
            </div>
            <div className="text-3xl font-black text-cyber-danger mb-1">82.7%</div>
            <p className="text-[10px] text-cyber-text-muted leading-tight">
              Выявлено аномальное падение конверсии на этапе Интервью. Рекомендуется проверка настроек Voice-Synth агента.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Avg Time-to-Offer', value: '4.2 Days', trend: '-12%', icon: Clock },
          { label: 'AI Accuracy', value: '98.4%', trend: '+2.1%', icon: Target },
          { label: 'Active Candidates', value: '1,402', trend: '+412', icon: Activity },
          { label: 'Success Rate', value: '88%', trend: '+5%', icon: Activity },
        ].map((stat, i) => (
          <div key={i} className="cyber-card p-6 flex flex-col justify-between group hover:border-cyber-accent transition-all">
            <div className="flex justify-between items-start mb-4">
              <stat.icon size={16} className="text-cyber-accent group-hover:scale-110 transition-transform" />
              <span className={`text-[10px] font-mono ${stat.trend.startsWith('+') ? 'text-cyber-success' : 'text-cyber-danger'}`}>
                {stat.trend}
              </span>
            </div>
            <div className="text-2xl font-black mb-1">{stat.value}</div>
            <div className="text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.main>
  );
}
