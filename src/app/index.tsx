import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from '~/shared/components/StatusBar';
import {MainNavigator} from './navigation';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </>
  );
};

export default App;
