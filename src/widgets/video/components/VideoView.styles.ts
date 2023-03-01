import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    row: {
      flexDirection: 'row',
    },
    flex4: {
      flex: 4,
    },
    flex1: {
      flex: 1,
    },
    hintText: {
      paddingHorizontal: '6@ms',
      color: theme.colors.secondary,
      fontSize: '8@ms',
    },
  });
  return styles;
};
export default createStyles;
