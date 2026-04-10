import { useState, useMemo } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight, MoreHorizontal, Check, X, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Dropdown from './ui/Dropdown';
import { Candidate } from '../types';

const initialCandidates: Candidate[] = [
  { id: '1', name: 'Гилицкая Александра Дмитриевна', role: 'Python Developer', status: 'Interview', email: 'alex@example.com', phone: '+7 900 123-45-67', scores: { hard: 90, soft: 85, ai: 88, cases: 88, responsibility: 80, additional: 90 }, aiMatch: 88, avatar: 'https://picsum.photos/seed/alex/100/100' },
  { id: '2', name: 'Степанова Григорьева Валерия Сергеевна', role: 'Frontend Lead', status: 'Interview', email: 'val@example.com', phone: '+7 900 234-56-78', scores: { hard: 85, soft: 80, ai: 84, cases: 82, responsibility: 86, additional: 80 }, aiMatch: 84, avatar: 'https://picsum.photos/seed/val/100/100' },
  { id: '3', name: 'Ломшин Юрий Иванович', role: 'DevOps Engineer', status: 'Interview', email: 'yuri@example.com', phone: '+7 900 345-67-89', scores: { hard: 84, soft: 80, ai: 84, cases: 82, responsibility: 86, additional: 80 }, aiMatch: 84, avatar: 'https://picsum.photos/seed/yuri/100/100' },
  { id: '4', name: 'Сафронова Елизавета Евгеньевна', role: 'UI/UX Designer', status: 'Test Task', email: 'liza@example.com', phone: '+7 900 456-78-90', scores: { hard: 88, soft: 85, ai: 83, cases: 86, responsibility: 92, additional: 78 }, aiMatch: 83, avatar: 'https://picsum.photos/seed/liza/100/100' },
  { id: '5', name: 'Кошеварова Анастасия Олеговна', role: 'Project Manager', status: 'Interview', email: 'ana@example.com', phone: '+7 900 567-89-01', scores: { hard: 80, soft: 85, ai: 83, cases: 85, responsibility: 90, additional: 80 }, aiMatch: 83, avatar: 'https://picsum.photos/seed/ana/100/100' },
  { id: '6', name: 'Плужникова Алина', role: 'QA Engineer', status: 'Test Task', email: 'alina@example.com', phone: '+7 900 678-90-12', scores: { hard: 86, soft: 80, ai: 83, cases: 80, responsibility: 85, additional: 82 }, aiMatch: 83, avatar: 'https://picsum.photos/seed/alina/100/100' },
];

const statusOptions = [
  { label: 'Все статусы', value: 'all' },
  { label: 'Интервью', value: 'Interview' },
  { label: 'Тестовое', value: 'Test Task' },
  { label: 'Оффер', value: 'Offer' },
  { label: 'Отказ', value: 'Rejected' },
];

