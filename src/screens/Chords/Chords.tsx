import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationType} from '~/app/navigation';
import createStyles from './Chords.styles';
import {TopBar} from '~/shared/components/TopBar';
import {useContentState} from '~/features/contentLoader';
import {useTheme} from '~/features/themeSwitcher';
import {ChordsContainer} from '~/widgets/chords';
import {ScrollView, Text, View} from 'react-native';
import {Chord} from '~/entities/chord';

type Props = NativeStackScreenProps<MainNavigationType, 'Chords'>;

export const Chords: React.FC<Props> = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'H'];

  const subNotes = ['', 'm', '7', 'm7', '#', '#m', '#7', '#m7'];

  const allChords = useContentState(state => state.chords);

  const [activeNote, setActiveNote] = React.useState<string>('C');
  const [activeSubNote, setActiveSubNote] = React.useState<string>('');

  const chordsToView: Chord[] = allChords.filter(
    chord =>
      chord.note === activeNote && chord.title.slice(1) === activeSubNote,
  );

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar backArrow={true} navigation={navigation} title="Аккорды" />
      <View style={styles.topBarRow}>
        {notes.map(note => (
          <Text
            key={note}
            style={
              note === activeNote ? styles.topBarItemActive : styles.topBarItem
            }
            onPress={() => {
              setActiveNote(note);
            }}>
            {note}
          </Text>
        ))}
      </View>
      <View style={styles.topBarRow}>
        {subNotes.map(subnote => (
          <Text
            key={subnote}
            style={
              subnote === activeSubNote
                ? styles.topBarItemActive
                : styles.topBarItem
            }
            onPress={() => {
              setActiveSubNote(subnote);
            }}>
            {subnote || 'major'}
          </Text>
        ))}
      </View>
      <View style={styles.divider} />
      <ScrollView style={styles.container}>
        {chordsToView.length > 0 ? (
          <ChordsContainer chords={chordsToView} />
        ) : (
          <Text style={styles.notFoundError}>Нет данных для отображения</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
