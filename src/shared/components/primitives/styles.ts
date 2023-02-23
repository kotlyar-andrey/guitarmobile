import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    text: {
      fontSize: '14@ms',
      padding: '6@s',
      color: theme.colors.text,
    },
  });
  return styles;
};
export default createStyles;
