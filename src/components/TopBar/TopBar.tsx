import {Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '~/theming';
import createStyles from './TopBar.styles';
import BackArrow from '~/components/Icons/BackArrow';

interface Props {
  title: string;
  backArrow: boolean;
  navigation: any;
}

const TopBar: React.FC<Props> = ({title, backArrow, navigation}) => {
  const theme = useTheme();

  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      {backArrow && (
        <BackArrow
          onPress={() => {
            navigation.goBack();
          }}
          color={theme.colors.onPrimary}
        />
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TopBar;
