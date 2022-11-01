import ContentStorage from './storage';
import ContentApi from './api';
import {Lesson} from './interfaces';

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
  async loadLessons(): Promise<Lesson[]> {
    try {
      const lessons: Lesson[] = await this._api.loadLessons();
      await this._storage.saveLessons(lessons);
      return lessons;
    } catch (error) {
      console.log('ERROR -> Content -> loadLessons');
      return [];
    }
  }

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

  // async loadHowToPlayes() {
  //   try {
  //     const howToPlays: Lesson[] = await this._api.loadHowToPlayes();
  //     await this._storage.saveLessons(howToPlays);
  //   } catch (error) {
  //     console.log('ERROR -> Content -> loadLessons');
  //   }
  // }
}

const content = new Content();

export default content;
