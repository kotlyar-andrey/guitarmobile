import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '4@s',
    },
    buttonText: {
      color: theme.colors.primary,
      fontFamily: 'SpriteGraffiti',
      fontSize: '28@s',
      flexWrap: 'wrap',
    },
  });
  return styles;
};
export default createStyles;
