import React from "react";
import { Link } from "react-router-dom";

const Body1: React.FC = () => {
  return (
    <section className="body1">
      <div className="body1-text">
        <h1>Find Your New Best Friend</h1>
        <p>Adopt a lovely pet and give them a home 🐾</p>
        <Link to="/adopt" className="btn">Get Started</Link>
      </div>
    </section>
  );
};

export default Body1;
