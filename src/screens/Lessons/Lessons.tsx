import React, {useEffect} from 'react';
import {Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationType} from '~/main/MainNavigator';
import TopBar from '~/components/TopBar/TopBar';
import stateContent from '~/data/content/state';
import {useTheme} from '~/theming';
import createStyles from './Lessons.styles';
import LessonsItem from './LessonsItem';
import {observer} from 'mobx-react-lite';

type Props = NativeStackScreenProps<NavigationType, 'Lessons'>;

const Lessons = observer(({navigation}: Props) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  // Нужно получать всю необходимую информацию об уроке:
  // сам урок, а так же добавлен ли он в избранное, пройден ли, скачан ли.
  useEffect(() => {
    const gettingLessons = async () => {
      await stateContent.getLessons();
    };
    gettingLessons();
  }, []);

  const navigationToLesson = (lessonPk: number) => () => {
    navigation.push('Lesson', {lessonPk});
  };

  const {loading, lessons} = stateContent;

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar title="Уроки" backArrow={true} navigation={navigation} />

      {loading && <Text>Загрузка...</Text>}
      {!loading && lessons.length > 0 && (
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
    </SafeAreaView>
  );
});

export default Lessons;
