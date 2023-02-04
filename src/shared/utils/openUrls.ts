import {Linking} from 'react-native';

export const goToUrl = (url: string) => () => {
  console.log('URL: ', url);
  Linking.canOpenURL(url).then(supported => {
    console.log('sup:', supported);
    if (supported) {
      Linking.openURL(url);
    }
  });
};
