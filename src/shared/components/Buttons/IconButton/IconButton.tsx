import React from 'react';
import {Pressable} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './IconButton.styles';
import {ButtonInterface} from '../interfaces';

type OwnProps = {
  flat?: boolean;
};

export const IconButton: React.FC<ButtonInterface & OwnProps> = ({
  onPressHandler,
  onLongPressHandler,
  onPressOutHandler,
  iconName,
  isActive,
  a11yHint,
  a11yLabel,
  size,
  flat,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme, flat);

  const getIconSize = (buttonSize = 3) =>
    buttonSize === 1
      ? 10
      : buttonSize === 2
      ? 12
      : buttonSize === 3
      ? 14
      : buttonSize === 4
      ? 18
      : 22;

  return (
    <Pressable
      onPress={onPressHandler}
      onLongPress={onLongPressHandler}
      onPressOut={onPressOutHandler}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={a11yLabel}
      accessibilityHint={a11yHint}
      style={isActive ? styles.pressedButton : styles.defaultButton}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={moderateScale(getIconSize(size))}
          color={isActive ? theme.colors.secondary : theme.colors.primary}
        />
      )}
    </Pressable>
  );
};
