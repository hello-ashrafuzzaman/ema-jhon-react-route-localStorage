import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import OrderDetailsCard from "./OrderDetailsCard";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import "./OrderDetails.css";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const handleRemoveFromCart = (id) => {
    // console.log(id);
    const remainingCart = cart.filter((p) => p.id !== id);
    setCart(remainingCart);
    removeFromDb(id);
  };

  const handleClearCart = ()=>{
    setCart([]);
    deleteShoppingCart();
  }
  return (
    <div className="shop-container">
      <div className="order-review-container">
        <div>
          {cart.map((p) => (
            <OrderDetailsCard
              key={p.id}
              product={p}
              handleRemoveFromCart={handleRemoveFromCart}
            ></OrderDetailsCard>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        handleClearCart={handleClearCart}
        >
            <div>hello</div>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
