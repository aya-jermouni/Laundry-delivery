import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { calculateTotalCartPrice } from "./SharedUtils";
import "./Order.css"; // 👈 ADD THIS

const Order = ({ cart, setCart, products }) => {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const selectedProduct = products[selectedIndex];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToOrder = () => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.name === selectedProduct.name
      );

      if (existing) {
        return prev.map((item) =>
          item.name === selectedProduct.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prev,
        {
          name: selectedProduct.name,
          price: selectedProduct.price,
          quantity,
        },
      ];
    });

    setQuantity(1);
  };

  return (
    <div className="order-layout">
      {/* LEFT */}
      <div>
        <Form.Select
          className="mb-4"
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
        >
          {products.map((p, i) => (
            <option key={i} value={i}>{p.name}</option>
          ))}
        </Form.Select>

        <div className="product-card">
          <img src={selectedProduct.image} alt={selectedProduct.name} />

          <h3>{selectedProduct.name}</h3>
          <div className="price">${selectedProduct.price}</div>

          <div className="quantity-controls">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <Button
            className="add-btn"
            variant="dark"
            onClick={addToOrder}
          >
            Add to order
          </Button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="order-summary">
        <h2>Your Order</h2>

        {cart.length === 0 && (
          <p className="empty-cart">No items added yet</p>
        )}

        {cart.map((item, i) => (
          <div key={i} className="order-item">
            <span>{item.name} × {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}

        <div className="total">
          Total: ${calculateTotalCartPrice(cart).toFixed(2)}
        </div>

        <Button
          className="confirm-btn"
          disabled={!cart.length}
          onClick={() => navigate("/order-form")}
        >
          Fill form & confirm
        </Button>
      </div>
    </div>
  );
};

Order.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default Order;
