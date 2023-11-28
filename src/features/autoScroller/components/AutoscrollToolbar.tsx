import React from 'react';
import {View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/features/themeSwitcher';
import {IconButton} from '~/shared/components/Buttons';
import {useAutoScroll} from '../model/state';
import createStyles from './AutoscrollToolbar.styles';

export const AutoscrollToolbar: React.FC = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {speed, setSpeed, scrollToTop} = useAutoScroll();

  React.useEffect(() => {
    return () => {
      setSpeed(0);
    };
  }, [setSpeed]);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="transfer-down"
        size={moderateScale(16)}
        color={speed > 0 ? theme.colors.primary : theme.colors.secondary}
      />
      <IconButton
        isActive={speed === 0}
        iconName={'pause'}
        onPressHandler={() => setSpeed(0)}
        a11yLabel="Скорость 0"
        a11yHint="Остановить автопрокрутку текста"
      />
      <IconButton
        isActive={speed === 1}
        iconName={'chevron-right'}
        onPressHandler={() => setSpeed(1)}
        a11yLabel="Скорость 1"
        a11yHint="Медленная автопрокрутка текста"
      />
      <IconButton
        isActive={speed === 2}
        iconName={'chevron-double-right'}
        onPressHandler={() => setSpeed(2)}
        a11yLabel="Скорость 2"
        a11yHint="Средняя скорость автопрокрутки текста"
      />
      <IconButton
        isActive={speed === 3}
        iconName={'chevron-triple-right'}
        onPressHandler={() => setSpeed(3)}
        a11yLabel="Скорость 3"
        a11yHint="Быстрая автопрокрутка текста"
      />
      <IconButton
        isActive={false}
        iconName={'format-vertical-align-top'}
        onPressHandler={() => scrollToTop()}
        a11yLabel="К началу"
        a11yHint="Прокрутить экран в начало"
      />
    </View>
  );
};
