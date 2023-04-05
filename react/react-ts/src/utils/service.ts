import { INotificationOption } from "../components/NotificationManager/interfaces";
import api from "./api";

const ENDPOINT_URL = "/notifications";

export const getAll = async () => {
  return api.get(ENDPOINT_URL);
};

export const createNotification = async (notification: INotificationOption) => {
  return api.post(ENDPOINT_URL, notification);
};

export const removeNotification = async (id: string) => {
  return api.post(`${ENDPOINT_URL}${id}`);
};
