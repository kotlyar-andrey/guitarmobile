import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from 'react-native-size-matters';
import {useTheme} from '~/theming';

export const ShowIcon = () => {
  const theme = useTheme();

  return (
    <MaterialCommunityIcons
      name="eye-outline"
      color={theme.colors.secondary}
      size={scale(12)}
    />
  );
};
