import React from 'react';
import {Text, View} from 'react-native';
import {FullSong} from '~/entities/lesson';
import {AutoscrollToolbar, AutoscrollView} from '~/features/autoScroller';
import {useLessonSettings} from '~/features/lessonsSettings';
import {MetronomeToolbar} from '~/features/metronome';
import {
  SchemesAccordionToolbar,
  SongSettingsToolbar,
  TextAccordionToolbar,
} from '~/features/songSettings';
import {useTheme} from '~/features/themeSwitcher';
import {AccordionContainer} from '~/shared/components/AccordionContainer';
import {SongBottomPanel} from '~/shared/components/SongBottomPanel';
import {ChordsContainer} from '~/widgets/chords';
import {MarkdownContainer} from '~/widgets/text';

import createStyles from './SongView.styles';
import {SchemesContainer} from '~/widgets/schemes';
import {ChordsAccordionToolbar} from '~/features/songSettings';

interface Props {
  song: FullSong;
  lessonPk: number;
}
export const SongView: React.FC<Props> = ({song, lessonPk}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {getLessonSettings, toggleChordsVisible, toggleSchemesVisible} =
    useLessonSettings(state => ({
      getLessonSettings: state.getSettingsByPk,
      toggleChordsVisible: state.toggleChordsVisible,
      toggleSchemesVisible: state.toggleSchemesVisible,
    }));
  const {chordsVisible, schemesVisible} = getLessonSettings(lessonPk);

  const autoscrollToolbar = <AutoscrollToolbar />;
  const metronomeToolbar = (
    <MetronomeToolbar originalMetronome={song.metronome} />
  );
  const songSettingsToolbar = <SongSettingsToolbar />;

  return (
    <View style={styles.container}>
      <AutoscrollView>
        <Text style={styles.title}>{song.title}</Text>
        {song.chords.length > 0 && (
          <AccordionContainer
            title="Аккорды"
            visible={chordsVisible}
            toggleVisible={() => toggleChordsVisible(lessonPk)}
            toolbarButtons={<ChordsAccordionToolbar />}>
            <ChordsContainer chords={song.chords} />
          </AccordionContainer>
        )}
        {song.schemes.length > 0 && (
          <AccordionContainer
            title="Ритмические рисунки"
            visible={schemesVisible}
            toggleVisible={() => toggleSchemesVisible(lessonPk)}
            toolbarButtons={<SchemesAccordionToolbar />}>
            <SchemesContainer schemes={song.schemes} />
          </AccordionContainer>
        )}
        <AccordionContainer
          title="Текст"
          visible={true}
          toolbarButtons={<TextAccordionToolbar />}>
          <MarkdownContainer text={song.text} />
        </AccordionContainer>
      </AutoscrollView>
      <SongBottomPanel
        toolbars={[autoscrollToolbar, metronomeToolbar, songSettingsToolbar]}
      />
    </View>
  );
};
