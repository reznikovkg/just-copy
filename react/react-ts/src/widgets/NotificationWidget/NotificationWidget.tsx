import Button from "@/shared/ui/Button/Button";
import { notification } from "@/shared/ui/NotificationManager/NotificationManager";

export const NotificationWidget = () => {
    return (
        <div>
            <Button
                onClick={() =>
                    notification.show({
                        title: "Notification title",
                        content: "Notification body",
                        duration: 5000,
                    })
                }
                text={"create"}
            />
        </div>
    )
}