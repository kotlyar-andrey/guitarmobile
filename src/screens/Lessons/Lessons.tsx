import React, {useEffect} from 'react';
import {Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationType} from '~/main/MainNavigator';
import TopBar from '~/components/TopBar/TopBar';
import lessonsListGetter from '~/data/states/lessonsList';
import {useTheme} from '~/theming';
import createStyles from './Lessons.styles';
import LessonsItem from './LessonsItem';
import {observer} from 'mobx-react-lite';
import {E_LoadingState} from '~/data/content/enums';
import Loading from '~/components/Loading/Loading';

type Props = NativeStackScreenProps<NavigationType, 'Lessons'>;

const Lessons = observer(({navigation}: Props) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  // Нужно получать всю необходимую информацию об уроке:
  // сам урок, а так же добавлен ли он в избранное, пройден ли, скачан ли.
  useEffect(() => {
    const gettingLessons = async () => {
      await lessonsListGetter.getLessons();
    };
    gettingLessons();
  }, []);

  const navigationToLesson = (lessonPk: number) => () => {
    navigation.push('Lesson', {lessonPk});
  };

  const {status, lessons} = lessonsListGetter;

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar title="Уроки" backArrow={true} navigation={navigation} />

      {status === E_LoadingState.LOADING && <Loading />}
      {status === E_LoadingState.SUCCESS && lessons.length > 0 && (
        <FlatList
          data={lessons}
          renderItem={({item}) => (
            <LessonsItem
              lesson={item}
              styles={styles}
              navigationToLesson={navigationToLesson(item.pk)}
            />
          )}
          keyExtractor={lesson => `lessonID${lesson.pk}`}
        />
      )}
      {status === E_LoadingState.ERROR && <Text>Ошибка. Уроки не найдены</Text>}
    </SafeAreaView>
  );
});

export default Lessons;
