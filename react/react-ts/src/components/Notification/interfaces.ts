import { INotificationOption } from "../NotificationManager/interfaces";

export interface INotification extends INotificationOption {
  destroy: () => void;
}
