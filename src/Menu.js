import React from 'react'
import './Menu.css'
import menu1 from './menu2.jpg'
import menu2 from './pizza.jpg'
import menu3 from './frenchfries.jpg'
import menu4 from './wings.jpg'
import menu5 from './salad.jpg'
import menu6 from './fish.jpg'
import menu7 from './noodles.jpg'
import menu8 from './samosa.jpg'
import menu9 from './smooothie.jpg'
import Nav from './Nav'


const Menu = () => {
    return (
        <div>
            <Nav/><br/>   <br/>  <br/>  <br/>
            <div className="menu">
                <div className="heading">
                    <h1>Restaurant Food</h1>
                    <h3>--Menu--</h3>
                </div>
                <div className="food_items">
                        <img src={menu1} alt="menu" />
                    <div className="details" >
                        <div className="details_sub" >
                            <h5 style={{fontSize:"21px"}}  >Burger</h5>
                            <h5 className="price" style={{fontSize:"21px"}}  >$3</h5>
                        </div>
                            {/* <p>jhfsbdbf jefeijfhjef hauedfhef uhfu </p> */}
                            <button>Add to Cart</button>
                    </div>
                </div>
                <div className="food_items">
                        <img src={menu2} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            <h5 style={{fontSize:"21px"}} >Pizza</h5>
                            <h5 className="price" style={{fontSize:"21px"}}  >$10</h5>
                        </div>
                            {/* <p>jhfsbdbf jefeijfhjef hauedfhef uhfu </p> */}
                            <button>Add to Cart</button>
                    </div>
                </div>
                <div className="food_items">
                        <img src={menu3} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            <h5 style={{fontSize:"21px"}} >FrenchFries</h5>
                            <h5 className="price" style={{fontSize:"21px"}} >$2</h5>
                        </div>
                            {/* <p>jhfsbdbf jefeijfhjef hauedfhef uhfu </p> */}
                            <button>Add to Cart</button>
                    </div>
                </div>
                <div className="food_items">
                        <img src={menu4} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            <h5 style={{fontSize:"21px"}} >Wings</h5>
                            <h5 className="price" style={{fontSize:"21px"}} >$7</h5>
                        </div>
                            {/* <p>jhfsbdbf jefeijfhjef hauedfhef uhfu </p> */}
                            <button>Add to Cart</button>
                    </div>
                </div>
                <div className="food_items">
                        <img src={menu5} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            <h5 style={{fontSize:"21px"}}  >Salad</h5>
                            <h5 className="price" style={{fontSize:"21px"}}  >$4</h5>
                        </div>
                            {/* <p>jhfsbdbf jefeijfhjef hauedfhef uhfu </p> */}
                            <button>Add to Cart</button>
                    </div>
                </div>
                <div className="food_items">
                        <img src={menu6} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            <h5 style={{fontSize:"21px"}}  >Fish Fry</h5>
                            <h5 className="price" style={{fontSize:"21px"}}  >$12</h5>
                        </div>
                            {/* <p>jhfsbdbf jefeijfhjef hauedfhef uhfu </p> */}
                            <button>Add to Cart</button>
                    </div>
                </div>
                <div className="food_items">
                        <img src={menu7} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            <h5 style={{fontSize:"21px"}}  >Noodles</h5>
                            <h5 className="price" style={{fontSize:"21px"}}  >$8</h5>
                        </div>
                            {/* <p>jhfsbdbf jefeijfhjef hauedfhef uhfu </p> */}
                            <button>Add to Cart</button>
                    </div>
                </div>
                <div className="food_items">
                        <img src={menu8} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            <h5 style={{fontSize:"21px"}}  >Samoza</h5>
                            <h5 className="price" style={{fontSize:"21px"}}  >$4</h5>
                        </div>
                            {/* <p>jhfsbdbf jefeijfhjef hauedfhef uhfu </p> */}
                            <button>Add to Cart</button>
                    </div>
                </div>
                <div className="food_items">
                        <img src={menu9} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            <h5 style={{fontSize:"21px"}}  >smooothie</h5>
                            <h5 className="price" style={{fontSize:"21px"}}  >$6</h5>
                        </div>
                            {/* <p>jhfsbdbf jefeijfhjef hauedfhef uhfu </p> */}
                            <button>Add to Cart</button>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Menu