import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {LessonTabsType} from '~/app/navigation';
import {AdditionView, HowToPlaysForLesson, VideoView} from '~/widgets/video';
import {useTheme} from '~/features/themeSwitcher';
import {Theme} from '~/entities/theming';

type Props = MaterialTopTabScreenProps<LessonTabsType, 'Video'>;

export const VideoScreen: React.FC<Props> = ({navigation, route}) => {
  const {video, additions, lessonType, lessonNumber, lessonPk} = route.params;

  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <VideoView
        video={video}
        navigation={navigation}
        lessonType={lessonType}
        lessonNumber={lessonNumber}
        lessonPk={lessonPk}
      />
      {additions.length > 0 && (
        <AdditionView additions={additions} navigation={navigation} />
      )}
      <HowToPlaysForLesson
        navigation={navigation}
        lessonNumber={lessonNumber}
      />
    </ScrollView>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 10,
    },
  });
