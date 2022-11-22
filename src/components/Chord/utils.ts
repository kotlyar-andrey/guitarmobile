/**
 * Получить номер лада в виде числа римской системы записи чисел
 * @param number Число в десятичной системе
 * @returns Строковое представление числа в Римской системе записи
 */
export const getRoomeNumber = (number: number): string => {
  switch (number) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
    case 10:
      return 'X';
    case 11:
      return 'XII';
    case 12:
      return 'XII';
    default:
      return number.toString();
  }
};

/**
 * Функция возвращает координаты тоники в зависимости от ориентации аккорда и ноты
 * @param orientation Ориентация (horizontal | vertical)
 * @param note Нота (D | A | H | C | G | F)
 * @returns \{x, y\} - координаты тоники
 */
export const getTonicCoords = (
  orientation: 'horizontal' | 'vertical',
  note: 'D' | 'A' | 'H' | 'C' | 'G' | 'F',
): {x: number; y: number} => {
  let x;
  let y;
  switch (note) {
    case 'D':
      x = orientation === 'horizontal' ? 5 : 45;
      y = orientation === 'horizontal' ? 59 : 197;
      break;
    case 'H':
    case 'A':
    case 'C':
      x = orientation === 'horizontal' ? 5 : 30;
      y = orientation === 'horizontal' ? 47 : 197;
      break;
    case 'G':
    case 'F':
      x = orientation === 'horizontal' ? 5 : 15;
      y = orientation === 'horizontal' ? 35 : 197;
      break;
    default:
      x = -100;
      y = -100;
      break;
  }
  return {
    x,
    y,
  };
};

/**
 * Возвращает ширину струны - чем толще струна на гитаре, тем толще и на рисунке
 * @param string Номер струны
 * @returns Ширину струны на рисунке
 */
export const getStrokeWidth = (string: number): number => {
  switch (string) {
    case 0:
    case 1:
    case 2:
      return 0.5;
    case 3:
      return 0.7;
    case 4:
      return 0.9;
    case 5:
      return 1.1;
    default:
      return 0;
  }
};

/**
 * Возвращает цвет текса и заливки круга в зависимости от номера пальца,
 * которым зажимается эта струна
 * @param finger Номер пальца, которым защимается струна
 * @returns Цвет круга, который отображается на рисунке
 */
export const getNoteColors = (
  finger: number,
): {fillColor: string; textColor: string} => {
  const fillColor =
    finger === 1
      ? 'pink'
      : finger === 2
      ? 'yellow'
      : finger === 3
      ? 'lightgreen'
      : finger === 4
      ? 'lightblue'
      : 'lightgray';
  const textColor =
    finger === 1
      ? 'red'
      : finger === 2
      ? 'orange'
      : finger === 3
      ? 'green'
      : finger === 4
      ? 'blue'
      : 'gray';
  return {fillColor, textColor};
};
