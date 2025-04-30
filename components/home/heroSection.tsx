import { View, StyleSheet, ImageBackground, Platform, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';

export default function HeroSection() {
  const { colors } = useTheme();
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const isSmallScreen = width < 380;

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=800' }}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <BlurView intensity={50} tint="light" style={styles.blurContainer}>
        <View style={styles.content}>
          <ThemedText style={[styles.title, isSmallScreen && { fontSize: 28 }]}>
            Apprendre différament sutout simplement
          </ThemedText>

          <ThemedText style={styles.subtitle}>
          Apprendre différament sutout simplement
          </ThemedText>

          <View style={styles.buttonContainer}>
            <Button
              title="Explore Courses"
              onPress={() => router.push('/courses')}
              style={styles.button}
            />
            <Button
              title="Browse Categories"
              variant="outline"
              onPress={() => router.push('/explore')}
              style={styles.button}
            />
          </View>
        </View>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 16,
    overflow: 'hidden',
    height: 350,
    justifyContent: 'center',
    ...Platform.select({
      web: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      default: {
        elevation: 4,
      },
    }),
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  content: {
    paddingBottom: 0,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
    color: '#fff',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    opacity: 0.9,
    marginBottom: 24,
    lineHeight: 22,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginRight: 12,
    marginBottom: 12,
  },
});
