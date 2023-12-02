import React from 'react';
import {View, Image, Text} from 'react-native';
import {Scheme} from '~/entities/lesson';
import createStyles from './CustomizedScheme.styles';
import {useSongSettings} from '~/features/songSettings';
import {SCHEME_BASE_SIZE} from '~/shared/config/consts';

interface Props {
  scheme: Scheme;
}

export const CustomizedScheme: React.FC<Props> = ({scheme}) => {
  const styles = createStyles();
  const schemeSize = useSongSettings(state => state.schemeSize) || 100;

  const getImageSize = (
    originalImageWidth: number,
    originalImageHeight: number,
  ) => {
    const height = Math.round(SCHEME_BASE_SIZE * (schemeSize / 100));
    const imageSizeCoef = originalImageWidth / originalImageHeight;
    const width = Math.round(height * imageSizeCoef);
    return {width, height};
  };

  return (
    <View style={styles.schemeContainer}>
      <Text style={styles.inscriptionText}>{scheme.inscription}</Text>
      <Image
        source={{
          uri: 'asset:/lesson_schemes/' + scheme.image.split('/').pop(),
        }}
        style={getImageSize(scheme.width, scheme.height)}
      />
    </View>
  );
};
