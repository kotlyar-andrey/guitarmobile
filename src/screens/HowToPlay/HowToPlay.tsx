import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MainNavigationType} from '~/app/navigation';
import {TopBar} from '~/shared/components/TopBar';
import {useContentState} from '~/features/contentLoader';
import {useTheme} from '~/features/themeSwitcher';
import {TopBarWidget, useLessonSettings} from '~/features/lessonsSettings';
import createStyles from './HowToPlay.styles';
import {SongView} from '~/widgets/song';
import {OnlineVideoViewer} from '~/shared/components/OnlineVideoViewer';

type Props = NativeStackScreenProps<MainNavigationType, 'HowToPlay'>;

export const HowToPlay: React.FC<Props> = ({route, navigation}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  const lessonPk = route.params.lessonPk;

  const howtoplay = useContentState(state =>
    state.howtoplays.find(item => item.pk === lessonPk),
  );
  const song = useContentState(
    state => howtoplay && state.getFullSong(howtoplay?.songs[0]),
  );

  const {getSettings, toggleFavorite} = useLessonSettings(state => ({
    getSettings: state.getSettingsByPk,
    toggleFavorite: state.toggleIsLessonFavorite,
  }));

  const {isLessonFavorite} = getSettings(lessonPk);

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar
        backArrow={true}
        navigation={navigation}
        title={howtoplay ? `Разбор № ${howtoplay.number}` : 'Разбор'}
        rightWidget={
          <TopBarWidget
            isFavorite={isLessonFavorite}
            toggleFavorite={() => toggleFavorite(lessonPk)}
          />
        }
      />
      {howtoplay && (
        <OnlineVideoViewer video={howtoplay.video} navigation={navigation} />
      )}
      {song && <SongView song={song} lessonPk={lessonPk} />}
    </SafeAreaView>
  );
};
