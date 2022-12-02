import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useTheme} from '~/theming';
import createStyles from './Beat.styles';
import BeatView from './BeatView';

import {playBeat, stop} from 'rn-chords-player';

interface Beat {
  id: number;
  name?: string;
  strikes: string[];
  duration: number;
}

type Props = {
  beats: Beat[];
  bpm: number;
};

/**
 * Контейнер, который содержит и управляет гитарными боями
 * @param beats список боев
 * @returns FC
 */
const BeatsContainer = ({beats}: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [playingBeat, setPlayingBeat] = useState<number>(-1);

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  const onBeatClick = (beat: Beat) => () => {
    if (beat.id === playingBeat) {
      setPlayingBeat(-1);
      stop();
    } else {
      setPlayingBeat(beat.id);
      playBeat(beat, 120); //TODO with bpm
    }
  };

  return (
    <View style={styles.container}>
      {beats.map(beat => (
        <View style={styles.beat} key={beat.id}>
          <BeatView
            beat={beat}
            playing={playingBeat === beat.id}
            onBeatClick={onBeatClick(beat)}
          />
        </View>
      ))}
    </View>
  );
};

export default BeatsContainer;
