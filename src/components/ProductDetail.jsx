import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ShoppingBag, Share2, ShieldCheck, Truck } from 'lucide-react';

export default function ProductDetail({ books, onAddToCart }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = books.find(b => b.id === parseInt(id));

    if (!book) return <div className="pt-32 text-center">Book not found.</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[#FDFCFB] pt-24 md:pt-32 pb-20 px-6"
        >
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-12 transition-colors font-bold"
                >
                    <ChevronLeft size={20} /> Back to Gallery
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Premium Image Gallery */}
                    <div className="lg:col-span-5">
                        <motion.div
                            layoutId={`image-${book.id}`}
                            className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl shadow-indigo-100 border-8 border-white"
                        >
                            <img src={book.image} className="w-full h-full object-cover" alt={book.title} />
                        </motion.div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <span className="text-indigo-600 font-black uppercase tracking-[0.3em] text-xs mb-4">{book.category}</span>
                        <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
                            {book.title}
                        </h1>
                        <p className="text-2xl text-slate-500 mb-8 font-medium">by {book.author}</p>

                        <div className="flex items-center gap-6 mb-10">
                            <div className="flex items-center gap-1 bg-amber-50 px-4 py-2 rounded-full">
                                <Star size={18} className="text-amber-400 fill-amber-400" />
                                <span className="font-bold text-amber-700">{book.rating}</span>
                            </div>
                            <span className="text-slate-400 font-medium">2,480 Verified Reviews</span>
                        </div>

                        <p className="text-slate-600 text-xl leading-relaxed mb-12 max-w-2xl">
                            This special edition of <span className="text-slate-900 font-bold italic">{book.title}</span> features a premium "Lumina Pure" digital binding. Dive into a narrative that has captivated millions of readers worldwide.
                            The story explores themes of resilience, identity, and the power of human connection.
                        </p>

                        <div className="flex items-center gap-8 mb-12">
                            <span className="text-4xl lg:text-5xl font-black text-slate-900">${book.price}</span>
                            <div className="h-12 w-px bg-slate-200" />
                            <div className="flex flex-col text-sm font-bold text-emerald-600">
                                <span>In Stock</span>
                                <span className="text-slate-400 font-medium italic">Instant Digital Access</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => onAddToCart(book)} className="flex-1 bg-slate-900 text-white py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-100">
                                <ShoppingBag size={24} /> Add to Cart — ${book.price}
                            </button>
                            <button className="p-6 border border-slate-200 rounded-3xl hover:bg-slate-50 transition-all text-slate-500 hover:text-indigo-600">
                                <Share2 size={24} />
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-6 mt-16 pt-12 border-t border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><ShieldCheck /></div>
                                <span className="text-sm font-bold text-slate-500 leading-tight">Secure Digital <br /> Licensing</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><Truck /></div>
                                <span className="text-sm font-bold text-slate-500 leading-tight">Instant Cloud <br /> Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}