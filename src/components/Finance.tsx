import { motion, AnimatePresence } from 'motion/react';
import { CreditCard, TrendingUp, ArrowUpRight, ArrowDownLeft, DollarSign, Plus, Download, X } from 'lucide-react';
import React, { useState } from 'react';
import Modal from './ui/Modal';
import Toast from './ui/Toast';

export default function Finance() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [balance, setBalance] = useState(124500.00);
  const [transactions] = useState([
    { id: 1, type: 'out', amount: 1500, label: 'HH.ru Subscription', date: '2024-04-08', status: 'Completed' },
    { id: 2, type: 'in', amount: 50000, label: 'Top-up via Card', date: '2024-04-05', status: 'Completed' },
    { id: 3, type: 'out', amount: 2400, label: 'Voice-Synth API Credits', date: '2024-04-02', status: 'Completed' },
    { id: 4, type: 'out', amount: 800, label: 'Screener-AI Processing', date: '2024-03-28', status: 'Completed' },
  ]);

  const handleTopUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setShowToast(true);
    setBalance(prev => prev + 10000); // Mock top up
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
            message="Баланс успешно пополнен" 
            onClose={() => setShowToast(false)} 
          />
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-cyber-accent text-cyber-bg text-[10px] font-black px-2 py-0.5 rounded-sm uppercase">Finance_Core</span>
            <span className="text-[10px] font-mono text-cyber-text-muted uppercase tracking-widest">Billing Cycle: April 2024</span>
          </div>
          <h1 className="text-6xl font-mono font-bold tracking-tighter uppercase leading-none">
            Финансовый <br /> <span className="text-cyber-accent">контроль</span>
          </h1>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="cyber-button-primary px-8 flex items-center gap-2 font-black italic tracking-tighter"
          >
            <Plus size={18} />
            ПОПОЛНИТЬ БАЛАНС
          </button>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Пополнение баланса"
      >
        <form onSubmit={handleTopUp} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest mb-2">Сумма пополнения (₽)</label>
              <input 
                type="number" 
                defaultValue="10000"
                className="w-full bg-cyber-bg border border-cyber-border rounded-sm px-4 py-3 text-[11px] focus:border-cyber-accent outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest mb-2">Способ оплаты</label>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="border border-cyber-accent bg-cyber-accent/10 p-4 flex flex-col items-center gap-2 rounded-sm">
                  <CreditCard size={24} className="text-cyber-accent" />
                  <span className="text-[10px] font-bold uppercase">Банковская карта</span>
                </button>
                <button type="button" className="border border-cyber-border p-4 flex flex-col items-center gap-2 rounded-sm hover:border-cyber-accent/50 transition-colors">
                  <DollarSign size={24} className="text-cyber-text-muted" />
                  <span className="text-[10px] font-bold uppercase text-cyber-text-muted">Счет на оплату</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 cyber-button-secondary py-3">Отмена</button>
            <button type="submit" className="flex-1 cyber-button-primary py-3">Оплатить</button>
          </div>
        </form>
      </Modal>

      <div className="grid grid-cols-3 gap-8">
        <div className="cyber-card p-8 bg-gradient-to-br from-cyber-bg to-cyber-accent/5 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <DollarSign size={120} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-cyber-accent uppercase tracking-widest mb-2">Current Balance</div>
            <div className="text-5xl font-black tracking-tighter">
              {balance.toLocaleString('ru-RU')} <span className="text-xl text-cyber-accent">₽</span>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2 text-cyber-success">
            <TrendingUp size={16} />
            <span className="text-xs font-bold">+12.5% vs last month</span>
          </div>
        </div>

      <div className="col-span-2 cyber-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-black tracking-widest uppercase flex items-center gap-2">
              <CreditCard size={16} className="text-cyber-accent" />
              Последние транзакции
            </h3>
            <div className="flex items-center gap-4">
              <select className="bg-cyber-bg border border-cyber-border px-3 py-1 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-cyber-accent transition-all cursor-pointer hover:bg-white/5">
                <option value="all">Все операции</option>
                <option value="in">Пополнения</option>
                <option value="out">Списания</option>
              </select>
              <button className="text-[10px] font-bold text-cyber-accent hover:underline flex items-center gap-1 transition-all hover:scale-105 active:scale-95">
                <Download size={12} />
                СКАЧАТЬ ОТЧЕТ
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 border border-cyber-border hover:border-cyber-accent/30 transition-all bg-cyber-bg/30 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-transform group-hover:scale-110 ${tx.type === 'in' ? 'bg-cyber-success/10 text-cyber-success' : 'bg-cyber-danger/10 text-cyber-danger'}`}>
                    {tx.type === 'in' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-tight group-hover:text-cyber-accent transition-colors">{tx.label}</div>
                    <div className="text-[10px] text-cyber-text-muted font-mono">{tx.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-black ${tx.type === 'in' ? 'text-cyber-success' : 'text-cyber-text'}`}>
                    {tx.type === 'in' ? '+' : '-'}{tx.amount.toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-[9px] font-bold text-cyber-success uppercase">{tx.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'HH.ru API', status: 'Active', cost: '1,500 ₽/mo' },
          { label: 'Voice-Synth', status: 'Active', cost: '0.12 ₽/sec' },
          { label: 'Screener-AI', status: 'Active', cost: '5 ₽/cand' },
          { label: 'Storage', status: 'Active', cost: 'Free' },
        ].map((service, i) => (
          <div key={i} className="cyber-card p-6 border-cyber-accent/20 hover:border-cyber-accent/50 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-accent/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative z-10">
              <div className="text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest mb-1">Service</div>
              <div className="text-lg font-black mb-4 uppercase group-hover:text-cyber-accent transition-colors">{service.label}</div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[9px] font-bold text-cyber-success uppercase">Status: {service.status}</div>
                  <div className="text-xs font-mono">{service.cost}</div>
                </div>
                <button className="text-[10px] font-bold text-cyber-accent hover:underline transition-all hover:scale-110">MANAGE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.main>
  );
}
