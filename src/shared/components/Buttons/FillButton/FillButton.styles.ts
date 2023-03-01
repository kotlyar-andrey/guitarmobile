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
      paddingVertical: '5@ms',
      backgroundColor: theme.colors.primary,
      borderRadius: '4@s',
      elevation: 3,
    },
    buttonText: {
      color: theme.colors.onPrimary,
      fontSize: '18@ms',
      flexWrap: 'wrap',
      letterSpacing: 0.25,
      paddingHorizontal: '8@ms',
      textAlign: 'center',
    },
  });
  return styles;
};
export default createStyles;
