import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Локальное хранилище для длительного хранения данных
 */
export const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
});
