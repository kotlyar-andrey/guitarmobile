import {Beat} from '../model';

export const getA11yLabel = (beat: Beat): string =>
  `${beat.beat_type === 0 ? 'Бой' : 'Перебор'} ${beat.inscription}`;

export const getA11yHint = (beat: Beat): string => {
  const resultString = beat.strikes
    .map(strike => {
      switch (strike) {
        case 'up':
          return 'Вверх';
        case 'down':
          return 'Вниз';
        case 'x':
          return 'Щелчок';
        case 't':
          return 'Тоника';
        case 'downup':
          return 'Вниз-вверх';
        case '1':
          return 'Первая';
        case '2':
          return 'Вторая';
        case '3':
          return 'Третья';
        case '4':
          return 'Четвертая';
        default:
          return '';
      }
    })
    .join(' ');
  return resultString;
};
