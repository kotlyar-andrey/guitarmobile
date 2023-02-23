import React from 'react';
import {View, Text, Switch} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';
import {ControlText} from '../primitives';
import createStyles from './TextSwitch.styles';

interface Props {
  title: string;
  leftItem: {label: string; value: any};
  rightItem: {label: string; value: any};
  chosedValue: any;
  onValueChange: (newValue: boolean) => void;
}

export const TextSwitch: React.FC<Props> = ({
  title,
  leftItem,
  rightItem,
  chosedValue,
  onValueChange,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const switchValue: boolean = chosedValue === rightItem.value;

  return (
    <View style={styles.container}>
      <ControlText text={title} />
      <View style={styles.container}>
        <Text style={styles.text}>{leftItem.label}</Text>
        <Switch
          thumbColor={theme.colors.primary}
          trackColor={{
            false: theme.colors.secondary,
            true: theme.colors.secondary,
          }}
          value={switchValue}
          onValueChange={onValueChange}
        />
        <Text style={styles.text}>{rightItem.label}</Text>
      </View>
    </View>
  );
};
