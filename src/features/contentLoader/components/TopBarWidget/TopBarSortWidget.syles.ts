import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      minWidth: '150@ms',
    },
    picker: {
      color: theme.colors.onPrimary,
    },
    pickerItem: {
      fontSize: '14@ms',
    },
  });
  return styles;
};
export default createStyles;
