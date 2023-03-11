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
    dropdown: {
      backgroundColor: theme.colors.background,
      minWidth: '110@ms',
    },
    dropdownItem: {
      backgroundColor: theme.colors.background,
      fontSize: '10@ms',
    },
  });
  return styles;
};
export default createStyles;
