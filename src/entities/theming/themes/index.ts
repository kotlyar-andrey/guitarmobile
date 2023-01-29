import {ColorSchemes} from '../model/enums';
import {ColorScheme} from '../model/interfaces';
import {DefaultTheme} from './default';

export const colorSchemes: {[key in ColorSchemes]: ColorScheme} = {
  [ColorSchemes.default]: DefaultTheme,
};
