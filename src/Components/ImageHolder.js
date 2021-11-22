import React from "react";
import ImagesList from "../../src/WelcomeImages";
import WelcomeImageCard from "../Components/WelcomeImageCard";
import "../../src/CSS/ImageHolder.css";

const ImageHolder = () => {
  let min = 0;
  let max = Math.floor(ImagesList.length - 1);
  let randomIndex = Math.floor(Math.random() * (max - min + 1) + min);

  const matchingObject = ImagesList[randomIndex].image;

  return (
    <div>
      <WelcomeImageCard image={matchingObject} />
    </div>
  );
};

export default ImageHolder;
