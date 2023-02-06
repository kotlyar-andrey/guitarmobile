import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    text: {
      fontSize: '14@ms',
      color: theme.colors.text,
    },
  });
  return styles;
};
export default createStyles;
