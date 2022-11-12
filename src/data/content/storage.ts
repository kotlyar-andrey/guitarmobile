import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Accord, LessonData} from './interfaces';
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
  async _saveListOf(subject: E_ContentType, data: LessonData[] | Accord[]) {
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

  async saveLessons(lessons: LessonData[]): Promise<void> {
    await this._saveListOf(E_ContentType.LESSON, lessons);
  }

  async getLessons(): Promise<LessonData[]> {
    const lessons = await this._storage.getAllDataForKey(E_ContentType.LESSON);
    return lessons;
  }

  async getLesson(lessonPk: number): Promise<LessonData> {
    const lesson = await this._storage.load({
      key: E_ContentType.LESSON,
      id: lessonPk.toString(),
    });
    return lesson;
  }
}

export default ContentStorage;
