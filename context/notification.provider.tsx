import React, {
    createContext,
    useEffect,
    useState,
    useRef,
    ReactNode,
  } from "react";
  import * as Notifications from "expo-notifications";
  import axios from "axios";
  import { router } from "expo-router";
  import { registerForPushNotificationsAsync } from "@/utils/registerForPushNotificationsAsync";
  import useUser, { setAuthorizationHeader } from "@/hooks/fetch/useUser";
  import { NotificationContextType } from "@/types/notification";
  
  export const NotificationContext = createContext<NotificationContextType | null>(null);
  
  interface NotificationProviderProps {
    children: ReactNode;
  }
  
  export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [expoPushToken, setExpoPushToken] = useState<string | null>(null);
    const [notification, setNotification] = useState<Notifications.Notification | null>(null);
    const [error, setError] = useState<Error | null>(null);
  
    const notificationListener = useRef<Notifications.Subscription>();
    const responseListener = useRef<Notifications.Subscription>();
    const { user, loader } = useUser();
  
    useEffect(() => {
      let isMounted = true;
  
      const registerPushNotification = async () => {
        try {
          const token = await registerForPushNotificationsAsync();
          if (token && !loader && user && user.pushToken !== token) {
            await setAuthorizationHeader();
            await axios.put(
              `${process.env.EXPO_PUBLIC_SERVER_URI}/update-push-token`,
              { pushToken: token }
            );
            setExpoPushToken(token);
          }
        } catch (err: any) {
          setError(err);
        }
      };
  
      if (isMounted) {
        registerPushNotification();
      }
  
      notificationListener.current = Notifications.addNotificationReceivedListener(
        (notification) => {
          setNotification(notification);
        }
      );
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(
        (response) => {
          const data = response.notification.request.content.data;
          if (data?.courseData) {
            router.push({
              pathname: "/courses/[id]",
              params: {
                ...data.courseData,
                activeVideo: data.activeVideo,
              },
            });
          } else if (data?.link) {
            router.push(data.link);
          }
        }
      );
  
      return () => {
        isMounted = false;
        if (notificationListener.current) {
          Notifications.removeNotificationSubscription(notificationListener.current);
        }
        if (responseListener.current) {
          Notifications.removeNotificationSubscription(responseListener.current);
        }
      };
    }, [loader]);
  
    return (
      <NotificationContext.Provider value={{ expoPushToken, notification, error }}>
        {children}
      </NotificationContext.Provider>
    );
  };
  