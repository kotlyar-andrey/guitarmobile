import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import KeepAwake from '@sayem314/react-native-keep-awake';

import {LessonNavigator, MainNavigationType} from '~/app/navigation';
import createStyles from './Lesson.styles';
import {TopBar} from '~/shared/components/TopBar';
import {useContentState} from '~/features/contentLoader';
import {useTheme} from '~/features/themeSwitcher';
import {TopBarWidget, useLessonSettings} from '~/features/lessonsSettings';

type Props = NativeStackScreenProps<MainNavigationType, 'Lesson'>;

export const Lesson: React.FC<Props> = ({route, navigation}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  const lessonPk = route.params.lessonPk;

  const lesson = useContentState(state =>
    state.lessons.find(lessonItem => lessonItem.pk === lessonPk),
  );

  const {getSettings, toggleComplite, toggleFavorite} = useLessonSettings(
    state => ({
      getSettings: state.getSettingsByPk,
      toggleComplite: state.toggleIsLessonComplite,
      toggleFavorite: state.toggleIsLessonFavorite,
    }),
  );
  const {isLessonComplite, isLessonFavorite} = getSettings(lessonPk);

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <KeepAwake />
      <TopBar
        backArrow={true}
        navigation={navigation}
        title={lesson ? `Урок  № ${lesson.number}` : 'Урок'}
        rightWidget={
          <TopBarWidget
            isComplite={isLessonComplite}
            isFavorite={isLessonFavorite}
            toggleComplite={() => toggleComplite(lessonPk)}
            toggleFavorite={() => toggleFavorite(lessonPk)}
          />
        }
      />

      {lesson && <LessonNavigator lesson={lesson} />}
    </SafeAreaView>
  );
};

export default Lesson;
