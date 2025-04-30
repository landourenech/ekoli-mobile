import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme as RNUseColorScheme } from 'react-native';
import { ColorSchemeName } from '@/hooks/useColorScheme';

type ThemeContextType = {
  theme: ColorSchemeName;
  isSystemTheme: boolean;
  setTheme: (theme: ColorSchemeName | 'system') => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  isSystemTheme: true,
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = RNUseColorScheme() as ColorSchemeName;
  const [theme, setThemeState] = useState<ColorSchemeName>(systemColorScheme || 'light');
  const [isSystemTheme, setIsSystemTheme] = useState(true);

  useEffect(() => {
    if (isSystemTheme && systemColorScheme) {
      setThemeState(systemColorScheme);
    }
  }, [systemColorScheme, isSystemTheme]);

  const setTheme = (newTheme: ColorSchemeName | 'system') => {
    if (newTheme === 'system') {
      setIsSystemTheme(true);
      setThemeState(systemColorScheme || 'light');
    } else {
      setIsSystemTheme(false);
      setThemeState(newTheme);
    }
  };

  const toggleTheme = () => {
    setIsSystemTheme(false);
    setThemeState(curr => (curr === 'light' ? 'dark' : 'light'));
  };

  const contextValue: ThemeContextType = {
    theme,
    isSystemTheme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useAppTheme = () => useContext(ThemeContext);