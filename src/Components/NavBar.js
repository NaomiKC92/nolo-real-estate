import React, {Component} from 'react'
import NoLoLogo from '../../src/Images/NoLoLogo.png'
import HouseImg from '../../src/Images/backgroundHomeImage.jpeg'
import LogoText from '../../src/Images/logoText.png'
import "../CSS/NavBar.css"

class NavBar extends Component {
  constructor() {
    super()

  }


  render() {
    return(
      <div className="NavBar">
        <div className="navButtons">
          <button>Loans</button>
          <button>Selling</button>
        </div>
        <div className="logoBox">
          <img src={NoLoLogo} className="logo"/>
          <img src={LogoText} className="logoText"/>
        </div>
        <div className="navButtons">
          <button>Buying</button>
          <button>Agents</button>
        </div>
      </div>
    )
  }


}

export default NavBar
