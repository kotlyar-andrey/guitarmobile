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
      elevation: 4,
    },
    hidden: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      paddingVertical: '5@s',
      paddingHorizontal: '2@s',
    },
  });
  return styles;
};
export default createStyles;
