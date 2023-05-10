import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    // const cart = props.cart; //Option 1
    const { cart, handleClearCart , children } = props;  //Option 2

    let totalAmount = 0;
    let totalShippingCost = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        totalAmount += product.price * product.quantity;
        totalShippingCost += product.shipping;
        quantity = quantity + product.quantity;
    }
    
    const taxes = totalAmount * 7 / 100;
    const grandTotal = totalAmount + taxes + totalShippingCost;
  
    return (
        <div className='cart'>
            <h5 className='cart-title'>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalAmount} </p>
            <p>Total Shopping Charge: ${totalShippingCost} </p>
            <p>Tax: ${taxes.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon className='icon-delete-btn' icon={faTrashAlt} />
                </button>
                {children}
        </div>
    );
};

export default Cart;