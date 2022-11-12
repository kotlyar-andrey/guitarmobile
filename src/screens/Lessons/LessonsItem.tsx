import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {CompletedIcon} from '~/components/Icons/CompletedIcon';
import {DownloadIcon} from '~/components/Icons/DownloadIcon';
import {FavoriteIcon} from '~/components/Icons/FavoriteIcon';
import {Song} from '~/data/content/interfaces';

const LessonsItem = ({lesson, styles, navigationToLesson}) => {
  const soundsList: string[] = lesson.sounds.map((sound: Song) => sound.title);

  return (
    <View style={styles.itemListContainer}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={navigationToLesson}>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        {soundsList.map((sound, index) => (
          <Text key={`${lesson.pk}_${index}`} style={styles.lessonSounds}>
            {sound}
          </Text>
        ))}
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <CompletedIcon size={scale(10)} />
        <FavoriteIcon size={scale(10)} />
        <DownloadIcon size={scale(10)} />
      </View>
    </View>
  );
};

export default LessonsItem;
