import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
    },
    column: {
      flex: 1,
    },
    title: {
      flex: 1,
      fontSize: '14@ms',
      color: theme.colors.text,
    },
    starsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
  return styles;
};
export default createStyles;
