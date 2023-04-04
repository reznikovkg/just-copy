import React, {memo, useContext, useState} from 'react';
import ModalComponent from "../../modalComponent/ModalComponent";
import "./CreateAccordionItemPageStyle.scss"
import {CreateAccordionItem} from "../../../services/AccordionItemService";

import {observer, useObserver} from "mobx-react-lite";
import Store from "../../../store/Store";

const CreateAccordionItemPageComponent = () => {

    const [createTaskModal, setCreateTaskModal] = useState(false);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
        return (
            <div className="create_task_page">
                <ModalComponent active={createTaskModal} setActive={setCreateTaskModal}>
                    <form className={"create_accordion_item"}>
                        <input onChange={
                            e => setTitle(e.target.value)}
                               value={title}
                               className="create_accordion_item__input"
                               type="text"
                               placeholder="Введите заголовок" required/>
                        <input onChange={
                            e => setContent(e.target.value)}
                               value={content}
                               className="create_accordion_item__input"
                               type="text"
                               placeholder="Введите контент" required/>
                        <button className="create_accordion_item__button" type="submit" onClick={(e) => {
                            const response = CreateAccordionItem({title, content})
                            response.then(result => {
                                Store.addNewAccordionItem(result.data)
                            })
                        }}>Создать элемент акордиона
                        </button>
                    </form>
                </ModalComponent>
                <button className="open_modal_window" onClick={() => setCreateTaskModal(true)}> создание задачи</button>

            </div>
        );
    };

export default   observer(CreateAccordionItemPageComponent);