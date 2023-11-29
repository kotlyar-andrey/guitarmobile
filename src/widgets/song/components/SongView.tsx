import React from 'react';
import {Text, View} from 'react-native';
import {FullSong} from '~/entities/lesson';
import {AutoscrollToolbar, AutoscrollView} from '~/features/autoScroller';
import {useLessonSettings} from '~/features/lessonsSettings';
import {MetronomeToolbar} from '~/features/metronome';
import {SongSettingsToolbar} from '~/features/songSettings';
import {SongSettingsModal} from '~/features/songSettings/components';
import {useTheme} from '~/features/themeSwitcher';
import {AccordionContainer} from '~/shared/components/AccordionContainer';
import {SongBottomPanel} from '~/shared/components/SongBottomPanel';
import {ChordsContainer} from '~/widgets/chords';
import {MarkdownContainer} from '~/widgets/text';

import createStyles from './SongView.styles';
import {SchemesContainer} from '~/widgets/schemes';

interface Props {
  song: FullSong;
  lessonPk: number;
}
export const SongView: React.FC<Props> = ({song, lessonPk}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {getLessonSettings, toggleChordsVisible} = useLessonSettings(state => ({
    getLessonSettings: state.getSettingsByPk,
    toggleChordsVisible: state.toggleChordsVisible,
  }));
  const {chordsVisible} = getLessonSettings(lessonPk);

  const [settingsModalVisible, setSettingsModalVisible] =
    React.useState<boolean>(false);

  const toggleSettingsModalVisible = () => {
    setSettingsModalVisible(!settingsModalVisible);
  };

  const autoscrollToolbar = <AutoscrollToolbar />;
  const metronomeToolbar = (
    <MetronomeToolbar originalMetronome={song.metronome} />
  );
  const songSettingsToolbar = (
    <SongSettingsToolbar showSettings={toggleSettingsModalVisible} />
  );

  return (
    <View style={styles.container}>
      <AutoscrollView>
        <Text style={styles.title}>{song.title}</Text>
        {song.chords.length > 0 && (
          <AccordionContainer
            title="Аккорды"
            visible={chordsVisible}
            toggleVisible={() => toggleChordsVisible(lessonPk)}>
            <ChordsContainer chords={song.chords} />
          </AccordionContainer>
        )}
        {song.schemes.length > 0 && (
          <AccordionContainer
            title="Ритмические рисунки"
            visible={chordsVisible}
            toggleVisible={() => toggleChordsVisible(lessonPk)}>
            <SchemesContainer schemes={song.schemes} />
          </AccordionContainer>
        )}
        <MarkdownContainer text={song.text} />
      </AutoscrollView>
      <SongBottomPanel
        toolbars={[autoscrollToolbar, metronomeToolbar, songSettingsToolbar]}
      />
      <SongSettingsModal
        visible={settingsModalVisible}
        toggleVisible={toggleSettingsModalVisible}
      />
    </View>
  );
};
