import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/features/themeSwitcher';

interface Props {
  toggleSettingsModalVisible: () => void;
}

export const SongSettingsTopBarWidget: React.FC<Props> = ({
  toggleSettingsModalVisible,
}) => {
  const theme = useTheme();

  return (
    <MaterialCommunityIcons
      name="cog-outline"
      size={moderateScale(16)}
      color={theme.colors.onPrimary}
      onPress={toggleSettingsModalVisible}
    />
  );
};
