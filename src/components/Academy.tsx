import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Play, CheckCircle2, Lock, Trophy, Star, Clock, ChevronLeft, Volume2, Maximize2 } from 'lucide-react';
import { useState } from 'react';

export default function Academy() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [courses] = useState([
    { id: 1, title: 'Основы AI-Рекрутинга', progress: 100, lessons: 12, level: 'Beginner', locked: false },
    { id: 2, title: 'Настройка Voice-Synth агентов', progress: 45, lessons: 8, level: 'Intermediate', locked: false },
    { id: 3, title: 'Продвинутая аналитика воронки', progress: 0, lessons: 15, level: 'Advanced', locked: false },
    { id: 4, title: 'Психология в эпоху нейросетей', progress: 0, lessons: 10, level: 'Expert', locked: true },
  ]);

  if (selectedCourse) {
    return (
      <motion.main 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 p-8 overflow-y-auto space-y-8"
      >
        <button 
          onClick={() => setSelectedCourse(null)}
          className="flex items-center gap-2 text-cyber-accent font-bold text-xs uppercase tracking-widest hover:underline mb-8"
        >
          <ChevronLeft size={16} />
          Назад к списку курсов
        </button>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-6">
            <div className="aspect-video bg-cyber-card border border-cyber-accent/30 relative group overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${selectedCourse.id + 50}/1280/720`} 
                alt="Video Placeholder" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-cyber-accent text-cyber-bg flex items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.5)] hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-4">
                  <Play size={18} className="text-cyber-accent" />
                  <div className="h-1 w-64 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-cyber-accent" />
                  </div>
                  <span className="text-[10px] font-mono">12:44 / 35:20</span>
                </div>
                <div className="flex items-center gap-4">
                  <Volume2 size={18} />
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>

            <div className="cyber-card p-8">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">{selectedCourse.title}</h2>
              <p className="text-cyber-text-muted text-sm leading-relaxed mb-8">
                В этом уроке мы разберем основные принципы работы нейросетей в подборе персонала. Вы узнаете, как правильно составлять промпты для первичного скрининга и как интерпретировать результаты оценки AI.
              </p>
              
              <div className="flex gap-4">
                <button className="cyber-button-primary px-8 py-3">СЛЕДУЮЩИЙ УРОК</button>
                <button className="cyber-button-secondary px-8 py-3">МАТЕРИАЛЫ КУРСА</button>
              </div>
            </div>
          </div>

          <div className="col-span-4 space-y-6">
            <div className="cyber-card p-6">
              <h3 className="text-sm font-black uppercase tracking-widest mb-6 border-b border-cyber-border pb-4">Содержание курса</h3>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <button key={i} className={`w-full flex items-center justify-between p-3 text-left transition-all border ${i === 1 ? 'border-cyber-accent bg-cyber-accent/5 text-cyber-accent' : 'border-transparent hover:bg-white/5'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono opacity-50">0{i}</span>
                      <span className="text-[11px] font-bold uppercase tracking-tight">Урок {i}: Введение в систему</span>
                    </div>
                    {i < 2 ? <CheckCircle2 size={14} className="text-cyber-success" /> : <Clock size={14} className="text-cyber-text-muted" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    );
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 p-8 overflow-y-auto space-y-8"
    >
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-cyber-accent text-cyber-bg text-[10px] font-black px-2 py-0.5 rounded-sm uppercase">Academy_Module</span>
            <span className="text-[10px] font-mono text-cyber-text-muted uppercase tracking-widest">Knowledge Base v2.4</span>
          </div>
          <h1 className="text-6xl font-mono font-bold tracking-tighter uppercase leading-none">
            Академия <br /> <span className="text-cyber-accent">роста</span>
          </h1>
        </div>
        
        <div className="flex gap-4">
          <div className="cyber-card p-4 flex items-center gap-4 border-cyber-accent/30">
            <div className="w-10 h-10 rounded-sm bg-cyber-accent/10 flex items-center justify-center text-cyber-accent">
              <Trophy size={20} />
            </div>
            <div>
              <div className="text-[9px] font-bold text-cyber-text-muted uppercase">Your Rank</div>
              <div className="text-sm font-black uppercase">Senior AI Operator</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Поиск курсов..." 
            className="w-full bg-cyber-bg border border-cyber-border px-10 py-3 text-sm focus:border-cyber-accent outline-none transition-all placeholder:text-cyber-text-muted/30"
          />
          <BookOpen size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-cyber-text-muted" />
        </div>
        <div className="flex gap-2">
          {['Все', 'AI', 'Рекрутинг', 'Психология'].map((cat) => (
            <button 
              key={cat}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                cat === 'Все' ? 'border-cyber-accent bg-cyber-accent/10 text-cyber-accent' : 'border-cyber-border text-cyber-text-muted hover:border-cyber-accent/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {courses.map((course) => (
          <div key={course.id} className={`cyber-card p-6 relative group overflow-hidden ${course.locked ? 'opacity-50 grayscale' : 'hover:border-cyber-accent transition-all'}`}>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-cyber-accent/10 flex items-center justify-center text-cyber-accent">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight">{course.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-[10px] font-bold text-cyber-accent uppercase tracking-widest">{course.level}</span>
                    <span className="flex items-center gap-1 text-[10px] text-cyber-text-muted font-mono">
                      <Clock size={10} /> {course.lessons} Уроков
                    </span>
                  </div>
                </div>
              </div>
              {course.locked ? <Lock size={20} className="text-cyber-text-muted" /> : <Star size={20} className="text-cyber-accent" />}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span>Прогресс обучения</span>
                <span className="text-cyber-accent">{course.progress}%</span>
              </div>
              <div className="h-1 bg-cyber-border rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  className="h-full bg-cyber-accent shadow-[0_0_10px_rgba(0,242,255,0.5)]"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border border-cyber-bg bg-cyber-border overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i + 10}/50/50`} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full border border-cyber-bg bg-cyber-accent/20 flex items-center justify-center text-[8px] font-bold text-cyber-accent">
                  +12
                </div>
              </div>
              <button 
                disabled={course.locked}
                onClick={() => setSelectedCourse(course)}
                className={`flex items-center gap-2 px-6 py-2 font-black italic tracking-tighter text-sm ${course.progress === 100 ? 'text-cyber-success' : 'cyber-button-primary'}`}
              >
                {course.progress === 100 ? (
                  <>
                    <CheckCircle2 size={16} />
                    ЗАВЕРШЕНО
                  </>
                ) : (
                  <>
                    <Play size={16} />
                    {course.progress > 0 ? 'ПРОДОЛЖИТЬ' : 'НАЧАТЬ КУРС'}
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cyber-card p-8 bg-cyber-accent/5 border-cyber-accent/30 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-sm bg-cyber-accent flex items-center justify-center text-cyber-bg">
            <Trophy size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter">Еженедельный челлендж</h3>
            <p className="text-sm text-cyber-text-muted max-w-md">
              Проведите 50 успешных интервью с помощью AI-агента до конца недели и получите уникальный скин для интерфейса.
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-cyber-accent mb-1">32 / 50</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-cyber-text-muted">Интервью завершено</div>
        </div>
      </div>
    </motion.main>
  );
}
