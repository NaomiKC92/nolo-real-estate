import React from "react";
import "../../src/CSS/AgentCard.css";

const AgentCard = ({ image, name, moreInfo }) => {
  return (
    <div className="agentCard">
      <img src={image} className="agentCardPhoto" />
      <h3>{name}</h3>
      <a href={moreInfo} className="learnMoreLink">
        Learn More
      </a>
    </div>
  );
};

export default AgentCard;
