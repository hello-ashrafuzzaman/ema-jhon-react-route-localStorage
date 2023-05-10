import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, price, seller, img, ratings } = props.product;
    
    const handleToCart = props.handleToCart;
  
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h6 className='product-title'>{name}</h6>
                <p>Price: ${price} </p>
                <p>Manufacturer: {seller} </p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleToCart(props.product)} className='btn-cart'>
                Add to Cart <span> </span>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;