import {StatusBarStyle} from 'react-native';
import {Theme} from '~/theming/interfaces';

interface Props {
  backgroundColor: string;
  barStyle?: StatusBarStyle;
}

const createStyles = (theme: Theme) => {
  const styles: Props = {
    backgroundColor: theme.colors.background,
    barStyle: theme.dark ? 'light-content' : 'dark-content',
  };
  return styles;
};
export default createStyles;
