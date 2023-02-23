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
        active={false}
        iconName={'cog-outline'}
        onPressHandler={() => {
          showSettings();
        }}
      />
      <IconButton
        active={false}
        iconName={'eye-off-outline'}
        onPressHandler={() => {
          togglePanelPinned();
        }}
      />
    </View>
  );
};
