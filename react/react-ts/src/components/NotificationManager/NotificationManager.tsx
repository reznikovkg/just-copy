import ReactDOM from "react-dom";
import { INotification } from "../Notification/interfaces";
import Notification from "../Notification/Notification";
import { INotificationOption } from "./interfaces";

import "./style.scss";

export class NotificationManager {
  private containerRef: HTMLDivElement;
  private notifications: INotification[] = [];

  constructor() {
    const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    const notificationContainer = document.createElement(
      "div"
    ) as HTMLDivElement;
    notificationContainer.className = "notification-container-main";
    body.insertAdjacentElement("beforeend", notificationContainer);
    this.containerRef = notificationContainer;
  }

  public show(options: INotificationOption): void {
    const notificationId = Math.random().toString(36).slice(2, 9);
    const id = options.id ?? notificationId;
    const notification: INotification = {
      id,
      ...options,
      destroy: () => this.destroy(id),
    };

    this.notifications = [notification, ...this.notifications];
    this.render();
  }

  public destroy(id: string): void {
    this.notifications = this.notifications.filter(
      (notification: INotification) => notification.id !== id
    );
    this.render();
  }

  private render(): void {
    const notificationsList = this.notifications.map(
      (notificationProps: INotification) => (
        <Notification key={notificationProps.id} {...notificationProps} />
      )
    );
    ReactDOM.render(notificationsList, this.containerRef);
  }
}

export const notification = new NotificationManager();
