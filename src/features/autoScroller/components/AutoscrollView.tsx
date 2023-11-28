import React from 'react';
import {ScrollView} from 'react-native';
import {useTheme} from '~/features/themeSwitcher';
import {useAutoScroll} from '../model/state';

import createStyles from './AutoscrollView.styles';

const MAX_SPEED = 3;
const MIN_DELAY = 20;
const DELTA = 30;

interface Props {
  children: React.ReactNode;
}

type SavedInfo = {
  timerId: number | null;
  offsetY: number;
};

export const AutoscrollView: React.FC<Props> = ({children}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {
    topScrolling,
    disableTopScrolling,
    speed: scrollSpeed,
    setSpeed,
  } = useAutoScroll();

  // useRef изспользуется для сохранения информации между ререндерами экрана
  const savedScrollInfo = React.useRef<SavedInfo>({
    timerId: null,
    offsetY: 0,
  });

  const scrollView = React.useRef<ScrollView | null>(null);

  const autoScroll = React.useCallback(() => {
    if (savedScrollInfo.current.timerId) {
      clearInterval(savedScrollInfo.current.timerId);
      savedScrollInfo.current.timerId = null;
    }
    if (scrollSpeed > 0) {
      const delay = (MAX_SPEED - scrollSpeed) * DELTA + MIN_DELAY;
      savedScrollInfo.current.timerId = setInterval(() => {
        scrollView.current?.scrollTo({
          y: savedScrollInfo.current.offsetY + 1,
          animated: false,
        });
      }, delay);
    }
  }, [scrollSpeed]);

  React.useEffect(() => {
    // topScrolling - триггер для прокрутки вверх
    if (topScrolling) {
      scrollView.current?.scrollTo({y: 0, animated: false});
      disableTopScrolling();
    }

    autoScroll();

    return () => {
      if (savedScrollInfo.current.timerId) {
        setSpeed(0);
        clearInterval(savedScrollInfo.current.timerId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        savedScrollInfo.current.timerId = null;
      }
    };
  }, [autoScroll, disableTopScrolling, setSpeed, topScrolling]);

  // Сохраняет текущее положение при скролле
  const handleScroll = (event: {nativeEvent: {contentOffset: {y: number}}}) => {
    savedScrollInfo.current.offsetY = event.nativeEvent.contentOffset.y;
  };

  // Начало прокрутки "вручную". При этом автопрокрутка останавливается.
  const startHandScroll = () => {
    if (savedScrollInfo.current.timerId) {
      clearInterval(savedScrollInfo.current.timerId);
      savedScrollInfo.current.timerId = null;
    }
  };

  // Окончание прокрутки "вручную". Нужно снова запустить автопрокрутку, если скорость была положительной.
  const endHandScroll = () => {
    autoScroll();
  };

  return (
    <ScrollView
      ref={scrollView}
      onScroll={handleScroll}
      onScrollBeginDrag={startHandScroll}
      onScrollEndDrag={endHandScroll}
      style={styles.container}>
      {children}
    </ScrollView>
  );
};
