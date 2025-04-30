import { useEffect, useState } from 'react';
import { useColorScheme as _useColorScheme } from 'react-native';
import { useAppTheme } from '@/context/theme.context';

export type ColorSchemeName = 'light' | 'dark';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This implementation corrects that.
export function useColorScheme(): NonNullable<ColorSchemeName> {
  const systemColorScheme = _useColorScheme() as ColorSchemeName;
  const { theme, isSystemTheme } = useAppTheme();
  
  // If using system theme, return the system color scheme
  // Otherwise return the user's selected theme
  return isSystemTheme ? systemColorScheme || 'light' : theme;
}