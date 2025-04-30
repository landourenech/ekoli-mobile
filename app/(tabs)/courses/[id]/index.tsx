import { View, StyleSheet, ScrollView, Image, Pressable, SafeAreaView, Platform, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Clock, Users, Award, Play, BookOpen, CircleCheck as CheckCircle, Heart, Share2, Download } from 'lucide-react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { Button } from '@/components/ui/Button';
import { CourseRating } from '@/components/course/courseRating';
import { Collapsible } from '@/components/ui/Collapsible';
import { useTheme } from '@/hooks/useTheme';
import { mockCourses } from '@/constants/mockData';
import { useState } from 'react';

export default function CourseDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { colors } = useTheme();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  
  const course = mockCourses.find(c => c.id.toString() === id);
  
  if (!course) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <ArrowLeft size={24} color={colors.text} />
          </Pressable>
        </View>
        <View style={styles.centerContent}>
          <ThemedText style={styles.notFoundText}>Course not found</ThemedText>
          <Button 
            title="Browse Courses" 
            onPress={() => router.push('/courses')}
            style={{ marginTop: 16 }}
          />
        </View>
      </SafeAreaView>
    );
  }

  const handleShare = async () => {
    if (Platform.OS === 'web') {
      try {
        await navigator.share({
          title: course.title,
          text: course.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const handleEnroll = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.push('/courses/enrolled');
    } catch (error) {
      console.error('Enrollment failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleDownload = async () => {
    // Simulate download progress
    for (let i = 0; i <= 100; i += 10) {
      setDownloadProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    setDownloadProgress(0);
  };

  const handleLessonSelect = (lessonTitle: string) => {
    setSelectedLesson(lessonTitle);
    // Here you would typically navigate to the lesson or show a modal
    console.log('Selected lesson:', lessonTitle);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.headerActions}>
            <Pressable onPress={() => router.back()} style={styles.backButton}>
              <ArrowLeft size={24} color={colors.text} />
            </Pressable>
            <View style={styles.headerRight}>
              <Pressable onPress={toggleWishlist} style={styles.iconButton}>
                <Heart 
                  size={24} 
                  color={isWishlisted ? colors.error[500] : colors.text}
                  fill={isWishlisted ? colors.error[500] : 'none'}
                />
              </Pressable>
              {Platform.OS === 'web' && (
                <>
                  <Pressable onPress={handleDownload} style={styles.iconButton}>
                    <Download size={24} color={colors.text} />
                  </Pressable>
                  <Pressable onPress={handleShare} style={styles.iconButton}>
                    <Share2 size={24} color={colors.text} />
                  </Pressable>
                </>
              )}
            </View>
          </View>
        </View>
        
        <View style={styles.imageContainer}>
          <Image source={{ uri: course.image }} style={styles.coverImage} />
          <Pressable 
            style={[styles.playButton, { backgroundColor: colors.primary[600] }]}
            onPress={() => console.log('Play preview')}
          >
            <Play size={24} color={colors.white} fill={colors.white} />
          </Pressable>
          {downloadProgress > 0 && (
            <View style={styles.progressOverlay}>
              <ThemedText style={styles.progressText}>{downloadProgress}%</ThemedText>
            </View>
          )}
        </View>
        
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <View style={[styles.categoryBadge, { backgroundColor: colors.primary[50] }]}>
              <ThemedText style={[styles.categoryText, { color: colors.primary[700] }]}>
                {course.category}
              </ThemedText>
            </View>
            <ThemedText style={styles.title}>{course.title}</ThemedText>
            <View style={styles.infoRow}>
              <CourseRating rating={course.rating} />
              <ThemedText style={styles.reviews}>({course.reviewCount} reviews)</ThemedText>
            </View>
          </View>
          
          <View style={[styles.metaContainer, { backgroundColor: colors.primary[50] }]}>
            <View style={styles.metaItem}>
              <Clock size={16} color={colors.primary[600]} />
              <ThemedText style={styles.metaText}>{course.duration}</ThemedText>
            </View>
            <View style={styles.metaItem}>
              <Users size={16} color={colors.primary[600]} />
              <ThemedText style={styles.metaText}>{course.students} Students</ThemedText>
            </View>
            <View style={styles.metaItem}>
              <Award size={16} color={colors.primary[600]} />
              <ThemedText style={styles.metaText}>{course.level}</ThemedText>
            </View>
          </View>
          
          <View style={[styles.instructorSection, { backgroundColor: colors.neutral[100] }]}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
              style={styles.instructorImage} 
            />
            <View style={styles.instructorInfo}>
              <ThemedText style={styles.instructorName}>{course.instructor}</ThemedText>
              <ThemedText style={styles.instructorTitle}>Course Instructor</ThemedText>
            </View>
            <Button 
              title="View Profile" 
              variant="outline"
              size="small"
              onPress={() => {}}
              style={styles.viewProfileButton}
            />
          </View>
          
          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>About this course</ThemedText>
            <ThemedText style={styles.description}>{course.description}</ThemedText>
          </View>
          
          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>What you'll learn</ThemedText>
            {course.learningPoints.map((point, index) => (
              <View key={index} style={styles.learningPoint}>
                <CheckCircle size={20} color={colors.success[500]} />
                <ThemedText style={styles.learningText}>{point}</ThemedText>
              </View>
            ))}
          </View>
          
          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Course content</ThemedText>
            <View style={styles.contentSummary}>
              <View style={styles.summaryItem}>
                <BookOpen size={16} color={colors.text} />
                <ThemedText style={styles.summaryText}>
                  {course.modules.length} modules
                </ThemedText>
              </View>
              <View style={styles.summaryItem}>
                <Clock size={16} color={colors.text} />
                <ThemedText style={styles.summaryText}>
                  {course.duration} total
                </ThemedText>
              </View>
            </View>
            
            {course.modules.map((module, index) => (
              <Collapsible 
                key={index} 
                title={module.title} 
                subtitle={`${module.lessons.length} lessons • ${module.duration}`}
              >
                {module.lessons.map((lesson, i) => (
                  <Pressable 
                    key={i} 
                    style={({ pressed }) => [
                      styles.lesson,
                      { backgroundColor: selectedLesson === lesson.title ? colors.primary[50] : 'transparent' },
                      pressed && { opacity: 0.7 }
                    ]}
                    onPress={() => handleLessonSelect(lesson.title)}
                  >
                    <View style={styles.lessonLeft}>
                      <Play size={16} color={colors.text} />
                      <ThemedText style={styles.lessonTitle}>{lesson.title}</ThemedText>
                    </View>
                    <ThemedText style={styles.lessonDuration}>{lesson.duration}</ThemedText>
                  </Pressable>
                ))}
              </Collapsible>
            ))}
          </View>
        </View>
      </ScrollView>
      
      <View style={[styles.footer, { backgroundColor: colors.background, borderTopColor: colors.neutral[200] }]}>
        <View>
          <ThemedText style={styles.priceLabel}>Course Price</ThemedText>
          <ThemedText style={styles.price}>${course.price}</ThemedText>
        </View>
        <Button 
          title={isLoading ? 'Enrolling...' : 'Enroll Now'} 
          onPress={handleEnroll} 
          style={styles.enrollButton}
          size="large"
          isLoading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 220,
  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
  },
  content: {
    padding: 16,
  },
  titleContainer: {
    marginBottom: 16,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviews: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    opacity: 0.7,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    borderRadius: 12,
    padding: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    marginLeft: 6,
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
  instructorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
  },
  instructorImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  instructorInfo: {
    flex: 1,
  },
  instructorName: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    marginBottom: 2,
  },
  instructorTitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    opacity: 0.7,
  },
  viewProfileButton: {
    minWidth: 100,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 22,
  },
  contentSummary: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  summaryText: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  learningPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  learningText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
    flex: 1,
    marginLeft: 12,
  },
  lesson: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  lessonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  lessonTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginLeft: 12,
    flex: 1,
  },
  lessonDuration: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    opacity: 0.7,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  priceLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    opacity: 0.7,
    marginBottom: 2,
  },
  price: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  enrollButton: {
    minWidth: 160,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
  },
});