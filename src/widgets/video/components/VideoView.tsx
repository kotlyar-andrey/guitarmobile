import React from 'react';
import {ScrollView, View, Linking, Text} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {Addition} from '~/entities/lesson';
import {useLessonSettings} from '~/features/lessonsSettings';
import {useTheme} from '~/features/themeSwitcher';
import {FillButton} from '~/shared/components/Buttons';
import {VideoDownloader} from './VideoDownloader';

import createStyles from './VideoView.styles';

interface Props {
  video: string;
  additions: Addition[];
  lessonType: 'lesson' | 'howtoplay';
  lessonNumber: number;
  lessonPk: number;
  navigation: any;
}

export const VideoView: React.FC<Props> = ({
  video,
  // additions,
  lessonType,
  lessonNumber,
  lessonPk,
  navigation,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const videoId = video.split('/').pop();
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const {getSettingsByPk, removeVideoPath} = useLessonSettings(state => ({
    getSettingsByPk: state.getSettingsByPk,
    removeVideoPath: state.removeVideoPath,
  }));

  const {downloadedVideoPath} = getSettingsByPk(lessonPk);

  const watchVideoInYoutube = () => {
    Linking.canOpenURL(videoUrl)
      .then(supported => {
        if (supported) {
          Linking.openURL(videoUrl);
        } else {
          watchVideoOnlineInApp();
        }
      })
      .catch(() => {
        watchVideoOnlineInApp();
      });
  };

  const watchVideoOnlineInApp = () => {
    navigation.push('ModalVideo', {type: 'online', uri: videoId});
  };

  const watchvideoOffline = () => {
    navigation.push('ModalVideo', {type: 'offline', uri: downloadedVideoPath});
  };

  const removeVideo = () => {
    if (downloadedVideoPath) {
      ReactNativeBlobUtil.fs
        .unlink(downloadedVideoPath)
        .then(() => {
          removeVideoPath(lessonPk);
        })
        .catch(() => {
          removeVideoPath(lessonPk);
        });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <FillButton
        text="Смотреть онлайн"
        iconName="youtube"
        a11yHint="Смотреть видео-урок"
        a11yLabel="Нажмите, чтобы смотреть видео-урок онлайн"
        onPressHandler={watchVideoInYoutube}
      />
      {downloadedVideoPath && (
        <View style={styles.row}>
          <View style={styles.flex4}>
            <FillButton
              text="Смотреть офлайн"
              iconName="play"
              a11yHint="Смотреть видео-урок"
              a11yLabel="Нажмите, чтобы смотреть видео-урок офлайн"
              onPressHandler={watchvideoOffline}
            />
            <Text style={styles.hintText}>
              Сразу после загрузки видео может быть в плохом качестве - нужно
              немного подождать
            </Text>
          </View>
          <View style={styles.flex1}>
            <FillButton
              iconName="trash-can-outline"
              a11yHint="Удалить видео-урок"
              a11yLabel="Нажмите, чтобы удалить видео-урок с устройства"
              onPressHandler={removeVideo}
            />
          </View>
        </View>
      )}
      {!downloadedVideoPath && (
        <VideoDownloader
          lessonType={lessonType}
          lessonNumber={lessonNumber}
          lessonPk={lessonPk}
        />
      )}
    </ScrollView>
  );
};
