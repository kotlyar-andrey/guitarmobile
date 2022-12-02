import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {useTheme} from '~/theming';
import createStyles from './SongView.styles';
import SongMarkdown from '../Markdown/Markdown';
import Chord from '../Chord/Chord';
import BeatsContainer from '../Beat/BeatsContainer';
import AccordionContainer from '../AccordionContainer/AccordionContainer';

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

/**
 * Главный компонент, который отображает песню или разбор с аккордами, боями,
 * а также предоставляет панель инструментов внизу
 * @param props song: Song object
 * @returns RC
 */
const SongView = ({route}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  const song = route.params.song;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{song.title}</Text>
      <View style={styles.chordsContainer}>
        {/* Показывать слово Аккорды, а справа надпись скрыть. После скрытия надпись меняется на показать */}
        {song.accords.map(chord => (
          <View style={styles.accordHorizontalContainer} key={chord.pk}>
            <Chord chord={chord} orientation="horizontal" />
          </View>
        ))}
      </View>
      {/* Показывать интерактивные бои, но если их нет, то обычные */}
      <AccordionContainer title="Ритмические рисунки">
        <BeatsContainer beats={beats} bpm={120} />
      </AccordionContainer>

      <SongMarkdown>{song.text}</SongMarkdown>
    </ScrollView>
  );
};

export default SongView;
