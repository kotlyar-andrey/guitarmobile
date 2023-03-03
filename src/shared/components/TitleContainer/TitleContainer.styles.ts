import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      marginVertical: '4@s',
    },
    titleText: {
      fontSize: '24@ms',
      color: theme.colors.primary,
      borderBottomColor: theme.colors.primary,
      borderBottomWidth: 2,
    },
  });
  return styles;
};
export default createStyles;
