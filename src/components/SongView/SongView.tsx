import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useTheme} from '~/theming';
import createStyles from './SongView.styles';
import SongMarkdown from '../Markdown/Markdown';
import BeatsContainer from '../Beat/BeatsContainer';
import AccordionContainer from '../AccordionContainer/AccordionContainer';
import ChordsContainer from '../Chord/CordsContainer';
import {I_Song} from '~/data/content/interfaces';

interface Props {
  song: I_Song;
}

/**
 * Главный компонент, который отображает песню или разбор с аккордами, боями,
 * а также предоставляет панель инструментов внизу
 * @param props song: Song object
 * @returns RC
 */
const SongView: React.FC<Props> = ({song}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
};

export default SongView;
