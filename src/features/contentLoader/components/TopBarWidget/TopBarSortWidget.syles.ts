import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      backgroundColor: theme.colors.onPrimary,
      minWidth: '150@ms',
    },
  });
  return styles;
};
export default createStyles;
