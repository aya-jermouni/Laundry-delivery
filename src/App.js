import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import DryCleaning from "./Components/DryCleaning";
import SneakerCleaning from "./Components/SneakerCleaning";
import PriceDetails from "./Components/PriceDetails";

import OrderPage from "./Components/Cards/OrderPage";
import OrderForm from "./Components/Cards/OrderForm";
import OrderSuccess from "./Components/Cards/OrderSuccess";

import "./App.css";

const App = () => {
  // ✅ restore cart from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dry-cleaning" element={<DryCleaning />} />
        <Route path="/sneaker-cleaning" element={<SneakerCleaning />} />
        <Route path="/price-details" element={<PriceDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* ORDER FLOW */}
        <Route
          path="/order"
          element={<OrderPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/order-form"
          element={<OrderForm cart={cart} />}
        />
        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
