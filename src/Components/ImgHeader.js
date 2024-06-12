import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ImgHeader() {
  const itemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Carousel data-bs-theme="dark" className="pt-3 pb-3">
      <Carousel.Item>
        <div style={itemStyle}>
          <img
            src="/images/products.png"
            className="img-rounded mx-2"
            alt="First Slide"
            width="304"
            height="236"
          />
          <img
             src="/images/products.png"
            className="img-rounded mx-2"
            alt="First Slide"
            width="304"
            height="236"
          />
          <img
        src="/images/products.png"
            className="img-rounded mx-2"
            alt="First Slide"
            width="304"
            height="236"
          />
          <img
              src="/images/products.png"
            className="img-rounded mx-2"
            alt="First Slide"
            width="304"
            height="236"
          />
        </div>
        <Carousel.Caption className="text-center">
          <div>
            {/* <h5>Exquisite Fabrics, Exceptional Care</h5>
            <p>Your Couture Deserves Our Expert Touch.</p> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={itemStyle}>
          <img
              src="/images/products.png"
            className="img-rounded mx-2"
            alt="Second Slide"
            width="304"
            height="236"
          />
          <img
             src="/images/products.png"
            className="img-rounded mx-2"
            alt="Second Slide"
            width="304"
            height="236"
          />
          <img
            src="/images/products.png"
            className="img-rounded mx-2"
            alt="Second Slide"
            width="304"
            height="236"
          />
          <img
             src="/images/products.png"
            className="img-rounded mx-2"
            alt="Second Slide"
            width="304"
            height="236"
          />
        </div>
        <Carousel.Caption className="text-center">
          <div>
            {/* <h5>Smooth Sophistication</h5>
            <p>Ironing Elegance Into Every Fabric.</p> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={itemStyle}>
          <img
             src="/images/products.png"
            className="img-rounded mx-2"
            alt="Third Slide"
            width="304"
            height="236"
          />
          <img
          src="/images/products.png"
            className="img-rounded mx-2"
            alt="Third Slide"
            width="304"
            height="236"
          />
          <img
          src="/images/products.png"
            className="img-rounded mx-2"
            alt="Third Slide"
            width="304"
            height="236"
          />
          <img
             src="/images/products.png"
            className="img-rounded mx-2"
            alt="Third Slide"
            width="304"
            height="236"
          />
        </div>
        <Carousel.Caption className="text-center">
          <div>
            {/* <h5>Infuse Luxury into Every Thread</h5>
            <p>Where Fragrance Meets Freshness in Every Wash.</p> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgHeader;
