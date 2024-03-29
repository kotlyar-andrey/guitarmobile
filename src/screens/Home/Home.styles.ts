import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    menuColumnsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    menuColumn: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    text: {
      color: theme.colors.primary,
      fontFamily: 'SpriteGraffiti',
      fontSize: '28@s',
    },
  });
  return styles;
};
export default createStyles;
