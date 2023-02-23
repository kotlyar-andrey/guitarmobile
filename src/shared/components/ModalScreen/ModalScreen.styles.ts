import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      backgroundColor: theme.colors.background,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      padding: '6@ms',
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary,
    },
    titleText: {
      color: theme.colors.primary,
      fontSize: '12@s',
      textAlign: 'center',
    },
  });
  return styles;
};
export default createStyles;
