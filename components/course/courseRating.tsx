import { View, StyleSheet } from 'react-native';
import { Star } from 'lucide-react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { useTheme } from '@/hooks/useTheme';

interface CourseRatingProps {
  rating: number;
}

export function CourseRating({ rating }: CourseRatingProps) {
  const { colors } = useTheme();
  
  // Create an array of 5 star ratings
  const stars = Array(5).fill(0).map((_, i) => {
    if (i < Math.floor(rating)) {
      return 'full';
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      return 'half';
    } else {
      return 'empty';
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        {stars.map((type, index) => (
          <Star
            key={index}
            size={14}
            color={type !== 'empty' ? colors.accent[500] : colors.neutral[300]}
            fill={type !== 'empty' ? colors.accent[500] : 'transparent'}
          />
        ))}
      </View>
      <ThemedText style={styles.rating}>{rating.toFixed(1)}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    marginRight: 4,
  },
  rating: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    marginLeft: 4,
  },
});