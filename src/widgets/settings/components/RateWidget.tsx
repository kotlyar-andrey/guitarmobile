import React from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Rate, {AndroidMarket} from 'react-native-rate';
import {useTheme} from '~/features/themeSwitcher';
import {ControlText} from '~/shared/components/primitives';
import createStyles from './RateWidget.styles';

export const RateWidget = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const rateApp = () => {
    const options = {
      GooglePackageName: 'com.andreykotlyar.guitar0',
      preferredAndroidMarket: AndroidMarket.Google,
    };
    Rate.rate(options, success => {
      if (success) {
        Alert.alert('Спасибо за оценку!');
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ControlText text="Оцените приложение:" />
      </View>
      <TouchableOpacity style={styles.starsContainer} onPress={rateApp}>
        <MaterialCommunityIcons
          name="star"
          size={moderateScale(20)}
          color={theme.colors.primary}
        />
        <MaterialCommunityIcons
          name="star"
          size={moderateScale(20)}
          color={theme.colors.primary}
        />
        <MaterialCommunityIcons
          name="star"
          size={moderateScale(20)}
          color={theme.colors.primary}
        />
        <MaterialCommunityIcons
          name="star"
          size={moderateScale(20)}
          color={theme.colors.primary}
        />
        <MaterialCommunityIcons
          name="star"
          size={moderateScale(20)}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};
