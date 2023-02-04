import {Linking} from 'react-native';

export const goToUrl = (url: string) => () => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    }
  });
};
