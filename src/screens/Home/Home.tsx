import React from 'react';
import {View} from 'react-native';
import {ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

// import {SettingsIcon} from '~/components/Icons/SettingsIcon';

import {NavigationType} from '~/main/MainNavigator';

import {useTheme} from '~/entities/theming';
import {Logo} from '~/shared/components/Logo';
import {InlineButton} from '~/shared/components/Buttons';
import createStyles from './Home.styles';

// import DataLoader from '~/components/DataLoader/DataLoader';

type Props = NativeStackScreenProps<NavigationType, 'Home'>;

/**
 * Стартовый экран приложения.
 * Позволяет перейти на экраны:
 * - список уроков
 * - список разборов
 * - список аккордов
 * - глобальные настройки приложения
 * - избранные уроки
 * @param navigation объект навигации
 * @returns React Component
 */
export const Home = ({navigation}: Props) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <SafeAreaView edges={['right', 'bottom', 'left']} style={styles.container}>
      <ImageBackground
        source={theme.images.backgroundHome}
        style={styles.container}>
        <Logo />
        <View style={styles.menuColumnsContainer}>
          <View style={styles.menuColumn}>
            <InlineButton
              text="Уроки"
              onPressHandler={() => {
                navigation.push('Lessons');
              }}
            />
            <InlineButton
              text="Разборы"
              onPressHandler={() => {
                navigation.push('Settings');
              }}
            />
            <InlineButton
              text="Аккорды"
              onPressHandler={() => {
                navigation.push('Settings');
              }}
            />
            <InlineButton
              text="Упражнения"
              onPressHandler={() => {
                navigation.push('Settings');
              }}
            />
          </View>
          <View style={styles.menuColumn}>
            <InlineButton
              text="Аккорды"
              onPressHandler={() => {
                navigation.push('Settings');
              }}
            />
          </View>
        </View>
        {/* <DataLoader /> */}
      </ImageBackground>
    </SafeAreaView>
  );
};
