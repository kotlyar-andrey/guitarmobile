import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from './interfaces';

export const ReloadIcon = (props: IconProps) => {
  return (
    <MaterialCommunityIcons
      name="reload"
      color={props.color}
      size={moderateScale(14)}
    />
  );
};
