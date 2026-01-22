import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart, Eye, X } from 'lucide-react';

const ALL_BOOKS = [
    { id: 1, title: "Dark Matter", author: "Blake Crouch", category: "Sci-Fi", color: "bg-blue-500" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", category: "Fantasy", color: "bg-purple-500" },
    { id: 3, title: "Sapiens", author: "Yuval Noah Harari", category: "History", color: "bg-amber-500" },
    { id: 4, title: "Deep Work", author: "Cal Newport", category: "Self-Help", color: "bg-emerald-500" },
    { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic", color: "bg-rose-500" },
    { id: 6, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", color: "bg-orange-500" },
    // Add as many as you want here!
];

export default function BookGrid() {
    const [filter, setFilter] = useState('All');
    const [selectedBook, setSelectedBook] = useState(null);

    const categories = ['All', 'Sci-Fi', 'Fantasy', 'History', 'Classic'];
    const filteredBooks = filter === 'All' ? ALL_BOOKS : ALL_BOOKS.filter(b => b.category === filter);

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Expand Your Library</h2>

                {/* Award-Winning Filter Chips */}
                <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl overflow-x-auto max-w-full">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${filter === cat ? 'bg-white shadow-md text-indigo-600' : 'text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* The Grid */}
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <AnimatePresence mode='popLayout'>
                    {filteredBooks.map((book) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            key={book.id}
                            className="group cursor-pointer"
                            onClick={() => setSelectedBook(book)}
                        >
                            {/* The "Physical" Book Cover Look */}
                            <div className={`aspect-[2/3] rounded-2xl ${book.color} shadow-lg relative overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2`}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1">{book.category}</p>
                                    <h3 className="text-white text-xl font-bold leading-tight">{book.title}</h3>
                                </div>
                                {/* Hover Action Overlay */}
                                <div className="absolute inset-0 bg-indigo-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <div className="bg-white p-3 rounded-full text-indigo-600 shadow-xl"><Eye size={20} /></div>
                                    <div className="bg-white p-3 rounded-full text-indigo-600 shadow-xl"><ShoppingCart size={20} /></div>
                                </div>
                            </div>
                            <p className="mt-4 font-bold text-slate-900">{book.title}</p>
                            <p className="text-sm text-slate-500">{book.author}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Quick View Modal */}
            <AnimatePresence>
                {selectedBook && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedBook(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                            className="bg-white rounded-[3rem] p-12 max-w-4xl w-full relative z-10 shadow-2xl flex flex-col md:flex-row gap-12"
                        >
                            <button onClick={() => setSelectedBook(null)} className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <X size={24} />
                            </button>
                            <div className={`w-full md:w-1/2 aspect-[2/3] rounded-3xl ${selectedBook.color} shadow-2xl`} />
                            <div className="flex-1 flex flex-col justify-center">
                                <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">{selectedBook.category}</span>
                                <h2 className="text-5xl font-black text-slate-900 mt-2 mb-4 leading-none">{selectedBook.title}</h2>
                                <p className="text-slate-500 text-lg mb-8">Written by {selectedBook.author}. This is a masterpiece of modern literature, available exclusively for Lumina Pure members.</p>
                                <button className="bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
                                    Read Now — $0.00 (Subscribed)
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}