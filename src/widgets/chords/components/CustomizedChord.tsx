import React from 'react';
import {View} from 'react-native';
import {Chord, BaseChordView} from '~/entities/chord';
import {useSongSettings} from '~/features/songSettings';
import createStyles from './CustomizedChord.styles';

/**
 * Требования к аккорду:
 * - вертикальная и горизонтальная ориентация
 * - изменение размера
 * - проигрывание звука аккорда?
 * - транспонирование аккордов (на полтона выше-ниже,
 *    реализовать в SongView с заменой всех аккордов на другие в т.ч. в тексте)
 * - прогрывание на кнопку с одной стороны от названия аккорда;
 * - справка об условных обозначениях при нажатии на кнопку с другой стороны
 *
 * Сейчас данные об аккорде берутся из сервера. Полностью. на каком ладу какая струна каким пальцем зажата.
 * Для уроков это необходимо, чтобы показывать именно те аккорды, которые нужны для конкретного урока.
 */

interface Props {
  chord: Chord;
}

export const CustomizedChordView: React.FC<Props> = ({chord}) => {
  const {chordOrientation, chordSize} = useSongSettings(state => ({
    chordOrientation: state.chordOrientation,
    chordSize: state.chordSize,
  }));

  const styles = createStyles(chordSize, chordOrientation);

  return (
    <View style={styles.chordContainer}>
      <BaseChordView chord={chord} orientation={chordOrientation} />
    </View>
  );
};
