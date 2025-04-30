import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';
import { useRouter } from 'expo-router';
import { CircleCheck as CheckCircle } from 'lucide-react-native';

export default function EnrolledScreen() {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.successIcon}>
          <CheckCircle size={64} color={colors.success[500]} />
        </View>
        
        <ThemedText style={styles.title}>
          Congratulations!
        </ThemedText>
        
        <ThemedText style={styles.subtitle}>
          You've successfully enrolled in this course
        </ThemedText>
        
        <ThemedText style={styles.description}>
          You can now access all course materials and start learning at your own pace. 
          Track your progress, complete assignments, and connect with other students.
        </ThemedText>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Start Learning"
            onPress={() => router.push('/courses')}
            style={styles.button}
          />
          <Button 
            title="View My Courses"
            variant="outline"
            onPress={() => router.push('/profile')}
            style={styles.button}
          />
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
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successIcon: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    opacity: 0.8,
    marginBottom: 32,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    marginBottom: 12,
  },
});