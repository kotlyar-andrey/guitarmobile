import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      height: '40@vs',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '4@vs',
      backgroundColor: theme.colors.primary,
    },
    title: {
      fontFamily: 'SpriteGraffiti',
      fontSize: '16@s',
      flexWrap: 'wrap',
      color: theme.colors.onPrimary,
    },
  });
  return styles;
};
export default createStyles;
