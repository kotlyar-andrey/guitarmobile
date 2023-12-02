import React from 'react';
import {View} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';
import {FillButton} from '~/shared/components/Buttons';
import {ControlText} from '~/shared/components/primitives';
import {ADMIN_EMAIL} from '~/shared/config/consts';
import {goToUrl} from '~/shared/utils';
import createStyles from './RateWidget.styles';

export const FeedbackWidget = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const mailToAdmin = () => {
    goToUrl(`mailto:${ADMIN_EMAIL}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ControlText text="Обратная связь:" />
      </View>
      <View style={styles.column}>
        <FillButton
          iconName="email"
          a11yLabel="Обратная связь"
          a11yHint="Нажмите, чтобы написать нам"
          text="Напишите нам"
          size={1}
          onPressHandler={mailToAdmin}
        />
      </View>
    </View>
  );
};
