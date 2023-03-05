import React from 'react';
import {View} from 'react-native';
import {BaseBeatView, BasePlunkView, Beat} from '~/entities/beat';
import {useSongSettings} from '~/features/songSettings';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './CustomizedBeat.styles';

/**
 * Бой (ритмический рисунок)
 * Содрежит графическое отображение боя. Оно включает:
 * - большая стрелочка вверх или вниз - бой по всем струнам;
 * - маленькая стрелочка вниз или вверх - бой только по верхним струнам, слабый бой;
 * - стрелочки вверх или вниз (большая или маленькая, нужно решить, может даже и то, и другое) -
 *      удар по заглушенным струнам (например, для ритмов "регги")
 * - большие стрелочки вверх или вниз с чертой внизу - удар с заглушкой в конце
 *     (тоже для ритмов регги)
 * - Щ - щелчок, когда удар по струнам глушится
 * - пустота - пауза
 * - круги с номерами струн для проигрывания переборов
 * - круги с маленькими стрелочками для боя с перебором (вниз-вверх в виде одного удара)
 *
 * Сделан полностью на SVG с возможностью проигрывания и анимации.
 *
 * Каждая стрелочка находится на отдельном "такте"
 * Звучание зависит от bpm и длины ноты.
 * Бой с видами ударов и их длительностью передается в нативный компонент. Там формируется звуковая дорожка из нужных звуков.
 * При нажатии начинает проигрываться звук, который перед каждым звуком запускает колбек в который передает номер проигрываемого элемента.
 * Это нужно для синхронизации звука с визуальным отображением боя

 */

interface Props {
  beat: Beat;
}

export const CustomizedBeatView: React.FC<Props> = ({beat}) => {
  const beatSize = useSongSettings(state => state.beatSize);

  const theme = useTheme();

  const styles = createStyles(theme, beatSize);

  return beat.beat_type === 0 ? (
    <View style={styles.beatContainer}>
      <BaseBeatView beat={beat} />
    </View>
  ) : (
    <View style={styles.plunkContainer}>
      <BasePlunkView beat={beat} />
    </View>
  );
};
