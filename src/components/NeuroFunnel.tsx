import { motion } from 'motion/react';

interface FunnelStageProps {
  label: string;
  value: number;
  percentage: string;
  width: string;
  index: number;
  key?: string;
}

function FunnelStage({ label, value, percentage, width, index }: FunnelStageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex flex-col items-center group w-full"
    >
      <div 
        className="h-14 bg-cyber-accent-muted border border-cyber-accent/30 flex items-center justify-between px-6 relative overflow-hidden transition-all group-hover:border-cyber-accent group-hover:bg-cyber-accent/20"
        style={{ width: `calc(${width} * 0.9 + 10%)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-accent/5 to-transparent pointer-events-none"></div>
        
        <div className="flex flex-col">
          <span className="text-[8px] font-mono text-cyber-accent/60 uppercase tracking-widest mb-0.5">Stage 0{index + 1}</span>
          <span className="text-[11px] font-black tracking-widest uppercase text-cyber-text group-hover:text-cyber-accent transition-colors">{label}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xl font-black text-cyber-text leading-none">{value.toLocaleString()}</div>
            <div className="text-[9px] font-mono text-cyber-accent mt-0.5">{percentage}</div>
          </div>
          <div className="w-1 h-8 bg-cyber-accent/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: percentage }}
              className="w-full bg-cyber-accent"
            />
          </div>
        </div>
      </div>
      {index < 3 && (
        <div className="w-px h-4 bg-gradient-to-b from-cyber-accent/30 to-transparent my-1"></div>
      )}
    </motion.div>
  );
}

export default function NeuroFunnel() {
  const stages = [
    { label: 'Входящие', value: 1402, percentage: '100%', width: '100%' },
    { label: 'Квалификация', value: 648, percentage: '46.2%', width: '80%' },
    { label: 'Интервью', value: 112, percentage: '7.9%', width: '60%' },
    { label: 'Оффер', value: 14, percentage: '0.9%', width: '40%' },
  ];

  return (
    <div className="cyber-card p-8 flex flex-col items-center">
      <div className="w-full flex justify-between items-start mb-12">
        <div>
          <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-1">Нейро-воронка кандидатов</h3>
          <p className="text-[9px] font-mono text-cyber-accent uppercase tracking-[0.2em]">Потоковые данные в реальном времени</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-cyber-accent">2,481</div>
          <div className="text-[9px] font-mono text-cyber-text-muted uppercase">Обработано за 24ч</div>
        </div>
      </div>

      <div className="w-full max-w-md space-y-0 flex flex-col items-center">
        {stages.map((stage, i) => (
          <FunnelStage 
            key={stage.label} 
            label={stage.label}
            value={stage.value}
            percentage={stage.percentage}
            width={stage.width}
            index={i} 
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 w-full mt-12">
        <div className="bg-white/2 border border-cyber-border p-4 rounded-sm">
          <div className="text-[9px] font-bold text-cyber-text-muted uppercase mb-1">Avg Time-to-Offer</div>
          <div className="text-xl font-black text-cyber-accent">4.2 <span className="text-xs font-normal">DAYS</span></div>
          <div className="text-[8px] font-mono text-cyber-success mt-1">32% FASTER THAN AVG</div>
        </div>
        <div className="bg-white/2 border border-cyber-border p-4 rounded-sm">
          <div className="text-[9px] font-bold text-cyber-text-muted uppercase mb-1">AI Filtering Accuracy</div>
          <div className="text-xl font-black text-cyber-accent">98.4%</div>
          <div className="flex gap-1 mt-2">
            {[1,2,3,4,5].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i < 5 ? 'bg-cyber-accent' : 'bg-white/10'}`}></div>)}
          </div>
        </div>
        <div className="bg-white/2 border border-cyber-border p-4 rounded-sm">
          <div className="text-[9px] font-bold text-cyber-text-muted uppercase mb-1">Churn Rate Stage 2-3</div>
          <div className="text-xl font-black text-cyber-danger">82.7%</div>
          <div className="text-[8px] font-mono text-cyber-danger mt-1">SYSTEM LEAK IDENTIFIED</div>
        </div>
      </div>
    </div>
  );
}
