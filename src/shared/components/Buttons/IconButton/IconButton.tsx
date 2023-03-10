import React from 'react';
import {Pressable} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './IconButton.styles';

interface Props {
  onPressHandler: () => void;
  onLongPressHandler?: () => void;
  onPressOutHandler?: () => void;
  iconName: string;
  active: boolean;
}

export const IconButton: React.FC<Props> = ({
  onPressHandler,
  onLongPressHandler,
  onPressOutHandler,
  iconName,
  active,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable
      onPress={onPressHandler}
      onLongPress={onLongPressHandler}
      onPressOut={onPressOutHandler}
      style={active ? styles.pressedButton : styles.defaultButton}>
      <MaterialCommunityIcons
        name={iconName}
        size={moderateScale(14)}
        color={active ? theme.colors.secondary : theme.colors.primary}
      />
    </Pressable>
  );
};
