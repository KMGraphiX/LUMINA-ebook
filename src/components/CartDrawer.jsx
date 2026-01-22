import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemove }) {
    const navigate = useNavigate();
    
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white/80 backdrop-blur-md">
                            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                                <ShoppingBag className="text-indigo-600" /> Your Cart ({cartItems.length})
                            </h2>
                            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <X size={20} className="text-slate-500" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-20 aspect-[2/3] rounded-xl overflow-hidden shadow-md">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <h3 className="font-bold text-slate-900">{item.title}</h3>
                                            <p className="text-sm text-slate-500">Digital Edition</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-indigo-600">${item.price}</span>
                                            <button 
                                                onClick={() => onRemove(item.id)}
                                                className="text-slate-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer / Checkout */}
                        <div className="p-6 border-t border-slate-100 bg-slate-50">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-slate-500 font-medium">Subtotal</span>
                                <span className="text-2xl font-black text-slate-900">${subtotal.toFixed(2)}</span>
                            </div>
                            <button 
                                onClick={() => {
                                    navigate('/cart');
                                    onClose();
                                }}
                                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-200"
                            >
                                Proceed to Checkout <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
