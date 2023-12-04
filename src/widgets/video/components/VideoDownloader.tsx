import React from 'react';
import {Text} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {useLessonSettings} from '~/features/lessonsSettings';
import {useTheme} from '~/features/themeSwitcher';
import {FillButton} from '~/shared/components/Buttons';
import {DOWNLOAD_VIDEO_BASEURL} from '~/shared/config/consts';

import createStyles from './VideoDownloader.styles';

interface Props {
  lessonType: 'lesson' | 'howtoplay';
  lessonNumber: number;
  lessonPk: number;
}

interface DownloadProgress {
  received: number;
  total: number;
}

export const VideoDownloader: React.FC<Props> = ({
  lessonType,
  lessonNumber,
  lessonPk,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [loading, setLoading] = React.useState<boolean>(false);

  const [videoDownloadProgress, setVideoDownloadProgress] =
    React.useState<DownloadProgress>({received: 0, total: 1});

  const progressInPercent = Math.floor(
    (videoDownloadProgress.received / videoDownloadProgress.total) * 100,
  );

  const saveVideoPath = useLessonSettings(state => state.saveVideoPath);

  let downloadTask = ReactNativeBlobUtil.config({
    path:
      ReactNativeBlobUtil.fs.dirs.DocumentDir +
      `/guitarfrom0/${lessonType}${lessonNumber}.mp4`,
  }).fetch(
    'GET',
    DOWNLOAD_VIDEO_BASEURL + `/${lessonType}s/${lessonType}${lessonNumber}.mp4`,
  );

  const downloadVideo = () => {
    setLoading(true);
    try {
      downloadTask
        .progress({count: 10}, (received, total) => {
          setVideoDownloadProgress({
            received: Math.floor(received / 1048576),
            total: Math.floor(total / 1048576),
          });
        })
        .then(res => {
          const respath = res.path();
          saveVideoPath(lessonPk, respath);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } catch {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading && (
        <FillButton
          text="Скачать видео"
          iconName="download"
          a11yHint="Скачать видео-урок"
          a11yLabel="Нажмите, чтобы скачать видео-урок и смотреть его офлайн"
          size={2}
          onPressHandler={downloadVideo}
        />
      )}
      {loading && (
        <Text style={styles.progressText}>
          Прогресс: {videoDownloadProgress.received} Mb /{' '}
          {videoDownloadProgress.total} Mb {progressInPercent}%
        </Text>
      )}
    </>
  );
};
