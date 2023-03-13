import {ColorScheme, Theme} from '../model/interfaces';

const ContrastLightTheme: Theme = {
  dark: false,
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#000000',
    onPrimary: '#ffffff',
    secondary: '#000000',
    errorText: '#ff0000',
    errorBackground: '#ffffff',
    divider: '#808080',
    beat: '#000000',
    plunk: '#000000',
    isFavoriteColor: '#000000',
    isCompliteColor: '#000000',
    isDownloadedColor: '#000000',
  },
  images: {
    backgroundHome: require('../assets/images/homeLightBackground.jpg'),
  },
};

const ContrastDarkTheme: Theme = {
  dark: true,
  colors: {
    background: '#000000',
    text: '#ffffff',
    primary: '#ffffff',
    onPrimary: '#000000',
    secondary: '#ffffff',
    errorText: '#ff0000',
    errorBackground: '#000000',
    divider: '#808080',
    beat: '#ffffff',
    plunk: '#ffffff',
    isFavoriteColor: '#ffffff',
    isCompliteColor: '#ffffff',
    isDownloadedColor: '#ffffff',
  },
  images: {
    backgroundHome: require('../assets/images/homeDarkBackground.jpg'),
  },
};

export const ContrastTheme: ColorScheme = {
  title: 'Контрастная',
  light: ContrastLightTheme,
  dark: ContrastDarkTheme,
};
