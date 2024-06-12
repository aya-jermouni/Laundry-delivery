// Whychooseus.js
import React from 'react';
import WhychooseusData from './WhychooseusData'; // Import the data
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Whychooseus.scss'; // Import your Sass file

const Whychooseus = () => {
  return (
    <div style={{backgroundColor:" rgba(186, 226, 208, 0.298)",padding:"10px"}}> <h3 style={{margin:"15px",color:" #a3a5bc"}}>Why We re Different:</h3>
    <div className="whychooseus-container" >
      {WhychooseusData.map((item, index) => (
        <div className="whychooseus-item" key={index}>
          <img
            src={item.logo}
            alt={`Logo ${index + 1}`}
            className="logo"
          />
          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Whychooseus;
