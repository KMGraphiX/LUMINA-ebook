import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import BookShowcase from './components/BookShowcase';
import SubjectBrowse from './components/SubjectBrowse';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Club from './components/Club';
import CartPage from './components/CartPage';

import CartDrawer from './components/CartDrawer';

import { ALL_BOOKS } from './data/books';

export default function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([
        { id: 1, title: "The Midnight Library", author: "Matt Haig", price: 18.99, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800" },
        { id: 2, title: "Atomic Habits", author: "James Clear", price: 22.50, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800" }
    ]);

    const location = useLocation();

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const addToCart = (book) => {
        // Check if book is already in cart to prevent duplicates
        if (!cartItems.find(item => item.id === book.id)) {
            setCartItems([...cartItems, book]);
            // Optional: Open sidebar automatically when adding
            setIsCartOpen(true);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB]">
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onOpenCart={() => setIsCartOpen(true)}
                cartCount={cartItems.length}
            />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>

                    {/* HOME PAGE */}
                    <Route
                        path="/"
                        element={
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Hero />
                                <BookShowcase searchQuery={searchQuery} onAddToCart={addToCart} />
                                <SubjectBrowse />
                                <ProductGrid searchQuery={searchQuery} books={ALL_BOOKS.slice(0, 3)} />
                                <Footer />
                            </motion.div>
                        }
                    />

                    {/* ALL BOOKS PAGE */}
                    <Route
                        path="/all-books"
                        element={
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProductGrid searchQuery={searchQuery} books={ALL_BOOKS} />
                                <Footer />
                            </motion.div>
                        }
                    />

                    {/* PRODUCT DETAIL */}
                    <Route
                        path="/product/:id"
                        element={<ProductDetail books={ALL_BOOKS} />}
                    />

                    {/* DASHBOARD */}
                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    {/* CLUB */}
                    <Route
                        path="/club"
                        element={<Club />}
                    />

                    {/* CART */}
                    <Route
                        path="/cart"
                        element={<CartPage cartItems={cartItems} onRemove={removeFromCart} />}
                    />

                </Routes>
            </AnimatePresence>

            {/* OVERLAYS */}
            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                onRemove={removeFromCart}
            />
        </div>
    );
}
