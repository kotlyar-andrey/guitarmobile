import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '~/entities/theming';
import createStyles from './FillButton.styles';

interface Props {
  text: string;
  a11yLabel: string;
  a11yHint: string;
  onPressHandler: () => void;
}

export const FillButton: React.FC<Props> = ({
  text,
  onPressHandler,
  a11yLabel,
  a11yHint,
}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={styles.buttonContainer}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={a11yLabel}
      accessibilityHint={a11yHint}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
