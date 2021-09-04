import React from 'react';
import "../../src/CSS/AgentCard.css"

const AgentCard = (props) => {
    return(
      <div className="agentCard">
        <img src={props.image} className="agentCardPhoto"/>
        <h3>{props.name}</h3>
        <a href={props.moreInfo} className="learMoreLink">Learn More</a>
      </div>
    )
  }

export default AgentCard
