import {scale} from 'react-native-size-matters';
import {Theme} from '~/theming';

const createStyles = (theme: Theme, size: number) => {
  const styles = {
    heading1: {
      fontSize: scale(size),
      marginTop: 0,
      padding: scale(2),
      backgroundColor: theme.dark ? '#ED424D' : '#F2D7EE',
    },
    heading2: {
      fontSize: scale(size),
      marginTop: 0,
      padding: scale(2),
      backgroundColor: theme.dark ? '#ED424D' : '#F2D7EE',
    },
    heading3: {
      fontSize: scale(size),
      marginTop: 0,
      padding: scale(2),
      backgroundColor: theme.dark ? '#ED424D' : '#F2D7EE',
    },
    heading6: {
      padding: scale(2),
      fontSize: scale(size + 2),
      fontWeight: 'bold',
      backgroundColor: '#D5E0FF',
    },
    strong: {
      fontWeight: 'bold' as 'bold',
      padding: scale(2),
    },
    text: {
      color: theme.colors.text,
      fontSize: scale(size),
    },
    paragraph: {
      marginTop: scale(2),
      marginBottom: scale(2),
      padding: scale(2),
    },
  };
  return styles;
};
export default createStyles;
