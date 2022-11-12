import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from './interfaces';

export const FavoriteIcon = (props: IconProps) => {
  return (
    <MaterialCommunityIcons name="heart" color={'red'} size={props.size} />
  );
};
