import {StatusBar as RNStatusBar} from 'react-native';
import React from 'react';
import createStyles from './StatusBar.styles';
import {useTheme} from '~/theming';

interface Props {
  hidden?: boolean;
}

const StatusBar: React.FC<Props> = ({hidden = false}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  return (
    <RNStatusBar
      backgroundColor={styles.backgroundColor}
      barStyle={styles.barStyle}
      hidden={hidden}
    />
  );
};

export default StatusBar;
