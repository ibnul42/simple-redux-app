import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
const CartItems = () => {
  const dispatch = useDispatch();
  const { itemsLists, showCart } = useSelector((state) => state.cart)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {showCart && itemsLists.length && itemsLists.map(item => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              total={item.total}
              price={item.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
