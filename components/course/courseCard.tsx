import { View, StyleSheet, Image, Platform, Pressable } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { CourseRating } from './courseRating';
import { useTheme } from '@/hooks/useTheme';
import { CourseType } from '@/types/course';
import { Clock, Users } from 'lucide-react-native';

interface CourseCardProps {
  course: CourseType;
  onPress?: () => void;
}

export function CourseCard({ course, onPress }: CourseCardProps) {
  const { colors } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.neutral[200],
          opacity: pressed ? 0.9 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
      ]}
      onPress={onPress}
    >
      <Image 
        source={{ uri: course.image }} 
        style={styles.image} 
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <View style={[styles.categoryBadge, { backgroundColor: colors.primary[50] }]}>
          <ThemedText style={[styles.categoryText, { color: colors.primary[700] }]}>
            {course.category}
          </ThemedText>
        </View>
        
        <ThemedText style={styles.title} numberOfLines={2}>
          {course.title}
        </ThemedText>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Clock size={14} color={colors.neutral[500]} />
            <ThemedText style={styles.metaText}>{course.duration}</ThemedText>
          </View>
          <View style={styles.metaItem}>
            <Users size={14} color={colors.neutral[500]} />
            <ThemedText style={styles.metaText}>{course.students} students</ThemedText>
          </View>
        </View>
        
        <View style={styles.instructorContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
            style={styles.instructorImage} 
          />
          <ThemedText style={styles.instructor}>
            {course.instructor}
          </ThemedText>
        </View>
        
        <View style={styles.footer}>
          <CourseRating rating={course.rating} />
          <ThemedText style={styles.price}>
            ${course.price}
          </ThemedText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    ...Platform.select({
      web: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      default: {
        elevation: 2,
      },
    }),
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 12,
    height: 44,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginLeft: 4,
    opacity: 0.8,
  },
  instructorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  instructorImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  instructor: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    opacity: 0.8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});