
import React, { useState } from 'react';
import './Style/Landingpage.css';
const Footer = () => {
  const [email, setEmail] = useState('');

  function handleInputChange(event) {
    setEmail(event.target.value);
  }
  return (
    <footer className="text-center text-lg-start bg-transparent text-muted" style={{ display: "flex" }}>
      <section className="">
        <div className=" text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style={{flex:"1"}}>
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Ready to experience The laundry Luxury Pro difference?
              </h6>
              <p>
                Contact us today to schedule a laundry service that fits your schedule and exceeds your expectations , your SPOTLESS clothes AWAITS !
              </p>
              <div className="input">
                <div className="input-container">
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleInputChange}
                  />
                  <div className="input-field-shadow"></div>
                </div>
                <div className="submit-container">
                  <input type="submit" className="submit-btn"

                    value="Contact Us" />
                  <div className="submit-btn-shadow"> </div>
                </div>

              </div>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Services
              </h6>
              <p>
                <a href="#!" className="text-reset"> Premium Dry Cleaning</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Couture Care</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Gentle Fabric Treatment</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Stain Removal Expertise</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Products</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i>soufian al alami</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

    </footer>
  );
};

export default Footer;
