import React from "react";
import "../style/HomePage1.css";
import Navbar from "../components/Navbar";
import Body1 from "../components/Body1";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Body1 />
      <Footer />
    </div>
  );
};

export default HomePage;
