import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = Array.from({ length: 30 }, (_, i) => {
  const total = Math.floor(Math.random() * 20) + 10;
  const completed = Math.floor(total * (0.6 + Math.random() * 0.3));
  return {
    day: i + 1,
    total,
    completed,
  };
});

export default function DailyInterviews() {
  return (
    <div className="cyber-card p-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-1">Активность интервью</h3>
          <p className="text-[9px] font-mono text-cyber-accent uppercase tracking-[0.2em]">Статистика за последние 30 дней</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyber-accent"></div>
            <span className="text-[9px] font-bold text-cyber-text-muted uppercase">Всего</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyber-success"></div>
            <span className="text-[9px] font-bold text-cyber-text-muted uppercase">Завершено</span>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2b" vertical={false} />
            <XAxis 
              dataKey="day" 
              stroke="#94a3b8" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              tick={{ fill: '#94a3b8' }}
            />
            <YAxis 
              stroke="#94a3b8" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              tick={{ fill: '#94a3b8' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0a0d14', 
                border: '1px solid #1a1f2b',
                borderRadius: '2px',
                fontSize: '10px',
                fontFamily: 'monospace'
              }}
              itemStyle={{ color: '#e0e6ed' }}
              cursor={{ fill: 'rgba(0, 242, 255, 0.05)' }}
            />
            <Bar dataKey="total" fill="#00f2ff" radius={[2, 2, 0, 0]} barSize={8} />
            <Bar dataKey="completed" fill="#00ff9d" radius={[2, 2, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white/2 border border-cyber-border p-4 rounded-sm">
          <div className="text-[9px] font-bold text-cyber-text-muted uppercase mb-1">Всего за месяц</div>
          <div className="text-xl font-black text-cyber-accent">
            {data.reduce((acc, curr) => acc + curr.total, 0)}
          </div>
        </div>
        <div className="bg-white/2 border border-cyber-border p-4 rounded-sm">
          <div className="text-[9px] font-bold text-cyber-text-muted uppercase mb-1">Завершено до конца</div>
          <div className="text-xl font-black text-cyber-success">
            {data.reduce((acc, curr) => acc + curr.completed, 0)}
          </div>
        </div>
      </div>
    </div>
  );
}
