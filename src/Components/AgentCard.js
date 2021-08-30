import React, {Component} from 'react';

const AgentCard = (props) => {
    return(
      <div className="agentCard">
        <img src={props.image}/>
        <h3>{props.name}</h3>
        <a href={props.moreInfo}>Learn More</a>
      </div>
    )
  }

export default AgentCard
