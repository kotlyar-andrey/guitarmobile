import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {useTheme} from '~/theming';
import createStyles from './SongView.styles';
import SongMarkdown from '../Markdown/Markdown';
import Chord from '../Chord/Chord';

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
        {song.accords.map(chord => (
          <View style={styles.accordHorizontalContainer} key={chord.pk}>
            <Chord chord={chord} orientation="horizontal" />
          </View>
        ))}
      </View>

      <SongMarkdown>{song.text}</SongMarkdown>
    </ScrollView>
  );
};

export default SongView;
