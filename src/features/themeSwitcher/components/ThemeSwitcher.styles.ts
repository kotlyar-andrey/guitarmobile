import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flexDirection: 'column',
    },
    item: {
      flex: 1,
    },
    text: {
      fontSize: '14@ms',
      color: theme.colors.text,
    },
  });
  return styles;
};
export default createStyles;
