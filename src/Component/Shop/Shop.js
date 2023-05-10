import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products , setProduct] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        let savedCart = [];
        // Step 1: Get  ID
        for(const id in storedCart){
            // step 2: get product by using id
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct);
            if(addedProduct){
                // step 3: Get Quantity of the product
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step 4: Add the product to the saveCart
            savedCart.push(addedProduct);
            }
        }
        // step 5: Set the cart and quantity
        setCart(savedCart);
    },[products])


    const [cart , setCart] = useState([])
    const handleToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleToCart={handleToCart}
                    ></Product>)
                }
            </div>
            {/* Cart-Container Codding */}
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                <Link to='/order-review' className='btn-review-order'>
                <button className='btn-review'>
                <span>Review Order</span>
                <FontAwesomeIcon  icon={faArrowAltCircleRight} />
                </button>
                </Link>
                
                </Cart>
            </div>
        </div>
    );
};

export default Shop;