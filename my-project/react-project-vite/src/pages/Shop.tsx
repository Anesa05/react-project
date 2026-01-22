import React from "react";
import CardItem from "../components/CardItem";
import "./Shop.css";

const products = [
  { imgSrc: "photos/dry-food.avif", title: "Dry Dog Food", description: "Protein-rich formula for energy and optimal health." },
  { imgSrc: "photos/wet-food.avif", title: "Wet Dog Food", description: "Varied flavors and easy to digest." },
  { imgSrc: "photos/snacks.webp", title: "Snacks", description: "A healthy product with no artificial additives." },
  { imgSrc: "photos/organic.webp", title: "Organic Food", description: "Healthy and natural." },
  { imgSrc: "photos/mix.png", title: "Mix Premium", description: "Mixture of dry and wet foods for a complete diet." },
  { imgSrc: "photos/mix-and-supplements.webp", title: "Vitamins", description: "Supports body health and proper function." },
  { imgSrc: "photos/raw.webp", title: "Cibel", description: "Special food for puppies for healthy growth." },
  { imgSrc: "photos/helth.webp", title: "Vitamins", description: "Essential nutrients for strong, happy dogs." },
  { imgSrc: "photos/oil.webp", title: "Oil", description: "Improves coat, skin, and overall health." },
];

const Shop: React.FC = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <section className="hero">
        <h1>Delicious Food for Your Puppies</h1>
        <p>Choose the best product for the health and happiness of your four-legged friend!</p>
      </section>

      <section className="cards">
        {products.map((product, index) => (
          <CardItem
            key={index}
            imgSrc={product.imgSrc}
            title={product.title}
            description={product.description}
          />
        ))}
      </section>

      <footer className="footer">
        <div className="logo">
          <h1>Paw Finder</h1>
        </div>
        <div className="clas1">
          <h2>Contact us</h2>
          <p>045-347-778</p>
          <p>paw-finder@gmail.com</p>
          <p>479 Hwy 6, Prishtina</p>
        </div>
        <div className="clas2">
          <h2>Store hours</h2>
          <p>Monday: 10:00-18:00</p>
          <p>Tuesday: 10:00-18:00</p>
          <p>Wednesday: 10:00-18:00</p>
          <p>Thursday: 10:00-18:00</p>
          <p>Friday: 10:00-18:00</p>
          <p>Saturday: 10:00-18:00</p>
          <p>Sunday: 10:00-18:00</p>
        </div>
        <div className="clas3">
          <h2>Quick links</h2>
          <p>Blog</p>
          <p>Puppies</p>
          <p>Privacy Policy</p>
          <p>Locations</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
