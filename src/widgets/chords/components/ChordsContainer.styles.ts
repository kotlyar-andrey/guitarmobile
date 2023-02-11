import {ScaledSheet} from 'react-native-size-matters';

const createStyles = () => {
  const styles = ScaledSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: '2@s',
    },
  });
  return styles;
};
export default createStyles;
