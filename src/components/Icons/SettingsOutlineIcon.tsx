import React from 'react';
import {scale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/theming';

export const SettingsOutlineIcon = () => {
  const theme = useTheme();

  return (
    <MaterialCommunityIcons
      name="cog-outline"
      color={theme.colors.secondary}
      size={scale(12)}
    />
  );
};
