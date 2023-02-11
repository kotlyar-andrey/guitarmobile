import React from 'react';
import Svg, {Circle, Ellipse, Text, Line} from 'react-native-svg';
import {useTheme} from '~/features/themeSwitcher';
import {Chord} from '../../model';
import {
  getRoomeNumber,
  getTonicCoords,
  getStrokeWidth,
  getNoteColors,
  getA11yLabel,
  getA11yHint,
} from './utils';

interface Props {
  chord: Chord;
}

export const HorizontalChord: React.FC<Props> = ({chord}) => {
  const theme = useTheme();

  const {x: tonicX, y: tonicY} = getTonicCoords('horizontal', chord.title[0]);

  const strings = [0, 1, 2, 3, 4, 5];

  const frets = [0, 1, 2, 3, 4];

  const fretNumbers = [0, 1, 2, 3];

  const stringEnd = chord.start_lad === 1 ? 190 : 195;

  return (
    <Svg
      height="100%"
      width="100%"
      viewBox="0 0 200 100"
      accessible={true}
      accessibilityLabel={getA11yLabel(chord)}
      accessibilityHint={getA11yHint(chord)}>
      {/* Название */}
      <Text
        fill={theme.colors.text}
        fontSize="10"
        x="100"
        y="7"
        textAnchor="middle">
        {chord.title}
      </Text>
      <Text
        fill={theme.colors.text}
        fontSize="8"
        fontWeight="bold"
        x="100"
        y="14"
        textAnchor="middle">
        {chord.muz_title}
      </Text>
      {/* Тоника */}
      <Text
        fill={theme.colors.text}
        fontSize="6"
        fontWeight="bold"
        x={tonicX}
        y={tonicY}
        textAnchor="middle">
        T
      </Text>
      {/* Струны */}
      {strings.map(string => (
        <Line
          key={`stringN${string}`}
          x1="10"
          y1={94 - string * 12}
          x2={stringEnd}
          y2={94 - string * 12}
          stroke={theme.dark ? '#eee' : 'grey'}
          strokeWidth={getStrokeWidth(string)}
        />
      ))}
      {/* Лады */}
      {frets.map(fret => (
        <Line
          key={`fretN${fret}`}
          x1={10 + fret * 45}
          y1="25"
          x2={10 + fret * 45}
          y2="94"
          stroke={theme.dark ? '#F9F9F9' : 'gray'}
          strokeWidth={fret === 4 && chord.start_lad === 1 ? 4 : 1}
        />
      ))}
      {/* Номера ладов */}
      {fretNumbers.map(fret => (
        <Text
          key={`fretNumberN${fret}`}
          fill={theme.colors.text}
          fontSize="9"
          x={168 - fret * 45}
          y="25">
          {getRoomeNumber(chord.start_lad + fret)}
        </Text>
      ))}
      {/* Ноты */}
      {chord.bare && (
        <>
          <Ellipse
            cx="168"
            cy="64"
            rx="5"
            ry="32"
            stroke="red"
            strokeWidth="0.5"
            fill="pink"
          />
          <Text fill="red" fontSize="7" x="168" y="64" textAnchor="middle">
            1
          </Text>
        </>
      )}
      {chord.lads.map((fret, index) => {
        const realLad = fret.lad - chord.start_lad + 1;
        const number = fret.number;
        // Крестики
        if (fret.lad === -1) {
          return (
            <React.Fragment key={`fret-${chord.pk}-${index}`}>
              <Line
                x1="3"
                y1={94 - 12 * index - 2}
                x2="7"
                y2={94 - 12 * index + 2}
                stroke={theme.dark ? '#f0f0f0' : 'gray'}
                strokeWidth="1"
              />
              <Line
                x1="3"
                y1={94 - 12 * index + 2}
                x2="7"
                y2={94 - 12 * index - 2}
                stroke={theme.dark ? '#f0f0f0' : 'gray'}
                strokeWidth="1"
              />
            </React.Fragment>
          );
        } else if (fret.lad !== 0) {
          const {fillColor, textColor} = getNoteColors(number);
          return (
            <React.Fragment key={`lad-${chord.pk}-${index}`}>
              <Circle
                cx={168 - (realLad - 1) * 45}
                cy={94 - 12 * index}
                r="5"
                fill={fillColor}
                stroke={textColor}
                strokeWidth="0.5"
              />
              <Text
                fill={textColor}
                fontSize="9"
                x={168.8 - (realLad - 1) * 45}
                y={97 - 12 * index}
                textAnchor="middle">
                {number}
              </Text>
            </React.Fragment>
          );
        }
      })}
    </Svg>
  );
};
