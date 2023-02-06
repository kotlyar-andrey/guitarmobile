import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {LessonNavigator, MainNavigationType} from '~/app/navigation';
import {useTheme} from '~/entities/theming';
import createStyles from './Lesson.styles';
import {TopBar} from '~/shared/components/TopBar';
import {useContentState} from '~/features/contentLoader';

type Props = NativeStackScreenProps<MainNavigationType, 'Lesson'>;

export const Lesson: React.FC<Props> = ({route, navigation}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  const lessonPk = route.params.lessonPk;

  const lesson = useContentState(state =>
    state.lessons.find(lessonItem => lessonItem.pk === lessonPk),
  );

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar
        backArrow={true}
        navigation={navigation}
        title={lesson ? `Урок  № ${lesson.number}` : 'Урок'}
      />

      {lesson && <LessonNavigator lesson={lesson} />}
    </SafeAreaView>
  );
};

export default Lesson;
