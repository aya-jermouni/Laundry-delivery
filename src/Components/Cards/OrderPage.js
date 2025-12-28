import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Order from "./Order";
import "./OrderPage.css"; // 👈 ADD THIS

const OrderPage = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Shirt", price: 10, image: "/images/Shirt.jpg" },
    { name: "Shorts", price: 12, image: "/images/Shorts.jpg" },
    { name: "Suit", price: 40, image: "/images/Suit.jpg" },
    { name: "Sweater", price: 15, image: "/images/Sweater.jpg" },
    { name: "Scarf", price: 10, image: "/images/Scarf.jpg" },
    { name: "Socks", price: 10, image: "/images/Socks.jpg" },
    { name: "Tie", price: 10, image: "/images/Tie.webp" },
    { name: "Pyjamas", price: 15, image: "/images/Pyjamas.jpg" },
    { name: "Sandale", price: 20, image: "/images/sandale2.jpeg" },
    { name: "Sneakers", price: 20, image: "/images/sneaker2.jpeg" },
    { name: "Carpet", price: 50, image: "/images/tapis.jpg" }
  ];

  return (
    <Container>
      <div className="order-page"> {/* 👈 NEW */}
        <Order
          cart={cart}
          setCart={setCart}
          products={products}
        />
      </div>
    </Container>
  );
};

export default OrderPage;
