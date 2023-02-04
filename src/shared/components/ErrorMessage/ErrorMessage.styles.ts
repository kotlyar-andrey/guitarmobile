import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      minWidth: '200@ms',
    },
    text: {
      color: theme.colors.errorText,
      fontSize: '24@ms',
      paddingHorizontal: '2@ms',
      textAlign: 'center',
      marginTop: '24@s',
    },
  });
  return styles;
};
export default createStyles;
