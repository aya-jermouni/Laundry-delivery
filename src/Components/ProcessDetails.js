import React from "react";
import { Link } from "react-router-dom";

function ProcessDetails() {
  return (
    <div>
      <h2>Order Placement:</h2>
      <p>
        Select the  Sneaker, Boot, and Sandal Care option when placing your
        order through our user-friendly platform.
      </p>
      <h2>Secure Pickup:</h2>
      <p>
        Our professional team will pick up your footwear securely at the
        location of your choice, respecting your time and privacy.
      </p>
      <h2>Expert Cleaning and Restoration:</h2>
      <p>
        Our artisans employ their expertise to clean, restore, and enhance your
        footwear using specialized tools and techniques.
      </p>
      <h2>Quality Assurance:</h2>
      <p>
        Each pair undergoes a thorough quality check to ensure it meets our high
        standards before being delivered back to you.
      </p>
      <h2>Delivered to Perfection:</h2>
      <p>
        Receive your rejuvenated footwear, carefully packaged and ready to be
        showcased. Rediscover the joy of stepping into excellence.
      </p>
      <p>
        Elevate your footwear care with Your Luxury Laundry Pro. Because every
        step should be a stride in style.
      </p>
      <Link to="/sneaker-cleaning" className="btn btn-secondary">
        Back to Sneaker Cleaning
      </Link>
    </div>
  );
}

export default ProcessDetails;
