import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    button: {
      margin: '2@s',
      padding: '1@s',
      borderWidth: 1,
      borderRadius: '2@s',
    },
    active: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primary,
    },
    inactive: {
      borderColor: theme.colors.inactive,
      backgroundColor: theme.colors.background,
    },
  });
  return styles;
};
export default createStyles;
