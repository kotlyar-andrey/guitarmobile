import React from 'react';
import {View} from 'react-native';
import {useSongSettings} from '~/features/songSettings';
import {useTheme} from '~/features/themeSwitcher';
import {IconButton} from '../Buttons';
import createStyles from './SongBottomPanel.styles';

interface Props {
  toolbars: React.ReactNode[];
}

export const SongBottomPanel: React.FC<Props> = ({toolbars}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {visible, togglePanelVisible} = useSongSettings(state => ({
    visible: state.panelPinned,
    togglePanelVisible: state.togglePanelPinned,
  }));

  return (
    <>
      {visible && (
        <View style={styles.container}>
          {toolbars.map((toolbar, index) => (
            <View key={`toolbar${index}`}>{toolbar}</View>
          ))}
        </View>
      )}

      {!visible && (
        <View style={styles.hidden}>
          <IconButton
            isActive={false}
            iconName={'eye-outline'}
            onPressHandler={() => {
              togglePanelVisible();
            }}
            a11yLabel="Показать или спрятать панель"
            a11yHint="Показать или спрятать панель с автопрокруткой и метрономом"
          />
        </View>
      )}
    </>
  );
};
