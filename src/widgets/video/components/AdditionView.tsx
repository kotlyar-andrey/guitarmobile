import React from 'react';
import {Linking} from 'react-native';
import {Addition} from '~/entities/lesson';
import {FillButton} from '~/shared/components/Buttons';
import {TitleContainer} from '~/shared/components/TitleContainer';

interface Props {
  additions: Addition[];
  navigation: any;
}

export const AdditionView: React.FC<Props> = ({additions, navigation}) => {
  const watchVideoInYoutube = (video: string) => {
    const videoId = video.split('/').pop();
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.canOpenURL(videoUrl)
      .then(supported => {
        if (supported) {
          Linking.openURL(videoUrl);
        } else {
          watchVideoOnlineInApp(videoId);
        }
      })
      .catch(() => {
        watchVideoOnlineInApp(videoId);
      });
  };

  const watchVideoOnlineInApp = videoId => {
    navigation.push('ModalVideo', {type: 'online', uri: videoId});
  };

  return (
    <TitleContainer title="Дополнительно:">
      {additions.length > 0 && (
        <>
          {additions.map(addition => (
            <FillButton
              a11yLabel={addition.title}
              a11yHint="Дополнение к уроку"
              text={addition.title}
              onPressHandler={() => {
                watchVideoInYoutube(addition.video);
              }}
            />
          ))}
        </>
      )}
    </TitleContainer>
  );
};
