/**
 * Определение набора цветов для темной или светлой темы
 */
interface Colors {
  background: string; // цвет фона для большинства компонентов
  text: string; // цвет текста для большинства компонентов
  primary: string; // цвет, например, для элементов управления
  errorText: string; // текст ошибки
  errorBackground: string; // фон блока с ошибкой
}

/**
 * Набор изображений (фоновое изображение, иконки и т.п), специфических для данной темы
 */
interface Images {
  backgroundHome: string;
}

/**
 * Непосредственно набор цветов, изображений и других элементов для темы
 */
export interface Theme {
  colors: Colors;
  images: Images;
}

/**
 * Цветовая схема; имеет светлую и темную тему
 */
export interface ColorScheme {
  light: Theme;
  dark: Theme;
}

/**
 * Перечисление для доступных пользователю цветовых схем
 */
export enum E_ColorScheme {
  default = 'default',
  red = 'red',
}

/**
 * Перечисление для типов темы
 */
export enum E_ThemeType {
  light = 'light',
  dark = 'dark',
  system = 'system',
}

/**
 * Интерфейст контекстного процессора
 */
export interface ThemeContextValue {
  theme: Theme;
  colorScheme: E_ColorScheme;
  themeType: E_ThemeType;
  changeColorScheme: (newColorScheme: E_ColorScheme) => void;
  changeThemeType: (newThemeType: E_ThemeType) => void;
}
