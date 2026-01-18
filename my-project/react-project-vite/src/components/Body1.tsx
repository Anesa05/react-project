import React from "react";

const Body1: React.FC = () => {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Movies</h1>
      <p className="text-lg mb-6">
        Explore, adopt, and shop your favorite movies!
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
};

export default Body1;
