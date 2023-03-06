import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationType} from '~/app/navigation';
import createStyles from './HowToPlays.styles';
import {TopBar} from '~/shared/components/TopBar';
import {useTheme} from '~/features/themeSwitcher';
import {HowToPlaysList} from '~/widgets/howtoplays';
import {TopBarSortWidget} from '~/features/contentLoader/components/TopBarWidget';
import {useContentState} from '~/features/contentLoader';

type Props = NativeStackScreenProps<MainNavigationType, 'HowToPlays'>;

export const HowToPlays = ({navigation}: Props) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  const {howtoplaysSortType, sortHowToPlays} = useContentState(state => ({
    howtoplaysSortType: state.howtoplaysSortType,
    sortHowToPlays: state.sortHowToPlays,
  }));

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar
        title="Разборы"
        backArrow={true}
        navigation={navigation}
        rightWidget={
          <TopBarSortWidget
            howtoplaysSortType={howtoplaysSortType}
            sortHowToPlays={sortHowToPlays}
          />
        }
      />
      <HowToPlaysList navigation={navigation} />
    </SafeAreaView>
  );
};
