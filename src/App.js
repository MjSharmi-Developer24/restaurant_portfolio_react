import {Route,Routes} from "react-router-dom";
import Home from './Home/Home'
import Chef from './Chef/Chef'
import Book from './Book/Book'
import Menu from "./Menu";
import About from "./About";



const App = () => {
  return ( 
    <div>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chef" element={<Chef/>} />
          <Route path="/Book" element={<Book/>} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/About" element={<About/>} />
          
           
      </Routes>
    </div>
  );
}

export default App;