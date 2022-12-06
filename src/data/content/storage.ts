import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {I_Chord, I_Lesson} from './interfaces';
import {E_ContentType} from './interfaces';

class ContentStorage {
  _storage: Storage;

  constructor() {
    this._storage = new Storage({
      size: 1000,
      storageBackend: AsyncStorage,
      defaultExpires: null,
    });
  }

  /**
   * Загружает список уроков, разборов или аккордов, сохраняет в хранилище и возвращает.
   * @param subject lesson, howtoplay or accord
   * @param data list of lessons, howtoplays or accords
   */
  async _saveListOf(subject: E_ContentType, data: I_Lesson[] | I_Chord[]) {
    try {
      data.forEach(item => {
        this._storage.save({
          key: subject,
          id: item.pk.toString(),
          data: item,
        });
      });
    } catch (error) {
      console.log('ERROR -> ContentStorage -> _saveListOf', error);
    }
  }

  async saveLessons(lessons: I_Lesson[]): Promise<void> {
    await this._saveListOf(E_ContentType.LESSON, lessons);
  }

  async getLessons(): Promise<I_Lesson[]> {
    const lessons = await this._storage.getAllDataForKey(E_ContentType.LESSON);
    return lessons;
  }

  async getLesson(lessonPk: number): Promise<I_Lesson> {
    const lesson = await this._storage.load({
      key: E_ContentType.LESSON,
      id: lessonPk.toString(),
    });
    return lesson;
  }
}

export default ContentStorage;
