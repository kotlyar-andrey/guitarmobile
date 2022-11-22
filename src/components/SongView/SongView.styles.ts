import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    title: {
      textAlign: 'center',
      color: theme.colors.text,
      fontWeight: 'bold',
      padding: '4@s',
      fontSize: '12@s',
    },
    chordsContainer: {
      flex: 2,
      padding: '4@s',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    accordHorizontalContainer: {
      width: '140@s',
      height: '70@s',
    },
    accordVerticalContainer: {
      width: '75@s',
      height: '150@s',
    },
  });
  return styles;
};
export default createStyles;
