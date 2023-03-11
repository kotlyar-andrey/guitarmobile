import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationType} from '~/app/navigation';
import createStyles from './Favorites.styles';
import {TopBar} from '~/shared/components/TopBar';
import {useTheme} from '~/features/themeSwitcher';
import {FavoritesList} from '~/widgets/favorites';

type Props = NativeStackScreenProps<MainNavigationType, 'Favorites'>;

export const Favorites = ({navigation}: Props) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar title="Избранное" backArrow={true} navigation={navigation} />
      <FavoritesList navigation={navigation} />
    </SafeAreaView>
  );
};
