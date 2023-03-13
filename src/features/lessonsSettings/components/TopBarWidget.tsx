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

  const styles = createStyles();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.icon}
        accessibilityLabel={
          isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'
        }
        accessibilityRole="button"
        name={isFavorite ? 'heart' : 'heart-outline'}
        color={isFavorite ? theme.colors.isFavoriteColor : theme.colors.primary}
        size={moderateScale(24)}
        onPress={() => {
          toggleFavorite();
        }}
      />
      {toggleComplite && (
        <MaterialCommunityIcons
          style={styles.icon}
          accessibilityLabel={
            isComplite
              ? 'Отметить урок как не пройденный'
              : 'Отметить урок как пройденный'
          }
          accessibilityRole="button"
          name={isComplite ? 'check-circle' : 'check-circle-outline'}
          color={
            isComplite ? theme.colors.isCompliteColor : theme.colors.primary
          }
          size={moderateScale(24)}
          onPress={() => {
            toggleComplite();
          }}
        />
      )}
    </View>
  );
};
