import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      borderTopWidth: 1,
      borderTopColor: theme.colors.divider,
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '32@vs',
      backgroundColor: theme.colors.background,
      paddingVertical: '1@s',
      paddingHorizontal: '2@s',
      marginBottom: 0,
      elevation: 4,
    },
    containerHide: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: -100,
    },
    hidden: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      paddingVertical: '4@s',
      paddingHorizontal: '2@s',
    },
  });
  return styles;
};
export default createStyles;
