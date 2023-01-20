import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useTheme} from '~/theming';
import createStyles from './Beat.styles';
import BeatView from './BeatView';

import {playBeat, stop} from 'rn-chords-player';
import {I_Beat} from '~/data/content/interfaces';
import {makeBeat} from './Beat.dto';

type Props = {
  beats: I_Beat[];
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

  const onBeatClick = (beat: I_Beat) => () => {
    if (beat.pk === playingBeat) {
      setPlayingBeat(-1);
      stop();
    } else {
      setPlayingBeat(beat.pk);
      playBeat(makeBeat(beat), 120); //TODO with bpm
    }
  };

  return (
    <View style={styles.container}>
      {beats.map(beat => (
        <View style={styles.beat} key={beat.pk}>
          <BeatView
            beat={beat}
            playing={playingBeat === beat.pk}
            onBeatClick={onBeatClick(beat)}
          />
        </View>
      ))}
    </View>
  );
};

export default BeatsContainer;
