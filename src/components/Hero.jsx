import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative pt-24 md:pt-32 pb-20 px-6 overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/30 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-200/20 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content - Typography focused */}
                <div className="lg:col-span-7 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-widest uppercase"
                    >
                        <Sparkles size={14} />
                        <span>The Future of Reading is Here</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]"
                    >
                        Read <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-700">Without</span> <br /> Limits.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-slate-500 max-w-lg leading-relaxed"
                    >
                        Lumina Pure Reader brings you a curated library of world-class ebooks.
                        One subscription, infinite stories, and a reader interface that feels like paper.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button
                            onClick={() => navigate('/club')}
                            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-600 transition-all group hover:shadow-2xl hover:shadow-indigo-200"
                        >
                            Start Your Free Trial <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => {
                                document.getElementById('collection-section')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                        >
                            Browse Library
                        </button>
                    </motion.div>
                </div>

                {/* Right Content - 3D Visual "Bento" Grid */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="aspect-[3/4] bg-indigo-100 rounded-3xl overflow-hidden shadow-xl"
                    >
                        <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800" alt="Book" className="w-full h-full object-cover" />
                    </motion.div>
                    <div className="space-y-4 pt-8">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="aspect-[3/4] bg-purple-100 rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800" alt="Book" className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="h-32 bg-slate-900 rounded-3xl flex items-center justify-center p-6">
                            <p className="text-white text-center font-medium leading-tight">12k+ Books Available</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}