import {TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '~/theming';
import createStyles from './ButtonIcon.styles';
import {getMaterialIcon} from '../Icons';
import {IconProps} from '../Icons/interfaces';

interface Props {
  onPressHandler: () => void;
  iconName: string;
  active: boolean;
  iconProps?: IconProps;
}

/**
 * Кнопка, которая состооит только из иконки и имеет два состояния - активное и нет.
 * Используется в основном для панели инструментов.
 */
const ButtonIcon: React.FC<Props> = ({
  onPressHandler,
  iconName,
  active,
  iconProps,
}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  const iconResultProps = {
    ...iconProps,
    color: active ? theme.colors.onPrimary : theme.colors.primary,
  };

  const buttonColors = active ? styles.active : styles.inactive;

  const buttonStyle = [styles.button, buttonColors];

  return (
    <TouchableOpacity onPress={onPressHandler} style={buttonStyle}>
      {getMaterialIcon(iconName, iconResultProps)}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
