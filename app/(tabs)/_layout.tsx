import { Tabs } from "expo-router";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "(home)") {
            return <Feather name="home" size={moderateScale(24)} color={color} />;
          } else if (route.name === "explore") {
            return <Ionicons name="compass-outline" size={moderateScale(24)} color={color} />;
          } else if (route.name === "courses") {
            return <Feather name="book-open" size={moderateScale(24)} color={color} />;
          } else if (route.name === "profile") {
            return <Feather name="user" size={moderateScale(24)} color={color} />;
          }
        },
        tabBarActiveTintColor: "#4A90E2",
        tabBarInactiveTintColor: "#8e8e93",
      })}
    >
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="exlpore" />
      <Tabs.Screen name="courses" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
