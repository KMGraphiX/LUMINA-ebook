import { motion } from 'framer-motion';
import { Clock, Flame, BookOpen, Settings, Play } from 'lucide-react';
import userData from '../data/userStats.json';

export default function Dashboard() {
    const { user, stats, currentlyReading, library } = userData;

    return (
        <div className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Profile Header */}
                <header className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <div className="flex items-center gap-6 text-center md:text-left">
                        <img src={user.avatar} className="w-20 h-20 rounded-full bg-indigo-100 p-1" alt="avatar" />
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Welcome, {user.name}</h1>
                            <span className="bg-indigo-100 text-indigo-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                {user.membership} Member
                            </span>
                        </div>
                    </div>
                    <button className="p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 transition-colors">
                        <Settings size={24} />
                    </button>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Main Content: Current Read Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-8 bg-slate-900 rounded-[3.5rem] p-10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full -mr-32 -mt-32" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-48 aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500">
                                <img src={currentlyReading.image} className="w-full h-full object-cover" alt="cover" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-4xl font-bold text-white mb-2">{currentlyReading.title}</h2>
                                <p className="text-indigo-300 font-medium mb-8">by {currentlyReading.author}</p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Progress</span>
                                        <span className="text-white font-bold">{currentlyReading.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }} animate={{ width: `${currentlyReading.progress}%` }}
                                            className="h-full bg-indigo-500"
                                        />
                                    </div>
                                </div>

                                <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-500 hover:text-white transition-all">
                                    <Play size={18} fill="currentColor" /> Resume Reading
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar Stats */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8">
                            <h3 className="font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Clock className="text-indigo-600" size={20} /> Today's Stats
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <p className="text-xs text-slate-400 font-bold uppercase">Streak</p>
                                    <p className="text-2xl font-black text-slate-900">{stats.streak} Days <Flame className="inline text-orange-500" size={20} /></p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs text-slate-400 font-bold uppercase">Daily Goal</p>
                                    <p className="text-lg font-bold text-slate-900">{stats.dailyGoal}</p>
                                </div>
                            </div>
                        </div>

                        {/* Mini Library List */}
                        <div className="bg-slate-50 rounded-[2.5rem] p-8">
                            <h3 className="font-bold text-slate-900 mb-6">Up Next</h3>
                            <div className="space-y-4">
                                {library.map(book => (
                                    <div key={book.id} className="flex items-center gap-4 group cursor-pointer">
                                        <img src={book.image} className="w-12 h-16 rounded-lg object-cover" />
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{book.title}</p>
                                            <div className="w-full h-1 bg-slate-200 rounded-full mt-2">
                                                <div className="h-full bg-slate-400 rounded-full" style={{ width: `${book.progress}%` }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
