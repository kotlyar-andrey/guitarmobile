import {ColorSchemes} from '../model/enums';
import {ColorScheme} from '../model/interfaces';
import {DefaultTheme} from './default';
import {RedTheme} from './red';

export const colorSchemes: {[key in ColorSchemes]: ColorScheme} = {
  [ColorSchemes.default]: DefaultTheme,
  [ColorSchemes.red]: RedTheme,
};
