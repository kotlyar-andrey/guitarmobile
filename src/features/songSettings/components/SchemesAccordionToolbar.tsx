import React from 'react';
import {View} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';
import {IconButton} from '~/shared/components/Buttons';
import {useSongSettings} from '../model';
import createStyles from './Toolbars.styles';

export const SchemesAccordionToolbar: React.FC = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {increaseSchemeSize, decreaseSchemeSize} = useSongSettings(state => ({
    increaseSchemeSize: state.increaseSchemeSize,
    decreaseSchemeSize: state.decreaseSchemeSize,
  }));

  return (
    <View style={styles.container}>
      <IconButton
        isActive={false}
        flat={true}
        iconName={'minus'}
        onPressHandler={() => {
          decreaseSchemeSize();
        }}
        a11yLabel="Уменьшить ритмические рисунки"
        a11yHint="Уменьшает размер ритмических рисунков"
      />
      <IconButton
        isActive={false}
        flat={true}
        iconName={'plus'}
        onPressHandler={() => {
          increaseSchemeSize();
        }}
        a11yLabel="Увеличить ритмические рисунки"
        a11yHint="Увеличивает размер ритмических рисунков"
      />
    </View>
  );
};
