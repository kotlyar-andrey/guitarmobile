import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from './interfaces';

export const DownloadIcon = (props: IconProps) => {
  return (
    <MaterialCommunityIcons
      name="download"
      color={'#7777ff'}
      size={props.size}
    />
  );
};
