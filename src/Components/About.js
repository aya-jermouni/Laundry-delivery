// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards/aboutComponent/style/about.scss';
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <Link to="/about" className="btn">
        <div>
          <p>
            Welcome to Luxury Laundry Pro, where exceptional care meets your
            finest garments.
          </p>
          <h2>Story</h2>
          <p>
            At Luxury Laundry Pro, we understand that your clothes are an
            investment, and we re committed to providing the highest standard of
            care for your most treasured garments. Established with a passion
            for excellence in laundry services, our journey began with a simple
            yet profound goal – to redefine the laundry experience.
          </p>
          <h2>Mission</h2>
          <p>
            Our mission is to elevate your expectations of laundry care by
            combining cutting-edge technology with a dedicated team of experts.
            We aim to deliver a service that goes beyond cleaning; it s about
            preserving the quality, texture, and lifespan of your clothing.
          </p>
          <h2>Quality Guarantee</h2>
          <p>
            We take pride in our meticulous attention to detail and unwavering
            commitment to quality. From delicate fabrics to intricate designs,
            our experienced team uses industry-leading practices and
            eco-friendly products to ensure your clothes receive the care they
            deserve.
          </p>
          <h2>Why Choose Luxury Laundry Pro?</h2>
          <ul>
            <li>
              <b>Expertise</b>: Our team consists of skilled professionals with
              a deep understanding of fabrics and garment care.
            </li>
            <li>
              <b>Innovation</b>: We leverage state-of-the-art technology to
              deliver efficient and effective laundry solutions.
            </li>
            <li>
              <b>Environmental Responsibility</b>: We are dedicated to
              eco-friendly practices, using sustainable methods and products
              wherever possible.
            </li>
          </ul>
          <h2>Our Services</h2>
          <ul>
            <li>
              <b>Dry Cleaning</b>: Our specialized dry cleaning services are
              designed to cater to the unique needs of your garments, ensuring
              they remain in pristine condition.
            </li>
            <li>
              <b>Sneaker Cleaning</b>: Give your sneakers the love they deserve
              with our comprehensive sneaker cleaning services, restoring them
              to their original glory.
            </li>
            <li>
              <b>Price Details</b>: Transparent pricing is a cornerstone of our
              service. View our detailed pricing structure for a clear
              understanding of the value we provide.
            </li>
          </ul>
          <h2>Meet the Team</h2>
          <p>
            Behind Luxury Laundry Pro is a team of passionate individuals who
            share a commitment to excellence. Get to know the faces that drive
            our dedication to exceptional service.
          </p>
        </div>
      </Link>
      <h2>Contact Us</h2>
      <p>
        Have questions or need assistance? Our friendly team is here to help.
        Reach out to us
        <Link to="/contact-us">here</Link>
      </p>
      <p>
        Thank you for choosing Luxury Laundry Pro, where your satisfaction is
        our priority.
      </p>
    </div>
  );
}

export default About;
