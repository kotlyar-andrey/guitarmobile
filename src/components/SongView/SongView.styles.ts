import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    title: {
      textAlign: 'center',
      color: theme.colors.text,
      fontWeight: 'bold',
      padding: '4@s',
      fontSize: '12@s',
    },
  });
  return styles;
};
export default createStyles;
