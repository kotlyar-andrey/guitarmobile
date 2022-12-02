import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '4@s',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.secondary,
    },
    toolbarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    toolbarItem: {
      marginRight: '4@s',
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      color: theme.colors.text,
      fontSize: '10@s',
      textDecorationColor: theme.colors.primary,
    },
  });
  return styles;
};
export default createStyles;
