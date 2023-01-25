import React from 'react';
import {ScrollView} from 'react-native';
import {E_ScrollSpeed} from '~/data/states/lessonView';
import {useTheme} from '~/theming';
import createStyles from './AutoScrollView.styles';
import lessonView from '~/data/states/lessonView';

type Props = {
  children: React.ReactNode;
  scrollSpeed: number;
};

type SavedInfo = {
  timerId: any;
  offsetY: number;
};

const AutoScrollView: React.FC<Props> = ({children, scrollSpeed}) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  const scrollView = React.useRef<ScrollView | null>(null);

  // useRef изспользуется для сохранения информации между ререндерами экрана, который происходит при изменении скорости прокрутки.
  const savedInfo = React.useRef<SavedInfo>({timerId: 0, offsetY: 0});

  const autoScroll = React.useCallback(() => {
    if (scrollSpeed === E_ScrollSpeed.NONE) {
      clearInterval(savedInfo.current?.timerId);
    } else {
      savedInfo.current.timerId = setInterval(() => {
        scrollView.current?.scrollTo({
          y: savedInfo.current.offsetY + 1,
          animated: false,
        });
      }, scrollSpeed);
    }
  }, [scrollSpeed]);

  React.useEffect(() => {
    autoScroll();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(savedInfo.current.timerId);
    };
  }, [autoScroll, scrollSpeed]);

  const handleScroll = (event: {nativeEvent: {contentOffset: {y: number}}}) => {
    savedInfo.current.offsetY = event.nativeEvent.contentOffset.y;
  };

  const endHandScroll = () => {
    clearInterval(savedInfo.current.timerId);
    autoScroll();
    lessonView.hideBottomPanel();
  };

  const startHandScroll = () => {
    clearInterval(savedInfo.current.timerId);
    lessonView.showBottomPanel();
  };

  clearInterval(savedInfo.current.timerId);

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

export default AutoScrollView;
