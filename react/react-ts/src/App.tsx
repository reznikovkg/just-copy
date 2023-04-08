import Button from "./components/Button/Button";
import { notification } from "./components/NotificationManager/NotificationManager";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  return (
    <div className="app-container">
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

      <ProgressBar />
    </div>
  );
}

export default App;
