import {notification} from "@/shared/ui/NotificationManager/NotificationManager";
import {useGetMessagesQuery} from "@/entities/Message/api/messageApi";
import './EventWidget.scss'
import {useEffect} from "react";
import {SendMessage} from "@/features/SendMessage";
import {RequestMessage} from "@/features/RequestMessage";

export const EventWidget = () => {
    const {data: messages} = useGetMessagesQuery();

    useEffect(() => {
        if (messages && messages.length > 0) {
            notification.show({
                title: "Сообщение с вебсокета",
                content: messages[messages.length - 1],
                duration: 5000,
            })
        }
    }, [messages])

    return (
        <div className={"event-widget"}>
            <SendMessage/>
            <RequestMessage/>
        </div>
    )
}