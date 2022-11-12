import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from './interfaces';

export const CompletedIcon = (props: IconProps) => {
  return (
    <MaterialCommunityIcons
      name="check-circle"
      color={'green'}
      size={props.size}
    />
  );
};
