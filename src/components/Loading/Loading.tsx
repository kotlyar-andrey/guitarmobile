import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '~/theming';
import createStyles from './Loading.styles';

const Loading: React.FC = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return <Text style={styles.text}>Загрузка...</Text>;
};

export default Loading;
