import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
    errorContainer: {
      backgroundColor: theme.colors.errorBackground,
      margin: '4@s',
      borderRadius: '8@s',
      padding: '4@s',
    },
    text: {
      color: theme.colors.errorText,
      fontSize: '18@ms',
      paddingHorizontal: '2@ms',
      textAlign: 'center',
      marginTop: '4@s',
    },
  });
  return styles;
};
export default createStyles;
