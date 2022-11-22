import React from 'react';
import Svg, {Circle, Ellipse, Text, Line} from 'react-native-svg';
import {useTheme} from '~/theming';
import {
  getRoomeNumber,
  getTonicCoords,
  getStrokeWidth,
  getNoteColors,
} from './utils';

const VerticalChord = ({chord}) => {
  const theme = useTheme();

  const {x: tonicX, y: tonicY} = getTonicCoords('vertical', chord.title[0]);

  const strings = [0, 1, 2, 3, 4, 5];

  const frets = [0, 1, 2, 3, 4];

  const fretNumbers = [0, 1, 2, 3];

  const stringBegin = chord.start_lad === 1 ? 30 : 25;

  return (
    <Svg height="90%" width="90%" viewBox="0 0 100 200">
      {/* Название */}
      <Text
        fill={theme.colors.text}
        fontSize="16"
        x="50"
        y="12"
        textAnchor="middle">
        {chord.title}
      </Text>
      <Text
        fill={theme.colors.text}
        fontSize="8"
        x="50"
        y="20"
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
          x1={90 - string * 15}
          y1={stringBegin}
          x2={90 - string * 15}
          y2="190"
          stroke={theme.dark ? '#eee' : 'grey'}
          strokeWidth={getStrokeWidth(string)}
        />
      ))}
      {/* Лады */}
      {frets.map(fret => (
        <Line
          key={`fretN${fret}`}
          x1="10"
          y1={30 + fret * 40}
          x2="90"
          y2={30 + fret * 40}
          stroke={theme.dark ? '#F9F9F9' : 'gray'}
          strokeWidth={fret === 0 && chord.start_lad === 1 ? 4 : 1}
        />
      ))}
      {/* Номера ладов */}
      {fretNumbers.map(fret => (
        <Text
          key={`fretNumberN${fret}`}
          fill={theme.colors.text}
          fontSize="9"
          x="2"
          y={53 + fret * 40}>
          {getRoomeNumber(chord.start_lad + fret)}
        </Text>
      ))}
      {/* Ноты */}
      {chord.bare && (
        <>
          <Ellipse
            cx="52.5"
            cy="50"
            rx="40"
            ry="6"
            stroke="red"
            strokeWidth="0.5"
            fill="pink"
          />

          <Text fill="red" fontSize="8" x="52.5" y="52.5" textAnchor="middle">
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
                x1={90 - 15 * index - 2}
                y1="22"
                x2={90 - 15 * index + 2}
                y2="18"
                stroke={theme.dark ? '#f0f0f0' : 'gray'}
                strokeWidth="1"
              />
              <Line
                x1={90 - 15 * index - 2}
                y1="18"
                x2={90 - 15 * index + 2}
                y2="22"
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
                cx={90 - 15 * index}
                cy={(realLad - 1) * 40 + 50}
                r="7"
                fill={fillColor}
                stroke={textColor}
                strokeWidth="0.5"
              />
              <Text
                fill={textColor}
                fontSize="9"
                x={90 - 15 * index}
                y={(realLad - 1) * 40 + 52}
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

export default VerticalChord;
