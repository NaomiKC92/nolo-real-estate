import React, {Component} from 'react'
import NoLoLogo from '../../src/Images/NoLoLogo.png'
import "../CSS/NavBar.css"

class NavBar extends Component {
  constructor() {
    super()

  }


  render() {
    return(
      <div className="NavBar">
        <div className="navButtonsContainer">
          <button>Apply for a loan</button>
          <button>Selling</button>
          <button>Buying</button>
          <button>Agents</button>
        </div>
      <img src={NoLoLogo} className="logo"/>
      </div>
    )
  }


}

export default NavBar
