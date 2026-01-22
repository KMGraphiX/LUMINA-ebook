import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Palette, Rocket, Ghost, History, Stethoscope,
    Church, ChevronRight, ChevronLeft, Music, Binary,
    Compass, Heart, BookOpen
} from 'lucide-react';

const subjects = [
    { name: "Art", icon: <Palette size={32} />, color: "from-rose-400 to-red-500", count: "127k" },
    { name: "Sci-Fi", icon: <Rocket size={32} />, color: "from-blue-400 to-indigo-600", count: "20k" },
    { name: "Fantasy", icon: <Ghost size={32} />, color: "from-purple-400 to-fuchsia-600", count: "14k" },
    { name: "History", icon: <History size={32} />, color: "from-amber-400 to-orange-600", count: "2M+" },
    { name: "Medicine", icon: <Stethoscope size={32} />, color: "from-emerald-400 to-teal-600", count: "59k" },
    { name: "Religion", icon: <Church size={32} />, color: "from-slate-600 to-slate-800", count: "164k" },
    { name: "Music", icon: <Music size={32} />, color: "from-violet-400 to-purple-600", count: "87k" },
    { name: "Science", icon: <Binary size={32} />, color: "from-cyan-400 to-blue-500", count: "102k" },
    { name: "Philosophy", icon: <Compass size={32} />, color: "from-brown-400 to-orange-800", count: "45k" },
];

export default function SubjectBrowse() {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const slide = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-24 relative group">
            <div className="mb-12">
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Browse by Subject</h2>
                <p className="text-slate-500 mt-2">Discover 12M+ books curated by Musthaq Ahmed.</p>
            </div>

            {/* Slider Buttons - Positioned for better UX */}
            <div className="absolute top-1/2 -left-4 z-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => slide('left')} className="p-4 rounded-full bg-white/80 backdrop-blur-md shadow-xl border border-white hover:bg-white text-slate-900 transition-all">
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="absolute top-1/2 -right-4 z-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => slide('right')} className="p-4 rounded-full bg-indigo-600 shadow-xl shadow-indigo-200 text-white hover:scale-110 transition-all">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Scrolling Track with No-Cut Padding */}
            <div
                ref={scrollRef}
                className="flex gap-10 overflow-x-auto no-scrollbar scroll-smooth py-10 px-4 -mx-4"
            >
                {subjects.map((subject, index) => (
                    <motion.div
                        key={subject.name}
                        whileHover={{ y: -15 }}
                        onClick={() => navigate('/all-books')}
                        className="flex-shrink-0 flex flex-col items-center w-36 cursor-pointer"
                    >
                        {/* The "Award-Winning" Icon Card */}
                        <div className={`w-32 h-32 rounded-[2.8rem] bg-gradient-to-br ${subject.color} mb-6 flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:rotate-6 relative`}>
                            {/* Subtle Inner Glow */}
                            <div className="absolute inset-2 border border-white/20 rounded-[2.2rem]" />
                            {subject.icon}
                        </div>

                        <h3 className="font-black text-slate-900 text-lg">{subject.name}</h3>
                        <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.2em]">{subject.count} Books</p>
                    </motion.div>
                ))}
            </div>

            <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </section>
    );
}