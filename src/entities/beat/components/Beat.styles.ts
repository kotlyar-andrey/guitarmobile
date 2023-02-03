import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    beat: {
      width: '200@ms',
      height: '100@ms',
      borderColor: theme.colors.primary,
      borderWidth: 1,
      margin: '4@s',
    },
  });
  return styles;
};
export default createStyles;
