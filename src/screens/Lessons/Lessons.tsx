import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationType} from '~/app/navigation';
import {useTheme} from '~/entities/theming';
import createStyles from './Lessons.styles';
import {TopBar} from '~/shared/components/TopBar';
import {LessonsList} from '~/widgets/lessons';

type Props = NativeStackScreenProps<MainNavigationType, 'Lessons'>;

export const Lessons = ({navigation}: Props) => {
  const theme = useTheme();

  const styles = createStyles(theme);

  return (
    <SafeAreaView edges={['right', 'bottom']} style={styles.container}>
      <TopBar title="Уроки" backArrow={true} navigation={navigation} />
      <LessonsList navigation={navigation} />
    </SafeAreaView>
  );
};
