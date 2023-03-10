import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Addition, FullSong, Lesson, SimpleSong} from '~/entities/lesson';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SongScreen, VideoScreen} from '~/screens/Lesson';
import {useContentState} from '~/features/contentLoader';
import {useTheme} from '~/features/themeSwitcher';

type LessonSongsType = {
  [key: string]: {song: FullSong; lessonPk: number};
};

type LesonVideoType = {
  Video: {
    video: string;
    additions: Addition[];
    lessonType: 'lesson' | 'howtoplay';
    lessonNumber: number;
    lessonPk: number;
  };
};

export type LessonTabsType = LessonSongsType & LesonVideoType;

const Tabs = createMaterialTopTabNavigator<LessonTabsType>();

interface Props {
  lesson: Lesson;
}

/**
 * Навигатор с табами для урока.
 * Сожержит вкладки с текстами песен для урока и вкладку с видео.
 */
export const LessonNavigator: React.FC<Props> = ({lesson}) => {
  const theme = useTheme();

  const songs: FullSong[] = useContentState(state =>
    lesson?.songs.map((song: SimpleSong) => state.getFullSong(song)),
  );

  const songTabs = songs.map((song: FullSong, index: number) => (
    <Tabs.Screen
      key={`song${index + 1}`}
      name={`Song${index + 1}`}
      component={SongScreen}
      initialParams={{song, lessonPk: lesson.pk}}
      options={{
        title: `Текст № ${index + 1}`,
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons
            name="file-document-outline"
            color={focused ? theme.colors.primary : theme.colors.text}
            size={moderateScale(14)}
          />
        ),
      }}
    />
  ));

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: scale(10),
        },
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          maxHeight: verticalScale(40),
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowIcon: true,
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
        },
        lazy: true,
      }}
      initialRouteName="Song1">
      {songTabs}
      <Tabs.Screen
        name="Video"
        options={{
          title: 'Видео',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="clipboard-play-outline"
              color={focused ? theme.colors.primary : theme.colors.text}
              size={moderateScale(14)}
            />
          ),
        }}
        component={VideoScreen}
        initialParams={{
          video: lesson.video,
          additions: lesson.additions,
          lessonType: 'lesson',
          lessonNumber: lesson.number,
          lessonPk: lesson.pk,
        }}
      />
    </Tabs.Navigator>
  );
};
