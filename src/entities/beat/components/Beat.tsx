import React from 'react';

import Svg, {Text, Line, Symbol, Use, G, Rect} from 'react-native-svg';
import {useTheme} from '~/features/themeSwitcher';
import {Beat} from '../model';

interface Props {
  beat: Beat;
}

export const BaseBeatView: React.FC<Props> = ({beat}) => {
  const theme = useTheme();

  const oneBeatWidth = 200 / beat.strikes.length;

  const beatColor = 'blue';

  return (
    <Svg height="100%" width="100%" viewBox="0 0 200 100">
      <Symbol id="down" viewBox="0 0 10 100">
        <Line x1="5" y1="0" x2="5" y2="96" strokeWidth={3} />
        <Line x1="5" y1="100" x2="9" y2="80" strokeWidth={1.2} />
        <Line x1="5" y1="100" x2="1" y2="80" strokeWidth={1.2} />
      </Symbol>
      <Symbol id="up" viewBox="0 0 10 100">
        <Line x1="5" y1="4" x2="5" y2="100" strokeWidth={3} />
        <Line x1="5" y1="0" x2="9" y2="20" strokeWidth={1.2} />
        <Line x1="5" y1="0" x2="1" y2="20" strokeWidth={1.2} />
      </Symbol>
      <Symbol id="x" viewBox="0 0 50 100">
        <Text fontSize="36" x="25" y="80" textAnchor="middle" letterSpacing="1">
          Щ
        </Text>
      </Symbol>
      <Rect x={2} y={2} width={198} height={98} stroke={'#e5e5e5'} />
      {beat.inscription && (
        <Text
          fill={theme.colors.text}
          fontSize="10"
          x="100"
          y="12"
          textAnchor="middle">
          {beat.inscription}
        </Text>
      )}
      {beat.strikes.map((strike, strikeIndex) => {
        switch (strike) {
          case 'down':
            return (
              <G key={`strike${strikeIndex}`} stroke={beatColor}>
                <Use
                  href="#down"
                  x={strikeIndex * oneBeatWidth}
                  y="20"
                  width={oneBeatWidth}
                  height="70"
                />
              </G>
            );
          case 'up':
            return (
              <G key={`strike${strikeIndex}`} stroke={beatColor}>
                <Use
                  href="#up"
                  x={strikeIndex * oneBeatWidth}
                  y="20"
                  width={oneBeatWidth}
                  height="70"
                />
              </G>
            );
          case 'x':
            return (
              <G
                key={`strike${strikeIndex}`}
                stroke={beatColor}
                fill={beatColor}>
                <Use
                  href="#x"
                  x={strikeIndex * oneBeatWidth}
                  y="20"
                  width={oneBeatWidth}
                  height="70"
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
