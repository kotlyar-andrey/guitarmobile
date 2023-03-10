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
        active={speed === 0}
        iconName={'pause'}
        onPressHandler={() => setSpeed(0)}
      />
      <IconButton
        active={speed === 1}
        iconName={'chevron-right'}
        onPressHandler={() => setSpeed(1)}
      />
      <IconButton
        active={speed === 2}
        iconName={'chevron-double-right'}
        onPressHandler={() => setSpeed(2)}
      />
      <IconButton
        active={speed === 3}
        iconName={'chevron-triple-right'}
        onPressHandler={() => setSpeed(3)}
      />
      <IconButton
        active={false}
        iconName={'format-vertical-align-top'}
        onPressHandler={() => scrollToTop()}
      />
    </View>
  );
};
