import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useTheme} from '~/theming';
import createStyles from './SongView.styles';
import SongMarkdown from '../Markdown/Markdown';

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
      <SongMarkdown>{song.text}</SongMarkdown>
    </ScrollView>
  );
};

export default SongView;
