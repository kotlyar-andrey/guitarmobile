import React from 'react';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import SongView from '~/components/SongView/SongView';
import {LessonTabsType} from '../LessonNavigator';

type Props = MaterialTopTabScreenProps<LessonTabsType>;

const SongScreen: React.FC<Props> = ({route}) => {
  const song = route.params.song;
  return <SongView song={song} />;
};

export default SongScreen;
