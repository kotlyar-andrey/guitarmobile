import React from 'react';
import {View} from 'react-native';
import {Chord} from '~/entities/chord';
import createStyles from './ChordsContainer.styles';
import {CustomizedChordView} from './CustomizedChord';

interface Props {
  chords: Chord[];
}
export const ChordsContainer: React.FC<Props> = ({chords}) => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      {chords.map(chord => (
        <CustomizedChordView key={chord.pk} chord={chord} />
      ))}
    </View>
  );
};
