import React from 'react'
import ImagesList from '../../src/WelcomeImages'
import WelcomeImageCard from '../Components/WelcomeImageCard'


const DisplayedImage = () => {
  let min = Math.ceil(1)
  let max = Math.floor(ImagesList.length)
  let randomId = Math.floor(Math.random() * (max - min + 1) + min)
  let theFreakingImage = ImagesList.map( image => {
    
    return (
      <WelcomeImageCard
        key={image.id}
        image={image.image}
      />
    )
  })


  return (
    <div>
      <div>{theFreakingImage}</div>
    </div>
  )
}


export default DisplayedImage
