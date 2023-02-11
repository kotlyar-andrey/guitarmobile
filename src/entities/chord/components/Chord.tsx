import React from 'react';
import {Chord} from '~/entities/chord';
import {HorizontalChord} from './HorizontalChord';
import {VerticalChord} from './VerticalChord';

interface Props {
  chord: Chord;
  orientation: 'horizontal' | 'vertical';
}

/**
 * Базовое представление аккорда. Даже не имеет размера - просто отрисовывает данные аккорда в нужной ориентации.
 * Размер и другой функционал определяется родительским виджетом.
 */
export const BaseChordView: React.FC<Props> = ({chord, orientation}) => {
  return orientation === 'vertical' ? (
    <VerticalChord chord={chord} />
  ) : (
    <HorizontalChord chord={chord} />
  );
};
