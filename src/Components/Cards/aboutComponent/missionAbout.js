import React, { useState, useEffect } from "react";
import "./style/mission.css";

const Mission  = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const text = " Our mission is to elevate your expectations of laundry care by combining cutting-edge technology with a dedicated team of experts.We aim to deliver a service that goes beyond cleaning; it's about reserving the quality, texture, and lifespan of your clothing.";

    // Split the text into words
    const wordsArray = text.split(" ");
    setWords(wordsArray);
  }, []);

  return (
    <div className="story-container">
      <div className="background-image"></div>
      <div className="text-container">
        {words.map((word, index) => (
          <span key={index} className="word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Mission;
