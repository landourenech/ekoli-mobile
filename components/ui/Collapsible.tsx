import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { ThemedText } from './ThemedText';
import { useTheme } from '@/hooks/useTheme';

// Enable layout animation for Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

interface CollapsibleProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function Collapsible({ title, subtitle, children }: CollapsibleProps) {
  const [expanded, setExpanded] = useState(false);
  const { colors } = useTheme();

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.container, { borderColor: colors.neutral[200] }]}>
      <TouchableOpacity 
        style={styles.header} 
        onPress={toggleExpand}
        activeOpacity={0.7}
      >
        <View style={styles.titleContainer}>
          <ThemedText style={styles.title}>{title}</ThemedText>
          {subtitle && <ThemedText style={styles.subtitle}>{subtitle}</ThemedText>}
        </View>
        {expanded ? 
          <ChevronUp size={20} color={colors.primary[600]} /> : 
          <ChevronDown size={20} color={colors.text} />
        }
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    opacity: 0.7,
    marginTop: 4,
  },
  content: {
    padding: 16,
    paddingTop: 0,
  },
});