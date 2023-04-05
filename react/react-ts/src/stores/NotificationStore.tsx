import { INotificationOption } from "../components/NotificationManager/interfaces";
import { makeAutoObservable, runInAction } from "mobx";
import {
  getAll,
  createNotification,
  removeNotification,
} from "../utils/service";

class NotificationStore {
  notifications: INotificationOption[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getAllNotifications() {
    const response = await getAll();
    runInAction(() => {
      this.notifications = response.data;
    });
  }

  async addNotification(notification: INotificationOption) {
    const response = await createNotification(notification);
    runInAction(() => {
      this.notifications = [this.notifications, response.data];
    });
  }

  async removeNotification(id: string) {
    await removeNotification(id);
  }
}

export default new NotificationStore();
