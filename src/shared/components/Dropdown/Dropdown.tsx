import React from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './Dropdown.styles';
import {ControlText} from '../primitives';

interface Props {
  title: string;
  items: {label: string; value: any}[];
  selectedValue: any;
  setNewValue: (newValue: any) => void;
}

export const Dropdown: React.FC<Props> = ({
  title,
  items,
  selectedValue,
  setNewValue,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <ControlText text={title} />
      <Picker
        selectedValue={selectedValue}
        onValueChange={itemValue => setNewValue(itemValue)}
        mode="dropdown"
        prompt={title}
        style={styles.dropdown}
        dropdownIconColor={theme.colors.primary}>
        {items.map(({label, value}) => (
          <Picker.Item
            label={label}
            value={value}
            key={value}
            color={
              selectedValue === value ? theme.colors.primary : theme.colors.text
            }
            style={styles.dropdownItem}
          />
        ))}
      </Picker>
    </View>
  );
};
