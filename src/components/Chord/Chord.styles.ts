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
    accordHorizontalContainer: {
      width: '140@s',
      height: '70@s',
      margin: '4@s',
    },
    accordVerticalContainer: {
      width: '75@s',
      height: '150@s',
      margin: '4@s',
    },
  });
  return styles;
};
export default createStyles;
