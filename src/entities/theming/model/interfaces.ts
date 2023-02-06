import {ImageSourcePropType} from 'react-native';

/**
 * Определение набора цветов для темной или светлой темы
 */
interface Colors {
  background: string; // цвет фона для большинства компонентов
  text: string; // цвет текста для большинства компонентов
  primary: string; // цвет, например, для элементов управления
  onPrimary: string; // цвет текста, который находится на primary
  secondary: string; // цвет для второстепенных или неактивных элементов
  errorText: string; // текст ошибки
  errorBackground: string; // фон блока с ошибкой
  divider: string; // Разделитель в списках
}

/**
 * Набор изображений (фоновое изображение, необычные иконки и т.п),
 * специфических для данной темы
 */
interface Images {
  backgroundHome: ImageSourcePropType;
}

/**
 * Непосредственно набор цветов, изображений и других элементов для темы
 */
export interface Theme {
  dark: boolean;
  colors: Colors;
  images: Images;
}

/**
 * Цветовая схема; имеет светлую и темную тему
 */
export interface ColorScheme {
  title: string;
  light: Theme;
  dark: Theme;
}
