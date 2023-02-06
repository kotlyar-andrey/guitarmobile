import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {FullSong, Lesson, SimpleSong} from '~/entities/lesson';
import {useTheme} from '~/entities/theming';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SongScreen, VideoScreen} from '~/screens/Lesson';
import {useContentState} from '~/features/contentLoader';
import {Beat} from '~/entities/beat';
import {Chord} from '~/entities/chord';

type LessonSongsType = {
  [key: string]: {song: FullSong};
};

export type LessonTabsType = LessonSongsType & {
  Video: undefined;
};

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
    lesson?.songs.map((song: SimpleSong) => {
      const chords = song.chords
        .map((chordPk: number) =>
          state.chords.find((chordItem: Chord) => chordItem.pk === chordPk),
        )
        .filter((item): item is Chord => !!item);
      const beats = song.beats
        .map((beatPk: number) =>
          state.beats.find((beatItem: Beat) => beatItem.pk === beatPk),
        )
        .filter((item): item is Beat => !!item);
      return {...song, chords: chords, beats, schemes: []};
    }),
  );

  const songTabs = songs.map((song: FullSong, index: number) => (
    <Tabs.Screen
      key={`song${index + 1}`}
      name={`Song${index + 1}`}
      component={SongScreen}
      initialParams={{song}}
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
      }}
      initialRouteName="Song1">
      {songTabs}
      <Tabs.Screen name="Video" component={VideoScreen} />
    </Tabs.Navigator>
  );
};
