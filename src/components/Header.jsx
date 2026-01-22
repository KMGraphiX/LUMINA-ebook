import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, BookOpen, User, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

// Catch the new props inside the { } braces here
export default function Header({
    searchQuery,
    setSearchQuery,
    onOpenCart,
    cartCount
}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);

        // Auto-scroll to products when user starts typing
        if (e.target.value.length > 0) {
            document.getElementById('book-showcase-section')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            {/* Glassmorphic Container */}
            <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/70 border border-white/20 shadow-2xl rounded-2xl px-6 py-3 flex items-center justify-between relative">

                {/* Logo Section */}
                <div onClick={() => navigate('/')} className="flex items-center gap-2 group cursor-pointer z-50">
                    <div className="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                        <BookOpen className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-slate-900">
                        LUMINA<span className="text-indigo-600 font-light ml-1">PURE READER</span>
                    </span>
                </div>

                {/* DESKTOP: Search Box */}
                <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search your next story..."
                        className="w-full bg-slate-100/50 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none text-sm"
                    />
                    <Search className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-5">
                    {/* Dashboard Button (Desktop) */}
                    <button
                        onClick={() => navigate('/dashboard')}
                        className={`hidden md:block transition-colors ${location.pathname === '/dashboard' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
                    >
                        <User className="w-5 h-5" />
                    </button>

                    {/* Cart Button */}
                    <button
                        onClick={onOpenCart}
                        className="relative group p-2 z-50"
                    >
                        <ShoppingBag className="w-6 h-6 text-slate-800 group-hover:scale-110 transition-transform" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Join Club Button (Desktop) */}
                    <button
                        onClick={() => navigate('/club')}
                        className="hidden lg:block bg-slate-900 text-white px-5 py-2 rounded-xl font-medium text-sm hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-200 transition-all"
                    >
                        Join Club
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-slate-900 z-50"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 p-6 md:hidden"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 flex flex-col gap-6">

                            {/* Mobile Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    placeholder="Search books..."
                                    className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-12 pr-4 font-medium text-slate-900 focus:ring-2 focus:ring-indigo-500/20 outline-none"
                                />
                                <Search className="absolute left-4 top-4 text-slate-400" />
                            </div>

                            {/* Mobile Nav Links */}
                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={() => { navigate('/dashboard'); setIsMobileMenuOpen(false); }}
                                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 font-bold text-slate-900"
                                >
                                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl"><User size={20} /></div>
                                    My Dashboard
                                </button>
                                <button
                                    onClick={() => { navigate('/club'); setIsMobileMenuOpen(false); }}
                                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 font-bold text-slate-900"
                                >
                                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl"><BookOpen size={20} /></div>
                                    Join Book Club
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}