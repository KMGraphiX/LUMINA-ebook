import { motion } from 'framer-motion';
import { BookOpen, Twitter, Github, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#FDFCFB] pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Newsletter Bento Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-[3rem] p-8 md:p-16 mb-20 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full -mr-20 -mt-20" />

                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                        <div className="max-w-md text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4">
                                Join the <span className="text-indigo-400">Literary Revolution</span>
                            </h2>
                            <p className="text-slate-400">Get weekly curated book recommendations and exclusive author interviews.</p>
                        </div>

                        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all min-w-[300px]"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-indigo-600 p-2 rounded-lg">
                                <BookOpen className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-slate-900">
                                LUMINA<span className="text-indigo-600 font-light ml-1">PURE</span>
                            </span>
                        </div>
                        <p className="text-slate-500 max-w-xs leading-relaxed">
                            Crafting the future of digital reading through elegant design and boundless accessibility.
                        </p>
                    </div>

                    {[
                        { title: 'Platform', links: ['Library', 'Reader App', 'Subscriptions', 'Authors'] },
                        { title: 'Company', links: ['About Us', 'Careers', 'Journal', 'Contact'] },
                        { title: 'Legal', links: ['Privacy', 'Terms', 'Cookie Policy', 'Licensing'] }
                    ].map((column) => (
                        <div key={column.title}>
                            <h4 className="font-bold text-slate-900 mb-6">{column.title}</h4>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors flex items-center group">
                                            {link}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all ml-1" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                        <p className="text-slate-400 text-sm">
                        </p>
                        <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
                        <p className="text-sm font-medium text-slate-500">
                            Built with passion by
                            <motion.span
                                whileHover={{ textShadow: "0px 0px 8px rgb(99 102 241)", color: "#6366f1" }}
                                className="ml-1 text-slate-900 cursor-pointer transition-all"
                            >
                                Musthaq Ahmed
                            </motion.span>
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <Twitter className="w-5 h-5 text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" />
                        <Instagram className="w-5 h-5 text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" />
                        <Github className="w-5 h-5 text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
}