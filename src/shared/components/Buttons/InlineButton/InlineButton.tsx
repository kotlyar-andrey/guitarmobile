import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import createStyles from './InlineButton.styles';
import {useTheme} from '~/features/themeSwitcher';
import {ButtonInterface} from '../interfaces';

export const InlineButton: React.FC<ButtonInterface> = ({
  text,
  size,
  iconName,
  onPressHandler,
  onLongPressHandler,
  onPressOutHandler,
  a11yLabel,
  a11yHint,
}) => {
  const theme = useTheme();

  const styles = createStyles(theme, size);

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
    <TouchableOpacity
      onPress={onPressHandler}
      onLongPress={onLongPressHandler}
      onPressOut={onPressOutHandler}
      style={styles.buttonContainer}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={a11yLabel}
      accessibilityHint={a11yHint}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          color={theme.colors.onPrimary}
          size={getIconSize(size)}
        />
      )}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
