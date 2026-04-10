import { motion, AnimatePresence } from 'motion/react';
import { User, Bell, Shield, Globe, Save, LogOut, Camera } from 'lucide-react';
import { useState } from 'react';
import Toast from './ui/Toast';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showToast, setShowToast] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    browser: true,
    telegram: false,
    aiAlerts: true
  });

  const handleSave = () => {
    setShowToast(true);
  };

  const tabs = [
    { id: 'profile', label: 'Профиль', icon: User },
    { id: 'notifications', label: 'Уведомления', icon: Bell },
    { id: 'security', label: 'Безопасность', icon: Shield },
    { id: 'language', label: 'Язык и Регион', icon: Globe },
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 p-8 overflow-y-auto space-y-8"
    >
      <AnimatePresence>
        {showToast && (
          <Toast 
            message="Изменения успешно сохранены" 
            onClose={() => setShowToast(false)} 
          />
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-cyber-accent text-cyber-bg text-[10px] font-black px-2 py-0.5 rounded-sm uppercase">System_Config</span>
            <span className="text-[10px] font-mono text-cyber-text-muted uppercase tracking-widest">User ID: #8829-X</span>
          </div>
          <h1 className="text-6xl font-mono font-bold tracking-tighter uppercase leading-none">
            Настройки <br /> <span className="text-cyber-accent">системы</span>
          </h1>
        </div>
        
        <button 
          onClick={handleSave}
          className="cyber-button-primary px-8 flex items-center gap-2 font-black italic tracking-tighter"
        >
          <Save size={18} />
          СОХРАНИТЬ ИЗМЕНЕНИЯ
        </button>
      </div>

      <div className="flex gap-8">
        <div className="w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all border-l-2 ${
                activeTab === tab.id 
                  ? 'bg-cyber-accent/10 border-cyber-accent text-cyber-accent' 
                  : 'border-transparent text-cyber-text-muted hover:text-cyber-text hover:bg-cyber-bg/50'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
          <div className="pt-8">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest text-cyber-danger hover:bg-cyber-danger/10 transition-all">
              <LogOut size={18} />
              ВЫЙТИ ИЗ СИСТЕМЫ
            </button>
          </div>
        </div>

        <div className="flex-1 cyber-card p-8">
          {activeTab === 'profile' && (
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-sm overflow-hidden border-2 border-cyber-accent/50 group-hover:border-cyber-accent transition-all">
                    <img src="https://picsum.photos/seed/evgenya/200/200" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-cyber-accent text-cyber-bg p-2 rounded-sm shadow-lg hover:scale-110 transition-transform">
                    <Camera size={16} />
                  </button>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest">Имя Фамилия</label>
                      <input 
                        type="text" 
                        defaultValue="Evgenya Grigoreva" 
                        className="w-full bg-cyber-bg border border-cyber-border px-4 py-2 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/30 outline-none transition-all placeholder:text-cyber-text-muted/30" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest">Должность</label>
                      <input 
                        type="text" 
                        defaultValue="Senior HR Manager" 
                        className="w-full bg-cyber-bg border border-cyber-border px-4 py-2 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/30 outline-none transition-all placeholder:text-cyber-text-muted/30" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest">Email</label>
                      <input 
                        type="email" 
                        defaultValue="e.grigoreva@cyber-hr.tech" 
                        className="w-full bg-cyber-bg border border-cyber-border px-4 py-2 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/30 outline-none transition-all placeholder:text-cyber-text-muted/30" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest">Телефон</label>
                      <input 
                        type="tel" 
                        defaultValue="+7 (999) 123-45-67" 
                        className="w-full bg-cyber-bg border border-cyber-border px-4 py-2 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/30 outline-none transition-all placeholder:text-cyber-text-muted/30" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest">О себе</label>
                    <textarea 
                      rows={3}
                      defaultValue="HR-эксперт с 10-летним опытом. Специализируюсь на подборе технических специалистов с использованием AI-инструментов."
                      className="w-full bg-cyber-bg border border-cyber-border px-4 py-2 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/30 outline-none transition-all placeholder:text-cyber-text-muted/30 resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                <Bell size={24} className="text-cyber-accent" />
                Каналы уведомлений
              </h3>
              <div className="grid gap-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 border border-cyber-border bg-cyber-bg/30 hover:border-cyber-accent/30 transition-colors group">
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest group-hover:text-cyber-accent transition-colors">{key.replace(/([A-Z])/g, ' $1')}</div>
                      <div className="text-[10px] text-cyber-text-muted font-mono">Получать важные системные оповещения через {key}</div>
                    </div>
                    <button 
                      onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                      className={`w-12 h-6 rounded-full relative transition-all ${value ? 'bg-cyber-accent shadow-[0_0_10px_rgba(0,242,255,0.3)]' : 'bg-cyber-border'}`}
                    >
                      <motion.div 
                        animate={{ x: value ? 26 : 2 }}
                        className="absolute top-1 w-4 h-4 bg-cyber-bg rounded-full shadow-sm"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                <Shield size={24} className="text-cyber-accent" />
                Безопасность аккаунта
              </h3>
              <div className="space-y-4">
                <button className="w-full p-4 border border-cyber-border hover:border-cyber-accent text-left transition-all group relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-accent/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <div className="relative z-10">
                    <div className="text-sm font-bold uppercase tracking-widest group-hover:text-cyber-accent">Сменить пароль</div>
                    <div className="text-[10px] text-cyber-text-muted font-mono">Последнее изменение: 3 месяца назад</div>
                  </div>
                </button>
                <button className="w-full p-4 border border-cyber-border hover:border-cyber-accent text-left transition-all group relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-accent/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <div className="relative z-10">
                    <div className="text-sm font-bold uppercase tracking-widest group-hover:text-cyber-accent">Двухфакторная аутентификация</div>
                    <div className="text-[10px] text-cyber-danger font-mono uppercase">Рекомендуется включить</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'language' && (
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                <Globe size={24} className="text-cyber-accent" />
                Язык и Регион
              </h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest">Язык интерфейса</label>
                  <select className="w-full bg-cyber-bg border border-cyber-border px-4 py-3 text-sm focus:border-cyber-accent outline-none transition-all appearance-none cursor-pointer hover:bg-white/5">
                    <option value="ru">Русский (Russian)</option>
                    <option value="en">English (US)</option>
                    <option value="de">Deutsch (German)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest">Часовой пояс</label>
                  <select className="w-full bg-cyber-bg border border-cyber-border px-4 py-3 text-sm focus:border-cyber-accent outline-none transition-all appearance-none cursor-pointer hover:bg-white/5">
                    <option value="msk">Москва (GMT+3)</option>
                    <option value="lon">London (GMT+0)</option>
                    <option value="nyc">New York (GMT-5)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.main>
  );
}
