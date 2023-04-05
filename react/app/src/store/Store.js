import {makeAutoObservable} from "mobx";
class Store{
    data_Store = [

        {
            id : 1,
            title : "Заголовок 1 стора",
            content : "Текст 1 стора"
        },
        {
            id : 2,
            title: "Заголовок 2 стора",
            content : "Текст 2 стора"
        },

        {
            id : 3,
            title: "Заголовок 3 стора",
            content : "Текст 3 стора"
        },
    ]

    constructor() {
        makeAutoObservable(this);
    }

    getDatas(){
        return this.data_Store
    }
}


export default new Store()