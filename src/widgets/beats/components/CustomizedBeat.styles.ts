import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '~/entities/theming';
import {BEAT_BASE_SIZE} from '~/shared/config/consts';

const createStyles = (theme: Theme, beatSize) => {
  const styles = ScaledSheet.create({
    beatContainer: {
      width: `${beatSize * BEAT_BASE_SIZE * 2}@ms`,
      height: `${beatSize * BEAT_BASE_SIZE}@ms`,
    },
  });
  return styles;
};
export default createStyles;
