import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    progressText: {
      fontSize: '18@ms',
      backgroundColor: theme.colors.primary,
      color: theme.colors.onPrimary,
      textAlign: 'center',
      paddingVertical: '6@ms',
      paddingHorizontal: '10@s',
      margin: '4@s',
      borderRadius: '4@s',
      elevation: 4,
    },
  });
  return styles;
};
export default createStyles;
