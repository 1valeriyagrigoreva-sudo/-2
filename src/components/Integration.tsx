import { motion, AnimatePresence } from 'motion/react';
import { Globe, Link2, RefreshCw, CheckCircle2, AlertCircle, ExternalLink, Key } from 'lucide-react';
import { useState } from 'react';
import Toast from './ui/Toast';

export default function Integration() {
  const [showToast, setShowToast] = useState<string | null>(null);
  const [hhStatus, setHhStatus] = useState('connected');
  const [apiKey, setApiKey] = useState('••••••••••••••••••••••••••••');
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setShowToast('Синхронизация с HH.ru завершена');
    }, 2000);
  };

  const toggleConnection = () => {
    const newStatus = hhStatus === 'connected' ? 'disconnected' : 'connected';
    setHhStatus(newStatus);
    setShowToast(newStatus === 'connected' ? 'Соединение с HH.ru установлено' : 'Соединение с HH.ru разорвано');
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 p-8 overflow-y-auto space-y-8"
    >
      <AnimatePresence>
        {showToast && (
          <Toast 
            message={showToast} 
            onClose={() => setShowToast(null)} 
          />
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-cyber-accent text-cyber-bg text-[10px] font-black px-2 py-0.5 rounded-sm uppercase">External_Sync</span>
            <span className="text-[10px] font-mono text-cyber-text-muted uppercase tracking-widest">Active Bridges: 1</span>
          </div>
          <h1 className="text-6xl font-mono font-bold tracking-tighter uppercase leading-none">
            Интеграция <br /> <span className="text-cyber-accent">сервисов</span>
          </h1>
        </div>
        
        <button 
          onClick={handleSync}
          disabled={isSyncing}
          className="cyber-button-primary px-8 flex items-center gap-2 font-black italic tracking-tighter disabled:opacity-50"
        >
          <RefreshCw size={18} className={isSyncing ? 'animate-spin' : ''} />
          {isSyncing ? 'СИНХРОНИЗАЦИЯ...' : 'СИНХРОНИЗИРОВАТЬ ВСЕ'}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="cyber-card p-8 border-cyber-accent/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Globe size={160} />
            </div>
            
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-sm bg-white/10 flex items-center justify-center p-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png" alt="HH.ru" className="w-full h-auto grayscale brightness-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">HeadHunter (HH.RU)</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-2 h-2 rounded-full transition-colors ${hhStatus === 'connected' ? 'bg-cyber-success shadow-[0_0_8px_rgba(0,255,157,0.8)]' : 'bg-cyber-danger shadow-[0_0_8px_rgba(255,77,77,0.8)]'}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${hhStatus === 'connected' ? 'text-cyber-success' : 'text-cyber-danger'}`}>
                      {hhStatus === 'connected' ? 'Подключено' : 'Ошибка соединения'}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={toggleConnection}
                className="text-[10px] font-bold text-cyber-danger hover:underline uppercase tracking-widest"
              >
                {hhStatus === 'connected' ? 'ОТКЛЮЧИТЬ' : 'ПОДКЛЮЧИТЬ'}
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest flex items-center gap-2">
                  <Key size={12} />
                  API Access Token
                </label>
                <div className="flex gap-2">
                  <input 
                    type="password" 
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="flex-1 bg-cyber-bg/50 border border-cyber-border px-4 py-3 text-sm font-mono focus:border-cyber-accent outline-none transition-all" 
                  />
                  <button className="cyber-card px-4 text-[10px] font-bold uppercase hover:border-cyber-accent transition-all">
                    ОБНОВИТЬ
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-cyber-border bg-cyber-bg/30">
                  <div className="text-[9px] font-bold text-cyber-text-muted uppercase mb-1">Последняя синхронизация</div>
                  <div className="text-sm font-black">Сегодня, 14:20</div>
                </div>
                <div className="p-4 border border-cyber-border bg-cyber-bg/30">
                  <div className="text-[9px] font-bold text-cyber-text-muted uppercase mb-1">Активных вакансий</div>
                  <div className="text-sm font-black">12</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="cyber-card p-6 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="text-xl font-black uppercase tracking-tight">LinkedIn</div>
                <Link2 size={20} className="text-cyber-text-muted group-hover:text-cyber-accent" />
              </div>
              <p className="text-[10px] text-cyber-text-muted mb-4 uppercase tracking-widest">Coming Soon</p>
              <button className="text-[10px] font-bold text-cyber-accent uppercase tracking-widest border border-cyber-accent/30 px-4 py-2 hover:bg-cyber-accent/10">
                ПОДКЛЮЧИТЬ
              </button>
            </div>
            <div className="cyber-card p-6 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="text-xl font-black uppercase tracking-tight">SuperJob</div>
                <Link2 size={20} className="text-cyber-text-muted group-hover:text-cyber-accent" />
              </div>
              <p className="text-[10px] text-cyber-text-muted mb-4 uppercase tracking-widest">Coming Soon</p>
              <button className="text-[10px] font-bold text-cyber-accent uppercase tracking-widest border border-cyber-accent/30 px-4 py-2 hover:bg-cyber-accent/10">
                ПОДКЛЮЧИТЬ
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="cyber-card p-6 border-cyber-success/20 bg-cyber-success/5">
            <div className="flex items-center gap-2 mb-4 text-cyber-success">
              <CheckCircle2 size={18} />
              <h4 className="text-xs font-black uppercase tracking-widest">Система готова</h4>
            </div>
            <p className="text-xs text-cyber-text-muted leading-relaxed">
              Все данные с HH.ru успешно импортированы. AI-агенты имеют доступ к актуальным откликам.
            </p>
          </div>

          <div className="cyber-card p-6">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4">Инструкция</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-cyber-accent font-mono text-xs">01</div>
                <p className="text-[10px] text-cyber-text-muted uppercase leading-tight">Создайте приложение в кабинете разработчика HH.ru</p>
              </div>
              <div className="flex gap-3">
                <div className="text-cyber-accent font-mono text-xs">02</div>
                <p className="text-[10px] text-cyber-text-muted uppercase leading-tight">Скопируйте Access Token и вставьте в поле слева</p>
              </div>
              <div className="flex gap-3">
                <div className="text-cyber-accent font-mono text-xs">03</div>
                <p className="text-[10px] text-cyber-text-muted uppercase leading-tight">Нажмите "Синхронизировать" для импорта вакансий</p>
              </div>
            </div>
            <button className="w-full mt-6 flex items-center justify-center gap-2 text-[10px] font-bold text-cyber-accent hover:underline uppercase tracking-widest">
              ПОДРОБНЕЕ В ДОКУМЕНТАЦИИ
              <ExternalLink size={12} />
            </button>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
