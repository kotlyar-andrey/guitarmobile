import React from 'react';
import {Text, View} from 'react-native';
import {FullSong} from '~/entities/lesson';
import {AutoscrollToolbar, AutoscrollView} from '~/features/autoScroller';
import {SongSettingsToolbar} from '~/features/songSettings';
import {SongSettingsModal} from '~/features/songSettings/components';
import {useTheme} from '~/features/themeSwitcher';
import {AccordionContainer} from '~/shared/components/AccordionContainer';
import {SongBottomPanel} from '~/shared/components/SongBottomPanel';
import {BeatsContainer} from '~/widgets/beats';
import {ChordsContainer} from '~/widgets/chords';
import {MarkdownContainer} from '~/widgets/text';

import createStyles from './SongView.styles';

interface Props {
  song: FullSong;
}
export const SongView: React.FC<Props> = ({song}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [test, setTest] = React.useState(true);

  const [settingsModalVisible, setSettingsModalVisible] =
    React.useState<boolean>(false);

  const toggleSettingsModalVisible = () => {
    setSettingsModalVisible(!settingsModalVisible);
  };

  const autoscrollToolbar = <AutoscrollToolbar />;
  const songSettingsToolbar = (
    <SongSettingsToolbar showSettings={toggleSettingsModalVisible} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{song.title}</Text>

      <AutoscrollView>
        {song.chords.length > 0 && (
          <AccordionContainer
            title="Аккорды"
            visible={test}
            toggleVisible={() => setTest(!test)}>
            <ChordsContainer chords={song.chords} />
          </AccordionContainer>
        )}
        {/* Показывать интерактивные бои, но если их нет, то обычные */}
        {song.beats.length > 0 && (
          <AccordionContainer
            title="Ритмические рисунки"
            visible={test}
            toggleVisible={() => setTest(!test)}>
            <BeatsContainer beats={song.beats} />
          </AccordionContainer>
        )}
        <MarkdownContainer text={song.text} />
      </AutoscrollView>
      <SongBottomPanel toolbars={[autoscrollToolbar, songSettingsToolbar]} />
      <SongSettingsModal
        visible={settingsModalVisible}
        toggleVisible={toggleSettingsModalVisible}
      />
    </View>
  );
};
