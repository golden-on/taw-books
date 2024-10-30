// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
