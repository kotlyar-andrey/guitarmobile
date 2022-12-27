import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Локальное хранилище для длительного хранения данных
 */
const localStorage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
});

export default localStorage;
