import React from "react";

interface CardItemProps {
  imgSrc: string;
  title: string;
  description: string;
}

const CardItem: React.FC<CardItemProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardItem;
