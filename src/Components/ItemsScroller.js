import React, { useState } from 'react';
import ItemCard from './ItemCard';
import './style/ItemScroller.css';

const ItemsScroller = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = items.length - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    let newIndex = currentIndex + 1;
    if (newIndex === items.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="items-scroller">
      <button className="prev-button" onClick={handlePrevClick}>
        <span className="prev-icon">&#10094;</span>
      </button>

      <div className="scrolling-container">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            isCurrent={index === currentIndex}
          />
        ))}
      </div>

      <button className="next-button" onClick={handleNextClick}>
        <span className="next-icon">&#10145;</span>
      </button>
    </div>
  );
};

export default ItemsScroller;
