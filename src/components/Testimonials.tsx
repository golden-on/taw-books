// src/components/Testimonials.tsx
import React from "react";
import TestimonialCard from "./TestimonialCards";

const testimonials = [
  {
    id: 1,
    image: "profile.png",
    name: "John Doe",
    role: "Book Enthusiast",
    title: "Amazing Collection of Books",
    text: "Taw Books has an amazing collection of books. I found my favorite books here and can't wait to read more!",
  },
  {
    id: 2,
    image: "profile.png",
    name: "Jane Smith",
    role: "Literature Professor",
    title: "Perfect for Book Lovers!",
    text: "Such a beautiful platform for book lovers! The layout and selection are excellent.",
  },
  {
    id: 3,
    image: "profile.png",
    name: "Sam Wilson",
    role: "Author",
    title: "Highly Recommended!",
    text: "A wonderful experience with Taw Books. I highly recommend it to anyone who loves reading.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 px-6 md:px-12 pb-40 bg-gradient-to-r from-[#f8f8ff] to-white">
      <div className="container mx-auto text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800">What Our Readers Say</h2>
        <p className="text-gray-600 mt-2">Here's what our readers have to say about Taw Books</p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              title={testimonial.title}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
