import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from './interfaces';

export const DownloadIcon = (props: IconProps) => {
  const size = props.size ? props.size : 14;
  return (
    <MaterialCommunityIcons
      name="download"
      color={'#7777ff'}
      size={moderateScale(size)}
    />
  );
};
