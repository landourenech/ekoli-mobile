import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export function ThemedText({ style, ...props }: TextProps) {
  const { colors } = useTheme();

  return (
    <Text 
      style={[
        { color: colors.text },
        styles.text,
        style,
      ]} 
      {...props} 
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Regular',
  },
});