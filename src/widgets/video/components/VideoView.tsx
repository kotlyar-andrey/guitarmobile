import React from 'react';
import {View, Linking} from 'react-native';
import {Addition} from '~/entities/lesson';
import {useTheme} from '~/features/themeSwitcher';
import {FillButton} from '~/shared/components/Buttons';

import createStyles from './VideoView.styles';

interface Props {
  video: string;
  additions: Addition[];
  navigation: any;
}

export const VideoView: React.FC<Props> = ({video, additions, navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

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

  const watchvideoOffline = () => {
    navigation.push('ModalVideo', {type: 'offline', uri: videoId});
  };

  return (
    <View style={styles.container}>
      <FillButton
        text="Смотреть онлайн"
        iconName="youtube"
        a11yHint="Смотреть видео-урок"
        a11yLabel="Нажмите, чтобы смотреть видео-урок онлайн"
        onPressHandler={watchVideoInYoutube}
      />
      <FillButton
        text="Смотреть офлайн"
        iconName="play"
        a11yHint="Смотреть видео-урок"
        a11yLabel="Нажмите, чтобы смотреть видео-урок офлайн"
        onPressHandler={watchvideoOffline}
      />
    </View>
  );
};
