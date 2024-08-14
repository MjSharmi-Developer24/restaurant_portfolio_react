import React from 'react'
import Nav from '../Nav'
import image1 from './chef3.jpg'
import image2 from './chef6.jpg'
import image3 from './chef5.jpg'
import image4 from './chef4.jpg'
import './Chef.css'
import Footer from '../Footer'


const Chef = () => {
  return (
    <div className="bgimg3">
      <Nav/>
 <div className="chefhead">  
    <h1>our master chef</h1>
</div>



<div className="chefimg">
    <div className="chefimg1">
          <img src={image1} className="john" alt="sharmi" height={300} width={200}/>
          <h3 className="luke">john smooth</h3>
          <p className="text-muted"><b>restaurant owner</b></p>
          
    </div> 
    <div className="chefimg2">  
            <img src={image2} className="john"alt="sharmi" height={300} width={200}/>
           <h3 className="luke">luke simon</h3>
           <p className="text-muted"><b>head chef</b></p>
         
    </div>   
    <div className="chefimg3">
           <img src={image3} className="john"alt="sharmi" height={300} width={200}/>
            <h3 className="luke">rebeca welson</h3>
            <p className="text-muted"><b>chef</b></p>
    
    </div>
    <div className="chefimg4">  
           <img src={image4} className="john"alt="sharmi" height={300} width={200}/>
            <h3 className="luke">karl brenyt</h3>
            <p className="text-muted"><b>chef</b></p>
          
    </div>
</div>
<Footer />
    </div>
  )
}

export default Chef