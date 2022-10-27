import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '~/screens/Home/Home';
import Lessons from '~/screens/Lessons/Lessons';

export type NavigationType = {
  Home: undefined;
  Lessons: undefined;
};

const {Navigator, Group, Screen} = createNativeStackNavigator<NavigationType>();

/**
 * Главные навигатор приложения. Описывает структуру приложения - какие экраны будут в приложении
 * @returns React Component
 */
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Group>
          <Screen name="Home" component={Home} />
          <Screen name="Lessons" component={Lessons} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
