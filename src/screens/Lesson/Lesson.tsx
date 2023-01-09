import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {NavigationType} from '~/main/MainNavigator';
import stateContent from '~/data/content/state';
import TopBar from '~/components/TopBar/TopBar';
import {useTheme} from '~/theming';
import LessonNavigator from './LessonNavigator';
import createStyles from './Lesson.styles';
import {observer} from 'mobx-react-lite';
// import {getLesson} from '~/data/content/storage';

type Props = NativeStackScreenProps<NavigationType, 'Lesson'>;

const Lesson: React.FC<Props> = observer(({route, navigation}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  useEffect(() => {
    const gettingLesson = async () => {
      await stateContent.getLesson(route.params.lessonPk);
    };
    gettingLesson();
  }, [route.params.lessonPk]);

  const {lesson} = stateContent;
  console.log('LESSON IN LESSON SCREEN', lesson?.title, lesson?.songs[0].title);

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
});

export default Lesson;
