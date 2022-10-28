import React from 'react';
import MainNavigator from './MainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '~/theming/context';
import StatusBar from '~/components/StatusBar/StatusBar';

/**
 * Основной компонент, который добавляет глобальные контексты вокруг главного навигатора
 * ThemeProvider - контекст с темой
 * SafeAreaProvider - безопасное использование пространства вокруг фронтальной камеры
 * @returns React Component
 */
const Main = () => {
  return (
    <ThemeProvider>
      <StatusBar />
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default Main;
