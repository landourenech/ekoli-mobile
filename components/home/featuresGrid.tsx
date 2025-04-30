import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Code, PenTool, ChartLine as LineChart, Lightbulb, Mic, Video as VideoIcon } from 'lucide-react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { useTheme } from '@/hooks/useTheme';

const categories = [
  { id: 1, title: 'Development', icon: Code, color: '#3B82F6' },
  { id: 2, title: 'Design', icon: PenTool, color: '#F97316' },
  { id: 3, title: 'Business', icon: LineChart, color: '#10B981' },
  { id: 4, title: 'Marketing', icon: Lightbulb, color: '#8B5CF6' },
  { id: 5, title: 'Audio', icon: Mic, color: '#EC4899' },
  { id: 6, title: 'Video', icon: VideoIcon, color: '#F59E0B' },
];

export function FeaturesGrid() {
  const { colors } = useTheme();
  const router = useRouter();
  const { width } = Dimensions.get('window');
  
  // Determine how many items per row based on screen width
  const itemsPerRow = width < 500 ? 2 : 3;
  const itemWidth = (width - 32 - (itemsPerRow - 1) * 16) / itemsPerRow;

  const handlePress = (category: string) => {
    router.push({
      pathname: '/courses',
      params: { category },
    });
  };

  return (
    <View style={styles.container}>
      {categories.map((category) => {
        const Icon = category.icon;
        
        return (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.item,
              { 
                width: itemWidth,
                backgroundColor: colors.background,
                borderColor: colors.neutral[200],
              }
            ]}
            onPress={() => handlePress(category.title)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconContainer, { backgroundColor: `${category.color}20` }]}>
              <Icon size={24} color={category.color} />
            </View>
            <ThemedText style={styles.title}>{category.title}</ThemedText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  item: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
  },
});