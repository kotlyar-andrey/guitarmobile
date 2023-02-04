import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '~/entities/theming';
import createStyles from './Loading.styles';

export const Loading: React.FC = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return <Text style={styles.text}>Загрузка...</Text>;
};
