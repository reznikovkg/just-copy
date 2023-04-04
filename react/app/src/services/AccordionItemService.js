import $api from "../http";


export async function GetAllAccordionItem(){
    return $api.get(`get_all`)
}

export async function CreateAccordionItem(accordionItem){
    return $api.post(`post`, accordionItem)
}


export async function DeleteAccordionItem(id){
    return $api.delete(`delete/${id}`)
}


export async function UpdateAccordionItem(id, accordionItem){
    return $api.delete(`delete/${id}`, accordionItem)
}