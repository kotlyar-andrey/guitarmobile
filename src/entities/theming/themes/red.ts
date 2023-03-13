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
    beat: '#0000ff',
    plunk: '#000077',
    isFavoriteColor: '#ff0000',
    isCompliteColor: '#00bb00',
    isDownloadedColor: '#7777ff',
  },
  images: {
    backgroundHome: require('../assets/images/homeLightBackground.jpg'),
  },
};

const RedDarkTheme: Theme = {
  dark: true,
  colors: {
    background: '#2d2d2d',
    text: '#f9f9f9',
    primary: '#ED424D',
    onPrimary: '#f9f9f9',
    secondary: '#cccccc',
    errorText: '#f90000',
    errorBackground: '#eda19a',
    divider: '#000000',
    beat: '#ED424D',
    plunk: '#ED424D',
    isFavoriteColor: '#990000',
    isCompliteColor: '#007700',
    isDownloadedColor: '#7777ff',
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
