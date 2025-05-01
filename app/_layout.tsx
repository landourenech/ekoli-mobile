import { Slot } from "expo-router";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "@/context/authContext";
import { NotificationProvider } from "@/context/notification.provider";

// Empêche l'écran de chargement de disparaître automatiquement
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>
          {/* expo-router insère automatiquement la bonne page ici */}
          <Slot />
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}
