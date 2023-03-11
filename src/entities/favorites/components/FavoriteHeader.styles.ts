import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderBottomColor: theme.colors.divider,
      borderBottomWidth: 1,
      marginBottom: '2@s',
    },
    title: {
      fontSize: '12@s',
      backgroundColor: theme.colors.background,
      color: theme.colors.primary,
      textAlign: 'center',
      padding: '4@ms',
      elevation: 4,
    },
  });
  return styles;
};
export default createStyles;
