import {makeAutoObservable, observable, runInAction} from "mobx";
import {GetAllAccordionItem} from "../services/AccordionItemService";
class Store{

    dataServer = []
    counter = 0
    constructor() {
        makeAutoObservable(this,{}, { autoBind: true });
    }

    async getAllAccordionItem(){
        const response = await GetAllAccordionItem()
        runInAction(()=>{
            this.setDataServer(response.data)
        })

    }

    setDataServer(data){
        this.dataServer = data
    }

    addNewAccordionItem(item){
        this.dataServer = [...this.dataServer, item]
    }

}


export default new Store()