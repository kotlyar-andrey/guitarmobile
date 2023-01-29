import React, {useMemo, useState, PropsWithChildren} from 'react';
import {Appearance} from 'react-native';
import {ColorSchemes, ThemeTypes} from './enums';
import {ColorScheme, Theme} from './interfaces';
import {colorSchemes} from '../themes';

/**
 * Интерфейст контекстного процессора
 */
interface ThemeContextValue {
  theme: Theme;
  colorScheme: ColorSchemes;
  themeType: ThemeTypes;
  changeColorScheme: (newColorScheme: ColorSchemes) => void;
  changeThemeType: (newThemeType: ThemeTypes) => void;
}

/** Контекстный процессор, который передает:
 * - саму тему, т.е. набор цветов
 * - выбранную цветовую схему
 * - выбранный тип темы (светлая, темная или системная)
 * - две функции для изменения цветовой схемы и типа цветовой схемы.
 */
export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: colorSchemes.default.light,
  colorScheme: ColorSchemes.default,
  themeType: ThemeTypes.system,
  changeColorScheme: () => {},
  changeThemeType: () => {},
});

/**
 * Функциональный компонент
 * Имеет состояние, в котором хранится информация о текущей теме, цветовой схеме, cветлом/темном/системном типе темы
 * и функции, которые позволяют это состояние изменять
 * Возвращает обертку из контекстного процессора темы
 */
export const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [colorScheme, setColorScheme] = useState(ColorSchemes.default);
  const [themeType, setThemeType] = useState(ThemeTypes.system);

  const changeColorScheme = (newColorShceme: ColorSchemes): void => {
    setColorScheme(newColorShceme);
  };

  const changeThemeType = (newThemeType: ThemeTypes): void => {
    setThemeType(newThemeType);
  };

  const _getColorScheme = (scheme: ColorSchemes): ColorScheme => {
    return colorSchemes[scheme];
  };

  const _getThemeType = (type: ThemeTypes): 'light' | 'dark' => {
    if (type === ThemeTypes.dark || type === ThemeTypes.light) {
      return type;
    } else {
      const nativeThemeType = Appearance.getColorScheme();
      return nativeThemeType ? nativeThemeType : 'light';
    }
  };

  const theme = useMemo(() => {
    const currentColorScheme = _getColorScheme(colorScheme);
    const currentThemeType = _getThemeType(themeType);
    return currentColorScheme[currentThemeType];
  }, [colorScheme, themeType]);

  const memoizedContextValue = useMemo(
    () => ({
      theme,
      colorScheme,
      themeType,
      changeColorScheme,
      changeThemeType,
    }),
    [theme, colorScheme, themeType],
  );

  return (
    <ThemeContext.Provider value={memoizedContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
