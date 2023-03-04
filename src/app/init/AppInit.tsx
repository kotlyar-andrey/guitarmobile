import React from 'react';
import {View} from 'react-native';
import {useContentState} from '~/features/contentLoader';

export const AppInit: React.FC = () => {
  const contentUpdater = useContentState(state => state.checkUpdate);

  React.useEffect(() => {
    contentUpdater();
  });

  return <View />;
};
