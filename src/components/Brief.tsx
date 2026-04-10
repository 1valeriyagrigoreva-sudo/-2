import { motion, AnimatePresence } from 'motion/react';
import { FileText, Save, Plus, Trash2, Info, ChevronDown, Send, Mic, MicOff, Bot, User } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import Toast from './ui/Toast';

export default function Brief() {
  const [showToast, setShowToast] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Привет! Я помогу вам составить идеальный бриф для вакансии. Какую позицию мы сегодня открываем?' }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [sections, setSections] = useState([
    { id: 1, title: 'Общая информация', fields: ['Название вакансии', 'Отдел', 'Локация'] },
    { id: 2, title: 'Требования', fields: ['Hard Skills', 'Soft Skills', 'Опыт работы'] },
    { id: 3, title: 'Условия', fields: ['Зарплатная вилка', 'График', 'Бонусы'] },
  ]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSave = () => {
    setShowToast(true);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!chatInput.trim()) return;

    const newMessages = [...messages, { role: 'user', text: chatInput }];
    setMessages(newMessages);
    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'Отлично! Я заполнил название вакансии как "' + chatInput + '". Какие ключевые навыки (Hard Skills) требуются от кандидата?' 
      }]);
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice-to-text after 2 seconds
      setTimeout(() => {
        setChatInput('Senior React Developer с опытом работы от 5 лет');
        setIsRecording(false);
      }, 2000);
    }
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
            message="Бриф успешно сохранен" 
            onClose={() => setShowToast(false)} 
          />
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-cyber-accent text-cyber-bg text-[10px] font-black px-2 py-0.5 rounded-sm uppercase">Brief_Builder</span>
            <span className="text-[10px] font-mono text-cyber-text-muted uppercase tracking-widest">Draft ID: #BR-992</span>
          </div>
          <h1 className="text-6xl font-mono font-bold tracking-tighter uppercase leading-none">
            Бриф <br /> <span className="text-cyber-accent">вакансии</span>
          </h1>
        </div>
        
        <div className="flex gap-4">
          <button className="cyber-card px-6 py-3 flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:border-cyber-accent transition-all">
            <Trash2 size={16} className="text-cyber-danger" />
            СБРОСИТЬ
          </button>
          <button 
            onClick={handleSave}
            className="cyber-button-primary px-8 flex items-center gap-2 font-black italic tracking-tighter"
          >
            <Save size={18} />
            СОХРАНИТЬ БРИФ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="cyber-card p-6">
              <div className="flex justify-between items-center mb-6 border-b border-cyber-border pb-4">
                <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
                  <FileText size={20} className="text-cyber-accent" />
                  {section.title}
                </h3>
                <button className="text-cyber-text-muted hover:text-cyber-accent transition-colors">
                  <ChevronDown size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {section.fields.map((field, i) => (
                  <div key={i} className="space-y-1">
                    <label className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest">{field}</label>
                    <input 
                      type="text" 
                      placeholder={`Введите ${field.toLowerCase()}...`}
                      className="w-full bg-cyber-bg/50 border border-cyber-border px-4 py-3 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/30 outline-none transition-all placeholder:text-cyber-text-muted/30" 
                    />
                  </div>
                ))}
                <button className="col-span-2 border border-dashed border-cyber-border p-3 flex items-center justify-center gap-2 text-[10px] font-bold text-cyber-text-muted hover:border-cyber-accent hover:text-cyber-accent transition-all uppercase tracking-widest">
                  <Plus size={14} />
                  Добавить поле
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6 flex flex-col h-[calc(100vh-250px)]">
          <div className="cyber-card p-6 bg-cyber-accent/5 border-cyber-accent/30 flex-1 flex flex-col min-h-0">
            <div className="flex items-center gap-2 mb-4 text-cyber-accent">
              <Bot size={18} />
              <h4 className="text-xs font-black uppercase tracking-widest">AI Ассистент</h4>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-sm text-[11px] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-cyber-accent text-cyber-bg font-bold' 
                      : 'bg-cyber-bg border border-cyber-accent/20 text-cyber-text-muted'
                  }`}>
                    <div className="flex items-center gap-2 mb-1 opacity-50 uppercase text-[8px] font-black">
                      {msg.role === 'user' ? <User size={10} /> : <Bot size={10} />}
                      {msg.role === 'user' ? 'Вы' : 'AI'}
                    </div>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="relative">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Напишите или скажите..."
                className="w-full bg-cyber-bg border border-cyber-border px-4 py-3 pr-20 text-[11px] focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/30 outline-none transition-all placeholder:text-cyber-text-muted/30"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                <button 
                  type="button"
                  onClick={toggleRecording}
                  className={`p-2 transition-colors ${isRecording ? 'text-cyber-danger animate-pulse' : 'text-cyber-text-muted hover:text-cyber-accent'}`}
                >
                  {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
                </button>
                <button 
                  type="submit"
                  className="p-2 text-cyber-accent hover:text-cyber-accent/80 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>

          <div className="cyber-card p-6">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4">Статус заполнения</h4>
            <div className="space-y-4">
              {[
                { label: 'Общая информация', val: 100 },
                { label: 'Требования', val: 65 },
                { label: 'Условия', val: 0 },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-[9px] font-bold uppercase">
                    <span>{item.label}</span>
                    <span className={item.val === 100 ? 'text-cyber-success' : 'text-cyber-accent'}>{item.val}%</span>
                  </div>
                  <div className="h-1 bg-cyber-border rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-500 ${item.val === 100 ? 'bg-cyber-success' : 'bg-cyber-accent'}`} style={{ width: `${item.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
