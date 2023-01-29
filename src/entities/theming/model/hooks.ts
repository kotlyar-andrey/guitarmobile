import {useContext} from 'react';
import {Theme} from './interfaces';
import {ThemeContext} from './provider';

export const useTheme = (): Theme => {
  const {theme} = useContext(ThemeContext);
  return theme;
};
