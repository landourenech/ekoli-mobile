import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import  HeroSection  from '@/components/home/heroSection';
import { FeaturesGrid } from '@/components/home/featuresGrid';
import { CallToAction } from '@/components/home/callToAction';
import { PopularCourses } from '@/components/home/popularCourses';
import { ThemedText } from '@/components/ui/ThemedText';
import { useTheme } from '@/hooks/useTheme';
import  Carousel  from '@/components/home/carousel';


export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <HeroSection />
          <View style={styles.section}>
          <Carousel  />
        </View>
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Featured Categories</ThemedText>
          <FeaturesGrid />
        </View>
        
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Popular Courses</ThemedText>
          <PopularCourses />
        </View>
        
        <View style={styles.section}>
          <CallToAction />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 40,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
});