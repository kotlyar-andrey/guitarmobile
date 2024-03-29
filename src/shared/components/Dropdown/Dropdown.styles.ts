import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
    },
    leftColumn: {
      flex: 1,
    },
    rightColumn: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    dropdown: {
      backgroundColor: theme.colors.background,
      minWidth: '120@ms',
    },
    dropdownItem: {
      backgroundColor: theme.colors.background,
      fontSize: '12@ms',
    },
  });
  return styles;
};
export default createStyles;
