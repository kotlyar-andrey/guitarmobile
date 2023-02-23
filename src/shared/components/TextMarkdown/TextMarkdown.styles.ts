import {moderateScale} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';

const createStyles = (theme: Theme, size: number) => {
  const styles = {
    heading1: {
      fontSize: moderateScale(size),
      marginTop: 0,
      padding: moderateScale(2),
      backgroundColor: theme.dark ? '#ED424D' : '#F2D7EE',
    },
    heading2: {
      fontSize: moderateScale(size),
      marginTop: 0,
      padding: moderateScale(2),
      backgroundColor: theme.dark ? '#ED424D' : '#F2D7EE',
    },
    heading3: {
      fontSize: moderateScale(size),
      marginTop: 0,
      padding: moderateScale(2),
      backgroundColor: theme.dark ? '#ED424D' : '#F2D7EE',
    },
    heading6: {
      padding: moderateScale(2),
      fontSize: moderateScale(size + 2),
      fontWeight: 'bold',
      backgroundColor: '#D5E0FF',
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
      padding: moderateScale(2),
    },
  };
  return styles;
};
export default createStyles;
