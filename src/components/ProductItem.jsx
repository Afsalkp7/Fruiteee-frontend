import React, { useContext } from 'react';
import '../styles/foodItem.css';
import rating from '../assets/rating_starts.png';
import addBtnWhite from '../assets/add_icon_white.png';
import addBtnGreen from '../assets/add_icon_green.png';
import removeBtn from '../assets/remove_icon_red.png';
import { StoreContext } from './StoreContext';

function ProductItem({ id, name, category, price, imageUrl, description }) {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className="product-item">
      <div className="product-item-image-container">
        <img className="product-item-image" src={imageUrl} alt="product" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={addBtnWhite}
            alt="addBtn"
          />
        ) : (
          <div className="product-item-counter">
            <img
              src={removeBtn}
              onClick={() => removeFromCart(id)}
              alt="remove icon"
            />
            <p>{cartItems[id]}</p>
            <img
              src={addBtnGreen}
              onClick={() => addToCart(id)}
              alt="add button green"
            />
          </div>
        )}
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
