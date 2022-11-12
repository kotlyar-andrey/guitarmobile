import axios, {AxiosInstance} from 'axios';
import {Accord, E_ContentType, Lesson} from './interfaces';

class ContentApi {
  _axios: AxiosInstance;

  constructor() {
    this._axios = axios.create({
      baseURL: 'http://kotdatacenter.net/api/v1',
      timeout: 15000,
    });
  }

  /**
   * Загружает список уроков, разборов или аккордов.
   * @param subject lesson, howtoplay or accord
   * @returns Список соответствующих данных
   */
  async loadListOf(subject: E_ContentType) {
    try {
      const response = await this._axios.get(`/${subject}/`);
      return response.data;
    } catch (error: any) {
      console.log('ERROR -> ContentApi -> loadListOf', error.message);
      return [];
    }
  }

  /**
   * Загружает один урок, разбор или аккорд по идентификатору
   * @param subject lesson, howtoplay or accord
   * @param id Идентификатор нужного аккорда, разбора или аккорда
   * @returns Конкретный урок, разбор или аккорд
   */
  async loadObjectOf(subject: E_ContentType, id: number) {
    try {
      const response = await this._axios.get(`/${subject}/${id}/`);
      return response.data;
    } catch (error) {
      console.log('ERROR -> ContentApi -> loadObjectOf', error);
      return null;
    }
  }

  async loadLessons(): Promise<Lesson[]> {
    return this.loadListOf(E_ContentType.LESSON);
  }

  async loadHowToPlays(): Promise<Lesson[]> {
    return this.loadListOf(E_ContentType.HOWTOPLAY);
  }

  async loadAccords(): Promise<Accord[]> {
    return this.loadListOf(E_ContentType.ACCORD);
  }

  async loadLesson(id: number): Promise<Lesson | null> {
    return this.loadObjectOf(E_ContentType.LESSON, id);
  }

  async loadHowToPlay(id: number): Promise<Lesson | null> {
    return this.loadObjectOf(E_ContentType.HOWTOPLAY, id);
  }

  async loadAccord(id: number): Promise<Accord | null> {
    return this.loadObjectOf(E_ContentType.ACCORD, id);
  }
}

export default ContentApi;