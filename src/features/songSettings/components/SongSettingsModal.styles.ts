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
      justifyContent: 'space-between',
      padding: '6@ms',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
    },
    text: {
      fontSize: '14@ms',
      color: theme.colors.text,
    },
  });
  return styles;
};
export default createStyles;
