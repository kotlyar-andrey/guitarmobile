import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useLessonSettings} from '~/features/lessonsSettings';
import {useTheme} from '~/features/themeSwitcher';

import {Lesson} from '../../model';
import createStyles from './LessonRow.styles';

interface Props {
  lesson: Lesson;
  navigationToLesson: () => void;
}

export const LessonRow: React.FC<Props> = ({lesson, navigationToLesson}) => {
  const soundsList: string[] = lesson.songs.map(song => song.title);

  const theme = useTheme();
  const styles = createStyles(theme);

  const settingsGetter = useLessonSettings(state => state.getSettingsByPk);
  const lessonSettings = settingsGetter(lesson.pk);
  const {isLessonComplite, isLessonFavorite} = lessonSettings;

  return (
    <View style={styles.itemListContainer}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={navigationToLesson}
        accessible={true}
        accessibilityLabel={lesson.title}
        accessibilityHint="Нажмите, чтобы перейти к уроку">
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        {soundsList.map((sound, index) => (
          <Text key={`${lesson.pk}_${index}`} style={styles.lessonSounds}>
            {sound}
          </Text>
        ))}
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        {isLessonComplite && (
          <MaterialCommunityIcons
            name="check-circle"
            color="green"
            size={moderateScale(14)}
          />
        )}
        {isLessonFavorite && (
          <MaterialCommunityIcons
            name="heart"
            color="red"
            size={moderateScale(14)}
          />
        )}
        {/* <MaterialCommunityIcons
          name="download"
          color="7777ff"
          size={moderateScale(14)}
        /> */}
      </View>
    </View>
  );
};
