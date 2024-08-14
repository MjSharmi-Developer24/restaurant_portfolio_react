import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { IoFastFoodOutline } from "react-icons/io5";



const Nav = () => {
  return (
    <nav >
    
        <div className="head">
            <Link to="/">Zarah  <Link to="/"><IoFastFoodOutline /></Link></Link>
        </div>
        <div className="list">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Menu">Menu</Link>
                </li>
                <li>
                    <Link to="/Chef">Stories</Link>
                </li>
                <li>
                  <Link to="/Book">Book a Table</Link>
                </li>
            </ul>
        </div>
        
        </nav>
        
        
  )
}

export default Nav