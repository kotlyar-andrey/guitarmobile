import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '~/screens/Home/Home';
import Lessons from '~/screens/Lessons/Lessons';
import Lesson from '~/screens/Lesson/Lesson';
import Settings from '~/screens/Settings/Settings';
import {useTheme, Theme} from '~/theming';

export type NavigationType = {
  Home: undefined;
  Lessons: undefined;
  Lesson: {lessonPk: number};
  Settings: undefined;
};

const {Navigator, Group, Screen} = createNativeStackNavigator<NavigationType>();

/**
 * Главный навигатор приложения. Описывает структуру приложения - какие экраны будут в приложении
 * @returns React Component
 */
const MainNavigator = () => {
  const theme = useTheme();

  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const navigationTheme = theme.dark
    ? NavigationDarkTheme
    : NavigationDefaultTheme;

  return (
    <View style={styles.container}>
      <NavigationContainer theme={navigationTheme}>
        <Navigator screenOptions={{headerShown: false}}>
          <Group>
            <Screen name="Home" component={Home} />
            <Screen name="Lessons" component={Lessons} />
            <Screen name="Lesson" component={Lesson} />
            <Screen name="Settings" component={Settings} />
          </Group>
        </Navigator>
      </NavigationContainer>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

export default MainNavigator;
