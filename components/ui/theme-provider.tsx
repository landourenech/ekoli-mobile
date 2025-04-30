import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { colors } from '@/constants/theme';

type ThemeType = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colors: typeof colors.light;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>('system');

  // Determine the actual theme based on system preference if set to 'system'
  const actualTheme = theme === 'system' 
    ? (colorScheme || 'light') as 'light' | 'dark'
    : theme;

  // Get the color palette based on the actual theme
  const themeColors = colors[actualTheme];

  const value = {
    theme,
    setTheme,
    colors: themeColors,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}