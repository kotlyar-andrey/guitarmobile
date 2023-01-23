import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
  });
  return styles;
};
export default createStyles;
