import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationType} from '~/app/navigation';
import {ThemeSwitcher, useTheme} from '~/features/themeSwitcher';
import {TopBar} from '~/shared/components/TopBar';
import createStyles from './Settings.styles';
import {RateWidget} from '~/widgets/settings';

type Props = NativeStackScreenProps<MainNavigationType, 'Settings'>;

export const Settings = ({navigation}: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <SafeAreaView edges={['right', 'bottom', 'left']} style={styles.container}>
      <TopBar title="Настройки" backArrow={true} navigation={navigation} />
      <ScrollView style={styles.container}>
        <ThemeSwitcher />
        <RateWidget />
      </ScrollView>
    </SafeAreaView>
  );
};
