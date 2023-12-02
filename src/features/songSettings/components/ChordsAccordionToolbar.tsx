import React from 'react';
import {View} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';
import {IconButton} from '~/shared/components/Buttons';
import {useSongSettings} from '../model';
import createStyles from './Toolbars.styles';

export const ChordsAccordionToolbar: React.FC = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {increaseChordSize, decreaseChordSize, toggleOrientation, orientation} =
    useSongSettings(state => ({
      increaseChordSize: state.increaseChordSize,
      decreaseChordSize: state.decreaseChordSize,
      toggleOrientation: state.toggleOrientation,
      orientation: state.chordOrientation,
    }));

  return (
    <View style={styles.container}>
      <IconButton
        isActive={false}
        flat={true}
        iconName={orientation === 'horizontal' ? 'rotate-left' : 'rotate-right'}
        onPressHandler={() => {
          toggleOrientation();
        }}
        a11yLabel="Ориентация аккордов"
        a11yHint="Изменить ориентацию аккордов"
      />
      <IconButton
        isActive={false}
        flat={true}
        iconName={'minus'}
        onPressHandler={() => {
          decreaseChordSize();
        }}
        a11yLabel="Уменьшить аккорды"
        a11yHint="Уменьшает аккорды"
      />
      <IconButton
        isActive={false}
        flat={true}
        iconName={'plus'}
        onPressHandler={() => {
          increaseChordSize();
        }}
        a11yLabel="Увеличить аккорды"
        a11yHint="Увеличивает аккорды"
      />
    </View>
  );
};
