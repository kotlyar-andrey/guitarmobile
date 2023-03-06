import React from 'react';

import Svg, {Text, Line, Symbol, Use, G, Rect, Circle} from 'react-native-svg';
import {useTheme} from '~/features/themeSwitcher';
import {Beat} from '../model';
import {getA11yHint, getA11yLabel} from './utils';

interface Props {
  beat: Beat;
}

export const BasePlunkView: React.FC<Props> = ({beat}) => {
  const theme = useTheme();

  const inscriptionHeight = 12;
  const oneFretSize = (100 - inscriptionHeight) / beat.strikes.length;

  return (
    <Svg
      height="100%"
      width="100%"
      viewBox="0 0 40 100"
      accessible={true}
      accessibilityLabel={getA11yLabel(beat)}
      accessibilityHint={getA11yHint(beat)}>
      <Symbol id="t" viewBox="0 0 40 40">
        <Circle cx="20" cy="20" r="15" strokeWidth="2" />
        <Text
          fontSize="22"
          x="22"
          y="28"
          textAnchor="middle"
          letterSpacing="1"
          fill={theme.colors.text}>
          T
        </Text>
      </Symbol>
      <Symbol id="downup" viewBox="0 0 40 40">
        <Line x1="10" y1="0" x2="10" y2="40" strokeWidth={2} />
        <Line x1="5" y1="25" x2="10" y2="40" strokeWidth={1} />
        <Line x1="15" y1="25" x2="10" y2="40" strokeWidth={1} />
        <Line x1="30" y1="0" x2="30" y2="40" strokeWidth={2} />
        <Line x1="30" y1="0" x2="25" y2="15" strokeWidth={2} />
        <Line x1="30" y1="0" x2="35" y2="15" strokeWidth={2} />
      </Symbol>
      <Symbol id="fret1" viewBox="0 0 40 40">
        <Text fontSize="28" x="22" y="32" textAnchor="middle" letterSpacing="1">
          1
        </Text>
      </Symbol>
      <Symbol id="fret2" viewBox="0 0 40 40">
        <Text fontSize="28" x="22" y="32" textAnchor="middle" letterSpacing="1">
          2
        </Text>
      </Symbol>
      <Symbol id="fret3" viewBox="0 0 40 40">
        <Text fontSize="28" x="22" y="32" textAnchor="middle" letterSpacing="1">
          3
        </Text>
      </Symbol>
      <Symbol id="fret4" viewBox="0 0 40 40">
        <Text fontSize="28" x="22" y="32" textAnchor="middle" letterSpacing="1">
          4
        </Text>
      </Symbol>
      <Rect x={2} y={2} width={38} height={98} stroke={'#e5e5e5'} />
      {beat.inscription && (
        <Text
          fill={theme.colors.primary}
          fontSize="8"
          x="20"
          y={inscriptionHeight - 2}
          textAnchor="middle">
          {beat.inscription}
        </Text>
      )}
      {beat.strikes.map((fret, fretIndex) => {
        switch (fret) {
          case 't':
            return (
              <G key={`fret${fretIndex}`} stroke={theme.colors.text}>
                <Use
                  href="#t"
                  x={(40 - oneFretSize) / 2}
                  y={fretIndex * oneFretSize + inscriptionHeight}
                  width={oneFretSize}
                  height={oneFretSize}
                  stroke={theme.colors.text}
                />
              </G>
            );
          case 'downup':
            return (
              <G key={`fret${fretIndex}`} stroke={theme.colors.text}>
                <Use
                  href="#downup"
                  x={(40 - oneFretSize) / 2}
                  y={fretIndex * oneFretSize + inscriptionHeight}
                  width={oneFretSize}
                  height={oneFretSize}
                />
              </G>
            );
          case '1':
          case '2':
          case '3':
          case '4':
            return (
              <G key={`fret${fretIndex}`} stroke={theme.colors.text}>
                <Use
                  href={`#fret${fret}`}
                  x={(40 - oneFretSize) / 2}
                  y={fretIndex * oneFretSize + inscriptionHeight}
                  width={oneFretSize}
                  height={oneFretSize}
                  stroke={theme.colors.text}
                  fill={theme.colors.text}
                />
              </G>
            );
          default:
            break;
        }
      })}
    </Svg>
  );
};
