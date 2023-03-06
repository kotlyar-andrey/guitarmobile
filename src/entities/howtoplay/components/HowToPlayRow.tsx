import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Lesson} from '~/entities/lesson';
import {useLessonSettings} from '~/features/lessonsSettings';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './HowToPlayRow.styles';

interface Props {
  howtoplay: Lesson;
  navigationToHowToPlay: () => void;
}

export const HowToPlayRow: React.FC<Props> = ({
  howtoplay,
  navigationToHowToPlay,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const getSettingsByPk = useLessonSettings(state => state.getSettingsByPk);
  const lessonSettings = getSettingsByPk(howtoplay.pk);
  const {isLessonFavorite} = lessonSettings;

  return (
    <View style={styles.itemListContainer}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={navigationToHowToPlay}
        accessible={true}
        accessibilityLabel={howtoplay.title}
        accessibilityHint="Нажмите, чтобы перейти к уроку">
        <Text style={styles.lessonTitle}>{howtoplay.title}</Text>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        {isLessonFavorite && (
          <MaterialCommunityIcons
            name="heart"
            color="red"
            size={moderateScale(14)}
          />
        )}
      </View>
    </View>
  );
};
