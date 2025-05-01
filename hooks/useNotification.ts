import { useContext } from "react";
import { Alert } from "react-native";
import { NotificationContext } from "@/context/notification.provider";

export const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    Alert.alert("useNotification must be used within a NotificationProvider");
    return {
      expoPushToken: null,
      notification: null,
      error: null,
    };
  }

  return context;
};
