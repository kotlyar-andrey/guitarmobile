import React from 'react';
import {View} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';
import {IconButton} from '~/shared/components/Buttons';
import {useSongSettings} from '../model';
import createStyles from './Toolbars.styles';

export const TextAccordionToolbar: React.FC = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {increaseTextSize, decreaseTextSize} = useSongSettings(state => ({
    increaseTextSize: state.increaseTextSize,
    decreaseTextSize: state.decreaseTextSize,
  }));

  return (
    <View style={styles.container}>
      <IconButton
        isActive={false}
        flat={true}
        iconName={'minus'}
        onPressHandler={() => {
          decreaseTextSize();
        }}
        a11yLabel="Уменьшить размер шрифта"
        a11yHint="Уменьшает размер шрифта для текста"
      />
      <IconButton
        isActive={false}
        flat={true}
        iconName={'plus'}
        onPressHandler={() => {
          increaseTextSize();
        }}
        a11yLabel="Увеличить размер шрифта"
        a11yHint="Увеличивает размер шрифта для текста"
      />
    </View>
  );
};
