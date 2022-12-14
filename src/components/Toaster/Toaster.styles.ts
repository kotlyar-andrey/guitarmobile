import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    contentContainerStyle: {
      backgroundColor: theme.colors.background,
    },
    text1Style: {
      fontSize: '12@ms',
      color: theme.colors.text,
    },
    text2Style: {
      fontSize: '9@ms',
    },
  });
  return styles;
};
export default createStyles;
