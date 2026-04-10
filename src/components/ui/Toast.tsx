import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export default function Toast({ message, type = 'success', onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: 'border-cyber-success text-cyber-success bg-cyber-success/10',
    error: 'border-cyber-danger text-cyber-danger bg-cyber-danger/10',
    info: 'border-cyber-accent text-cyber-accent bg-cyber-accent/10',
  };

  const Icons = {
    success: CheckCircle2,
    error: AlertCircle,
    info: AlertCircle,
  };

  const Icon = Icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: 20, x: '-50%' }}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 border rounded-sm backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] ${colors[type]}`}
    >
      <Icon size={18} />
      <span className="text-xs font-bold uppercase tracking-widest">{message}</span>
      <button onClick={onClose} className="ml-4 hover:opacity-70 transition-opacity">
        <X size={14} />
      </button>
    </motion.div>
  );
}
