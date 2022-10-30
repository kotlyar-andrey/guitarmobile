import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ButtonInline from '~/components/ButtonInline/ButtonInline';

import {NavigationType} from '~/main/MainNavigator';

import {useTheme} from '~/theming/hooks';
import Logo from '~/components/Logo/Logo';
import createStyles from './Home.styles';

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

  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView edges={['right', 'bottom', 'left']} style={styles.container}>
      <ImageBackground
        source={theme.images.backgroundHome}
        style={styles.container}>
        <Logo />
        <Text style={styles.text}>HomeScreen</Text>
        <ButtonInline
          title="Lessons"
          onPressHandler={() => {
            navigation.push('Lessons');
          }}
        />
        <ButtonInline
          title="Settings"
          onPressHandler={() => {
            navigation.push('Settings');
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
