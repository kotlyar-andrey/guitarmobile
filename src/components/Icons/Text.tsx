import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from './interfaces';

export const TextIcon = (props: IconProps) => {
  return (
    <MaterialCommunityIcons name="file-document-outline" color={props.color} />
  );
};
