import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link
import { ShoppingCart, Heart, Star } from 'lucide-react';

export default function ProductGrid({ searchQuery, books }) {
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="collection-section" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
            <h2 className="text-4xl font-black mb-12">The Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredBooks.map((book) => (
                    /* THIS LINK WRAPPER OPENS THE NEW PAGE */
                    <Link to={`/product/${book.id}`} key={book.id}>
                        <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                                <img src={book.image} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-xl font-bold">{book.title}</h3>
                                <p className="text-slate-500">${book.price}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}