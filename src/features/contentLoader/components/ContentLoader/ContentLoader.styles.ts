import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      padding: '2@s',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: theme.colors.primary,
      fontSize: '10@ms',
      paddingHorizontal: '2@ms',
    },
    errorText: {
      paddingLeft: '4@s',
      fontSize: '9@ms',
      color: theme.colors.errorText,
    },
  });
  return styles;
};
export default createStyles;
