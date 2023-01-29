import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '~/entities/theming';
import createStyles from './InlineButton.styles';

interface Props {
  text: string;
  onPressHandler: () => void;
}

export const InlineButton: React.FC<Props> = ({text, onPressHandler}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
