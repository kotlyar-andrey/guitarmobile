import {ColorScheme, Theme} from '../model/interfaces';

const DefaultLightTheme: Theme = {
  dark: false,
  colors: {
    background: '#f9f9f9',
    text: '#2d2d2d',
    primary: '#69306d',
    onPrimary: '#f9f9f9',
    secondary: '#999999',
    errorText: '#f90000',
    errorBackground: '#eda19a',
    divider: '#eeeeee',
  },
  images: {
    backgroundHome: require('../assets/images/homeLightBackground.jpg'),
  },
};

const DefaultDarkTheme: Theme = {
  dark: true,
  colors: {
    background: '#2d2d2d',
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

export const DefaultTheme: ColorScheme = {
  light: DefaultLightTheme,
  dark: DefaultDarkTheme,
};
