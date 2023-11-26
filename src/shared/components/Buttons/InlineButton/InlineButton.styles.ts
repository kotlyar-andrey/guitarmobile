import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme, size = 3) => {
  let margin, fontS;
  switch (size) {
    case 1:
      margin = 2;
      fontS = 24;
      break;
    case 2:
      margin = 4;
      fontS = 32;
      break;
    case 4:
      margin = 8;
      fontS = 42;
      break;
    case 5:
      margin = 10;
      fontS = 48;
      break;
    default:
      margin = 6;
      fontS = 36;
  }
  const styles = ScaledSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: moderateScale(margin),
    },
    buttonText: {
      color: theme.colors.primary,
      fontFamily: 'SpriteGraffiti',
      fontSize: moderateScale(fontS),
      flexWrap: 'wrap',
    },
  });
  return styles;
};
export default createStyles;
