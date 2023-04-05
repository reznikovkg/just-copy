import React, {useState} from 'react';
import ModalComponent from "../../modalComponent/ModalComponent";
import {CreateAccordionItem, UpdateAccordionItem} from "../../../services/AccordionItemService";
import Store from "../../../store/Store";
import "./UpdateCordionItemStyle.scss"
import $api from "../../../http";
const UpdateAccordionItemPageComponent = ({id}) => {
    const [createTaskModal, setCreateTaskModal] = useState(false);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return (
        <div>
            <ModalComponent active={createTaskModal} setActive={setCreateTaskModal}>

                    <input onChange={
                        e => setTitle(e.target.value)}
                           value={title}
                           className="update_accordion_item__input"
                           type="text"
                           placeholder="Введите заголовок" required/>
                    <input onChange={
                        e => setContent(e.target.value)}
                           value={content}
                           className="update_accordion_item__input"
                           type="text"
                           placeholder="Введите контент" required/>
                    <button className="update_accordion_item__button" type="submit" onClick={(e) => {
                        if(content === '' )
                            return $api.patch(`update/${id}`, {title})
                        else if (title === '' )
                            return $api.patch(`update/${id}`, {content})
                        else
                            UpdateAccordionItem(id,{title, content})
                        Store.getAllAccordionItem()
                    }}>Изменить
                    </button>
            </ModalComponent>
            <button className="update_button" type="submit" onClick={() => setCreateTaskModal(true)}>изменить</button>
        </div>
    );
};

export default UpdateAccordionItemPageComponent;