import { 
    TouchableOpacity, 
    Text, 
    StyleSheet, 
    TouchableOpacityProps,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
  } from 'react-native';
  import { useTheme } from '@/hooks/useTheme';
  
  interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
  }
  
  export function Button({
    title,
    variant = 'primary',
    size = 'medium',
    isLoading = false,
    style,
    textStyle,
    ...props
  }: ButtonProps) {
    const { colors } = useTheme();
    
    // Determine button styles based on variant
    const getButtonStyle = () => {
      switch (variant) {
        case 'primary':
          return {
            backgroundColor: colors.primary[600],
            borderColor: colors.primary[600],
          };
        case 'secondary':
          return {
            backgroundColor: colors.accent[500],
            borderColor: colors.accent[500],
          };
        case 'outline':
          return {
            backgroundColor: 'transparent',
            borderColor: colors.primary[600],
          };
        default:
          return {
            backgroundColor: colors.primary[600],
            borderColor: colors.primary[600],
          };
      }
    };
  
    // Determine text color based on variant
    const getTextColor = () => {
      switch (variant) {
        case 'outline':
          return { color: colors.primary[600] };
        default:
          return { color: colors.white };
      }
    };
  
    // Determine button size
    const getButtonSize = () => {
      switch (size) {
        case 'small':
          return { 
            paddingVertical: 8, 
            paddingHorizontal: 16,
          };
        case 'large':
          return { 
            paddingVertical: 16, 
            paddingHorizontal: 24,
          };
        default:
          return { 
            paddingVertical: 12, 
            paddingHorizontal: 20,
          };
      }
    };
  
    // Determine text size
    const getTextSize = () => {
      switch (size) {
        case 'small':
          return { fontSize: 14 };
        case 'large':
          return { fontSize: 18 };
        default:
          return { fontSize: 16 };
      }
    };
  
    return (
      <TouchableOpacity
        style={[
          styles.button,
          getButtonStyle(),
          getButtonSize(),
          props.disabled && styles.disabled,
          style,
        ]}
        activeOpacity={0.7}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <ActivityIndicator 
            size="small" 
            color={variant === 'outline' ? colors.primary[600] : colors.white} 
          />
        ) : (
          <Text style={[
            styles.text,
            getTextColor(),
            getTextSize(),
            textStyle,
          ]}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    text: {
      fontFamily: 'Inter-Medium',
      textAlign: 'center',
    },
    disabled: {
      opacity: 0.5,
    },
  });