import {makeObservable, observable, runInAction} from 'mobx';
import {loadAllData, loadUpdatedData} from './api';
import {shortLessonDto} from './dto';
import {E_LoadingState, E_LoadingMessage} from './enums';
import {I_Lesson, I_ShortLesson, I_UpdatedData} from './interfaces';
import {getDataVersion, getLessons, saveLoadedOrUpdatedData} from './storage';

class Content {
  loadingState: E_LoadingState = E_LoadingState.NONE; // Состояние загрузки данных с сервера
  progressMessage: string = ''; // Сообщение на главном экране при загрузке или обновлении данных
  lessons: I_ShortLesson[] = []; // Список всех уроков в кратком виде
  loading: boolean = false; // Индикатор загрузки при работе с локальным хранилищем

  constructor() {
    makeObservable(this, {
      loadingState: observable,
      progressMessage: observable,
      lessons: observable,
      loading: observable,
    });
  }

  /**
   * Проверка обновлений. Если первый запуск, данные будут загружены на устройство.
   */
  async update(): Promise<void> {
    runInAction(() => {
      this.loadingState = E_LoadingState.LOADING;
      this.progressMessage = E_LoadingMessage.UPDATING;
    });
    const localVersion = await getDataVersion();
    if (localVersion !== null) {
      await this._updateData(localVersion);
    } else {
      await this._loadAndSaveDataFromServer();
    }
  }

  /**
   * Получение списка уроков из локального хранилища
   */
  async getLessons(): Promise<void> {
    try {
      const fullLessons: I_Lesson[] = await getLessons();
      const shortLessons = fullLessons.map(lesson => shortLessonDto(lesson));
      runInAction(() => {
        this.lessons = shortLessons;
      });
    } catch (error: unknown) {
      console.log('ERROR in getLessons: ', error);
    }
  }

  /**
   * Загружает обновленные данные с сервера и сохраняет их на устройстве
   * @param localVersion Версия данных на локальном устройстве
   */
  async _updateData(localVersion: number): Promise<void> {
    try {
      runInAction(() => {
        this.progressMessage = E_LoadingMessage.UPDATE_START;
      });
      const updatedData: I_UpdatedData = await loadUpdatedData(localVersion);
      await saveLoadedOrUpdatedData(updatedData);
      runInAction(() => {
        this.progressMessage = E_LoadingMessage.UPDATE_SUCCESS;
        this.loadingState = E_LoadingState.SUCCESS;
      });
    } catch (error: unknown) {
      console.log('ERROR in updateData: ', error);
      runInAction(() => {
        this.loadingState = E_LoadingState.ERROR;
        this.progressMessage = E_LoadingMessage.UPDATE_ERROR;
      });
    }
  }

  /**
   * Загружает все данные с сервера и сохраняет их на устройстве
   */
  async _loadAndSaveDataFromServer() {
    try {
      runInAction(() => {
        this.progressMessage = E_LoadingMessage.LOAD_START;
      });
      const data: I_UpdatedData = await loadAllData();
      await saveLoadedOrUpdatedData(data);
      runInAction(() => {
        this.progressMessage = E_LoadingMessage.LOAD_SUCCESS;
        this.loadingState = E_LoadingState.SUCCESS;
      });
    } catch (error: unknown) {
      console.log('ERROR in loadAndSaveDataFromServer', error);
      runInAction(() => {
        this.loadingState = E_LoadingState.ERROR;
        this.progressMessage = E_LoadingMessage.LOAD_ERROR;
      });
    }
  }
}

export default new Content();
