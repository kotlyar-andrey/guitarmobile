import {ScaledSheet} from 'react-native-size-matters';

import {BEAT_BASE_SIZE, PLUNK_BASE_SIZE} from '~/shared/config/consts';

const createStyles = beatSize => {
  const styles = ScaledSheet.create({
    beatContainer: {
      width: `${beatSize * BEAT_BASE_SIZE * 2}@ms`,
      height: `${beatSize * BEAT_BASE_SIZE}@ms`,
      margin: '1@ms',
    },
    plunkContainer: {
      width: `${(beatSize * PLUNK_BASE_SIZE) / 2.5}@ms`,
      height: `${beatSize * PLUNK_BASE_SIZE}@ms`,
      margin: '1@ms',
    },
  });
  return styles;
};
export default createStyles;
