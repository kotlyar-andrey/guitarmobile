import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      padding: '2@s',
    },
    text: {
      textAlign: 'center',
      color: theme.colors.onPrimary,
      fontSize: '8@ms',
    },
  });
  return styles;
};
export default createStyles;
