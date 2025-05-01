import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const CourseAccess = () => {
  const { courseId, title, activeVideo } = useLocalSearchParams<{
    courseId?: string;
    title?: string;
    activeVideo?: string;
  }>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Accès au cours</Text>
      {title && <Text style={{ marginTop: 10 }}>Titre : {title}</Text>}
      {courseId && <Text>ID du cours : {courseId}</Text>}
      {activeVideo && <Text>Vidéo en cours : {activeVideo}</Text>}
    </View>
  );
};

export default CourseAccess;
