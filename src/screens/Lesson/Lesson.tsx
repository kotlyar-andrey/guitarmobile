import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {NavigationType} from '~/main/MainNavigator';

import TopBar from '~/components/TopBar/TopBar';
import {useTheme} from '~/theming';
import LessonNavigator from './LessonNavigator';
import createStyles from './Lesson.styles';
import {observer} from 'mobx-react-lite';
import lessonView from '~/data/states/lessonView';
import {E_LoadingState} from '~/data/content/enums';
import Loading from '~/components/Loading/Loading';

type Props = NativeStackScreenProps<NavigationType, 'Lesson'>;

const Lesson: React.FC<Props> = observer(({route, navigation}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  const lessonPk = route.params.lessonPk;

  useEffect(() => {
    const gettingLesson = async () => {
      await lessonView.getLesson(lessonPk);
    };
    gettingLesson();
  }, [lessonPk]);

  const {lesson, status} = lessonView;

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar
        title={
          status === E_LoadingState.LOADING || !lesson
            ? 'Урок'
            : `Урок  № ${lesson.number}`
        }
        backArrow={true}
        navigation={navigation}
      />
      {status === E_LoadingState.LOADING && <Loading />}
      {status === E_LoadingState.SUCCESS && lesson && (
        <LessonNavigator lesson={lesson} />
      )}
    </SafeAreaView>
  );
});

export default Lesson;
