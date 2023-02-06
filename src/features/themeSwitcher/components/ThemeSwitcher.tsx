import {View} from 'react-native';
import React from 'react';
import {useTheme, useThemeState} from '../model';
import {Dropdown} from '~/shared/components/Dropdown';
import {ColorSchemes, ThemeTypes} from '~/entities/theming';
import createStyles from './ThemeSwitcher.styles';

export const ThemeSwitcher: React.FC = () => {
  const contentState = useThemeState(state => ({
    colorScheme: state.colorScheme,
    themeType: state.themeType,
    changeColorScheme: state.changeColorScheme,
    changeThemeType: state.changeThemeType,
  }));
  const {colorScheme, themeType, changeColorScheme, changeThemeType} =
    contentState;

  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Dropdown
        title="Цветовая схема:"
        items={[
          {label: 'По-умолчанию', value: 'default'},
          {label: 'Красная', value: 'red'},
        ]}
        selectedValue={colorScheme}
        setNewValue={(newValue: string) =>
          changeColorScheme(ColorSchemes[newValue])
        }
      />
      <Dropdown
        title="Тема:"
        items={[
          {label: 'Светлая', value: 'light'},
          {label: 'Тёмная', value: 'dark'},
          {label: 'Системная', value: 'system'},
        ]}
        selectedValue={themeType}
        setNewValue={(newValue: string) =>
          changeThemeType(ThemeTypes[newValue])
        }
      />
    </View>
  );
};
