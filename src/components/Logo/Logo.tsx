import {View, Text, Image} from 'react-native';
import React from 'react';
import {useTheme} from '~/theming';

import createStyles from './Logo.styles';

const logoImage = require('~/assets/images/logo.png');

const Logo: React.FC = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logoImage} />
      <Text style={styles.logoText}>Гитара с нуля</Text>
    </View>
  );
};

export default Logo;
