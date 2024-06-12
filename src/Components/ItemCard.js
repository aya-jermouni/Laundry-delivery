import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCard = ({ title, description, imageUrl, isCurrent }) => {
  const cardStyle = isCurrent ? { border: '2px solid #007bff' } : {}; // Apply a border to the current item

  return (
    <div className="item-card">
      <Card style={cardStyle}>
        <Card.Img variant="top" src={imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
            {title}
          </Card.Title>
          <Card.Text style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {description}
          </Card.Text>
          <Button variant="primary" className="buy-button">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

// Define prop types
ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool,
};

ItemCard.defaultProps = {
  isCurrent: false,
};

export default ItemCard;
