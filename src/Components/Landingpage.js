import React, { useState } from 'react';
import './Style/Landingpage.css';

function Landingpage() {
    const [email, setEmail] = useState('');

    function handleInputChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div className="container">
            <div className="text-container">
                <h1>Welcome to our Cleaning Services</h1>
                <h3 className="converter-title" style={{ margin: "25px" }}>we collect , clean and deliver directly to your door!</h3>
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
            <div className="image-container">
                <img src="/images/landing3.png" alt="Oops!" style={{
                    width: "700px",
                    height: "auto",
                    margin: " 0px 3px",
                    padding: "0px",
                }} />
            </div>


        </div>
    );
}

export default Landingpage;
