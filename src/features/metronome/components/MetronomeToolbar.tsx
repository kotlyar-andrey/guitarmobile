import React from 'react';
import {Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

  const {bpm, setBpm, changeBpm, isPlaying, start, stop} = useMetronomeState();

  const [timerId, setTimerId] = React.useState<number>(-1);

  const onPlusPress = () => {
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
        isActive={bpm === 10}
        iconName={'minus'}
        onPressHandler={onMinusPress}
        onLongPressHandler={onMinusLongPress}
        onPressOutHandler={onLongRelease}
        a11yLabel="Медленнее"
        a11yHint="Уменьшить скорость метронома"
      />
      <Text style={styles.bpmText} onPress={onOriginalPress}>
        {bpm}
      </Text>
      <IconButton
        isActive={bpm === 600}
        iconName={'plus'}
        onPressHandler={onPlusPress}
        onLongPressHandler={onPlusLongPress}
        onPressOutHandler={onLongRelease}
        a11yLabel="Быстрее"
        a11yHint="Увеличить скорость метронома"
      />
      <IconButton
        isActive={false}
        iconName={isPlaying ? 'pause' : 'play'}
        onPressHandler={isPlaying ? stop : start}
        a11yLabel={isPlaying ? 'Остановить' : 'Запустить'}
        a11yHint={isPlaying ? 'Выключить метроном' : 'Включить метроном'}
      />
    </View>
  );
};
