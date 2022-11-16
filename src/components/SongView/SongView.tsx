import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '~/theming';
import createStyles from './SongView.styles';

/**
 * Главный компонент, который отображает песню или разбор с аккордами, боями,
 * а также предоставляет панель инструментов внизу
 * @param props song: Song object
 * @returns RC
 */
const SongView = ({route}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.song.title}</Text>
    </View>
  );
};

export default SongView;
