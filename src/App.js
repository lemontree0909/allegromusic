import React from "react";
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Academy from "./Academy";
import ContactUs from "./ContactUs";

import './App.css';

function App() {
  return <Router>
    <nav>
      <Link to ="/" className="link">ALLEGRO</Link>
      <Link to ="/shop" className="link">Shop</Link>
      <Link to ="/academy" className="link">Allegro Academy</Link>
      <Link to ="/contact" className="link">Contact Us</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/academy" element={<Academy/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>

  </Router>
}

export default App;
