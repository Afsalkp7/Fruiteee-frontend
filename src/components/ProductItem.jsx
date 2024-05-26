import React from 'react';
import '../styles/foodItem.css';
import rating from '../assets/rating_starts.png';

function ProductItem({ id, name, category, price, imageUrl, description }) {
  return (
    <div className="product-item">
      <div className="product-item-image-container">
        <img className="product-item-image" src={imageUrl} alt="product" />
      </div>
      <div className="product-item-info">
        <div className="product-item-name-rating">
          <p>{name}</p>
          <img src={rating} alt="rating stars" />
        </div>
        <p className="product-item-desc">{description}</p>
        <p className="product-item-price">₹{price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
