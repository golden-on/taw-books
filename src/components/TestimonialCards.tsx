// src/components/TestimonialCard.tsx
import React from "react";

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  title: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ image, name, role, title, text }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-110">
      
      {/* Avatar, Name, and Role Row */}
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-left">
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      
      {/* Review Title and Text */}
      <div className="text-gray-600 mt-4">
        <p className="font-semibold text-gray-800">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;