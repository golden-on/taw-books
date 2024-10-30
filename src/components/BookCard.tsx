// src/components/BookCard.tsx
import React from "react";

interface BookCardProps {
  title: string;
  author: string;
  price: string;
  image: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, price, image }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Image Card */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-[12rem] hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full object-contain" />
    </div>

      {/* Book Details */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500">{author}</p>
        <p className="text-red-500 font-semibold mt-2">{price}</p>
      </div>
    </div>
  );
};

export default BookCard;
