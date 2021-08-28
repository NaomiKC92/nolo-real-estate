import React, {Component} from 'react';

const AgentCard = (props) => {
    return(
      <div className="agentCard">
        <img src={props.image}/>
        <h3>{props.name}</h3>
        <a href="url">{props.moreInfo}</a>
      </div>
    )
  }

export default AgentCard
