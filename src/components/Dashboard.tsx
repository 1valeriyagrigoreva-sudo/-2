import { useState } from 'react';
import { AlertTriangle, Zap, Terminal, FileText, Edit3, ExternalLink, Activity, Users, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import CandidateTable from './CandidateTable';
import VacancyInfo from './VacancyInfo';
import Modal from './ui/Modal';

export default function Dashboard() {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const stats = [
    { label: 'Всего интервью', value: 313, icon: Users, color: 'text-cyber-accent' },
    { label: 'В процессе', value: 133, icon: AlertCircle, color: 'text-cyber-accent' },
    { label: 'Завершено', value: 63, icon: CheckCircle2, color: 'text-cyber-success' },
    { label: 'Процент завершения', value: '20.1%', icon: Activity, color: 'text-cyber-accent' },
    { label: 'Квиз провален', value: 90, icon: AlertCircle, color: 'text-cyber-danger' },
    { label: 'Отменено', value: 10, icon: XCircle, color: 'text-cyber-text-muted' },
  ];

  return (
    <main className="flex-1 p-8 overflow-y-auto space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex gap-2 mb-3">
            <span className="text-[9px] font-mono bg-cyber-accent/10 text-cyber-accent px-2 py-0.5 rounded-sm border border-cyber-accent/20">ID: TX-9042</span>
            <span className="text-[9px] font-mono bg-cyber-success/10 text-cyber-success px-2 py-0.5 rounded-sm border border-cyber-success/20 tracking-widest uppercase">● ОПУБЛИКОВАНА</span>
          </div>
          <h1 className="text-5xl font-mono font-bold tracking-tighter uppercase leading-none">
            Операционный ассистент в <br /><span className="text-cyber-accent">HR Tech</span> проект
          </h1>
        </div>
        <button 
          onClick={() => navigate('/analytics')}
          className="cyber-button-primary px-8 py-4 flex items-center gap-2 font-black italic tracking-tighter"
        >
          <span>ПАНЕЛЬ УПРАВЛЕНИЯ</span>
          <ExternalLink size={18} />
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => navigate('/analytics')}
            className="cyber-card p-4 flex flex-col justify-between min-h-[110px] group hover:border-cyber-accent/50 transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <span className="text-[9px] font-bold text-cyber-text-muted uppercase leading-tight">{stat.label}</span>
              <stat.icon size={14} className={stat.color} />
            </div>
            <div className="text-2xl font-black mt-2">{stat.value}</div>
            <div className="h-0.5 bg-white/5 mt-2 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                className={`h-full ${stat.color.replace('text-', 'bg-')}`}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 space-y-8">
          <VacancyInfo />

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-black uppercase tracking-tighter">Последние отклики</h2>
            <button 
              onClick={() => navigate('/candidates')}
              className="text-[10px] font-bold text-cyber-accent hover:underline uppercase tracking-widest"
            >
              СМОТРЕТЬ ВСЕХ
            </button>
          </div>
          <CandidateTable limit={3} />
        </div>

        <div className="col-span-4 space-y-8">
          <div className="cyber-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-black tracking-widest uppercase">Аккаунт HH.RU</h3>
              <span className="text-[9px] font-mono text-cyber-success border border-cyber-success/30 px-2 py-0.5 rounded-sm">ПОДКЛЮЧЕНО</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-cyber-text-muted uppercase">Привязана к...</span>
                <span className="font-bold">GetProFi Main Admin</span>
              </div>
              
              <div className="p-4 bg-white/2 border border-cyber-border rounded-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold uppercase">Авторассылка включена</span>
                  <div className="w-8 h-4 bg-cyber-accent/20 rounded-full relative">
                    <div className="absolute right-1 top-1 w-2 h-2 bg-cyber-accent rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2 text-[9px] font-mono">
                  <div className="flex justify-between">
                    <span className="text-cyber-text-muted">Последний запуск:</span>
                    <span>20:14:02 (Today)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyber-text-muted">Отправлено:</span>
                    <span className="text-cyber-accent">1,402</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyber-text-muted">Переведено:</span>
                    <span className="text-cyber-accent">313</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 border border-cyber-accent/30 text-cyber-accent text-[10px] font-bold uppercase tracking-widest hover:bg-cyber-accent/10 transition-all">
                Синхронизировать сейчас
              </button>
            </div>
          </div>

          <div className="cyber-card p-6 bg-gradient-to-br from-cyber-bg to-cyber-accent/5">
            <div className="flex items-center gap-2 mb-6">
              <Terminal size={14} className="text-cyber-accent" />
              <h3 className="text-[10px] font-bold tracking-widest uppercase">System Monitor</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-mono w-12">AI LOAD</span>
                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyber-accent w-[42%]"></div>
                </div>
                <span className="text-[9px] font-mono">42%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-mono w-12">LATENCY</span>
                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyber-accent w-[12%]"></div>
                </div>
                <span className="text-[9px] font-mono">12ms</span>
              </div>
            </div>
            
            <div className="mt-6 p-3 bg-black/40 rounded-sm font-mono text-[8px] text-cyber-accent/60 space-y-1">
              <div>LOG_STREAM_AUTH_SUCCESS_UID_81293</div>
              <div>XHR_GET_VACANCY_DATA_313_COMPLETE</div>
              <div>WEB_SOCKET_HANDSHAKE_ESTABLISHED</div>
            </div>
            
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="w-full mt-6 py-4 bg-cyber-accent text-cyber-bg font-black italic tracking-tighter uppercase hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              <Zap size={16} fill="currentColor" />
              Добавить кандидата
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        title="Добавить нового кандидата"
      >
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsAddModalOpen(false); }}>
          <div className="space-y-4">
            <div>
              <label className="block text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest mb-2">ФИО Кандидата</label>
              <input 
                type="text" 
                className="w-full bg-cyber-bg border border-cyber-border rounded-sm px-4 py-3 text-[11px] focus:border-cyber-accent outline-none transition-colors"
                placeholder="Введите имя..."
              />
            </div>
            <div>
              <label className="block text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest mb-2">Должность</label>
              <input 
                type="text" 
                className="w-full bg-cyber-bg border border-cyber-border rounded-sm px-4 py-3 text-[11px] focus:border-cyber-accent outline-none transition-colors"
                placeholder="Например: Senior Frontend Developer"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-cyber-bg border border-cyber-border rounded-sm px-4 py-3 text-[11px] focus:border-cyber-accent outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest mb-2">Телефон</label>
                <input 
                  type="tel" 
                  className="w-full bg-cyber-bg border border-cyber-border rounded-sm px-4 py-3 text-[11px] focus:border-cyber-accent outline-none transition-colors"
                  placeholder="+7 (___) ___ __ __"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 cyber-button-secondary py-3">Отмена</button>
            <button type="submit" className="flex-1 cyber-button-primary py-3">Создать профиль</button>
          </div>
        </form>
      </Modal>
    </main>
  );
}
