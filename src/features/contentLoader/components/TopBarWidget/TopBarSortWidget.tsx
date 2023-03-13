import React from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './TopBarSortWidget.syles';
import {HowToPlaysSortType} from '../../model';

interface Props {
  howtoplaysSortType: HowToPlaysSortType;
  sortHowToPlays: (sortType: HowToPlaysSortType) => void;
}

export const TopBarSortWidget: React.FC<Props> = ({
  howtoplaysSortType,
  sortHowToPlays,
}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={howtoplaysSortType}
        onValueChange={itemValue => sortHowToPlays(itemValue)}
        prompt="Сортировать по"
        mode="dropdown"
        dropdownIconColor={theme.colors.primary}
        style={styles.picker}>
        <Picker.Item
          label="По порядку"
          value="normal"
          color={
            howtoplaysSortType === 'normal'
              ? theme.colors.primary
              : theme.colors.text
          }
          style={styles.pickerItem}
        />
        <Picker.Item
          label="По алфавиту"
          value="abc"
          color={
            howtoplaysSortType === 'abc'
              ? theme.colors.primary
              : theme.colors.text
          }
          style={styles.pickerItem}
        />
        <Picker.Item
          label="По сложности"
          value="difficult"
          color={
            howtoplaysSortType === 'difficult'
              ? theme.colors.primary
              : theme.colors.text
          }
          style={styles.pickerItem}
        />
      </Picker>
    </View>
  );
};
