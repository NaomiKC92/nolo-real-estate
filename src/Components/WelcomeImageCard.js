import React from 'react'

const WelcomeImageCard = (props) => {
  return (
    <div ClassName = "welcomeImageCard">
      <img src={props.image} className="welcomePhoto"/>
    </div>
  )
}

export default WelcomeImageCard
