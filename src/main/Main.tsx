import React from 'react';
import MainNavigator from './MainNavigator';
import {ThemeProvider} from '~/theming/context';

/**
 * Основной компонент, который добавляет глобальные контексты вокруг главного навигатора
 * ThemeProvider - контекст с темой
 * @returns React Component
 */
const Main = () => {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
};

export default Main;