export default function CandidateTable({ limit }: { limit?: number }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredCandidates = useMemo(() => {
    let result = initialCandidates.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                           c.role.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
    
    if (limit) {
      result = result.slice(0, limit);
    }
    
    return result;
  }, [search, statusFilter, limit]);

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'bg-cyber-success text-cyber-bg';
    if (score >= 75) return 'bg-cyber-accent text-cyber-bg';
    return 'bg-cyber-danger text-cyber-bg';
  };

  return (
    <div className="cyber-card mt-6 overflow-hidden">
      <div className="p-6 border-b border-cyber-border flex flex-wrap items-center justify-between gap-4 bg-cyber-bg/30">
        <div className="flex items-center gap-4 flex-1 min-w-[300px]">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-cyber-text-muted" size={16} />
            <input 
              type="text" 
              placeholder="Поиск по имени или телефону..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-cyber-border rounded-sm py-2 pl-10 pr-4 text-[10px] font-mono focus:outline-none focus:border-cyber-accent transition-colors"
            />
          </div>
          <Dropdown 
            options={statusOptions.map(o => o.label)}
            value={statusOptions.find(o => o.value === statusFilter)?.label || 'Все статусы'}
            onChange={(label) => setStatusFilter(statusOptions.find(o => o.label === label)?.value || 'all')}
            label="СТАТУС"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button className="cyber-button-secondary px-4 py-2 text-[10px] flex items-center gap-2 font-bold">
            <Filter size={14} />
            ФИЛЬТРЫ
          </button>
          <button className="cyber-button-primary px-4 py-2 text-[10px] flex items-center gap-2 font-bold italic tracking-tighter">
            <span>ЭКСПОРТ</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/2 text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest border-b border-cyber-border">
              <th className="px-6 py-4">№</th>
              <th className="px-6 py-4">Кандидат</th>
              <th className="px-6 py-4">Статус</th>
              <th className="px-6 py-4">Общий 🔥</th>
              <th className="px-6 py-4">Харды</th>
              <th className="px-6 py-4">Софты</th>
              <th className="px-6 py-4">Кейсы</th>
              <th className="px-6 py-4">Ответств.</th>
              <th className="px-6 py-4">Доп. вопр.</th>
              <th className="px-6 py-4">AI ⚠️</th>
              <th className="px-6 py-4">Эссе</th>
              <th className="px-6 py-4 text-right">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyber-border">
            {filteredCandidates.length > 0 ? filteredCandidates.map((candidate, i) => (
              <motion.tr 
                key={candidate.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-white/5 transition-colors group"
              >
                <td className="px-6 py-4 text-[10px] font-mono text-cyber-text-muted">{i + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm overflow-hidden border border-cyber-border group-hover:border-cyber-accent transition-colors">
                      <img src={candidate.avatar} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <div 
                        onClick={() => navigate('/candidates')}
                        className="text-[10px] font-bold text-cyber-accent group-hover:underline cursor-pointer"
                      >
                        {candidate.name}
                      </div>
                      <div className="text-[8px] text-cyber-text-muted uppercase tracking-tighter font-mono">{candidate.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[8px] font-bold px-2 py-0.5 rounded-sm border ${
                    candidate.status === 'Interview' ? 'bg-cyber-accent/10 text-cyber-accent border-cyber-accent/20' :
                    candidate.status === 'Test Task' ? 'bg-cyber-warning/10 text-cyber-warning border-cyber-warning/20' :
                    'bg-cyber-success/10 text-cyber-success border-cyber-success/20'
                  }`}>
                    {candidate.status === 'Interview' ? 'В ОЖИДАНИИ' : candidate.status === 'Test Task' ? 'ТЕСТОВОЕ' : 'ПРИГЛАШЕН'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className={`w-10 py-1 text-center text-[10px] font-black rounded-sm ${getScoreColor(candidate.scores.ai)}`}>
                    {candidate.scores.ai}.0
                  </div>
                </td>
                <td className="px-6 py-4 text-[10px] font-mono text-cyber-text-muted">{candidate.scores.hard}.0</td>
                <td className="px-6 py-4 text-[10px] font-mono text-cyber-text-muted">{candidate.scores.soft}.0</td>
                <td className="px-6 py-4 text-[10px] font-mono text-cyber-text-muted">{candidate.scores.cases}.0</td>
                <td className="px-6 py-4 text-[10px] font-mono text-cyber-text-muted">{candidate.scores.responsibility}.0</td>
                <td className="px-6 py-4 text-[10px] font-mono text-cyber-text-muted">{candidate.scores.additional}.0</td>
                <td className="px-6 py-4 text-[10px] font-mono text-cyber-accent">--</td>
                <td className="px-6 py-4">
                  <button className="p-1.5 bg-cyber-accent-muted text-cyber-accent rounded-sm hover:bg-cyber-accent hover:text-cyber-bg transition-all">
                    <FileText size={12} />
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 bg-cyber-success/10 text-cyber-success rounded-sm hover:bg-cyber-success hover:text-cyber-bg transition-all flex items-center gap-1 text-[8px] font-bold">
                      <Check size={12} /> ПРИГЛАСИТЬ
                    </button>
                    <button className="p-1.5 bg-cyber-danger/10 text-cyber-danger rounded-sm hover:bg-cyber-danger hover:text-cyber-bg transition-all">
                      <X size={12} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            )) : (
              <tr>
                <td colSpan={12} className="px-6 py-12 text-center text-cyber-text-muted font-mono text-[10px] uppercase tracking-widest">
                  Кандидаты не найдены
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-cyber-border flex items-center justify-between bg-white/2">
        <div className="text-[9px] text-cyber-text-muted font-mono uppercase tracking-widest">
          SHOWING {filteredCandidates.length} OF {initialCandidates.length} CANDIDATES | PAGE: 01/01
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1.5 text-cyber-text-muted hover:text-cyber-accent transition-colors border border-cyber-border rounded-sm disabled:opacity-30" disabled>
            <ChevronLeft size={14} />
          </button>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center text-[10px] font-bold bg-cyber-accent text-cyber-bg rounded-sm">01</button>
          </div>
          <button className="p-1.5 text-cyber-text-muted hover:text-cyber-accent transition-colors border border-cyber-border rounded-sm disabled:opacity-30" disabled>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
