import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appearance} from 'react-native';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {
  colorSchemes,
  ColorSchemes,
  Theme,
  ThemeTypes,
} from '~/entities/theming';

interface ThemeState {
  colorScheme: ColorSchemes;
  themeType: ThemeTypes;
  changeColorScheme: (newColorScheme: ColorSchemes) => void;
  changeThemeType: (newThemeType: ThemeTypes) => void;
  getCurrentTheme: () => Theme;
}

export const useThemeState = create<ThemeState>()(
  immer(
    persist(
      (set, get) => ({
        colorScheme: ColorSchemes.default,
        themeType: ThemeTypes.system,
        changeColorScheme: (newColorScheme: ColorSchemes) => {
          set({colorScheme: newColorScheme});
        },
        changeThemeType: (newThemeType: ThemeTypes) => {
          set({themeType: newThemeType});
        },
        getCurrentTheme: () => {
          const scheme = get().colorScheme;
          const type = get().themeType;
          const currentColorScheme = colorSchemes[scheme];
          const nativeThemeType = Appearance.getColorScheme();
          const currentThemeType: 'light' | 'dark' =
            type === ThemeTypes.dark || type === ThemeTypes.light
              ? type
              : nativeThemeType
              ? nativeThemeType
              : ThemeTypes.light;
          return currentColorScheme[currentThemeType];
        },
      }),
      {
        name: 'theming',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
