import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: theme.colors.background,
    },
    bpmText: {
      fontSize: '12@ms',
      color: theme.colors.primary,
      marginHorizontal: '4@ms',
    },
  });
  return styles;
};
export default createStyles;
