import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; 
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import products from "../Products";
import { calculateTotalCartPrice } from "./SharedUtils";

const Order = ({ cart, addToCart, removeFromCart }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [quantities, setQuantities] = useState(Array(products.length).fill(0));
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);

  // Function to handle quantity changes
  const handleQuantityChange = (index, newQuantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);
  };
// Function to handle service type changes
  const handleServiceTypeChange = (serviceType) => {
    if (selectedServiceTypes.includes(serviceType)) {
      setSelectedServiceTypes(
        selectedServiceTypes.filter((type) => type !== serviceType)
      );
    } else {
      setSelectedServiceTypes([...selectedServiceTypes, serviceType]);
    }
  };
// Function to move to the next card
  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % filteredProducts.length);
  };
  // Function to add the current product to the cart
  const handleAddToCart = () => {
    const selectedProduct = filteredProducts[currentCard];
    const selectedQuantity = quantities[currentCard];

    if (selectedQuantity > 0 && selectedServiceTypes.length > 0) {
      const updatedCart = [
        ...cart,
        {
          product: selectedProduct,
          quantity: selectedQuantity,
          serviceTypes: [...selectedServiceTypes],
        },
      ];
      addToCart(updatedCart);
      setSelectedServiceTypes([]);
    } else {
      alert("Please select at least one service type before adding to cart.");
    }
  };
  // Function to remove an item from the cart
  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    removeFromCart(updatedCart);
  };
 // Function to calculate the total price for a product with selected service types
  const calculateTotalPrice = (product, serviceTypes) => {
    let totalPrice = 0;

    serviceTypes.forEach((serviceType) => {
      totalPrice +=
        product[
          `price${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}`
        ];
    });

    return totalPrice;
  };
// Filtering products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
// Current product and quantity based on the current card
  const currentProduct = filteredProducts[currentCard];
  const currentQuantity = quantities[currentCard];
useEffect(() => {
    console.log("Cart:", cart);
  }, [cart]);

  return (
    <Container>
      <Row>
        {/* Product Details */}
        <Col md={6}>
          <input
            type="text"
            placeholder="Search for items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index}>
                {index === currentCard && (
                  <Card style={{ width: "400px", height: "600px" }}>
                    <Card.Img variant="top" src={product.image} />
                 {/* Product Details */}
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.describe}</Card.Text>
                      <Card.Text>
                        Price Ironing: {product.priceIroning} DH
                      </Card.Text>
                      <Card.Text>
                        Price Laundry: {product.priceLaundry} DH
                      </Card.Text>
                      <label>
                        <input
                          type="checkbox"
                          name="serviceType"
                          value="ironing"
                          checked={selectedServiceTypes.includes("ironing")}
                          onChange={() => handleServiceTypeChange("ironing")}
                        />
                        Ironing
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="serviceType"
                          value="laundry"
                          checked={selectedServiceTypes.includes("laundry")}
                          onChange={() => handleServiceTypeChange("laundry")}
                        />
                        Laundry
                      </label>
                      <label htmlFor={`quantity-${currentCard}`}>Quantity:</label>
                      <input
                        type="number"
                        id={`quantity-${currentCard}`}
                        value={currentQuantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            currentCard,
                            parseInt(e.target.value, 10)
                          )
                        }
                      />
                    </Card.Body>
                    <Card.Footer>
                      <h6>
                        Total Price:{" "}
                        {currentQuantity *
                          calculateTotalPrice(
                            currentProduct,
                            selectedServiceTypes
                          )}{" "}
                        DH
                      </h6>
                      <Button variant="primary" onClick={handleNextCard}>
                        Next
                      </Button>
                      <Button variant="success" onClick={handleAddToCart}>
                        Add to Cart
                      </Button>
                    </Card.Footer>
                  </Card>
                )}
              </div>
            ))
          ) : (
            <div>No matching products found.</div>
          )}
        </Col>

        {/* Shopping Cart */}
        <Col md={6}>
          <h2>Shopping Cart</h2>
          {cart.map((item, index) => (
            <div key={index}>
              {/*  Uncaught TypeError: Cannot read properties of undefined (reading 'name')  */}
              <p>{item.product.name}</p>
              <p>Quantity: {item.quantity}</p>
              <h6>
                Total Price:{" "}
                {item.quantity *
                  calculateTotalCartPrice(item.product, item.serviceTypes)} DH
              </h6>
              <p>Service Types: {item.serviceTypes.join(", ")}</p>
              <Button
                variant="danger"
                onClick={() => handleRemoveFromCart(index)}
              >
                Delete
              </Button>
              <hr />
            </div>
          ))}

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Total Cart Price</h5>
              <p className="card-text">
                Total: ${calculateTotalCartPrice(cart)} {/* Pass cart to the function */}
              </p>
              {/* Link to OrderForm */}
              <Link to="/OrderForm">
                <Button variant="primary">Fill Form</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
Order.propTypes = {
  cart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Order;
