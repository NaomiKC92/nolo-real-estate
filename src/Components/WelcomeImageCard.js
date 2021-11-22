import React from "react";
import "../../src/CSS/WelcomeImageCard.css";

const WelcomeImageCard = ({ image }) => {
  console.log(image);
  return (
    <div className="welcomeImageCard">
      <img src={image} className="welcomePhoto" />
    </div>
  );
};

export default WelcomeImageCard;
