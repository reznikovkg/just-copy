import Button from "./components/Button/Button";
import { notification } from "./components/NotificationManager/NotificationManager";

function App() {
  return (
    <div>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
