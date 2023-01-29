import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '~/entities/theming';
import {StatusBar} from '~/shared/components/StatusBar';
import {MainNavigator} from './navigation';

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar hidden={true} />
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
