import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import {useTheme} from '~/theming';
import createStyles from './DataLoader.styles';

const DataLoader = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [message, setMessage] = useState<string>('asds');

  useEffect(() => {
    Toast.show({
      type: 'info',
      text1: 'Загрузка данных',
      text2: message,
      position: 'bottom',
    });
  }, [message]);

  return (
    <>
      {message !== '' && (
        <View style={styles.container}>
          <Text style={styles.text}>{message}</Text>
        </View>
      )}
    </>
  );
};

export default DataLoader;
