import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import products from "./Products";
import care from "./care"
import { Container } from "react-bootstrap";
import ImgHeader from "./ImgHeader";
import "./Style/sneaker.css"
function SneakerCleaning() {
  const selectedProducts = products.slice(13, 16);
  const selectCare = care.slice(0,);

  return (<>
    <h2 className="txt1" style={{ textAlign: "center"}}>Step into Excellence: Exclusive Footwear Care Service</h2>
    <p className="txt2">
      Your Luxury Laundry Pro offers specialized Sneaker, Boot, and Sandal Care service, ensuring unparalleled care for your footwear collection.
    </p>
    <Container style={{ display: "flex", marginBottom: "10px", marginTop:"80px" }}>
      {/* <div style={{ flex: "1" }}>
        <h3 style={{marginBottom:"15px"}}>Premium Service Features:</h3>
        <h5 style={{textAlign:"left"}} >1. Expert Craftsmanship:</h5>
        <p style={{textAlign:"left"}} >
          Skilled artisans provide expert care for various materials.
        </p>
        <h5 style={{textAlign:"left"}}>2. State-of-the-Art Cleaning:</h5>
        <p style={{textAlign:"left"}}>
          Advanced techniques restore and rejuvenate footwear.
        </p >
        <h5 style={{textAlign:"left"}}>3. Customized Care:</h5>
        <p style={{textAlign:"left"}}>
          Tailored care for leather, suede, canvas, and more.
        </p>
        <h5 style={{textAlign:"left"}}>4. Protection and Conditioning:</h5>
        <p style={{textAlign:"left"}}>
          Extend the lifespan of your pairs with protective treatments.
        </p>
        <h5 style={{textAlign:"left"}}>Convenient Pickup and Delivery:</h5>
        <p style={{textAlign:"left"}}>
          Experience hassle-free doorstep service.
        </p>
        <Link to="/sneaker-cleaning/process-details" className= "btn submit" 
        style={{borderRadius:"15px",
        border: "none"}}>Process Details</Link>
      </div> */}


      <div style={{flex:"1 ", flexDirection: 'column', alignItems: 'center',float:"left" }}>
      {selectCare.map((care, index) => (
        <div key={index} className="step-card-container" style={{width:"90%", alignItems:"center",float:"left"}}>
          <Card className="step-card" style={{borderRadius:"25px"}}>
         
            <Card.Body className="text-center" style={{float:"right",borderRadius:"25px"}}  >
            <Card.Img variant="top" src={care.icon} style={{ margin:" 10px",width: "50px", height: "auto",float:"left" }} />
              <Card.Title >{care.title}</Card.Title>
              <Card.Text>{care.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  



      <div style={{ flex: "1" }}>
        <CardGroup style={{ width: "100%", margin: "auto" }}>
          {selectedProducts.map((product, index) => (
            <Card key={index} className="custom-card" style={{border:"none"}}>
              <Card.Img variant="top" src={product.image} style={{ margin:" 10px",width: "80%", height: "80%" }} />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.describe}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <small className="text-muted">
                  <Link className="btn submit" style={{ borderRadius:"15px" ,width: "100%" }} to="/order">Your order</Link>
                </small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </div>
    </Container>
    <ImgHeader/>
  </>
  );
}

export default SneakerCleaning;
