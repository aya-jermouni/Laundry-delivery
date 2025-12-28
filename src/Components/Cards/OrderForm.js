import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import { calculateTotalCartPrice } from "./SharedUtils";
import "../Style/OrderForm.css";

const OrderForm = ({ cart }) => {
  const navigate = useNavigate();

  // ✅ Fallback to localStorage
  const effectiveCart =
    cart && cart.length
      ? cart
      : JSON.parse(localStorage.getItem("cart")) || [];

// ✅ Hooks FIRST
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Guard AFTER hooks
  if (!effectiveCart.length) {
    return (
      <Container className="mt-5 text-center">
        <p>Your cart is empty.</p>
        <Button variant="dark" onClick={() => navigate("/order")}>
          Go back to order
        </Button>
      </Container>
    );
  }

  const sendEmail = (e) => {
    e.preventDefault();

    const orderDetails = effectiveCart
      .map((item) => `${item.name} x ${item.quantity}`)
      .join(", ");

    emailjs
      .send(
        "service_bytj45r",
        "template_5qxm6vb",
        {
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          customer_address: formData.address,
          order_details: orderDetails,
          total_price: calculateTotalCartPrice(effectiveCart).toFixed(2),
        },
        "CoezH3mFuCa-YKIme"
      )
      .then(() => {
        localStorage.removeItem("cart");
        navigate("/order-success");
      })
      .catch((error) => {
        console.error("EmailJS ERROR:", error);
        alert(error.text || "Failed to send confirmation email");
      });
  };

  return (
    <div className="order-form-wrapper">
      <div className="order-form-card">
        <h3>Order Confirmation</h3>

        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              placeholder="Your full name"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="example@email.com"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              placeholder="+212 ..."
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="address"
              placeholder="Pickup & delivery address"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <div className="order-total">
            <span>Total</span>
            <span>
              ${calculateTotalCartPrice(effectiveCart).toFixed(2)}
            </span>
          </div>

          <Button
            type="submit"
            variant="dark"
            className="w-100 mt-4"
          >
            Confirm Order
          </Button>
        </Form>
      </div>
    </div>
  );
}; // ✅ THIS WAS MISSING

OrderForm.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default OrderForm;
