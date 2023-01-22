import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      padding: '2@s',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      color: theme.colors.primary,
      fontSize: '10@ms',
    },
    errorText: {
      paddingLeft: '4@s',
      fontSize: '10@ms',
      color: theme.colors.errorText,
    },
    errorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  return styles;
};
export default createStyles;
