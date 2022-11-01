import {ColorScheme, Theme} from '../interfaces';

const DefaultLightTheme: Theme = {
  dark: false,
  colors: {
    background: '#f9f9f9',
    text: '#2d2d2d',
    primary: '#69306d',
    onPrimary: '#f9f9f9',
    errorText: '#f90000',
    errorBackground: '#eda19a',
  },
  images: {
    backgroundHome: require('~/assets/images/homeLightBackground.jpg'),
  },
};

const DefaultDarkTheme: Theme = {
  dark: true,
  colors: {
    background: '#2d2d2d',
    text: '#f9f9f9',
    primary: '#f9acfa',
    onPrimary: '#f9f9f9',
    errorText: '#f90000',
    errorBackground: '#eda19a',
  },
  images: {
    backgroundHome: require('~/assets/images/homeDarkBackground.jpg'),
  },
};

const DefaultTheme: ColorScheme = {
  light: DefaultLightTheme,
  dark: DefaultDarkTheme,
};

export default DefaultTheme;
