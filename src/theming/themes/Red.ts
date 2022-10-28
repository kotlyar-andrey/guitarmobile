import {ColorScheme, Theme} from '../interfaces';

const RedLightTheme: Theme = {
  colors: {
    background: '#f9f9f9',
    text: '#000000',
    primary: '#ed424d',
    errorText: '#f90000',
    errorBackground: '#eda19a',
  },
  images: {
    backgroundHome: require('~/assets/images/homeLightBackground.jpg'),
  },
};

const RedDarkTheme: Theme = {
  colors: {
    background: '#f9f9f9',
    text: '#000000',
    primary: '#ed424d',
    errorText: '#f90000',
    errorBackground: '#eda19a',
  },
  images: {
    backgroundHome: require('~/assets/images/homeDarkBackground.jpg'),
  },
};

const RedTheme: ColorScheme = {
  light: RedLightTheme,
  dark: RedDarkTheme,
};

export default RedTheme;
