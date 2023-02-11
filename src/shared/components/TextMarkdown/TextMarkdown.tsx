import React from 'react';
import Markdown from 'react-native-markdown-display';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './TextMarkdown.styles';

/**
 * Значение разметки в песнях:
 *
 * # - важная информация, выделена цветом.
 *     Например, "перестаем глушить щелчки"
 *     Стоит заменить ##, ### или ####
 *
 * ##, #### - используется, например, в уроке № 0, но отображается, как обычный текст.
 *
 * ##### - аккорды, начиная со второго куплета.
 *         Использовалось, чтобы скрывать аккорды, кроме первого куплета и припева.
 *         Больше не актуально
 *
 * ###### - строка Куплет №..., выделена цветом.
 *
 * Вынести цвет в тему!
 */

interface Props {
  children: React.ReactNode;
  size: number;
}

export const TextMarkdown: React.FC<Props> = ({children, size}) => {
  const theme = useTheme();

  const styles = createStyles(theme, size);

  return (
    <Markdown style={styles} mergeStyle={false}>
      {children}
    </Markdown>
  );
};
