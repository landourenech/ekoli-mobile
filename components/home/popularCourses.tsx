import { View, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { CourseCard } from '@/components/course/courseCard';
import { mockCourses } from '@/constants/mockData';

export function PopularCourses() {
  const router = useRouter();
  const { width } = Dimensions.get('window');
  
  // Determine item width based on screen size
  const getItemWidth = () => {
    if (width >= 1024) return (width - 64) / 3 - 16; // Desktop: 3 items per row
    if (width >= 768) return (width - 48) / 2 - 16; // Tablet: 2 items per row
    return width - 32; // Mobile: 1 item per row
  };

  const handlePress = (id: number) => {
    router.push(`/courses/${id}`);
  };

  // Get the 6 most popular courses based on rating
  const popularCourses = [...mockCourses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <FlatList
      data={popularCourses}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.itemContainer, { width: getItemWidth() }]}
          onPress={() => handlePress(item.id)}
          activeOpacity={0.9}
        >
          <CourseCard course={item} />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingRight: 16,
    paddingBottom: 16,
  },
  itemContainer: {
    marginRight: 16,
  },
});