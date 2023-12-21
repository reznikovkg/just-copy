import { INotification } from "../Notification/interfaces";
export interface INotificationOption {
  id?: string;
  title: string;
  content: string;
  duration?: number;
}

export interface INotificationManagerState {
  notifications: INotification[];
}
