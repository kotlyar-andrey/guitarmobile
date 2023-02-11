import React from 'react';
import {View} from 'react-native';
import {Beat} from '~/entities/beat';
import createStyles from './BeatsContainer.styles';
import {CustomizedBeatView} from './CustomizedBeat';

interface Props {
  beats: Beat[];
}
export const BeatsContainer: React.FC<Props> = ({beats}) => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      {beats.map(beat => (
        <CustomizedBeatView key={beat.pk} beat={beat} />
      ))}
    </View>
  );
};
