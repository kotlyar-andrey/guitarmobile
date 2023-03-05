import React from 'react';
import {View} from 'react-native';
import {ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Logo} from '~/shared/components/Logo';
import {InlineButton} from '~/shared/components/Buttons';
import createStyles from './Home.styles';
import {ContentLoader} from '~/features/contentLoader';
import {MainNavigationType} from '~/app/navigation';
import {useTheme} from '~/features/themeSwitcher';

type Props = NativeStackScreenProps<MainNavigationType, 'Home'>;

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
              a11yLabel="Уроки"
              a11yHint="Перейти к списку уроков"
              onPressHandler={() => {
                navigation.push('Lessons');
              }}
            />
          </View>
          <View style={styles.menuColumn}>
            <InlineButton
              a11yLabel="Уроки"
              a11yHint="Перейти к списку уроков"
              text="Аккорды"
              onPressHandler={() => {
                navigation.push('Lessons');
              }}
            />
            <InlineButton
              a11yLabel="Разборы"
              a11yHint="Перейти к списку разборов"
              text="Разборы"
              onPressHandler={() => {
                navigation.push('HowToPlays');
              }}
            />
          </View>
        </View>
        <ContentLoader />
      </ImageBackground>
    </SafeAreaView>
  );
};
