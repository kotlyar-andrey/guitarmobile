import React from 'react';
import MainNavigator from './MainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '~/theming';
import StatusBar from '~/components/StatusBar/StatusBar';
import Toaster from '~/components/Toaster/Toaster';
import AppInitializer from '~/components/AppInitializer/AppInitializer';

/**
 * Основной компонент, который добавляет глобальные контексты вокруг главного навигатора
 * ThemeProvider - контекст с темой
 * SafeAreaProvider - безопасное использование пространства вокруг фронтальной камеры
 * @returns React Component
 */
const Main = () => {
  return (
    <ThemeProvider>
      <StatusBar hidden={true} />
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
      <AppInitializer />
      <Toaster />
    </ThemeProvider>
  );
};

export default Main;
