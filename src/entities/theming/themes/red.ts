import {ColorScheme, Theme} from '../model/interfaces';

const RedLightTheme: Theme = {
  dark: false,
  colors: {
    background: '#f9f9f9',
    text: '#2d2d2d',
    primary: '#ff306d',
    onPrimary: '#f9f9f9',
    secondary: '#999999',
    errorText: '#a94442',
    errorBackground: '#fdc1ba',
    divider: '#eeeeee',
  },
  images: {
    backgroundHome: require('../assets/images/homeLightBackground.jpg'),
  },
};

const RedDarkTheme: Theme = {
  dark: true,
  colors: {
    background: '#fd2d2d',
    text: '#f9f9f9',
    primary: '#f9acfa',
    onPrimary: '#f9f9f9',
    secondary: '#cccccc',
    errorText: '#f90000',
    errorBackground: '#eda19a',
    divider: '#000000',
  },
  images: {
    backgroundHome: require('../assets/images/homeDarkBackground.jpg'),
  },
};

export const RedTheme: ColorScheme = {
  title: 'Красная',
  light: RedLightTheme,
  dark: RedDarkTheme,
};
