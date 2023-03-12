import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (
  theme: Theme,
  size: 'small' | 'medium' | 'large' = 'medium',
) => {
  let paddingV, paddingH, fontS;
  switch (size) {
    case 'small':
      paddingV = '4@ms';
      paddingH = '4@ms';
      fontS = '14@ms';
      break;
    case 'medium':
      paddingV = '8@ms';
      paddingH = '6@ms';
      fontS = '20@ms';
      break;
    case 'large':
      paddingV = '10@ms';
      paddingH = '8@ms';
      fontS = '28@ms';
      break;
    default:
      break;
  }
  const styles = ScaledSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '4@s',
      paddingHorizontal: paddingH,
      paddingVertical: paddingV,
      backgroundColor: theme.colors.primary,
      elevation: 4,
    },
    buttonText: {
      color: theme.colors.onPrimary,
      fontSize: fontS,
      flexWrap: 'wrap',
      letterSpacing: 0.25,
      paddingHorizontal: paddingH,
      textAlign: 'center',
    },
  });
  return styles;
};
export default createStyles;
