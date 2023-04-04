import {makeAutoObservable, observable} from "mobx";
import {GetAllAccordionItem} from "../services/AccordionItemService";
class Store{

    dataServer = []

    constructor() {
        makeAutoObservable(this,{}, { autoBind: true });
    }


    getDatasServer(){
        return this.dataServer
    }

    async getAllAccordionItem(){
        const response = await GetAllAccordionItem()
        this.setDataServer(response.data)
    }

    setDataServer(data){
        this.dataServer = data
    }

    addNewAccordionItem(item){
        this.dataServer = [...this.dataServer, item]
    }

}


export default new Store()