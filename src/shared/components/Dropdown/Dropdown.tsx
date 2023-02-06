import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './Dropdown.styles';

interface Props {
  title: string;
  items: {label: string; value: string}[];
  selectedValue: string;
  setNewValue: (newValue: string) => void;
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
      <Text style={styles.text}>{title}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={itemValue => setNewValue(itemValue)}
        mode="dropdown"
        prompt={title}
        style={{backgroundColor: theme.colors.background}}
        dropdownIconColor={theme.colors.primary}>
        {items.map(({label, value}) => (
          <Picker.Item
            label={label}
            value={value}
            key={value}
            color={
              selectedValue === value ? theme.colors.primary : theme.colors.text
            }
            style={{backgroundColor: theme.colors.background}}
          />
        ))}
      </Picker>
    </View>
  );
};