import React, {useState, useEffect} from 'react';

import Svg, {Text, Line, Symbol, Use, G} from 'react-native-svg';
import {eventEmitter} from 'rn-chords-player';
import {useTheme} from '~/theming';

/**
 * Бой (ритмический рисунок)
 * Содрежит графическое отображение боя. Оно включает:
 * - большая стрелочка вверх или вниз - бой по всем струнам;
 * - маленькая стрелочка вниз или вверх - бой только по верхним струнам, слабый бой;
 * - стрелочки вверх или вниз (большая или маленькая, нужно решить, может даже обе) -
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
 *
 * @returns React.FC
 */
const BeatView = ({beat, playing, onBeatClick}) => {
  const theme = useTheme();

  const [activeStrike, setActiveStrike] = useState<number>(-1);

  useEffect(() => {
    const listener = eventEmitter.addListener('Strike', event => {
      if (playing) {
        setActiveStrike(event.strikeIndex);
      }
    });

    return () => {
      listener.remove();
    };
  }, [activeStrike, playing]);

  const oneBeatWidth = 200 / beat.strikes.length;

  const getStrikeColor = index =>
    playing && activeStrike === index ? 'green' : 'blue';

  return (
    <Svg height="100%" width="100%" viewBox="0 0 200 100" onPress={onBeatClick}>
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
      {beat.name && (
        <Text
          fill={theme.colors.text}
          fontSize="10"
          x="100"
          y="12"
          textAnchor="middle">
          {beat.name}
        </Text>
      )}
      <Text
        fill={theme.colors.secondary}
        fontSize="8"
        x="160"
        y="12"
        textAnchor="middle">
        tap to{playing ? 'stop' : 'play'}
      </Text>
      {beat.strikes.map((strike, strikeIndex) => {
        switch (strike) {
          case 'down':
            return (
              <G
                key={`strike${strikeIndex}`}
                stroke={getStrikeColor(strikeIndex)}>
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
              <G
                key={`strike${strikeIndex}`}
                stroke={getStrikeColor(strikeIndex)}>
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
                stroke={getStrikeColor(strikeIndex)}
                fill={getStrikeColor(strikeIndex)}>
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

export default BeatView;
