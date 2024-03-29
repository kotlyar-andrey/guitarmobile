import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme, flat = false) => {
  const styles = ScaledSheet.create({
    defaultButton: {
      backgroundColor: theme.colors.background,
      marginHorizontal: '2@s',
      padding: '2@s',
      elevation: flat ? 0 : 2,
    },
    pressedButton: {
      backgroundColor: theme.colors.divider,
      marginHorizontal: '2@s',
      padding: '2@s',
      elevation: 0,
    },
  });
  return styles;
};
export default createStyles;
