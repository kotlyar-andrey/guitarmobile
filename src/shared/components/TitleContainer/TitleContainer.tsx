import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';

import createStyles from './TitleContainer.styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const TitleContainer: React.FC<Props> = ({title, children}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        {children}
      </View>
    </View>
  );
};
