import React from 'react';
import {useWindowDimensions, View, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import YoutubePlayer from 'react-native-youtube-iframe';
import VideoPlayer from 'react-native-video-controls';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MainNavigationType} from '~/app/navigation';
import {moderateScale} from 'react-native-size-matters';

import {Loading} from '~/shared/components/Loading';
import {useTheme} from '~/features/themeSwitcher';

type Props = NativeStackScreenProps<MainNavigationType, 'ModalVideo'>;

export const ModalVideo: React.FC<Props> = ({navigation, route}) => {
  const {type, uri} = route.params;

  const {width, height} = useWindowDimensions();

  const theme = useTheme();

  const getVideoSize = () => {
    const maxAvaliableHeight = height - 260;
    let videoWidth = width;
    let videoHeight = (videoWidth * 9) / 16;
    if (videoHeight > maxAvaliableHeight) {
      videoHeight = maxAvaliableHeight;
      videoWidth = (videoHeight * 16) / 9;
    }
    return {videoWidth, videoHeight};
  };

  const {videoWidth, videoHeight} = getVideoSize();

  const [loading, setLoading] = React.useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="window-close"
          size={moderateScale(42)}
          color="#434343"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      {loading && <Loading />}
      {type === 'online' && (
        <YoutubePlayer
          height={videoHeight}
          width={videoWidth}
          play={!loading}
          videoId={uri}
          onReady={() => {
            setLoading(false);
          }}
        />
      )}
      {type === 'offline' && (
        <VideoPlayer
          source={{
            uri: 'http://guitar0.kotdatacenter.net/files/lessons/lesson1.mp4', // TODO
          }}
          disableBack={true}
          disableVolume={true}
          disableFullscreen={true}
          seekColor={theme.colors.primary}
          controlTimeout={5000}
          onLoad={() => {
            setLoading(false);
          }}
        />
      )}
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  header: {
    minHeight: 40,
  },
  footer: {
    height: 160,
    width: 1999,
    backgroundColor: 'red',
  },
});
