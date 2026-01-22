import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export default function ClubPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="pt-40 pb-20 px-6 min-h-screen bg-gradient-to-b from-indigo-50 to-white"
        >
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex p-4 bg-white rounded-3xl shadow-xl mb-8 text-indigo-600">
                    <Sparkles size={40} />
                </div>
                <h1 className="text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
                    The Future of Reading is <span className="text-indigo-600">Lumina Pure.</span>
                </h1>
                <p className="text-2xl text-slate-500 mb-16 max-w-2xl mx-auto">
                    One flat monthly fee for unlimited access to the world's most curated digital library.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
                    {[
                        { title: "Infinite Library", desc: "Access 12M+ books instantly." },
                        { title: "No Interruptions", desc: "100% ad-free experience." },
                        { title: "Pure Audio", desc: "Native audio for every title." }
                    ].map((feature, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-indigo-100/50">
                            <CheckCircle className="text-emerald-500 mb-4" />
                            <h3 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <button className="bg-slate-900 text-white px-16 py-8 rounded-[2rem] font-black text-2xl hover:bg-indigo-600 hover:scale-105 transition-all shadow-2xl">
                    Join the Club — $19/mo
                </button>
            </div>
        </motion.div>
    );
}