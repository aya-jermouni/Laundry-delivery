//OrderForm.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const OrderForm = ({ cart, removeFromCart, calculateTotalPrice, calculateTotalCartPrice, handleSubmitOrder }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    birthday: "",
    location: "",
    allergies: "",
    addExtraCharge: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    console.log("Form data submitted:", formData);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Order Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="birthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="allergies">
              <Form.Label>Allergies</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter any allergies (if applicable)"
                name="allergies"
                value={formData.allergies}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="addExtraCharge">
              <Form.Check
                type="checkbox"
                label="Add 15 DH for extra charge"
                name="addExtraCharge"
                checked={formData.addExtraCharge}
                onChange={handleCheckboxChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Order
            </Button>
          </Form>
        </Col>

    
        <Col md={6}>
          <h2>Selected Items</h2>
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.product.name}</p>
              <p>Quantity: {item.quantity}</p>
              <h6>
                Total Price:{" "}
                {item.quantity * calculateTotalPrice(item.product, item.serviceTypes)} DH
              </h6>
              <p>Service Types: {item.serviceTypes.join(", ")}</p>
              <Button variant="danger" onClick={() => removeFromCart(index)}>
                Remove
              </Button>
              <hr />
            </div>
          ))}

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Total Cart Price</h5>
              <p className="card-text">Total: ${calculateTotalCartPrice(cart)}</p>
              <Button variant="primary" onClick={handleSubmitOrder}>
                Submit Order
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

OrderForm.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  calculateTotalPrice: PropTypes.func.isRequired,
  calculateTotalCartPrice: PropTypes.func.isRequired,
  handleSubmitOrder: PropTypes.func.isRequired,
};

export default OrderForm;