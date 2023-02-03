import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {useContentState} from '../../model';
import {useTheme} from '~/entities/theming';
import createStyles from './ContentLoader.styles';

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

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color={theme.colors.primary} />}
      {message && (
        <Text
          onPress={() => {
            if (error) {
              checkUpdate();
            }
          }}
          style={error ? styles.errorText : styles.text}>
          {message}
        </Text>
      )}
    </View>
  );
};
