import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './FavoriteHeader.styles';

interface Props {
  text: string;
}

export const FavoriteHeader: React.FC<Props> = ({text}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};
