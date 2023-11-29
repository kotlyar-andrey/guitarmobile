import React from 'react';
import {View, Text, Image} from 'react-native';
import {Scheme} from '~/entities/lesson';
import createStyles from './SchemesContainer.styles';
import {useSongSettings} from '~/features/songSettings';

interface Props {
  schemes: Scheme[];
}

export const SchemesContainer: React.FC<Props> = ({schemes}) => {
  const styles = createStyles();

  // На данный момент для изображений используется тот же размер, что и для
  // интерактивных ритмических рисунков
  const beatSize = useSongSettings(state => state.beatSize) || 3;

  const getImageSize = (
    originalImageWidth: number,
    originalImageHeight: number,
  ) => {
    const height = beatSize * 50 + 20;
    const imageSizeCoef = originalImageWidth / originalImageHeight;
    const width = Math.round(height * imageSizeCoef);
    return {width, height};
  };
  return (
    <View style={styles.container}>
      {schemes.map(scheme => (
        <View key={scheme.pk} style={styles.schemeContainer}>
          <Text style={styles.inscriptionText}>{scheme.inscription}</Text>
          <Image
            source={{
              uri: 'asset:/lesson_schemes/' + scheme.image.split('/').pop(),
            }}
            style={getImageSize(scheme.width, scheme.height)}
          />
        </View>
      ))}
    </View>
  );
};
