import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Theme, useTheme} from '~/entities/theming';
import {Home} from '~/screens/Home';
import {Lessons} from '~/screens/Lessons';

export type MainNavigationType = {
  Home: undefined;
  Lessons: undefined;
  // Lesson: {lessonPk: number};
  // Settings: undefined;
};

const {Navigator, Group, Screen} =
  createNativeStackNavigator<MainNavigationType>();

/**
 * Главный навигатор приложения. Описывает структуру приложения - какие экраны будут в приложении
 * @returns React Component
 */
export const MainNavigator = () => {
  const theme = useTheme();

  const styles = createStyles(theme);

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
            {/* <Screen name="Lesson" component={Lesson} />
            <Screen name="Settings" component={Settings} /> */}
          </Group>
        </Navigator>
      </NavigationContainer>
    </View>
  );
};

/**
 * Стиль нужен, чтобы при переходах между экранами при темной теме небыло белых "засветов"
 */
const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
