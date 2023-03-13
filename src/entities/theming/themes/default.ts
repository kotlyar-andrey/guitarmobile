import {ColorScheme, Theme} from '../model/interfaces';

const DefaultLightTheme: Theme = {
  dark: false,
  colors: {
    background: '#f9f9f9',
    text: '#2d2d2d',
    primary: '#69306d',
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

const DefaultDarkTheme: Theme = {
  dark: true,
  colors: {
    background: '#2d2d2d',
    text: '#e9e9e9',
    primary: '#896c8a',
    onPrimary: '#e9e9e9',
    secondary: '#aaaaaa',
    errorText: '#f90000',
    errorBackground: '#eda19a',
    divider: '#000000',
    beat: '#7777ff',
    plunk: '#7777ff',
    isFavoriteColor: '#990000',
    isCompliteColor: '#007700',
    isDownloadedColor: '#7777ff',
  },
  images: {
    backgroundHome: require('../assets/images/homeDarkBackground.jpg'),
  },
};

export const DefaultTheme: ColorScheme = {
  title: 'По-умолчанию',
  light: DefaultLightTheme,
  dark: DefaultDarkTheme,
};
