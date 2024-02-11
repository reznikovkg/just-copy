import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

let storeItems = JSON.parse(localStorage.getItem('items'));

if (storeItems == null) {
    storeItems = {
        [uuidv4()]: {
            title: "Lenovo Yoga 2",
            src: "/camera.png",
            price: 100,
            oldPrice: 165,
            available: 10,
            sold: 0,
            rating: 5,
            info: "Характеристики Зеркальный фотоаппарат Canon EOS 4000D Kit 18-55mm III черный \n" +
                "                    Гарантия продавца / производителя - 12 мес.\n" +
                "                    Страна-производитель - Таиланд\n" +
                "                    Тип - зеркальный фотоаппарат\n" +
                "                    Модель - Canon EOS 4000D Kit 18-55mm III\n" +
                "                    Цвет камеры - черный\n" +
                "                    Материал корпуса - поликарбонатная смола"
        },
        [uuidv4()]: {
            title: "Reference Series 2.0.0",
            src: "/comp.png",
            price: 90,
            oldPrice: 102,
            available: 24,
            sold: 0,
            rating: 4,
            info: "Характеристики Зеркальный телевизор Canon EOS 4000D Kit 18-55mm III черный \n" +
                "                    Гарантия продавца / производителя - 12 мес.\n" +
                "                    Страна-производитель - Таиланд\n" +
                "                    Тип - зеркальный фотоаппарат\n" +
                "                    Модель - Canon EOS 4000D Kit 18-55mm III\n" +
                "                    Цвет камеры - черный\n" +
                "                    Материал корпуса - поликарбонатная смола"
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