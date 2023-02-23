import React from 'react';
import {ScrollView} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';
import {Dropdown} from '~/shared/components/Dropdown';
import {ModalScreen} from '~/shared/components/ModalScreen';
import {TextSwitch} from '~/shared/components/TextSwitch';
import {useSongSettings} from '../model';
import createStyles from './SongSettingsModal.styles';

interface Props {
  visible: boolean;
  toggleVisible: () => void;
}

export const SongSettingsModal: React.FC<Props> = ({
  visible,
  toggleVisible,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {
    chordSize,
    beatSize,
    textSize,
    chordOrientation,
    setChordSize,
    setBeatSize,
    setTextSize,
    toggleOrientation,
  } = useSongSettings();

  return (
    <ModalScreen
      visible={visible}
      title="Настройки"
      toggleVisible={toggleVisible}>
      <ScrollView style={styles.container}>
        <TextSwitch
          title="Ориентация аккордов"
          leftItem={{label: 'Горизонтальная', value: 'horizontal'}}
          rightItem={{label: 'Вертикальная', value: 'vertical'}}
          chosedValue={chordOrientation}
          onValueChange={toggleOrientation}
        />
        <Dropdown
          title="Размер аккордов"
          items={[
            {label: '1', value: 1},
            {label: '2', value: 2},
            {label: '3', value: 3},
            {label: '4', value: 4},
            {label: '5', value: 5},
          ]}
          selectedValue={chordSize}
          setNewValue={setChordSize}
        />
        <Dropdown
          title="Размер ритмических рисунков"
          items={[
            {label: '1', value: 1},
            {label: '2', value: 2},
            {label: '3', value: 3},
            {label: '4', value: 4},
            {label: '5', value: 5},
          ]}
          selectedValue={beatSize}
          setNewValue={setBeatSize}
        />
        <Dropdown
          title="Размер текста"
          items={[
            {label: '6', value: 6},
            {label: '8', value: 8},
            {label: '10', value: 10},
            {label: '12', value: 12},
            {label: '14', value: 14},
            {label: '16', value: 16},
            {label: '20', value: 20},
          ]}
          selectedValue={textSize}
          setNewValue={setTextSize}
        />
      </ScrollView>
    </ModalScreen>
  );
};
