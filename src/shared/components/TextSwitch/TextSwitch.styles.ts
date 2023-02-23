import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.background,
      paddingRight: '4@s',
    },
    text: {
      fontSize: '10@ms',
      color: theme.colors.text,
    },
  });
  return styles;
};
export default createStyles;
