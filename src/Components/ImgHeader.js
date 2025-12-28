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
            src="/images/p1.png"
            className="img-rounded mx-2"
            alt="First Slide"
            width="200"
            height="200"
          />
          <img
             src="/images/p2.png"
            className="img-rounded mx-2"
            alt="First Slide"
            width="200"
            height="200"
          />
          <img
        src="/images/p3.png"
            className="img-rounded mx-2"
            alt="First Slide"
            width="200"
            height="200"
          />
          <img
              src="/images/p4.png"
            className="img-rounded mx-2"
            alt="First Slide"
            width="200"
            height="200"
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
              src="/images/p9.png"
            className="img-rounded mx-2"
            alt="Second Slide"
            width="200"
            height="200"
          />
          <img
             src="/images/p5.png"
            className="img-rounded mx-2"
            alt="Second Slide"
            width="200"
            height="200"
          />
          <img
            src="/images/p7.png"
            className="img-rounded mx-2"
            alt="Second Slide"
            width="200"
            height="200"
          />
          <img
             src="/images/p8.png"
            className="img-rounded mx-2"
            alt="Second Slide"
            width="200"
            height="200"
          />
        </div>
        <Carousel.Caption className="text-center">
          <div>
            {/* <h5>Smooth Sophistication</h5>
            <p>Ironing Elegance Into Every Fabric.</p> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgHeader;
