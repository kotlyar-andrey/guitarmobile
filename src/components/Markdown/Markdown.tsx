import React from 'react';
import Markdown from 'react-native-markdown-display';
import {useTheme} from '~/theming';
import createStyles from './Markdown.styles';
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
 */

const SongMarkdown = ({children}) => {
  const theme = useTheme();

  const styles = createStyles(theme, 10);

  return (
    <Markdown style={styles} mergeStyle={false}>
      {children}
    </Markdown>
  );
};

export default SongMarkdown;
