import {View, Text, Image} from 'react-native';
import React from 'react';
import {useTheme} from '~/entities/theming';

import createStyles from './Logo.styles';

const logoImage = require('~/entities/theming/assets/images/logo.png');

export const Logo: React.FC = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logoImage} />
      <Text style={styles.logoText}>Гитара с нуля</Text>
    </View>
  );
};
