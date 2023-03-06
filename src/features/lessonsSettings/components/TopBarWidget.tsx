import React from 'react';
import {View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './TopBarWidget.styles';

interface Props {
  isComplite?: boolean;
  isFavorite: boolean;
  toggleComplite?: () => void;
  toggleFavorite: () => void;
}

export const TopBarWidget: React.FC<Props> = ({
  isComplite,
  isFavorite,
  toggleComplite,
  toggleFavorite,
}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        accessibilityLabel={
          isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'
        }
        accessibilityRole="button"
        name="heart"
        color={isFavorite ? 'red' : theme.colors.background}
        size={moderateScale(22)}
        onPress={() => {
          toggleFavorite();
        }}
      />
      {toggleComplite && (
        <MaterialCommunityIcons
          accessibilityLabel={
            isComplite
              ? 'Отметить урок как не пройденный'
              : 'Отметить урок как пройденный'
          }
          accessibilityRole="button"
          name="check-circle"
          color={isComplite ? 'green' : theme.colors.background}
          size={moderateScale(22)}
          onPress={() => {
            toggleComplite();
          }}
        />
      )}
    </View>
  );
};
