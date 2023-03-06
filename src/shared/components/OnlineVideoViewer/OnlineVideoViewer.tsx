import React from 'react';
import {Linking} from 'react-native';
import {FillButton} from '~/shared/components/Buttons';

interface Props {
  video: string;
  navigation: any;
}

export const OnlineVideoViewer: React.FC<Props> = ({video, navigation}) => {
  const videoId = video.split('/').pop();
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

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

  return (
    <FillButton
      text="Смотреть онлайн"
      iconName="youtube"
      a11yHint="Смотреть видео-урок"
      a11yLabel="Нажмите, чтобы смотреть видео-урок онлайн"
      onPressHandler={watchVideoInYoutube}
    />
  );
};
