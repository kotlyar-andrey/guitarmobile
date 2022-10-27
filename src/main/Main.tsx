import React from 'react';
import MainNavigator from './MainNavigator';

/**
 * Основной компонент, который добавляет глобальные контексты вокруг главного навигатора
 * ThemeProvider - контекст с темой
 * @returns React Component
 */
const Main = () => {
  return <MainNavigator />;
};

export default Main;
