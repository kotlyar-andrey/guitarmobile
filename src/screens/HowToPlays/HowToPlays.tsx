import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationType} from '~/app/navigation';
import createStyles from './HowToPlays.styles';
import {TopBar} from '~/shared/components/TopBar';
import {useTheme} from '~/features/themeSwitcher';
import {HowToPlaysList} from '~/widgets/howtoplays';

type Props = NativeStackScreenProps<MainNavigationType, 'HowToPlays'>;

export const HowToPlays = ({navigation}: Props) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar title="Разборы" backArrow={true} navigation={navigation} />
      <HowToPlaysList navigation={navigation} />
    </SafeAreaView>
  );
};
