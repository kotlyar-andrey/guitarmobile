import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      borderTopWidth: 1,
      borderTopColor: theme.colors.divider,
      padding: '1@s',
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '32@vs',
      backgroundColor: theme.colors.background,
      paddingHorizontal: '8@s',
    },
    categoryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    text: {
      fontSize: '10@ms',
      color: theme.colors.text,
      marginHorizontal: '2@s',
    },
  });
  return styles;
};
export default createStyles;
