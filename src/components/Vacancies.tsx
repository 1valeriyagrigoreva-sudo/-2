import { motion } from 'motion/react';
import { Briefcase, Plus, Search, Filter, MoreVertical, ExternalLink, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Vacancies() {
  const navigate = useNavigate();
  const [vacancies] = useState([
    { id: 'TX-9042', title: 'Операционный ассистент', dept: 'HR Tech', status: 'Published', candidates: 313, date: '24.10.2023' },
    { id: 'TX-9043', title: 'Python Developer', dept: 'Engineering', status: 'Published', candidates: 142, date: '25.10.2023' },
    { id: 'TX-9044', title: 'UI/UX Designer', dept: 'Design', status: 'Draft', candidates: 0, date: '26.10.2023' },
  ]);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 p-8 overflow-y-auto space-y-8"
    >
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-cyber-accent text-cyber-bg text-[10px] font-black px-2 py-0.5 rounded-sm uppercase">Vacancy_Manager</span>
            <span className="text-[10px] font-mono text-cyber-text-muted uppercase tracking-widest">Active Vacancies: 2</span>
          </div>
          <h1 className="text-6xl font-mono font-bold tracking-tighter uppercase leading-none">
            Мои <br /> <span className="text-cyber-accent">вакансии</span>
          </h1>
        </div>
        
        <button 
          onClick={() => navigate('/brief')}
          className="cyber-button-primary px-8 flex items-center gap-2 font-black italic tracking-tighter"
        >
          <Plus size={18} />
          СОЗДАТЬ ВАКАНСИЮ
        </button>
      </div>

      <div className="cyber-card">
        <div className="p-6 border-b border-cyber-border flex items-center justify-between bg-cyber-bg/30">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-cyber-text-muted" size={16} />
              <input 
                type="text" 
                placeholder="Поиск по названию или ID..."
                className="w-full bg-white/5 border border-cyber-border rounded-sm py-2 pl-10 pr-4 text-[10px] font-mono focus:outline-none focus:border-cyber-accent transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="cyber-button-secondary px-4 py-2 text-[10px] flex items-center gap-2 font-bold">
              <Filter size={14} />
              ФИЛЬТРЫ
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/2 text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest border-b border-cyber-border">
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Название</th>
                <th className="px-6 py-4">Отдел</th>
                <th className="px-6 py-4">Статус</th>
                <th className="px-6 py-4">Кандидаты</th>
                <th className="px-6 py-4">Дата создания</th>
                <th className="px-6 py-4 text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyber-border">
              {vacancies.map((v) => (
                <tr key={v.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 text-[10px] font-mono text-cyber-text-muted">{v.id}</td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => navigate('/vacancies')}
                      className="text-[11px] font-black uppercase tracking-tight text-cyber-accent hover:underline"
                    >
                      {v.title}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-[10px] font-bold uppercase">{v.dept}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[8px] font-bold px-2 py-0.5 rounded-sm border ${
                      v.status === 'Published' ? 'bg-cyber-success/10 text-cyber-success border-cyber-success/20' : 'bg-cyber-text-muted/10 text-cyber-text-muted border-cyber-text-muted/20'
                    }`}>
                      {v.status === 'Published' ? 'ОПУБЛИКОВАНА' : 'ЧЕРНОВИК'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Users size={12} className="text-cyber-text-muted" />
                      <span className="text-[10px] font-mono">{v.candidates}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-cyber-text-muted" />
                      <span className="text-[10px] font-mono">{v.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => navigate('/vacancies')}
                        className="p-1.5 bg-cyber-accent/10 text-cyber-accent rounded-sm hover:bg-cyber-accent hover:text-cyber-bg transition-all"
                      >
                        <ExternalLink size={14} />
                      </button>
                      <button className="p-1.5 hover:text-cyber-accent transition-colors">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.main>
  );
}
