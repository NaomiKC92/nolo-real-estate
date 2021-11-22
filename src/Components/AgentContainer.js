import React, { Component } from "react";
import AgentsData from "../../src/AgentsData";
import AgentCard from "../Components/AgentCard";
import "../../src/CSS/AgentContainer.css";

const AgentContainer = () => {
  const eachAgent = AgentsData.map((agent) => {
    return (
      <AgentCard
        key={agent.id}
        image={agent.image}
        name={agent.name}
        moreInfo={agent.moreInfo}
      />
    );
  });

  return (
    <div className="agentContainer">
      <h2 className="meetOurTeamTitle">Meet Our Team</h2>
      <div className="agentcardContainer">{eachAgent}</div>
    </div>
  );
};

export default AgentContainer;
