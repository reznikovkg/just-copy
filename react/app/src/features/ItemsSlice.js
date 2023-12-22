import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

let storeItems = JSON.parse(localStorage.getItem('items'));

if (storeItems == null) {
    storeItems = {
        [uuidv4()]: {
            title: "Lenovo Yoga 2",
            src: "/item10.png",
            price: 100,
            oldPrice: 165,
            available: 10,
            sold: 0,
            rating: 5
        },
        [uuidv4()]: {
            title: "Reference Series 2.0.0",
            src: "/item11.png",
            price: 90,
            oldPrice: 102,
            available: 24,
            sold: 0,
            rating: 4
        }
    };
    localStorage.setItem('items', JSON.stringify(storeItems));
}

const items = Object
    .entries(storeItems)
    .reduce((acc, [id, value]) => Object.assign(acc, {[id]: { id, ...value }}), {});

export const itemsSlice = createSlice({
    name: 'items',
    initialState: items,
    reducers: {},
})

export const itemsSelector = (store) => store.items;
export const itemsArraySelector = (store) => Object.values(store.items);

export const itemByIdSelector = (id) => (store) => store.items[id];

export default itemsSlice.reducer