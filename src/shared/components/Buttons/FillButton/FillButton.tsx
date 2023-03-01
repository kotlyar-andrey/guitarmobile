import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import createStyles from './FillButton.styles';
import {useTheme} from '~/features/themeSwitcher';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  text: string;
  iconName?: string;
  a11yLabel: string;
  a11yHint: string;
  onPressHandler: () => void;
}

export const FillButton: React.FC<Props> = ({
  text,
  onPressHandler,
  iconName,
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
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={48}
          color={theme.colors.onPrimary}
        />
      )}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
