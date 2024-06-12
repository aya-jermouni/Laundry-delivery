import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div>
      <Link to="/contact-us" className="btn">
        contact us
      </Link>
    </div>
  );
}

export default ContactUs;