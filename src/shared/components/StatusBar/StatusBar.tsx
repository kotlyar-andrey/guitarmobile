import {StatusBar as RNStatusBar} from 'react-native';
import React from 'react';
import createStyles from './StatusBar.styles';
import {useTheme} from '~/features/themeSwitcher';

interface Props {
  hidden?: boolean;
}

export const StatusBar: React.FC<Props> = ({hidden = false}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <RNStatusBar
      backgroundColor={styles.backgroundColor}
      barStyle={styles.barStyle}
      hidden={hidden}
    />
  );
};
