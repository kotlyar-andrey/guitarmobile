import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import NativeModal from 'react-native-modal';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '~/features/themeSwitcher';
import createStyles from './ModalScreen.styles';

interface Props {
  title?: string;
  visible: boolean;
  toggleVisible: () => void;
  children: React.ReactNode;
}

export const ModalScreen: React.FC<Props> = ({
  title,
  visible,
  toggleVisible,
  children,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <NativeModal
      isVisible={visible}
      onBackdropPress={toggleVisible}
      onBackButtonPress={toggleVisible}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <MaterialCommunityIcons
            accessibilityLabel="Закрыть"
            accessibilityHint="Закрыть модальное окно"
            accessibilityRole="button"
            name="close"
            color={theme.colors.primary}
            size={moderateScale(14)}
            onPress={() => {
              toggleVisible();
            }}
          />
        </View>
        <ScrollView>{children}</ScrollView>
      </View>
    </NativeModal>
  );
};
