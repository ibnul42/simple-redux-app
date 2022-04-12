import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsLists: [],
        totalQuantity: 0,
        totalPrice: 0,
        showCart: false,
    }
    ,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemsLists.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                state.totalPrice += existingItem.price;
            } else {
                state.itemsLists.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                })
                state.totalPrice += newItem.price;
                state.totalQuantity++;
            }
        },
        removeFromCart() { },
        setShowCart(state) {
            state.showCart = true;
        },
    }
})

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;

export default cartSlice.reducer;