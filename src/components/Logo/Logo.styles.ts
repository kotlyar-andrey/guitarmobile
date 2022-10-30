import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      height: '100@vs',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoImage: {
      width: '64@ms',
      height: '64@ms',
      marginRight: '12@ms',
    },
    logoText: {
      fontFamily: 'Debby',
      fontSize: '42@s',
      flexWrap: 'wrap',
      color: theme.colors.primary,
    },
  });
  return styles;
};
export default createStyles;
