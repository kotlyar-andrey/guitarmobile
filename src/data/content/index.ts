import ContentStorage from './storage';
import ContentApi from './api';
import {I_Lesson} from './interfaces';

/**
 * Высокоуровленевое АПИ для работы с контентом - загрузкой его из интернета, сохранением на диск и изменением
 */
class Content {
  _api: ContentApi;
  _storage: ContentStorage;

  constructor() {
    this._api = new ContentApi();
    this._storage = new ContentStorage();
  }

  /**
   * Загружает уроки с сервера и сохраняет на устройстве. Возвращает скачанные уроки.
   */
  async loadLessons(): Promise<I_Lesson[]> {
    try {
      const lessons: I_Lesson[] = await this._api.loadLessons();
      await this._storage.saveLessons(lessons);
      return lessons;
    } catch (error) {
      console.log('ERROR -> Content -> loadLessons');
      return [];
    }
  }

  /**
   * Считывает уроки с устройства и возвращает их. Если уроков нет - скачивает с сервера.
   * @returns список уроков
   */
  async getLessons() {
    try {
      const lessons = await this._storage.getLessons();
      if (lessons.length === 0) {
        const loadingLessons = await this.loadLessons();
        if (loadingLessons.length > 0) {
          return loadingLessons;
        }
        throw new Error(
          'Cant loading lessons. Check Internet connection and try again',
        );
      }
      return lessons;
    } catch (error) {
      console.log('ERROR -> Content -> getLessons');
      return [];
    }
  }

  async getLesson(lessonPk: number) {
    const lesson = await this._storage.getLesson(lessonPk);
    return lesson;
  }
}

const content = new Content();

export default content;
