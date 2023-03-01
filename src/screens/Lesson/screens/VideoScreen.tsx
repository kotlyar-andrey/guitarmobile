import React from 'react';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {LessonTabsType} from '~/app/navigation';
import {VideoView} from '~/widgets/video';

type Props = MaterialTopTabScreenProps<LessonTabsType, 'Video'>;

export const VideoScreen: React.FC<Props> = ({navigation, route}) => {
  const {video, additions} = route.params;

  return (
    <VideoView video={video} additions={additions} navigation={navigation} />
  );
};
