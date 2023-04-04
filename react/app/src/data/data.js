
import React from "react";
import AccordionComponent from "../components/accordionComponent/AccordionComponent";


export const data_1 =[
    {
        id : 1,
        title : "Заголовок 1",
        content : "Текст 1"
    },
    {
        id : 2,
        title: "Заголовок 2",
        content : "Текст 2"
    },

]


export const data_2 =[
    {
        id : 1,
        title : "Заголовок 1",
        content : "Текст 1"
    },
    {
        id : 2,
        title: "Заголовок 2",
        content : "Текст 2"
    },

    {
        id : 3,
        title: "Заголовок 3",
        content : <AccordionComponent data={data_1}/>
    },
]
