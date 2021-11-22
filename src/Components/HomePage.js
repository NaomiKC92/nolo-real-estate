import React from "react";
import AgentContainer from "../Components/AgentContainer";
import ImageHolder from "../Components/ImageHolder";
import "../../src/CSS/HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <ImageHolder />
      <AgentContainer />
    </div>
  );
};

export default HomePage;
