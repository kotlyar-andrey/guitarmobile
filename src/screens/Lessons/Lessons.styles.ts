import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    itemListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.background,
      padding: '4@s',
      borderBottomColor: theme.colors.divider,
      borderBottomWidth: 1,
      marginBottom: '2@s',
    },
    textContainer: {
      flexShrink: 1,
    },
    iconsContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    lessonTitle: {
      fontSize: '12@s',
      color: theme.colors.text,
    },
    lessonSounds: {
      fontSize: '10@s',
      color: theme.colors.secondary,
    },
  });
  return styles;
};
export default createStyles;
