import React, {useMemo, useState, PropsWithChildren} from 'react';
import {Appearance} from 'react-native';
import {
  ColorScheme,
  E_ColorScheme,
  E_ThemeType,
  ThemeContextValue,
} from './interfaces';
import colorSchemes from './themes';

/** Контекстный процессор, который передает:
 * - саму тему, т.е. набор цветов
 * - выбранную цветовую схему
 * - выбранный тип темы (светлая, темная или системная)
 * - две функции для изменения цветовой схемы и типа цветовой схемы.
 */
export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: colorSchemes.default.light,
  colorScheme: E_ColorScheme.default,
  themeType: E_ThemeType.system,
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
  const [colorScheme, setColorScheme] = useState(E_ColorScheme.default);
  const [themeType, setThemeType] = useState(E_ThemeType.system);

  const changeColorScheme = (newColorShceme: E_ColorScheme): void => {
    setColorScheme(newColorShceme);
  };

  const changeThemeType = (newThemeType: E_ThemeType): void => {
    setThemeType(newThemeType);
  };

  const _getColorScheme = (scheme: E_ColorScheme): ColorScheme => {
    switch (scheme) {
      case E_ColorScheme.default:
        return colorSchemes.default;
      case E_ColorScheme.red:
        return colorSchemes.red;
      default:
        return colorSchemes.default;
    }
  };

  const _getThemeType = (type: E_ThemeType): 'light' | 'dark' => {
    if (type === E_ThemeType.dark || type === E_ThemeType.light) {
      return type;
    } else {
      const nativeThemeType = Appearance.getColorScheme();
      return nativeThemeType ? nativeThemeType : 'light';
    }
  };

  const theme = useMemo(() => {
    const currentColorScheme: ColorScheme = _getColorScheme(colorScheme);
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
