import React from 'react';
import {View, Text} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {useLessonSettings} from '~/features/lessonsSettings';
import {useTheme} from '~/features/themeSwitcher';
import {FillButton} from '~/shared/components/Buttons';
import {OnlineVideoViewer} from '~/shared/components/OnlineVideoViewer';
import {TitleContainer} from '~/shared/components/TitleContainer';
import {VideoDownloader} from './VideoDownloader';

import createStyles from './VideoView.styles';

interface Props {
  video: string;
  lessonType: 'lesson' | 'howtoplay';
  lessonNumber: number;
  lessonPk: number;
  navigation: any;
}

export const VideoView: React.FC<Props> = ({
  video,
  lessonType,
  lessonNumber,
  lessonPk,
  navigation,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {getSettingsByPk, removeVideoPath} = useLessonSettings(state => ({
    getSettingsByPk: state.getSettingsByPk,
    removeVideoPath: state.removeVideoPath,
  }));

  const {downloadedVideoPath} = getSettingsByPk(lessonPk);

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
    <TitleContainer title="Видео-урок:">
      <OnlineVideoViewer video={video} navigation={navigation} />
      {downloadedVideoPath && (
        <View style={styles.row}>
          <View style={styles.flex4}>
            <FillButton
              text="Смотреть офлайн"
              iconName="play"
              a11yHint="Смотреть видео-урок"
              a11yLabel="Нажмите, чтобы смотреть видео-урок офлайн"
              size={2}
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
    </TitleContainer>
  );
};
