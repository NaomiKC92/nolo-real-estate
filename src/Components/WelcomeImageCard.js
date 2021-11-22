import React from "react";
import "../../src/CSS/WelcomeImageCard.css";

const WelcomeImageCard = ({ image }) => {
  return (
    <div>
      <img src={image} className="welcomeImageCard" />
    </div>
  );
};

export default WelcomeImageCard;
