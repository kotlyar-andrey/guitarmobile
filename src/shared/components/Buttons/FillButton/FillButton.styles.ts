import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '4@s',
      paddingHorizontal: '10@s',
      paddingVertical: '2@s',
      backgroundColor: theme.colors.primary,
      borderRadius: '4@s',
      elevation: 3,
    },
    buttonText: {
      color: theme.colors.onPrimary,
      fontSize: '22@ms',
      flexWrap: 'wrap',
      letterSpacing: 0.25,
      lineHeight: '40@ms',
    },
  });
  return styles;
};
export default createStyles;
