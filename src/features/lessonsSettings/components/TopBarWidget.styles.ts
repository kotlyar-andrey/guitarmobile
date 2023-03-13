import {ScaledSheet} from 'react-native-size-matters';

const createStyles = () => {
  const styles = ScaledSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    icon: {
      marginHorizontal: '4@ms',
    },
  });
  return styles;
};
export default createStyles;
