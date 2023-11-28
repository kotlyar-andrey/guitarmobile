import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationType} from '~/app/navigation';
import createStyles from './Metronome.styles';
import {TopBar} from '~/shared/components/TopBar';
import {useTheme} from '~/features/themeSwitcher';
import {FillButton, InlineButton} from '~/shared/components/Buttons';
import {useMetronomeState} from '~/features/metronome';

type Props = NativeStackScreenProps<MainNavigationType, 'Metronome'>;

export const Metronome = ({navigation}: Props) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  const {bpm, changeBpm, isPlaying, start, stop} = useMetronomeState();

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

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar title="Метроном" backArrow={true} navigation={navigation} />
      <View style={styles.buttonsContainer}>
        <InlineButton
          text="-"
          size={5}
          onPressHandler={onMinusPress}
          onLongPressHandler={onMinusLongPress}
          onPressOutHandler={onLongRelease}
          a11yHint="Уменьшить скорость"
          a11yLabel="Медленнее"
        />
        <Text style={styles.bpmText}>{bpm}</Text>
        <InlineButton
          text="+"
          size={5}
          onPressHandler={onPlusPress}
          onLongPressHandler={onPlusLongPress}
          onPressOutHandler={onLongRelease}
          a11yHint="Увеличить скорость"
          a11yLabel="Быстрее"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <FillButton
          onPressHandler={isPlaying ? stop : start}
          a11yLabel={isPlaying ? 'Остановить' : 'Запустить'}
          a11yHint={isPlaying ? 'Выключить метроном' : 'Включить метроном'}
          iconName={isPlaying ? 'pause' : 'play'}
        />
      </View>
    </SafeAreaView>
  );
};
