import React from 'react';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {LessonTabsType} from '~/app/navigation';
import {SongView} from '~/widgets/song';

type Props = MaterialTopTabScreenProps<LessonTabsType>;

export const SongScreen: React.FC<Props> = ({route}) => {
  const song = route.params.song;
  return <SongView song={song} />;
};
