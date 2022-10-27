import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  onPressHandler: () => void;
}

const ButtonInline: React.FC<Props> = ({title, onPressHandler}) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonInline;
