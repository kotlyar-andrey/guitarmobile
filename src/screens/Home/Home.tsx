import React from 'react';
import {ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ButtonInline from '~/components/ButtonInline/ButtonInline';
import {SettingsIcon} from '~/components/Icons/SettingsIcon';

import {NavigationType} from '~/main/MainNavigator';

import {useTheme} from '~/theming/hooks';
import Logo from '~/components/Logo/Logo';
import createStyles from './Home.styles';
import DataLoader from '~/components/DataLoader/DataLoader';

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
const Home = ({navigation}: Props) => {
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
            <ButtonInline
              title="Уроки"
              onPressHandler={() => {
                navigation.push('Lessons');
              }}
            />
            <ButtonInline
              title="Разборы"
              onPressHandler={() => {
                navigation.push('Settings');
              }}
            />
            <ButtonInline
              title="Аккорды"
              onPressHandler={() => {
                navigation.push('Settings');
              }}
            />
            <ButtonInline
              title="Упражнения"
              onPressHandler={() => {
                navigation.push('Settings');
              }}
            />
          </View>
          <View style={styles.menuColumn}>
            <ButtonInline
              title="Аккорды"
              onPressHandler={() => {
                navigation.push('Settings');
              }}
              icon={<SettingsIcon />}
            />
          </View>
        </View>
        <DataLoader />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
