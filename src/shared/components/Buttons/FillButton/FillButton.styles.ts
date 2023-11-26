import {ScaledSheet, moderateScale, scale} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme, size = 3) => {
  let paddingV, paddingH, fontS;
  switch (size) {
    case 1:
      paddingV = 4;
      paddingH = 4;
      fontS = 14;
      break;
    case 3:
      paddingV = 8;
      paddingH = 6;
      fontS = 20;
      break;
    case 5:
      paddingV = 10;
      paddingH = 8;
      fontS = 28;
      break;
    default:
      paddingV = 8;
      paddingH = 6;
      fontS = 20;
      break;
  }
  const styles = ScaledSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: scale(4),
      paddingHorizontal: moderateScale(paddingH),
      paddingVertical: moderateScale(paddingV),
      backgroundColor: theme.colors.primary,
      elevation: 4,
    },
    buttonText: {
      color: theme.colors.onPrimary,
      fontSize: moderateScale(fontS),
      flexWrap: 'wrap',
      letterSpacing: 0.25,
      paddingHorizontal: moderateScale(paddingH),
      textAlign: 'center',
    },
  });
  return styles;
};
export default createStyles;
