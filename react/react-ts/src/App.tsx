import { observer } from "mobx-react-lite";
import Button from "./components/Button/Button";
import { notificationManager } from "./components/NotificationManager/NotificationManager";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import notificationStore from "./stores/NotificationStore";
import LoadingOverlay from "react-loading-overlay-ts";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <LoadingOverlay active={isLoading} spinner={true}>
      <div className="app-container">
        <Button
          onClick={async () => {
            setIsLoading(true);
            await notificationStore.getAllNotifications();
            setIsLoading(false);
            notificationStore.notifications?.map((notification) => {
              notificationManager.show({ ...notification });
            });
          }}
          text={"Show All Notifications from server"}
        />

        <Button
          onClick={async () => {
            setIsLoading(true);
            await notificationStore.addNotification({
              title: "title",
              content: "content",
            });
            setIsLoading(false);
          }}
          text={"Create new notification"}
        />

        <ProgressBar />
      </div>
    </LoadingOverlay>
  );
}

export default observer(App);
