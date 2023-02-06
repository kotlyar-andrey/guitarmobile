import {useThemeState} from './state';
import {Theme} from '~/entities/theming';

export const useTheme = (): Theme => {
  const themeState = useThemeState();
  const theme = themeState.getCurrentTheme();
  return theme;
};
