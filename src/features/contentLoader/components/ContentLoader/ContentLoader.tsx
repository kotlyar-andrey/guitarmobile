import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useContentState} from '../../model';
import {useTheme} from '~/entities/theming';
import createStyles from './ContentLoader.styles';
import {scale} from 'react-native-size-matters';

export const ContentLoader: React.FC = () => {
  const contentState = useContentState(state => ({
    message: state.message,
    loading: state.loading,
    error: state.error,
    checkUpdate: state.checkUpdate,
  }));
  const {loading, error, message, checkUpdate} = contentState;

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
