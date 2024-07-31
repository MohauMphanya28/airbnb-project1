import React from "react";
import "./GiftCards.css";
import giftCards from "../images/giftCards.png";

const GiftCards = () => {
  return (
    <div className="gift-cards">
      <div>
        <p>Shop Airbnb gift cards</p>
        <button>Learn more</button>
      </div>
      <img src={giftCards} alt="gift cards"/>
    </div>
  );
};

export default GiftCards;
