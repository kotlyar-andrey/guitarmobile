import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {NavigationType} from '~/main/MainNavigator';

import TopBar from '~/components/TopBar/TopBar';
import {useTheme} from '~/theming';
import {I_Lesson} from '~/data/content/interfaces';
import data from '~/data';
import LessonNavigator from './LessonNavigator';
import createStyles from './Lesson.styles';

type Props = NativeStackScreenProps<NavigationType, 'Lesson'>;

const Lesson = ({route, navigation}: Props) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  const [lesson, setLesson] = useState<I_Lesson>();

  useEffect(() => {
    const getLesson = async () => {
      const {lessonPk} = route.params;
      const lesson_ = await data.content.getLesson(lessonPk);
      setLesson(lesson_);
    };
    getLesson();
  }, [route.params]);

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar
        title={lesson ? `Урок № ${lesson.number}` : 'Загрузка...'}
        backArrow={true}
        navigation={navigation}
      />
      {lesson && <LessonNavigator lesson={lesson} />}
    </SafeAreaView>
  );
};

export default Lesson;
