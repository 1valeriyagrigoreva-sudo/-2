import { FileText, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function VacancyInfo() {
  const navigate = useNavigate();
  
  return (
    <div className="cyber-card p-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-sm font-black tracking-widest uppercase flex items-center gap-2">
          <FileText size={16} className="text-cyber-accent" />
          Текст вакансии
        </h3>
        <button 
          onClick={() => navigate('/brief')}
          className="text-[10px] font-bold text-cyber-accent hover:underline flex items-center gap-1"
        >
          <Edit3 size={12} />
          РЕДАКТИРОВАТЬ
        </button>
      </div>
      
      <div className="space-y-6 text-sm text-cyber-text/80 leading-relaxed">
        <p>
          Мы ищем ответственного и проактивного Операционного ассистента, который готов стать правой рукой CEO и помогать в развитии нашего HR Tech продукта.
        </p>
        
        <div>
          <h4 className="text-cyber-accent font-bold text-[11px] uppercase tracking-widest mb-3">Обязанности:</h4>
          <ul className="space-y-2 list-none">
            {['Поиск и первичный отбор кандидатов по заданным критериям;', 'Координация встреч и управление календарем проекта;', 'Работа с CRM системой и актуализация базы данных;', 'Подготовка отчетности по воронке найма.'].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-cyber-accent">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-cyber-accent font-bold text-[11px] uppercase tracking-widest mb-3">Что мы предлагаем:</h4>
          <ul className="space-y-2 list-none">
            {['Динамичную среду в растущем стартапе;', 'Возможность карьерного роста до HR-менеджера;', 'Удаленный формат работы с гибким графиком.'].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-cyber-accent">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-cyber-border flex justify-between items-center text-[9px] font-mono text-cyber-text-muted">
        <span>LAST EDITED: 24.10.2023</span>
        <span>WORD COUNT: 214</span>
      </div>
    </div>
  );
}
