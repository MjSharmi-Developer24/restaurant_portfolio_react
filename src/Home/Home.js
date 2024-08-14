import React from 'react'
import Nav from '../Nav'
import './Home.css'
import photo1 from './img14.jpg'
import photo2 from './img2.jpg'
import photo3 from './img12.jpg'
import photo4 from './img22.jpg'
import { IoRestaurantOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'


// import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div className="bgimg1">
        <Nav/>
        <div className="zarzh">
                <h1 className="h01">Zarah <Link><IoRestaurantOutline /></Link></h1>
                <h2 className="text-muted" style={{fontSize:"50px", color:"grey"}} >Best Restaurant</h2>
        </div>
         <div className="image-grid" style={{marginTop:"30px" }}>
          <div className="image-container">
              <div className="rounded-image">
               
             <img src={photo1} className='photos1' alt="sharmi"  style={{borderRadius:"50%"}}  height={130} width={135} />
                  <h3 className="grill"><b> Grilled Beef</b></h3> 
                  <p className="grill"><b>Meat,Potatoes,Tomatoes,Rice</b></p>
              </div>
          </div>
          <div className="image-container">
              <div className="rounded-image">
         
              
              <img src={photo2} className='photos2' alt="sharmi" height={130} width={130}/>
                  <h3 className="grill"><b> North Indian Thali</b></h3> 
                  <p className="grill"><b>Meat,Potatoes,Tomatoes,Rice</b></p>
              </div>
          </div>
          <div className="image-container">
              <div className="rounded-image">
         
              
              <img src={photo3} alt="" className='photos3'  height={130} width={140}/>
                  <h3 className="grill"><b> Prawn Tikka</b></h3> 
                  <p className="grill"><b>Meat,Potatoes,Tomatoes,Rice</b></p>
              </div>
          </div>
      <div className="image-container"> 
              <div className="rounded-image">
              <img src={photo4} alt="shar"  className='photos4' height={130} width={130}/>
                  <h3 className="grill"><b> White Sause Pasta</b></h3> 
                  <p className="grill"><b>Meat,Potatoes,Tomatoes,Rice</b></p>
            </div>
          </div>
         </div>
       </div>
  )
}

export default Home;