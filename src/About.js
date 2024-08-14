import React from 'react'
import abt1 from './about2.jpg'
import Nav from './Nav'
import Footer from './Footer'
import './About.css'
import { SiIfood } from "react-icons/si"
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className="overall">
        <Nav/> <br/>
         <div className="container">
             <img src={abt1} alt="about" />
             <div className="about_details">
                <span>About Our Restaurant</span>
                <br/>
                <h2>We Provide Good Quality Food to Your Family!!!!</h2>
                <br/>  
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dol</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button className="bt10"> <Link to="https://en.wikipedia.org/wiki/Restaurant" >Learn More ...</Link><Link><SiIfood /></Link></button>
             </div>
         </div>

     <Footer/> 
    </div>
  )
}

export default About