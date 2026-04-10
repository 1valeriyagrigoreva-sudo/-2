import { motion } from 'motion/react';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 p-8 overflow-y-auto"
    >
      <h1 className="text-5xl font-mono font-bold tracking-tighter mb-8 leading-none uppercase">
        {title}
      </h1>
      <div className="cyber-card p-12 flex flex-col items-center justify-center text-center border-dashed">
        <div className="w-16 h-16 border-2 border-cyber-accent border-t-transparent rounded-full animate-spin mb-6"></div>
        <h2 className="text-xl font-bold text-cyber-accent mb-2 tracking-widest uppercase">Initializing Module...</h2>
        <p className="text-cyber-text-muted font-mono text-sm max-w-md">
          Этот раздел находится в стадии разработки. Доступ будет предоставлен после завершения синхронизации данных с основным ядром системы.
        </p>
      </div>
    </motion.main>
  );
}
