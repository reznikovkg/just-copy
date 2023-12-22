import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) ?? {
    items: {}
}

console.log(initialState);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id } = action.payload;
            if (!state.items[id]) {
                state.items[id] = {
                    ...action.payload,
                    count: 1
                };
            } else {
                state.items[id].count += 1;
            }
            localStorage.setItem('cart', JSON.stringify(state))
        },
        removeItem: (state, action) => {
            const id = action.payload;
            delete state.items[id];
            localStorage.setItem('cart', JSON.stringify(state))
        }
    },
})

export const getItems = (store) => store.cart.items;

export const getItemsArray = (store) => Object.values(store.cart.items);
export const getItemCount = (store) => Object.values(store.cart.items).reduce((acc, {count}) => acc + count, 0);
export const getTotalAmount = (store) => getItemsArray(store).reduce((acc, {price, count}) => acc + price * count, 0);

export const getCartItemById = (id) => (store) => store.cart.items[id];

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer