import React from 'react';
import {Pressable} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './IconButton.styles';

interface Props {
  onPressHandler: () => void;
  iconName: string;
  active: boolean;
}

export const IconButton: React.FC<Props> = ({
  onPressHandler,
  iconName,
  active,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable
      onPress={onPressHandler}
      style={active ? styles.pressedButton : styles.defaultButton}>
      <MaterialCommunityIcons
        name={iconName}
        size={moderateScale(12)}
        color={active ? theme.colors.secondary : theme.colors.primary}
      />
    </Pressable>
  );
};
