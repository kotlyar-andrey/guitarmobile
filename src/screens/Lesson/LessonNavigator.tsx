import React from 'react';
import {observer} from 'mobx-react-lite';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {I_Lesson, I_Song} from '~/data/content/interfaces';
import {useTheme} from '~/theming';
import {TextIcon} from '~/components/Icons/Text';
import {scale, verticalScale} from 'react-native-size-matters';
import SongScreen from './screens/SongScreen';
import VideoScreen from './screens/VideoScreen';

type LessonSongsType = {
  [key: string]: {song: I_Song};
};

export type LessonTabsType = LessonSongsType & {
  Video: undefined;
};

const Tabs = createMaterialTopTabNavigator<LessonTabsType>();

function getSongTabs(lesson: I_Lesson) {
  const screens = lesson.songs.map((song: I_Song, index: number) => (
    <Tabs.Screen
      key={`song${index + 1}`}
      name={`Song${index + 1}`}
      component={SongScreen}
      initialParams={{song}}
      options={{
        title: `Текст № ${index + 1}`,
        tabBarShowIcon: true,
        tabBarIcon: TextIcon,
      }}
    />
  ));
  return screens;
}

interface Props {
  lesson: I_Lesson;
}

/**
 * Навигатор с табами для урока.
 * Сожержит вкладки с текстами песен для урока и вкладку с видео.
 * @param param0 lesson: LessonData
 * @returns TabsNavigator
 */
const LessonNavigator: React.FC<Props> = observer(({lesson}) => {
  const theme = useTheme();

  const songTabs = getSongTabs(lesson);

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
});

export default LessonNavigator;
