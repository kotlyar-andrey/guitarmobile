import React from 'react';
import {Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import {Metronome} from 'react-native-guitar';
import {useTheme} from '~/features/themeSwitcher';
import {IconButton} from '~/shared/components/Buttons';
import {useMetronomeState} from '../model/state';

import createStyles from './MetronomeToolbar.syles';

interface Props {
  originalMetronome: number;
}

export const MetronomeToolbar: React.FC<Props> = ({originalMetronome}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {bpm, setBpm, changeBpm, isPlaying, setIsPlaying} = useMetronomeState();

  const [timerId, setTimerId] = React.useState<number>(-1);

  const play = () => {
    setIsPlaying(true);
    Metronome.play(bpm);
  };

  const stop = React.useCallback(() => {
    setIsPlaying(false);
    Metronome.stop();
  }, [setIsPlaying]);

  React.useEffect(() => {
    if (originalMetronome !== 0) {
      setBpm(originalMetronome);
    }
  }, [originalMetronome, setBpm, stop]);

  const onPlusPress = () => {
    stop();
    changeBpm(1);
  };

  const onPlusLongPress = () => {
    stop();
    const timer = setInterval(() => {
      changeBpm(2);
    }, 100);
    setTimerId(timer);
  };

  const onMinusPress = () => {
    stop();
    changeBpm(-1);
  };

  const onMinusLongPress = () => {
    stop();
    const timer = setInterval(() => {
      changeBpm(-2);
    }, 100);
    setTimerId(timer);
  };

  const onLongRelease = () => {
    if (timerId !== -1) {
      clearInterval(timerId);
      setTimerId(-1);
    }
  };

  const onOriginalPress = () => {
    stop();
    setBpm(originalMetronome);
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="metronome"
        size={moderateScale(20)}
        color={isPlaying ? theme.colors.primary : theme.colors.secondary}
      />
      <IconButton
        active={bpm === 10}
        iconName={'minus'}
        onPressHandler={onMinusPress}
        onLongPressHandler={onMinusLongPress}
        onPressOutHandler={onLongRelease}
      />
      <Text style={styles.bpmText} onPress={onOriginalPress}>
        {bpm}
      </Text>
      <IconButton
        active={bpm === 600}
        iconName={'plus'}
        onPressHandler={onPlusPress}
        onLongPressHandler={onPlusLongPress}
        onPressOutHandler={onLongRelease}
      />
      <IconButton
        active={false}
        iconName={isPlaying ? 'pause' : 'play'}
        onPressHandler={isPlaying ? stop : play}
      />
    </View>
  );
};
