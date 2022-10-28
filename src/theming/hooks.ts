import {useContext} from 'react';
import {ThemeContext} from './context';
import {Theme} from './interfaces';

export const useTheme = (): Theme => {
  const {theme} = useContext(ThemeContext);
  return theme;
};
