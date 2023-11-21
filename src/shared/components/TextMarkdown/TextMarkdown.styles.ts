import {moderateScale} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme, size: number) => {
  const styles = {
    heading1: {
      fontSize: moderateScale(size),
      marginTop: 0,
      padding: moderateScale(2),
      backgroundColor: theme.dark ? '#bD4242' : '#F2D7EE',
    },
    heading2: {
      fontSize: moderateScale(size),
      marginTop: 0,
      padding: moderateScale(2),
      backgroundColor: theme.dark ? '#ED4242' : '#F2D7EE',
    },
    heading3: {
      fontSize: moderateScale(size),
      marginTop: 0,
      padding: moderateScale(2),
      backgroundColor: theme.dark ? '#ED4242' : '#F2D7EE',
    },
    heading4: {
      fontSize: moderateScale(size),
      marginTop: 0,
      padding: moderateScale(2),
      backgroundColor: theme.dark ? '#bD4242' : '#F2D7EE',
    },
    heading6: {
      padding: moderateScale(2),
      fontSize: moderateScale(size + 2),
      fontWeight: 'bold',
      backgroundColor: theme.dark ? '#202025' : '#D5E0FF',
    },
    strong: {
      fontWeight: 'bold',
      padding: moderateScale(2),
    },
    text: {
      color: theme.colors.text,
      fontSize: moderateScale(size),
    },
    paragraph: {
      marginTop: moderateScale(2),
      marginBottom: moderateScale(2),
      paddingVertical: moderateScale(2),
      paddingHorizontal: moderateScale(4),
    },
  };
  return styles;
};
export default createStyles;
