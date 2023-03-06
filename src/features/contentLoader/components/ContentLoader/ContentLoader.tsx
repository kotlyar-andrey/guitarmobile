import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useContentState} from '../../model';
import createStyles from './ContentLoader.styles';
import {scale} from 'react-native-size-matters';
import {useTheme} from '~/features/themeSwitcher';

export const ContentLoader: React.FC = () => {
  const contentState = useContentState(state => ({
    message: state.message,
    loading: state.loading,
    error: state.error,
    checkUpdate: state.checkUpdate,
    clearData: state.clearData,
  }));
  const {loading, error, message, checkUpdate, clearData} = contentState;

  const theme = useTheme();
  const styles = createStyles(theme);

  const tryToUpdate = () => {
    if (error) {
      checkUpdate();
    }
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color={theme.colors.primary} />}
      {!loading && error && (
        <MaterialCommunityIcons
          name="reload"
          color={theme.colors.errorText}
          size={scale(8)}
          onPress={tryToUpdate}
        />
      )}
      <Text
        onPress={() => {
          clearData();
        }}>
        Clear
      </Text>
      {message && (
        <Text
          onPress={tryToUpdate}
          style={error ? styles.errorText : styles.text}>
          {message}
        </Text>
      )}
    </View>
  );
};
