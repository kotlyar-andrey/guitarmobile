import React from 'react';
import {I_Chord} from '~/data/content/interfaces';
import HorizontalChord from './HorizontalChord';
import VerticalChord from './VerticalChord';

/**
 * Требования к аккорду:
 * - вертикальная и горизонтальная ориентация
 * - изменение размера
 * - проигрывание звука аккорда?
 * - транспонирование аккордов (на полтона выше-ниже,
 *    реализовать в SongView с заменой всех аккордов на другие в т.ч. в тексте)
 *
 * Сейчас данные об аккорде берутся из сервера. Полностью. на каком ладу какая струна каким пальцем зажата.
 * Для уроков это необходимо, чтобы показывать именно те аккорды, которые нужны для конкретного урока.
 */

interface Props {
  chord: I_Chord;
  orientation: 'horizontal' | 'vertical';
}
const ChordView = ({chord, orientation}: Props) => {
  return orientation === 'vertical' ? (
    <VerticalChord chord={chord} />
  ) : (
    <HorizontalChord chord={chord} />
  );
};

export default ChordView;
