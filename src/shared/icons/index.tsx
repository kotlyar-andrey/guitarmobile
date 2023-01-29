import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
}

export const getIconImage = (props: IconProps) => (
  <MaterialCommunityIcons {...props} />
);
