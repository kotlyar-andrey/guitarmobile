import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from './interfaces';

export const FavoriteIcon = (props: IconProps) => {
  const size = props.size ? props.size : 14;
  return (
    <MaterialCommunityIcons
      name="heart"
      color={'red'}
      size={moderateScale(size)}
    />
  );
};
