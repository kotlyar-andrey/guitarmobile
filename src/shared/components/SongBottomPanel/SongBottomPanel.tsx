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
      {visible ? (
        <View style={visible ? styles.container : styles.hidden}>
          {toolbars.map((toolbar, index) => (
            <View key={`toolbar${index}`}>{toolbar}</View>
          ))}
        </View>
      ) : (
        <View style={styles.hidden}>
          <IconButton
            active={false}
            iconName={'eye-outline'}
            onPressHandler={() => {
              togglePanelVisible();
            }}
          />
        </View>
      )}
    </>
  );
};
