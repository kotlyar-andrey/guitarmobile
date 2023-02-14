import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    defaultButton: {
      backgroundColor: theme.colors.background,
      marginHorizontal: '2@s',
      padding: '1@s',
      borderWidth: 1,
      borderColor: theme.colors.primary,
      elevation: 2,
    },
    pressedButton: {
      backgroundColor: theme.colors.divider,
      marginHorizontal: '2@s',
      padding: '1@s',
      borderWidth: 1,
      borderColor: theme.colors.secondary,
      elevation: 0,
    },
  });
  return styles;
};
export default createStyles;
