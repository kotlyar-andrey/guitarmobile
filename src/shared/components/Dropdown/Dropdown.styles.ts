import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      minWidth: '200@ms',
    },
    text: {
      fontSize: '14@ms',
      paddingLeft: '6@s',
      color: theme.colors.text,
    },
  });
  return styles;
};
export default createStyles;
