import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function ClubModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="relative bg-white rounded-[3rem] p-12 max-w-xl w-full shadow-2xl"
            >
                <div className="bg-indigo-600 w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl shadow-indigo-200">
                    <Sparkles size={32} />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-4 leading-tight">
                    Welcome to the <span className="text-indigo-600">Lumina Inner Circle</span>
                </h2>
                <p className="text-slate-500 text-lg mb-8">
                    Join 50,000+ readers curated by Musthaq Ahmed. One subscription, infinite knowledge.
                </p>

                <div className="space-y-4 mb-10">
                    {['Unlimited Access to 12M+ Titles', 'Exclusive Author Interviews', 'Offline Reading Mode', 'No Advertisements Ever'].map((text) => (
                        <div key={text} className="flex items-center gap-3 font-bold text-slate-700">
                            <CheckCircle2 className="text-emerald-500" /> {text}
                        </div>
                    ))}
                </div>

                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200">
                    Start Your 14-Day Free Trial
                </button>
            </motion.div>
        </div>
    );
}