import React, { useState } from 'react';
import './Style/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  function handleInputChange(event) {
    setEmail(event.target.value);
  }

  return (
    <footer className="footer-container">
      <section className="footer-content">
        <div className="footer-grid">
          {/* Grid row */}
          <div className="footer-column">
            {/* Content */}
            <h6 className="footer-title">
              <i className="fas fa-gem me-3"></i>Ready to experience The Laundry Luxury Pro difference?
            </h6>
            <p>
              Contact us today to schedule a laundry service that fits your schedule and exceeds your expectations. Your SPOTLESS clothes AWAIT!
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
                <input type="submit" className="submit-btn" value="Contact Us" />
                <div className="submit-btn-shadow"></div>
              </div>
            </div>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="footer-column">
            {/* Links */}
            <h6 className="footer-title">Services</h6>
            <p><a href="#!" className="text-reset">Premium Dry Cleaning</a></p>
            <p><a href="#!" className="text-reset">Couture Care</a></p>
            <p><a href="#!" className="text-reset">Gentle Fabric Treatment</a></p>
            <p><a href="#!" className="text-reset">Stain Removal Expertise</a></p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="footer-column">
            {/* Links */}
            <h6 className="footer-title">Useful links</h6>
            <p><a href="#!" className="text-reset">Pricing</a></p>
            <p><a href="#!" className="text-reset">Orders</a></p>
            <p><a href="#!" className="text-reset">Products</a></p>
            <p><a href="#!" className="text-reset">Help</a></p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="footer-column">
            {/* Links */}
            <h6 className="footer-title">Contact</h6>
            <p><i className="fas fa-home me-3"></i>Aya JERMOUNI</p>
            <p><i className="fas fa-envelope me-3"></i>ayajermouni7@gmail.com</p>
            <p><i className="fas fa-phone me-3"></i>+212 67 78 97 28</p>
            <p><i className="fas fa-print me-3"></i>+ 01 234 567 89</p>
          </div>
          {/* Grid column */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
