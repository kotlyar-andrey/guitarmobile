import {ScaledSheet} from 'react-native-size-matters';
import {CHORD_BASE_SIZE} from '~/shared/config/consts';

const createStyles = (chordSize, chordOrientation) => {
  const baseSize = Math.round((CHORD_BASE_SIZE * chordSize) / 100);

  const width =
    chordOrientation === 'vertical' ? `${baseSize}@ms` : `${2 * baseSize}@ms`;
  const height =
    chordOrientation === 'vertical' ? `${2 * baseSize}@ms` : `${baseSize}@ms`;

  const styles = ScaledSheet.create({
    chordContainer: {
      width: width,
      height: height,
    },
  });
  return styles;
};
export default createStyles;
