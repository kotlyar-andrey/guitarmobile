import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useTheme} from '~/theming';
import createStyles from './SongView.styles';
import SongMarkdown from '../Markdown/Markdown';
import BeatsContainer from '../Beat/BeatsContainer';
import AccordionContainer from '../AccordionContainer/AccordionContainer';
import ChordsContainer from '../Chord/CordsContainer';
import {I_Song} from '~/data/content/interfaces';

const beat1 = {
  id: 1,
  name: 'Бой № 1',
  strikes: ['down', 'up', 'x', 'up'],
  duration: 2,
};
const beat2 = {
  id: 2,
  name: 'Бой № 2',
  strikes: ['down', 'pause', 'x', 'up', 'pause', 'up', 'x', 'up'],
  duration: 3,
};
const beat3 = {
  id: 3,
  name: 'test',
  strikes: ['down', 'up', 'down', 'up', 'down', 'up', 'down', 'up'],
  duration: 3,
};
const beats = [beat1, beat2, beat3];

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

  console.log('song in song View', song.title);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{song.title}</Text>
      <AccordionContainer title="Аккорды">
        <ChordsContainer chords={song.chords} />
      </AccordionContainer>
      {/* Показывать интерактивные бои, но если их нет, то обычные */}
      <AccordionContainer title="Ритмические рисунки">
        <BeatsContainer beats={beats} bpm={120} />
      </AccordionContainer>

      <SongMarkdown>{song.text}</SongMarkdown>
    </ScrollView>
  );
};

export default SongView;
