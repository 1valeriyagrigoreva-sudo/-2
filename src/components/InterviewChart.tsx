import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceDot
} from 'recharts';

const data = [
  { name: 'ПН', value: 45, dot: true },
  { name: 'ВТ', value: 30, dot: false },
  { name: 'СР', value: 65, dot: true },
  { name: 'ЧТ', value: 40, dot: true },
  { name: 'ПТ', value: 85, dot: true },
  { name: 'СБ', value: 50, dot: false },
  { name: 'ВС', value: 70, dot: true },
];

export default function InterviewChart() {
  return (
    <div className="cyber-card p-6 h-[300px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 text-cyber-accent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12l3-3 4 4 4-4 4 4 3-3" />
            </svg>
          </div>
          <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase">Интервью по дням</h3>
        </div>
        <span className="text-[9px] text-cyber-text-muted font-mono uppercase">Последние 30 циклов</span>
      </div>

      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2b" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 500 }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0a0d14', 
                border: '1px solid #1a1f2b',
                borderRadius: '2px',
                fontSize: '10px',
                color: '#e0e6ed'
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#00f2ff" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorValue)" 
              animationDuration={2000}
            />
            {data.map((entry, index) => (
              entry.dot && (
                <ReferenceDot 
                  key={index}
                  x={entry.name} 
                  y={entry.value} 
                  r={3} 
                  fill="#00f2ff" 
                  stroke="none" 
                  isFront={true}
                />
              )
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
