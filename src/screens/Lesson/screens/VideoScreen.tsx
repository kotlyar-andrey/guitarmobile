import React from 'react';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import {LessonTabsType} from '../LessonNavigator';

type Props = MaterialTopTabScreenProps<LessonTabsType, 'Video'>;

export const VideoScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>Video</Text>
    </View>
  );
};
