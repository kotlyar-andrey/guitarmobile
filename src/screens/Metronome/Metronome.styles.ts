import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    buttonsContainer: {
      flexDirection: 'row',
      padding: '10@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bpmText: {
      fontSize: '24@ms',
      paddingHorizontal: '10@ms',
      color: theme.colors.text,
    },
  });
  return styles;
};
export default createStyles;
