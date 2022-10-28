import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming/interfaces';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
    },
    menuColumnsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    menuColumn: {
      flexDirection: 'column',
      justifyContent: 'space-around',
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
