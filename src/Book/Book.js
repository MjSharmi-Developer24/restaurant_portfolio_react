import Nav from '../Nav'
import './Book.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer'


const Book = () => {
  return (
    <div className="bgimg2">
      <Nav/>
       
 <div className="table1">
        <div className="headtable">
           <h1>book a table</h1>
           <h3>make a reservation</h3>
        </div>
        <div className="table2">
             <div className="col"> 
                  <h2 className="name">name</h2><br/>
                  <input type="text" className="yourname" placeholder="Your Name"required/>
              </div>
             <div className="col">
                  <h2 className="name">email</h2><br/>
                  <input type="text" className="yourname" placeholder="Your Email" required/>
             </div>
         </div>
         <div className="table2">
             <div className="col">
                   <h2 className="name">phone</h2><br/>
                   <input type="text" className="yourname" placeholder="Phone Numer"required/>
             </div>
             <div className="col">
                  <h2 className="name">time</h2><br/>
                  <input type="text" className="yourname" placeholder="Time"required/>
             </div>
         </div>
         <div className="table2">
              <div className="col">
                  <h2 className="name">date</h2><br/>
                  <input type="text" className="yourname" placeholder="Date"required/>
              </div>
              <div className="col">
                   <h2 className="name">Gender</h2><br/>
                  <select> <input type="text" className="yourname" style={{width:"30%"}}  placeholder="Gender"required/>
                  <option>Male</option>
                  <option>Female</option>
                  </select>
               
               </div>
         </div>
         <div className="btn">
            <button><Link to ="https://en.wikipedia.org/wiki/Restaurant">Make a Reservation </Link></button>
            </div>
     
</div>
<Footer />  
   </div>
  )
}



export default Book