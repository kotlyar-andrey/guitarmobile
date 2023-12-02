import React from 'react';
import {View} from 'react-native';
import {Scheme} from '~/entities/lesson';
import createStyles from './SchemesContainer.styles';

import {CustomizedScheme} from './CustomizedScheme';

interface Props {
  schemes: Scheme[];
}

export const SchemesContainer: React.FC<Props> = ({schemes}) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      {schemes.map(scheme => (
        <CustomizedScheme key={scheme.pk} scheme={scheme} />
      ))}
    </View>
  );
};
