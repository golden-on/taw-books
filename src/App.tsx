// src/App.tsx
import React from "react";
import FeaturedBooks from "./components/FeaturedBooks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedBooks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
