import React, { useRef, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, useWindowDimensions } from 'react-native';
import { AdCard } from './adCard';

const ads = [
  {
    id: '1',
    title: 'Apprenez React Native',
    description: 'Créez des applications mobiles natives en JavaScript',
    imageUrl: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg',
  },
  {
    id: '2',
    title: 'Maîtrisez JavaScript',
    description: "Du débutant à l'expert en JavaScript moderne",
    imageUrl: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg',
  },
  {
    id: '3',
    title: 'Design UX/UI',
    description: 'Créez des interfaces utilisateur exceptionnelles',
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
  },
];

export default function Carousel() {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowDimensions();

  // Responsive card width based on screen size
  const getCardsPerView = () => {
    if (width > 1024) return 3; // Desktop
    if (width > 768) return 2;  // Tablet
    return 1;                   // Mobile
  };

  const cardsPerView = getCardsPerView();
  const cardWidth = width * 0.9 / cardsPerView; // 90% of screen divided

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % ads.length;
      scrollRef.current?.scrollTo({ x: nextIndex * (cardWidth + 10), animated: true });
      setCurrentIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, cardWidth]);

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled={false}
      showsHorizontalScrollIndicator={false}
    //   contentContainerStyle={styles.scrollContainer}
    >
      {ads.map((ad) => (
        <View key={ad.id} style={[styles.cardContainer, { width: cardWidth }]}>
          <AdCard
            title={ad.title}
            description={ad.description}
            imageUrl={ad.imageUrl}
            onPress={() => {}}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
  cardContainer: {
    marginRight: 10,
  },
});
