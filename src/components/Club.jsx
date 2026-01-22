import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Club() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full"
            >
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="mb-8 flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                </button>

                {/* Main Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-white rounded-[3rem] p-12 shadow-2xl"
                >
                    <div className="bg-indigo-600 w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl shadow-indigo-200 mx-auto">
                        <Sparkles size={40} />
                    </div>
                    
                    <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight text-center">
                        Welcome to the <span className="text-indigo-600">Lumina Inner Circle</span>
                    </h1>
                    
                    <p className="text-slate-500 text-xl mb-12 text-center max-w-lg mx-auto">
                        Join 50,000+ readers curated by Musthaq Ahmed. One subscription, infinite knowledge.
                    </p>

                    <div className="space-y-6 mb-12">
                        {[
                            'Unlimited Access to 12M+ Titles',
                            'Exclusive Author Interviews', 
                            'Offline Reading Mode',
                            'No Advertisements Ever',
                            'Early Access to New Releases',
                            'Personalized Reading Recommendations'
                        ].map((text, index) => (
                            <motion.div
                                key={text}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-center gap-4 font-bold text-slate-700 text-lg"
                            >
                                <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
                                {text}
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 hover:shadow-indigo-200"
                    >
                        Start Your 14-Day Free Trial
                    </motion.button>

                    <p className="text-center text-slate-400 text-sm mt-6">
                        No credit card required • Cancel anytime
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
