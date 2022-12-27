import React, {useContext} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ButtonInline from '~/components/ButtonInline/ButtonInline';

import {NavigationType} from '~/main/MainNavigator';
import {ThemeContext} from '~/theming/context';
import {E_ColorScheme, E_ThemeType} from '~/theming/interfaces';
import {removeLessons} from '~/data/content/storage';

type Props = NativeStackScreenProps<NavigationType, 'Settings'>;

const Settings = ({navigation}: Props) => {
  const context = useContext(ThemeContext);

  return (
    <SafeAreaView edges={['right', 'bottom', 'left']}>
      <Text>Settings</Text>
      <ButtonInline
        title="Back"
        onPressHandler={() => {
          navigation.goBack();
        }}
      />
      <ButtonInline
        title="set theme to default"
        onPressHandler={() => {
          context.changeColorScheme(E_ColorScheme.default);
        }}
      />
      <ButtonInline
        title="set theme to red"
        onPressHandler={() => {
          context.changeColorScheme(E_ColorScheme.red);
        }}
      />
      <ButtonInline
        title="light theme"
        onPressHandler={() => {
          context.changeThemeType(E_ThemeType.light);
        }}
      />
      <ButtonInline
        title="dark theme"
        onPressHandler={() => {
          context.changeThemeType(E_ThemeType.dark);
        }}
      />
      <ButtonInline
        title="system theme"
        onPressHandler={() => {
          context.changeThemeType(E_ThemeType.system);
        }}
      />
      <Text>
        ColorScheme: {context.colorScheme}; ThemeType: {context.themeType}
      </Text>
      <ButtonInline
        title="Remove lessons"
        onPressHandler={() => {
          removeLessons();
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;
