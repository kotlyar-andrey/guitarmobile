import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    text: {
      color: theme.colors.primary,
      fontSize: '14@s',
      margin: '2@s',
      textAlign: 'center',
      fontFamily: 'SpriteGraffiti',
    },
  });
  return styles;
};
export default createStyles;
