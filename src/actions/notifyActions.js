import { NOTIFY_USER } from "./types";

export const notifyUser = (message, messageType) => {
  return {
    // types -> case in reducer function
    type: NOTIFY_USER,
    message,
    messageType
  };
};
