import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from './interfaces';

export const getMaterialIcon = (name: string, props?: IconProps) => (
  <MaterialCommunityIcons name={name} {...props} />
);

export const MetronomeIcon: React.FC<IconProps> = props => (
  <MaterialCommunityIcons name="metronome" {...props} />
);

export const SettingsIcon: React.FC<IconProps> = props => (
  <MaterialCommunityIcons name="cog-outline" {...props} />
);

export const PinIcon: React.FC<IconProps> = props => (
  <MaterialCommunityIcons name="pin" {...props} />
);
