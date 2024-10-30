import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home"
      className="py-12 px-6 md:px-12"
      style={{
        background: "linear-gradient(90deg, #FFE5E5 11%, #F5FFFE 69%, #FFFFFF 100%)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome To Taw Books
          </h1>
          <p className="text-lg text-gray-600">
            Find your next favorite read at Taw Books. Explore our curated collection of books that will transport you to different worlds and inspire your imagination.
          </p>
          <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700 transition">
            Read More
          </button>
        </div>

        {/* Book Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="hero-book.png"
            alt="Book Cover"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
