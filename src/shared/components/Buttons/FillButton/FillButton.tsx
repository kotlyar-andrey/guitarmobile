import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import createStyles from './FillButton.styles';
import {useTheme} from '~/features/themeSwitcher';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonInterface} from '../interfaces';

export const FillButton: React.FC<ButtonInterface> = ({
  text,
  size,
  onPressHandler,
  iconName,
  a11yLabel,
  a11yHint,
}) => {
  const theme = useTheme();

  const styles = createStyles(theme, size);

  const getIconSize = (buttonSize = 3) =>
    buttonSize === 1
      ? 28
      : buttonSize === 2
      ? 36
      : buttonSize === 3
      ? 44
      : buttonSize === 4
      ? 50
      : 64;

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={styles.buttonContainer}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={a11yLabel}
      accessibilityHint={a11yHint}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={getIconSize(size)}
          color={theme.colors.onPrimary}
        />
      )}
      {text && <Text style={styles.buttonText}>{text}</Text>}
    </TouchableOpacity>
  );
};
