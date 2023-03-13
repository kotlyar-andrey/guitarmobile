import {Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import createStyles from './TopBar.styles';
import {moderateScale} from 'react-native-size-matters';
import {useTheme} from '~/features/themeSwitcher';

interface Props {
  title: string;
  backArrow: boolean;
  navigation: any;
  rightWidget?: JSX.Element;
}

export const TopBar: React.FC<Props> = ({
  title,
  backArrow,
  navigation,
  rightWidget,
}) => {
  const theme = useTheme();

  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <View style={styles.horizontalBlock}>
        {backArrow && (
          <MaterialCommunityIcons
            accessibilityLabel="Назад"
            accessibilityHint="Нажмите, чтобы вернуть на предыдущий экран"
            accessibilityRole="button"
            name="arrow-left"
            color={theme.colors.primary}
            size={moderateScale(24)}
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightWidget}
    </View>
  );
};
