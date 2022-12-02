import React from 'react';
import {View} from 'react-native';
import {useTheme} from '~/theming';
import ChordView from './Chord';
import createStyles from './Chord.styles';

const ChordsContainer = ({chords}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      {chords.map(chord => (
        <View style={styles.accordHorizontalContainer} key={chord.pk}>
          <ChordView chord={chord} orientation="horizontal" />
        </View>
      ))}
    </View>
  );
};

export default ChordsContainer;
