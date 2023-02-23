import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './styles';

interface Props {
  text: string;
}

export const ControlText: React.FC<Props> = ({text}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return <Text style={styles.text}>{text}</Text>;
};
