// src/components/FeaturedBooks.tsx
import React from "react";
import BookCard from "./BookCard";

const books = [
  {
    id: 1,
    title: "Great Travel At Desert",
    author: "Scarlett Harvey",
    price: "$38.00",
    image: "book1.png",
  },
  {
    id: 2,
    title: "The Lady Beauty Scarlet",
    author: "Andy Roy",
    price: "$46.00",
    image: "book2.png",
  },
  {
    id: 3,
    title: "Once Upon A Time",
    author: "Ellen Hays",
    price: "$35.00",
    image: "book3.png",
  },
];

const FeaturedBooks: React.FC = () => {
  return (
    <section id="books" className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800">Just In!</h2>
        <p className="text-gray-600 mt-2">Discover our latest releases</p>
        
        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              image={book.image}
            />
          ))}
        </div>

        {/* All Products Link */}
        <div className="mt-8">
          <a href="#" className="text-red-500 font-semibold hover:underline">All Products</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
