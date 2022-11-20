import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SongView from '~/components/SongView/SongView';
import {LessonData, Song} from '~/data/content/interfaces';
import {useTheme} from '~/theming';
import {TextIcon} from '~/components/Icons/Text';
import {scale, verticalScale} from 'react-native-size-matters';

type LessonSongsType = {
  [key: string]: {song: Song};
};

type LessonTabsType = LessonSongsType & {
  Video: undefined;
};

const Tabs = createMaterialTopTabNavigator<LessonTabsType>();

function VideoScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Video!</Text>
    </View>
  );
}

interface Props {
  lesson: LessonData;
}

/**
 * Навигатор с табами для урока.
 * Сожержит вкладки с текстами песен для урока и вкладку с видео.
 * @param param0 lesson: LessonData
 * @returns TabsNavigator
 */
const LessonNavigator = ({lesson}: Props) => {
  const theme = useTheme();

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
      {lesson.sounds.map((song, index) => (
        <Tabs.Screen
          key={`song${index + 1}`}
          name={`Song${index + 1}`}
          component={SongView}
          initialParams={{song}}
          options={{
            title: `Текст № ${index + 1}`,
            tabBarShowIcon: true,
            tabBarIcon: TextIcon,
          }}
        />
      ))}

      <Tabs.Screen name="Video" component={VideoScreen} />
    </Tabs.Navigator>
  );
};

export default LessonNavigator;
