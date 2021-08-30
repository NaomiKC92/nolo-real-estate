import React, {Component} from "react"
import AgentsData from "../../src/AgentsData"
import AgentCard from "../Components/AgentCard"


const AgentContainer = () => {

  let eachAgent = AgentsData.map(agent => {
    return (
      <AgentCard
        key={agent.id}
        image={agent.image}
        name={agent.name}
        moreInfo={agent.moreInfo}
      />
    )
  })

  return(
    <div className="agentCardContainer">
      {eachAgent}
    </div>
  )

}


export default AgentContainer
