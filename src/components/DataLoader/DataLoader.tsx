import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import packageJson from '../../../package.json';
import {observer} from 'mobx-react-lite';
import {Bar} from 'react-native-progress';
import {useTheme} from '~/theming';
import createStyles from './DataLoader.styles';
import stateContent from '~/data/content/state';
import {removeAllData} from '~/data/content/storage';
import {E_LoadingState} from '~/data/content/enums';
import {ReloadIcon} from '../Icons/ReloadIcon';

/**
 * Компонент без состояния для главного экрана, который показывает прогресс скачивания или обновления данных.
 */
const DataLoader = observer(() => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={removeAllData}>
        <Text>v. {packageJson.version}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{stateContent.progressMessage}</Text>
      {stateContent.loadingState === E_LoadingState.LOADING && (
        <Bar indeterminate={true} color={theme.colors.text} />
      )}
      {stateContent.loadingState === E_LoadingState.ERROR && (
        <TouchableOpacity
          onPress={() => stateContent.update()}
          style={styles.errorContainer}>
          <ReloadIcon color={theme.colors.errorText} />
          <Text style={styles.errorText}>Попробовать еще раз</Text>
        </TouchableOpacity>
      )}
      {stateContent.loadingState === E_LoadingState.SUCCESS && (
        <Text>Приятного пользования!</Text>
      )}
    </View>
  );
});

export default DataLoader;
