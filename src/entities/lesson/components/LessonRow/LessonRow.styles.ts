import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme) => {
  const styles = ScaledSheet.create({
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
      justifyContent: 'center',
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
