import "./Shop.css";
import React from "react";
import CardItem from "../pages/CardItem";
import "../style/Shop.css";

const products = [
  {
    imgSrc: "photos/dry-food.avif",
    title: "Dry Dog Food",
    description: "Protein-rich formula for energy and optimal health.",
  },
  {
    imgSrc: "photos/wet-food.avif",
    title: "Wet Dog Food",
    description: "Varied flavors and easy to digest.",
  },
  {
    imgSrc: "photos/snacks.webp",
    title: "Snacks",
    description: "A healthy product with no artificial additives",
  },
  {
    imgSrc: "photos/organic.webp",
    title: "Organic Food",
    description: "A healthy product with no artificial additives.",
  },
  {
    imgSrc: "photos/mix.png",
    title: "Mix Premium",
    description: "Mixture of dry and wet foods for a complete diet",
  },
  {
    imgSrc: "photos/mix-and-supplements.webp",
    title: "Vitamins are nutrients",
    description: "Vitamins are nutrients that help the body stay healthy and function properly.",
  },
  {
    imgSrc: "photos/raw.webp",
    title: "Cibel",
    description: "Cibel is a special food for puppies that helps them grow healthy and strong",
  },
  {
    imgSrc: "photos/helth.webp",
    title: "Vitamins",
    description: "Healthy food for dogs provides essential nutrients, vitamins, and proteins to keep them strong, energetic, and happy.",
  },
  {
    imgSrc: "photos/oil.webp",
    title: "Oil",
    description: "Oil for dogs is a supplement that can improve their coat, skin, and overall health. Common oils include fish oil, coconut oil, and olive oil.",
  },
];

const Shop: React.FC = () => {
  return (
    <div>
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
          <p><span className="day">Monday</span><span className="time">10:00-18:00</span></p>
          <p><span className="day">Tuesday</span><span className="time">10:00-18:00</span></p>
          <p><span className="day">Wednesday</span><span className="time">10:00-18:00</span></p>
          <p><span className="day">Thursday</span><span className="time">10:00-18:00</span></p>
          <p><span className="day">Friday</span><span className="time">10:00-18:00</span></p>
          <p><span className="day">Saturday</span><span className="time">10:00-18:00</span></p>
          <p><span className="day">Sunday</span><span className="time">10:00-18:00</span></p>
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
