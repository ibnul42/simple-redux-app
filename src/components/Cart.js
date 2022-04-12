import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const ShowItemHandler = () => {
    dispatch(setShowCart());
  }
  return (
    <div className="cartIcon" onClick={ShowItemHandler}>
      <h3>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
