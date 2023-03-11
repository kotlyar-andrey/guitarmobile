import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
  return styles;
};
export default createStyles;
