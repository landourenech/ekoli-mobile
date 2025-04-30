import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

interface AdCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onPress?: () => void;
}

export function AdCard({ title, description, imageUrl, onPress }: AdCardProps) {
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.container}
        imageStyle={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: Colors[colorScheme].tint }]}
            onPress={onPress}
          >
            <Text style={styles.buttonText}>En savoir plus</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});