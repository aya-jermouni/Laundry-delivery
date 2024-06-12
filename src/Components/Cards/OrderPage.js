// OrderPage.js
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Order from "./Order";

const OrderPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <Container>
       
          <Order cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />

 
    </Container>
  );
};

export default OrderPage;
