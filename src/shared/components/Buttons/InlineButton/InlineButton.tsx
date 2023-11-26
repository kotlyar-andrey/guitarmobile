import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import createStyles from './InlineButton.styles';
import {useTheme} from '~/features/themeSwitcher';
import {ButtonInterface} from '../interfaces';

export const InlineButton: React.FC<ButtonInterface> = ({
  text,
  size,
  onPressHandler,
  onLongPressHandler,
  onPressOutHandler,
  a11yLabel,
  a11yHint,
}) => {
  const theme = useTheme();

  const styles = createStyles(theme, size);

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
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
