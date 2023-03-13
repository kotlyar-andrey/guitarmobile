import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      minWidth: '150@ms',
    },
    picker: {
      color: theme.colors.primary,
      backgroundColor: theme.colors.background,
    },
    pickerItem: {
      fontSize: '14@ms',
      backgroundColor: theme.colors.background,
    },
  });
  return styles;
};
export default createStyles;
