import { motion } from 'framer-motion';
import { ChevronLeft, Settings, Moon, Sun, Type } from 'lucide-react';

export default function ReaderView({ bookTitle, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 z-[100] bg-[#f4f1ea] flex flex-col" // Classic book paper color
        >
            {/* Top Bar - Minimalist */}
            <nav className="p-6 flex justify-between items-center border-b border-black/5">
                <button onClick={onClose} className="flex items-center gap-2 font-medium text-slate-600 hover:text-black">
                    <ChevronLeft size={20} /> Back to Library
                </button>
                <span className="font-bold tracking-tight text-slate-400 uppercase text-xs">{bookTitle}</span>
                <div className="flex gap-4">
                    <button className="p-2 hover:bg-black/5 rounded-full"><Settings size={18} /></button>
                    <button className="p-2 hover:bg-black/5 rounded-full"><Type size={18} /></button>
                </div>
            </nav>

            {/* The Text Content */}
            <main className="flex-1 overflow-y-auto pt-20 pb-32 px-6">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h1 className="text-4xl font-serif font-bold text-slate-900 mb-12 italic">Chapter One: The Beginning</h1>

                    <div className="font-serif text-xl leading-relaxed text-slate-800 space-y-6">
                        <p>
                            The digital pages shimmered with a soft, paper-like glow. In the year 2026, reading had
                            evolved into a sensory experience that transcended the physical boundaries of ink and pulp.
                        </p>
                        <p>
                            Musthaq Ahmed looked at the interface he had built. It wasn't just code; it was a
                            gateway to a million different lives, stacked neatly in a bento-grid of possibilities.
                            The subscription was a key, and the Lumina Pure Reader was the map.
                        </p>
                        <p>
                            "This," he whispered, "is how stories should be told."
                        </p>
                        {/* Add more placeholder text as needed */}
                    </div>
                </div>
            </main>

            {/* Progress Footer */}
            <div className="p-6 bg-white/50 backdrop-blur-md border-t border-black/5">
                <div className="max-w-2xl mx-auto flex items-center gap-6">
                    <span className="text-xs font-bold text-slate-400">14%</span>
                    <div className="flex-1 h-1 bg-black/5 rounded-full overflow-hidden">
                        <div className="w-[14%] h-full bg-indigo-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">Page 12 of 340</span>
                </div>
            </div>
        </motion.div>
    );
}