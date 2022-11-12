import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '~/theming';
import createStyles from './ButtonInline.styles';

interface Props {
  title: string;
  onPressHandler: () => void;
  icon?: JSX.Element;
}

const ButtonInline: React.FC<Props> = ({title, onPressHandler, icon}) => {
  const theme = useTheme();

  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.buttonContainer}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonInline;
