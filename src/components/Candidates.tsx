import { motion } from 'motion/react';
import { Users, Search, Filter, Download, Plus } from 'lucide-react';
import CandidateTable from './CandidateTable';
import { useState } from 'react';

export default function Candidates() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => setIsExporting(false), 1500);
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 p-8 overflow-y-auto space-y-8"
    >
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-cyber-accent text-cyber-bg text-[10px] font-black px-2 py-0.5 rounded-sm uppercase">Talent_Pool</span>
            <span className="text-[10px] font-mono text-cyber-text-muted uppercase tracking-widest">Database: 14,202 Records</span>
          </div>
          <h1 className="text-6xl font-mono font-bold tracking-tighter uppercase leading-none">
            База <br /> <span className="text-cyber-accent">кандидатов</span>
          </h1>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="cyber-card px-6 py-3 flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:border-cyber-accent transition-all disabled:opacity-50"
          >
            <Download size={16} className={isExporting ? 'animate-bounce' : ''} />
            {isExporting ? 'ЭКСПОРТ...' : 'ЭКСПОРТ CSV'}
          </button>
          <button className="cyber-button-primary px-8 flex items-center gap-2 font-black italic tracking-tighter">
            <Plus size={18} />
            ДОБАВИТЬ ВРУЧНУЮ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Новые отклики', value: '142', color: 'text-cyber-accent' },
          { label: 'На интервью', value: '28', color: 'text-cyber-success' },
          { label: 'Отказы', value: '842', color: 'text-cyber-danger' },
          { label: 'В резерве', value: '12,402', color: 'text-cyber-text-muted' },
        ].map((stat, i) => (
          <div key={i} className="cyber-card p-6 border-cyber-accent/10">
            <div className="text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest mb-1">{stat.label}</div>
            <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="cyber-card overflow-hidden">
        <CandidateTable />
      </div>
    </motion.main>
  );
}
