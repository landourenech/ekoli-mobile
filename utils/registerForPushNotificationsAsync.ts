import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export async function registerForPushNotificationsAsync(): Promise<string | null> {
  let token: string | null = null;

  // Vérifier si l'appareil est physique
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    // Demander la permission si non accordée
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    // Si la permission est accordée, obtenir le token
    if (finalStatus === "granted") {
      const pushToken = await Notifications.getExpoPushTokenAsync();
      token = pushToken.data;
    } else {
      console.warn("Permission de notification non accordée !");
    }
  } else {
    console.warn("Les notifications push ne fonctionnent que sur un appareil physique.");
  }

  // Android : configurer le canal de notification
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
