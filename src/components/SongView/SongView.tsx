import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '~/theming';
import createStyles from './SongView.styles';
import SongMarkdown from '../Markdown/Markdown';
import BeatsContainer from '../Beat/BeatsContainer';
import AccordionContainer from '../AccordionContainer/AccordionContainer';
import ChordsContainer from '../Chord/CordsContainer';
import {I_Song} from '~/data/content/interfaces';
import SongBottomPanel from '../SongBottomPanel/SongBottomPanel';
import {observer} from 'mobx-react-lite';
import AutoScrollView from '../AutoScrollView/AutoScrollView';
import lessonView from '~/data/states/lessonView';

interface Props {
  song: I_Song;
}

/**
 * Главный компонент, который отображает песню или разбор с аккордами, боями,
 * а также предоставляет панель инструментов внизу
 * @param props song: Song object
 * @returns RC
 */
const SongView: React.FC<Props> = observer(({song}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <>
      <AutoScrollView scrollSpeed={lessonView.scrollSpeed}>
        <Text style={styles.title}>{song.title}</Text>
        {song.chords.length > 0 && (
          <AccordionContainer title="Аккорды">
            <ChordsContainer chords={song.chords} />
          </AccordionContainer>
        )}
        {/* Показывать интерактивные бои, но если их нет, то обычные */}
        {song.beats.length > 0 && (
          <AccordionContainer title="Ритмические рисунки">
            <BeatsContainer beats={song.beats} bpm={120} />
          </AccordionContainer>
        )}

        <SongMarkdown>{song.text}</SongMarkdown>
      </AutoScrollView>
      <SongBottomPanel />
    </>
  );
});

export default SongView;
