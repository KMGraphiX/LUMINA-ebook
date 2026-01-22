import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

export default function Subscription() {
    return (
        <section className="py-24 px-6 bg-slate-900 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <h2 className="text-5xl font-black text-white mb-6 tracking-tighter">One Price. <span className="text-indigo-400">Unlimited Stories.</span></h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-16">Join the Lumina Pure Club and get instant access to our entire library of over 12 million ebooks.</p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Monthly Plan */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] text-left"
                    >
                        <h3 className="text-white text-2xl font-bold mb-2">Monthly Reader</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-5xl font-black text-white">$9.99</span>
                            <span className="text-slate-400">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-10">
                            {['Unlimited Access', 'Offline Reading', 'No Ads', 'Cancel Anytime'].map((feat) => (
                                <li key={feat} className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-indigo-500/20 p-1 rounded-full"><Check size={14} className="text-indigo-400" /></div>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-indigo-500 hover:text-white transition-all">Start 7-Day Free Trial</button>
                    </motion.div>

                    {/* Yearly Plan - Featured */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-indigo-600 p-10 rounded-[3rem] text-left relative shadow-2xl shadow-indigo-500/20"
                    >
                        <div className="absolute top-6 right-8 bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                            <Sparkles size={10} /> Best Value
                        </div>
                        <h3 className="text-white text-2xl font-bold mb-2">Annual Sage</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-5xl font-black text-white">$79.00</span>
                            <span className="text-indigo-200">/yr</span>
                        </div>
                        <ul className="space-y-4 mb-10 text-indigo-100">
                            {['All Monthly Features', '2 Months Free', 'Priority Support', 'Exclusive Pre-releases'].map((feat) => (
                                <li key={feat} className="flex items-center gap-3">
                                    <div className="bg-white/20 p-1 rounded-full"><Check size={14} className="text-white" /></div>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-black transition-all shadow-xl">Get Started Now</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}