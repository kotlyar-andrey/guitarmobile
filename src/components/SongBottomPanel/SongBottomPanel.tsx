import React from 'react';
import {observer} from 'mobx-react-lite';
import {Text, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {useTheme} from '~/theming';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import {getMaterialIcon} from '../Icons';
import createStyles from './SongBottomPanel.styles';
import lessonView, {E_ScrollSpeed} from '~/data/states/lessonView';

const SongBottomPanel: React.FC = observer(() => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const scrollDownIcon = getMaterialIcon('transfer-down', {
    size: moderateScale(16),
    color:
      lessonView.scrollSpeed !== E_ScrollSpeed.NONE
        ? theme.colors.primary
        : theme.colors.inactive,
  });

  const metronomeIcon = getMaterialIcon('metronome', {
    size: moderateScale(16),
    color:
      lessonView.scrollSpeed !== E_ScrollSpeed.NONE
        ? theme.colors.primary
        : theme.colors.inactive,
  });

  return (
    <>
      {(lessonView.pinned || lessonView.bottomPanelVisible) && (
        <View style={styles.container}>
          <View style={styles.categoryContainer}>
            {scrollDownIcon}
            <ButtonIcon
              active={lessonView.scrollSpeed === E_ScrollSpeed.NONE}
              iconName={'pause'}
              onPressHandler={() => {
                lessonView.setScrollSpeed(E_ScrollSpeed.NONE);
              }}
              iconProps={{size: scale(9)}}
            />
            <ButtonIcon
              active={lessonView.scrollSpeed === E_ScrollSpeed.LOW}
              iconName={'chevron-right'}
              onPressHandler={() => {
                lessonView.setScrollSpeed(E_ScrollSpeed.LOW);
              }}
              iconProps={{size: moderateScale(12)}}
            />
            <ButtonIcon
              active={lessonView.scrollSpeed === E_ScrollSpeed.MEDIUM}
              iconName={'chevron-double-right'}
              onPressHandler={() => {
                lessonView.setScrollSpeed(E_ScrollSpeed.MEDIUM);
              }}
              iconProps={{size: moderateScale(12)}}
            />
            <ButtonIcon
              active={lessonView.scrollSpeed === E_ScrollSpeed.HIGH}
              iconName={'chevron-triple-right'}
              onPressHandler={() => {
                lessonView.setScrollSpeed(E_ScrollSpeed.HIGH);
              }}
              iconProps={{size: moderateScale(12)}}
            />
          </View>
          <View style={styles.categoryContainer}>
            {metronomeIcon}
            <ButtonIcon
              active={false}
              iconName={'minus'}
              onPressHandler={() => {}}
              iconProps={{size: moderateScale(12)}}
            />
            <Text style={styles.text}>120</Text>
            <ButtonIcon
              active={false}
              iconName={'plus'}
              onPressHandler={() => {}}
              iconProps={{size: moderateScale(12)}}
            />
            <ButtonIcon
              active={false}
              iconName={'play'}
              onPressHandler={() => {}}
              iconProps={{size: moderateScale(12)}}
            />
          </View>
          <View style={styles.categoryContainer}>
            <ButtonIcon
              active={false}
              iconName={'cog-outline'}
              onPressHandler={() => {}}
              iconProps={{size: moderateScale(14)}}
            />
            <ButtonIcon
              active={lessonView.pinned}
              iconName={lessonView.pinned ? 'pin' : 'pin-off'}
              onPressHandler={() => {
                lessonView.togglePinned();
              }}
              iconProps={{size: moderateScale(14)}}
            />
          </View>
        </View>
      )}
    </>
  );
});

export default SongBottomPanel;
