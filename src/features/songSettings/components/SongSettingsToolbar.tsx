import React from 'react';
import {View} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';
import {IconButton} from '~/shared/components/Buttons';
import {useSongSettings} from '../model';
import createStyles from './SongSettingsToolbar.styles';

interface Props {
  showSettings: () => void;
}

export const SongSettingsToolbar: React.FC<Props> = ({showSettings}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const togglePanelPinned = useSongSettings(state => state.togglePanelPinned);

  return (
    <View style={styles.container}>
      <IconButton
        isActive={false}
        iconName={'cog-outline'}
        onPressHandler={() => {
          showSettings();
        }}
        a11yLabel="Показать настройки"
        a11yHint="Показывает настройки внешнего вида урока"
      />
      <IconButton
        isActive={false}
        iconName={'eye-off-outline'}
        onPressHandler={() => {
          togglePanelPinned();
        }}
        a11yLabel="Спрятать панель"
        a11yHint="Прячет панель с автопрокруткой и метрономом"
      />
    </View>
  );
};
