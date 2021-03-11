import React from 'react'
import { Link } from "react-router-dom"
import './rightNav.css'


const RightNav = (props) => {
  
    return (     
    <div className="links-container">
        <Link to="/" className="underline">
          <li className="links" onClick={props.handleClick}>
            Home
          </li>
        </Link>
        <Link to="/my_garage" className="underline">
          <li className="links" onClick={props.handleClick}>
            Garage
          </li>
        </Link>
        <Link to="/build_a_car" className="underline">
          <li className="links" onClick={props.handleClick}>
            Create Driftcar
          </li>
        </Link>
        <Link to="/about" className="underline">
          <li className="links" onClick={props.handleClick}>
            About
          </li>
        </Link>
    </div>
    )
}

export default RightNav
