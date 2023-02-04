import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '~/entities/theming';
import createStyles from './ErrorMessage.styles';
import {FillButton} from '../Buttons';
import {goToUrl} from '~/shared/utils';
import {ADMIN_EMAIL} from '~/shared/config/consts';

interface Props {
  text: string;
  handler?: () => void;
}

/**
 * Показывает текст ошибки и пути ее решения.
 * Отображается во весь эран
 */
export const ErrorMessage: React.FC<Props> = ({text, handler}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const mailto = `mailto:${ADMIN_EMAIL}?subject=Проблема с приложением Гитара с нуля&body=Проблема в том, что`;

  return (
    <View style={styles.container}>
      <View style={styles.errorContainer}>
        <Text style={styles.text}>{text}</Text>
        {handler && (
          <FillButton
            onPressHandler={handler}
            a11yLabel="Попробовать еще раз"
            a11yHint="Нажмите, чтобы попытать решить проблему"
            text="Попробовать еще раз"
          />
        )}
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.text}>
          Если проблема остается, подробно опишите ее в письме по адресу {'\n'}
          {ADMIN_EMAIL}
        </Text>
        <FillButton
          text="Написать нам"
          a11yLabel="Написать письмо"
          a11yHint="Написать электронное письмо с описанием ошибки"
          onPressHandler={goToUrl(mailto)}
        />
      </View>
    </View>
  );
};
