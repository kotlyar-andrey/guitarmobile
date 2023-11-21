import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from '~/shared/components/StatusBar';
import {AppInit} from './init';
import {MainNavigator} from './navigation';

const App = () => {
  return (
    <>
      <StatusBar hidden={false} />
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
      <AppInit />
    </>
  );
};

export default App;
