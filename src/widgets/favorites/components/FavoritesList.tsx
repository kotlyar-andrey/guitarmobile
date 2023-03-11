import React from 'react';
import {SectionList} from 'react-native';
import {useContentState} from '~/features/contentLoader';
import {useLessonSettings} from '~/features/lessonsSettings';
import {FavoriteHeader, FavoriteRow} from '~/entities/favorites';

interface Props {
  navigation: any;
}

export const FavoritesList = ({navigation}: Props) => {
  const {howtoplays, lessons} = useContentState(state => ({
    howtoplays: state.howtoplays,
    lessons: state.lessons,
  }));

  const favoritePks = useLessonSettings(state => state.getFavoritePks)();

  const favoriteLessons = lessons.filter(lesson =>
    favoritePks.includes(lesson.pk),
  );

  const favoriteHowtoplays = howtoplays.filter(lesson =>
    favoritePks.includes(lesson.pk),
  );

  const navigationToLesson = (lessonPk: number) => () => {
    navigation.push('Lesson', {lessonPk});
  };

  const navigationToHowToPlay = (lessonPk: number) => () => {
    navigation.push('HowToPlay', {lessonPk});
  };

  const dataToShow = [
    {
      title: 'Уроки',
      data: favoriteLessons,
    },
    {
      title: 'Разборы',
      data: favoriteHowtoplays,
    },
  ];

  return (
    <>
      {howtoplays.length > 0 && (
        <SectionList
          sections={dataToShow}
          renderItem={({item, section}) => (
            <FavoriteRow
              item={item}
              navigationTo={
                section.title === 'Уроки'
                  ? navigationToLesson(item.pk)
                  : navigationToHowToPlay(item.pk)
              }
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <FavoriteHeader text={title} />
          )}
          keyExtractor={item => `howToPlayID${item.pk}`}
        />
      )}
    </>
  );
};
