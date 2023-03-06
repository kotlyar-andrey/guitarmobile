import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    notFoundError: {
      fontSize: '14@s',
      color: theme.colors.text,
      textAlign: 'center',
    },
    topBarRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: theme.colors.primary,

      borderBottomWidth: 1,
    },
    topBarItem: {
      flex: 1,
      fontSize: '14@ms',
      textAlign: 'center',
      padding: '4@ms',
      color: theme.colors.primary,
      backgroundColor: theme.colors.background,
    },
    topBarItemActive: {
      flex: 1,
      fontSize: '14@ms',
      textAlign: 'center',
      padding: '4@ms',
      color: theme.colors.onPrimary,
      backgroundColor: theme.colors.primary,
    },
    divider: {marginVertical: '8@ms'},
  });
  return styles;
};
export default createStyles;
