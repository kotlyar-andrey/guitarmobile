import 'react-native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import renderer from 'react-test-renderer';

import {ThemeContext, ThemeProvider} from '../context';
import {E_ColorScheme, E_ThemeType, Theme} from '../interfaces';
import DefaultTheme from '../themes/Default';
import RedTheme from '../themes/Red';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
    },
    text: {
      color: theme.colors.primary,
    },
  });
  return styles;
};

const TestedComponent = () => {
  const {theme, changeColorScheme, changeThemeType} =
    React.useContext(ThemeContext);

  const styles = createStyles(theme);
  return (
    <View style={styles.container} testID="testContainer">
      <Text style={styles.text} testID="testText">
        Test text
      </Text>
      <TouchableOpacity
        onPress={() => {
          changeThemeType(E_ThemeType.dark);
        }}>
        Change theme to dark
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeColorScheme(E_ColorScheme.red)}>
        Red Theme
      </TouchableOpacity>
    </View>
  );
};

it('Test Theme provider: Default light theme on start, then Default dark, then Red dark', () => {
  const component = renderer.create(
    <ThemeProvider>
      <TestedComponent />
    </ThemeProvider>,
  );

  const testInstance = component.root;

  const buttons = testInstance.findAllByType(TouchableOpacity);
  const container = testInstance.findByProps({testID: 'testContainer'});
  const text = testInstance.findByProps({testID: 'testText'});

  // At start:
  expect(container.props.style.backgroundColor).toBe(
    DefaultTheme.light.colors.background,
  );
  expect(text.props.style.color).toBe(DefaultTheme.light.colors.primary);

  //Click on Touchable1 - toggle theme from light to dark.
  renderer.act(() => {
    buttons[0].props.onPress();
  });

  expect(container.props.style.backgroundColor).toBe(
    DefaultTheme.dark.colors.background,
  );
  expect(text.props.style.color).toBe(DefaultTheme.dark.colors.primary);

  // Click on Touchable2 - change theme from Default to Red. Dark style remains.
  renderer.act(() => {
    buttons[1].props.onPress();
  });

  expect(container.props.style.backgroundColor).toBe(
    RedTheme.dark.colors.background,
  );
  expect(text.props.style.color).toBe(RedTheme.dark.colors.primary);
});
