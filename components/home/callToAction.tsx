import { View, StyleSheet, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';
import { useRouter } from 'expo-router';


export function CallToAction() {
  const { colors } = useTheme();
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const isSmallScreen = width < 380;

  return (
    <View style={[styles.container, { backgroundColor: colors.accent[100] }]}>
      <ThemedText style={[styles.title, isSmallScreen && { fontSize: 20 }]}>
        Ready to advance your career?
      </ThemedText>
      
      <ThemedText style={styles.subtitle}>
        Join thousands of students already learning on our platform
      </ThemedText>
      
      <Button 
        title="Get Started for Free" 
        variant="primary"
        size="large"
        onPress={() => router.push('/courses')}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    marginBottom: 24,
    opacity: 0.8,
  },
  button: {
    minWidth: 200,
  },
});