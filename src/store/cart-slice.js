import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsLists: [],
        totalQuantity: 0,
        totalPrice: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemsLists.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.total += existingItem.price;
                state.totalPrice += existingItem.price;
            } else {
                state.itemsLists.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    total: newItem.price,
                    quantity: 1,
                })
                state.totalPrice += newItem.price;
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            const selectedItem = action.payload;

            const existingItem = state.itemsLists.find((item) => item.id === selectedItem);

            if (existingItem.quantity === 1) {
                state.totalPrice -= existingItem.price;
                state.totalQuantity--;
                state.itemsLists = state.itemsLists.filter((item) => item.id !== selectedItem)
            } else {
                existingItem.quantity--;
                existingItem.total -= existingItem.price;
                state.totalPrice -= existingItem.price;
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        },
    }
})

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;

export default cartSlice.reducer;