import React from 'react';
import './OrderDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const OrderDetailsCard = ({product , handleRemoveFromCart}) => {
    const {id ,img , name , price , quantity , shipping} =product;
    // const handleRemoveFromCart = handleRemoveFromCart
    return (
        <div>
            <div className='product-detaails-container'>
                <div className='product-img-details-div'>
                    <img src={img} alt="" />
                    <div className='product-details-div'>
                        <h5>{name}</h5>
                        <p>Price: ${price}</p>
                        <p>Shipping Charge: ${shipping}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                </div>
                <button onClick={() => handleRemoveFromCart(id)} className='btn-cart-delete'><FontAwesomeIcon className='icon-delete-btn' icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default OrderDetailsCard;