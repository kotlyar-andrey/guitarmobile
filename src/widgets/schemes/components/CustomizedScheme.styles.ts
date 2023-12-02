import {ScaledSheet} from 'react-native-size-matters';

const createStyles = () => {
  const styles = ScaledSheet.create({
    schemeContainer: {
      borderWidth: 1,
      borderColor: '#e0e0e0',
      borderRadius: 5,
      margin: '2@ms',
      padding: '2@ms',
      backgroundColor: '#ffffff',
      alignItems: 'center',
    },
    inscriptionText: {
      color: '#000099',
      fontWeight: 'bold',
      fontSize: '9@ms',
      textAlign: 'center',
      marginBottom: '2@ms',
    },
  });
  return styles;
};
export default createStyles;
