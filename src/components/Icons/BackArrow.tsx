import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/theming';
import {IconProps} from './interfaces';

const BackArrow = (props: IconProps) => {
  const theme = useTheme();

  const color = props.color ? props.color : theme.colors.primary;

  //const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <MaterialCommunityIcons
      name="arrow-left"
      color={color}
      size={28}
      onPress={props.onPress}
    />
  );
};

export default BackArrow;
