// App.js
import React from 'react';
import Home from "./Components/Home";
import './App.css'; // Import the CSS file for styling
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ContactUs from "./Components/ContactUs"
import DryCleaning from "./Components/DryCleaning";
import SneakerCleaning from "./Components/SneakerCleaning";
import PriceDetails from "./Components/PriceDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
// import ImgHeader from "./Components/ImgHeader";
import Order from "./Components/Cards/Order";
import OrderForm from './Components/Cards/OrderForm'

const App = () => {
  return (
    <Router>
      <NavBar />
      {/* <ImgHeader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dry-cleaning" element={<DryCleaning />} />
        <Route path="sneaker-cleaning" element={<SneakerCleaning />} />
        <Route path="price-details" element={<PriceDetails />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="order" element={<Order />} />
        <Route path="orderForm" element={<OrderForm/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;