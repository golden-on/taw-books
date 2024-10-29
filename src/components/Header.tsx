// src/components/Header.tsx
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 px-8 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <a href="#">Taw Books</a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-800 hover:text-red-500 font-semibold">Home</a>
          <a href="#" className="text-gray-800 hover:text-red-500 font-semibold">About Us</a>
          <a href="#" className="text-gray-800 hover:text-red-500 font-semibold">Books</a>
          <a href="#" className="text-gray-800 hover:text-red-500 font-semibold">New Release</a>
          <a href="#" className="text-gray-800 hover:text-red-500 font-semibold">Contact Us</a>
          <a href="#" className="text-gray-800 hover:text-red-500 font-semibold">Blog</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-gray-800">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute right-0 w-40 bg-white shadow-md mt-2 py-4 px-8 z-10">
          <a href="#" className="block text-gray-800 hover:text-red-500 font-semibold py-2">Home</a>
          <a href="#" className="block text-gray-800 hover:text-red-500 font-semibold py-2">About Us</a>
          <a href="#" className="block text-gray-800 hover:text-red-500 font-semibold py-2">Books</a>
          <a href="#" className="block text-gray-800 hover:text-red-500 font-semibold py-2">New Release</a>
          <a href="#" className="block text-gray-800 hover:text-red-500 font-semibold py-2">Contact Us</a>
          <a href="#" className="block text-gray-800 hover:text-red-500 font-semibold py-2">Blog</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
