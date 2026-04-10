import { motion } from 'motion/react';
import { CheckCircle2, XCircle, AlertCircle, Users, Edit3, ExternalLink, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VacancyInfo from './VacancyInfo';

export default function VacancyDetails() {
  const navigate = useNavigate();
  const stats = [
    { label: 'Всего интервью', value: 313, icon: Users, color: 'text-cyber-accent' },
    { label: 'В процессе', value: 133, icon: AlertCircle, color: 'text-cyber-accent' },
    { label: 'Завершено', value: 63, icon: CheckCircle2, color: 'text-cyber-success' },
    { label: 'Процент завершения', value: '20.1%', icon: Activity, color: 'text-cyber-accent' },
    { label: 'Квиз провален', value: 90, icon: AlertCircle, color: 'text-cyber-danger' },
    { label: 'Отменено', value: 10, icon: XCircle, color: 'text-cyber-text-muted' },
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 p-8 overflow-y-auto space-y-6"
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="flex gap-2 mb-3">
            <span className="text-[9px] font-mono bg-cyber-accent/10 text-cyber-accent px-2 py-0.5 rounded-sm border border-cyber-accent/20">ID: TX-9042</span>
            <span className="text-[9px] font-mono bg-cyber-success/10 text-cyber-success px-2 py-0.5 rounded-sm border border-cyber-success/20">● ОПУБЛИКОВАНА</span>
          </div>
          <h1 className="text-4xl font-mono font-bold tracking-tighter uppercase leading-none">
            Операционный ассистент в <span className="text-cyber-accent">HR Tech</span> проект
          </h1>
        </div>
        <button className="cyber-button-primary px-6 py-3 flex items-center gap-2">
          <span>ПАНЕЛЬ УПРАВЛЕНИЯ</span>
          <ExternalLink size={16} />
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="cyber-card p-4 flex flex-col justify-between min-h-[100px] group hover:border-cyber-accent/50 transition-all">
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
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <VacancyInfo />
        </div>

        <div className="space-y-6">
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
            <h3 className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest mb-4">System Monitor</h3>
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
          </div>
        </div>
      </div>
    </motion.main>
  );
}
