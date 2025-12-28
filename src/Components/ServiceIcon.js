import React from "react";
import PropTypes from "prop-types";

function ServiceIcon({ imageSrc, serviceName, description, highlight, onClick }) {
  return (
    <div className="service-icon-card" onClick={onClick}>
      <img src={imageSrc} alt={serviceName} className="service-icon-img" />

      <h3 className="service-icon-title">{serviceName}</h3>

      <p className="service-icon-desc">{description}</p>

      <p className="service-icon-highlight">{highlight}</p>
    </div>
  );
}

ServiceIcon.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ServiceIcon;
