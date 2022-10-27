import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ButtonInline from '~/components/ButtonInline/ButtonInline';

import {NavigationType} from '~/main/MainNavigator';

type Props = NativeStackScreenProps<NavigationType, 'Lessons'>;

const Lessons = ({navigation}: Props) => {
  return (
    <SafeAreaView edges={['right', 'bottom', 'left']}>
      <Text>LessonsScreen</Text>
      <ButtonInline
        title="Back"
        onPressHandler={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default Lessons;
