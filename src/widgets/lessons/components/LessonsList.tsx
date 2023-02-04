import React from 'react';
import {FlatList} from 'react-native';
import {useContentState} from '~/features/contentLoader';
import {LessonRow} from '~/entities/lesson';
import {ErrorMessage} from '~/shared/components/ErrorMessage';
import {Loading} from '~/shared/components/Loading';

interface Props {
  navigation: any;
}

export const LessonsList = ({navigation}: Props) => {
  const contentState = useContentState(state => ({
    lessons: state.lessons,
    loading: state.loading,
    error: state.error,
    loadAllContent: state.loadAllContent,
  }));
  const {lessons, loading, loadAllContent} = contentState;

  const navigationToLesson = (lessonPk: number) => () => {
    navigation.push('Lesson', {lessonPk});
  };

  return (
    <>
      {lessons.length === 0 && loading && <Loading />}
      {lessons.length === 0 && !loading && (
        <ErrorMessage
          text="Уроки не загружены. Убедитесь в наличии стабильного Интернет-соединения и нажмите на кнопку ниже"
          handler={loadAllContent}
        />
      )}
      {lessons.length > 0 && (
        <FlatList
          data={lessons}
          renderItem={({item}) => (
            <LessonRow
              lesson={item}
              navigationToLesson={navigationToLesson(item.pk)}
            />
          )}
          keyExtractor={lesson => `lessonID${lesson.pk}`}
        />
      )}
    </>
  );
};
