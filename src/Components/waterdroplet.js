import React from 'react';
import './Style/WaterDropletIcon.css';

function ServiceIcon({ imageSrc, serviceName, onClick }) {
    return (
        <div className="water-droplet" onClick={onClick}>
            <div className="image-container" style={{ backgroundImage: `url(${imageSrc})` }}>
                <span className="service-name">{serviceName}</span>
            </div>
        </div>
    );
}

export default ServiceIcon;
