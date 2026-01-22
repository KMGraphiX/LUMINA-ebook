import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const books = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", genre: "Fiction", price: 18.99, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800", span: "md:col-span-2 md:row-span-2" },
    { id: 2, title: "Atomic Habits", author: "James Clear", genre: "Self-Help", price: 12.99, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800", span: "md:col-span-1 md:row-span-1" },
    { id: 3, title: "Project Hail Mary", author: "Andy Weir", genre: "Sci-Fi", price: 15.99, image: "https://images.unsplash.com/photo-1614544048536-0d28caf77f41?q=80&w=800", span: "md:col-span-1 md:row-span-2" },
    { id: 4, title: "The Creative Act", author: "Rick Rubin", genre: "Art", price: 15.00, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800", span: "md:col-span-1 md:row-span-1" },
    { id: 5, title: "Fourth Wing", author: "Rebecca Yarros", genre: "Romantasy", price: 19.99, image: "https://images.unsplash.com/photo-1543004218-ee141104638e?q=80&w=800", span: "md:col-span-2 md:row-span-1" },
];

export default function BookShowcase({ searchQuery, onAddToCart }) {
    const navigate = useNavigate();

    // Filter logic: Checks if title or author matches search
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="book-showcase-section" className="max-w-7xl mx-auto px-6 py-24 transition-all">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter">
                        {searchQuery ? `Results for "${searchQuery}"` : "Curated Collections"}
                    </h2>
                    <p className="text-slate-500">
                        {filteredBooks.length} books found.
                    </p>
                </div>
                {/* NAVIGATION FIX: Opens new page */}
                <button
                    onClick={() => navigate('/all-books')}
                    className="text-indigo-600 font-bold hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all"
                >
                    View All Books
                </button>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                <AnimatePresence mode='popLayout'>
                    {filteredBooks.map((book) => (
                        <motion.div
                            layout // Framer Motion magic: animates books moving into new positions
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            key={book.id}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`relative group overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all hover:shadow-2xl ${book.span}`}
                        >
                            {/* Image Background */}
                            <img src={book.image} alt={book.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                            {/* Book Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                                    {book.genre}
                                </span>
                                <h3 className="text-white text-2xl font-bold mt-2 leading-tight">{book.title}</h3>
                                <p className="text-slate-300 text-sm">{book.author}</p>

                                <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    <span className="text-white font-black">${book.price}</span>

                                    {/* ADD TO CART FIX: Adds book to sidebar and cart page */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevents clicking whole card
                                            onAddToCart(book);
                                        }}
                                        className="bg-white p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-lg"
                                    >
                                        <Plus size={20} className="text-indigo-600 group-hover:text-inherit" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {filteredBooks.length === 0 && (
                    <div className="col-span-full py-20 text-center">
                        <p className="text-2xl font-bold text-slate-300">No books match your search.</p>
                    </div>
                )}
            </div>
        </section>
    );
}