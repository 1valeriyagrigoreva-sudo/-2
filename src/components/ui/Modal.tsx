import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[101]"
          >
            <div className="cyber-card shadow-[0_0_50px_rgba(0,242,255,0.15)]">
              <div className="p-6 border-b border-cyber-border flex justify-between items-center bg-white/2">
                <h2 className="text-[14px] font-bold tracking-[0.2em] uppercase text-cyber-accent">{title}</h2>
                <button 
                  onClick={onClose}
                  className="text-cyber-text-muted hover:text-cyber-accent transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
