import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {
  const { totalQuantity } = useSelector((state) => state.cart)
  const quantity = 5;
  return (
    <div className="cartIcon">
      <h3>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
