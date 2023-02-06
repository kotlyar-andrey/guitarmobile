import React from 'react';
import {Text, View} from 'react-native';
import {FullSong} from '~/entities/lesson';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './SongView.styles';

interface Props {
  song: FullSong;
}
export const SongView: React.FC<Props> = ({song}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Text>{song.title}</Text>
    </View>
  );
};
