import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Lesson} from '~/entities/lesson';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './FavoriteRow.styles';

interface Props {
  item: Lesson;
  navigationTo: () => void;
}

export const FavoriteRow: React.FC<Props> = ({item, navigationTo}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.itemListContainer}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={navigationTo}
        accessible={true}
        accessibilityLabel={item.title}
        accessibilityHint="Нажмите, чтобы перейти к уроку">
        <Text style={styles.lessonTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
