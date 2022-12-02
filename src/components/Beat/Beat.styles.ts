import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
    },
    beat: {
      width: '200@ms',
      height: '100@ms',
      borderColor: '#e0e0e0',
      borderWidth: 1,
      margin: '4@s',
    },
  });
  return styles;
};
export default createStyles;
