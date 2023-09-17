import React from "react";
import AccordionComponent from "@/shared/ui/accordionComponent/AccordionComponent";
import LinkComponent from "@/shared/ui/linkComponent/LinkComponent";
import {cn} from "@/shared/lib/utils";

export const AccordionWidget = () => {
    const collapse_items_2 = [
        {
            id: 1,
            title: "Заголовок 1",
            content: "Текст 1"
        },
        {
            id: 2,
            title: "Заголовок 2",
            content: "Текст 2"
        },
    ]

    const collapse_items_1 = [
        {
            id: 1,
            title: "Заголовок 1",
            content: "Текст 1"
        },
        {
            id: 2,
            title: "Заголовок 2",
            content: "Текст 2"
        },

        {
            id: 3,
            title: "Заголовок 3",
            content: <AccordionComponent data={collapse_items_2}/>
        }
    ]

    const collapse_items_3 = [

        {
            id: 1,
            title: "Заголовок 1 стора",
            content: "Текст 1 стора"
        },
        {
            id: 2,
            title: "Заголовок 2 стора",
            content: "Текст 2 стора"
        },

        {
            id: 3,
            title: "Заголовок 3 стора",
            content: "Текст 3 стора"
        },
    ]

    return (
        <div className={cn("acordion_page", "w-[400px]")}>
            <AccordionComponent data={collapse_items_1}/>
            <AccordionComponent data={collapse_items_2}/>
            <AccordionComponent data={collapse_items_3}/>
            <LinkComponent link="/"> Наглавную </LinkComponent>
        </div>
    );
};