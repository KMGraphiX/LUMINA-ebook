import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ChevronLeft, CreditCard, ShoppingCart, Smartphone, Wallet, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartPage({ cartItems, onRemove }) {
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  // 1. EMPTY CART VIEW (Fixes "something cart" issue)
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <div className="w-40 h-40 bg-slate-100 rounded-full flex items-center justify-center mb-8 mx-auto">
            <ShoppingCart size={80} className="text-slate-300" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4">Your cart is empty</h2>
          <p className="text-slate-500 mb-10 text-lg max-w-sm">
            Discover your next favorite book and it will appear here!
          </p>
          <button onClick={() => navigate('/')} className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-indigo-100">
            Go to Gallery
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <button onClick={() => showCheckout ? setShowCheckout(false) : navigate(-1)} className="flex items-center gap-2 mb-10 text-slate-500 font-bold">
        <ChevronLeft /> {showCheckout ? "Back to Cart" : "Continue Browsing"}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <h1 className="text-5xl font-black text-slate-900 mb-12">{showCheckout ? "Payment & Details" : "Your Library Cart"}</h1>
          
          <AnimatePresence mode="wait">
            {!showCheckout ? (
              <motion.div key="list" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6 p-6 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                    <img src={item.image} className="w-24 h-32 rounded-2xl object-cover shadow-lg" alt={item.title} />
                    <div className="flex-1 flex justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        <p className="text-slate-500">Digital Edition</p>
                        <button onClick={() => onRemove(item.id)} className="mt-6 text-rose-500 font-bold text-xs flex items-center gap-2">
                          <Trash2 size={14} /> REMOVE
                        </button>
                      </div>
                      <span className="text-xl font-black text-indigo-600">${item.price}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div key="pay" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                {/* ADDRESS SECTION */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900"><MapPin size={20} className="text-indigo-600"/> Billing Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" className="p-4 bg-slate-50 rounded-2xl border-none outline-none" />
                    <input type="email" placeholder="Email for Digital Delivery" className="p-4 bg-slate-50 rounded-2xl border-none outline-none" />
                  </div>
                </div>

                {/* PAYMENT SECTION */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900"><CreditCard size={20} className="text-indigo-600"/> Payment Method</h3>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <button className="flex flex-col items-center gap-2 p-4 rounded-2xl border-2 border-indigo-600 bg-indigo-50 text-indigo-600"><Smartphone /> <span className="text-[10px] font-black">UPI</span></button>
                    <button className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-100 text-slate-400"><Wallet /> <span className="text-[10px] font-black">G-PAY</span></button>
                    <button className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-100 text-slate-400"><CreditCard /> <span className="text-[10px] font-black">CARD</span></button>
                  </div>
                  <input type="text" placeholder="Enter UPI ID or Card Number" className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Summary Card */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white h-fit sticky top-32 shadow-2xl">
            <h2 className="text-2xl font-bold mb-8">Summary</h2>
            <div className="space-y-4 mb-10 border-b border-white/10 pb-8">
              <div className="flex justify-between text-slate-400"><span>Books ({cartItems.length})</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-slate-400"><span>Tax</span><span>$0.00</span></div>
              <div className="flex justify-between text-2xl font-black mt-4"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
            </div>
            <button 
                onClick={() => showCheckout ? alert("Processing Payment...") : setShowCheckout(true)}
                className="w-full bg-indigo-500 py-6 rounded-2xl font-black text-xl hover:bg-indigo-400 transition-all flex items-center justify-center gap-3"
            >
              {showCheckout ? "Complete Purchase" : "Proceed to Checkout"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}