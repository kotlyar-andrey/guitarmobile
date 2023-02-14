import React from 'react';
import {View} from 'react-native';
// import {moderateScale} from 'react-native-size-matters';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './SongBottomPanel.styles';

interface Props {
  toolbars: React.ReactNode[];
  visible: boolean;
}

export const SongBottomPanel: React.FC<Props> = ({toolbars, visible}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  // const scrollDownIcon = <MaterialCommunityIcons name='transfer-down' size={moderateScale(16)} color={} />
  // getMaterialIcon('transfer-down', {
  //   size: moderateScale(16),
  //   color:
  //     lessonView.scrollSpeed !== E_ScrollSpeed.NONE
  //       ? theme.colors.primary
  //       : theme.colors.inactive,
  // });

  // const metronomeIcon = getMaterialIcon('metronome', {
  //   size: moderateScale(16),
  //   color:
  //     lessonView.scrollSpeed !== E_ScrollSpeed.NONE
  //       ? theme.colors.primary
  //       : theme.colors.inactive,
  // });

  // const settingIcon = (
  //   <MaterialCommunityIcons
  //     name="cog-outline"
  //     size={moderateScale(14)}
  //     color={theme.colors.primary}
  //   />
  // );
  // const pinIcon = (
  //   <MaterialCommunityIcons
  //     name="pin"
  //     size={moderateScale(14)}
  //     color={theme.colors.primary}
  //   />
  // );

  return (
    <>
      {visible && (
        <View style={styles.container}>
          {toolbars.map((toolbar, index) => (
            <View key={`toolbar${index}`}>{toolbar}</View>
          ))}
          {/* <View style={styles.categoryContainer}> */}
          {/* <ButtonIcon
          active={false}
          iconName={'cog-outline'}
          onPressHandler={() => {}}
          iconProps={{size: moderateScale(14)}}
        /> */}
          {/* {settingIcon} */}
          {/* <ButtonIcon
          active={lessonView.pinned}
          iconName={lessonView.pinned ? 'pin' : 'pin-off'}
          onPressHandler={() => {
            lessonView.togglePinned();
          }}
          iconProps={{size: moderateScale(14)}}
        /> */}
          {/* {pinIcon} */}
          {/* </View> */}
        </View>
      )}
    </>
  );
};
