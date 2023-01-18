import {makeAutoObservable, runInAction} from 'mobx';
import {loadAllData, updateData} from '~/data/content/api';
import {E_LoadingMessage, E_LoadingState} from '~/data/content/enums';
import {getDataVersion} from '~/data/content/storage';

/**
 * Глобальное mobx состояние для загрузки или обновления контента (уроки, разборы, и т.п) из интернета.
 */
class ContentLoader {
  loadingState: E_LoadingState = E_LoadingState.NONE; // Состояние загрузки данных с сервера
  progressMessage: E_LoadingMessage = E_LoadingMessage.NONE; // Сообщение на главном экране при загрузке или обновлении данных

  constructor() {
    makeAutoObservable(this);
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
   * Обновляет данные на устройстве
   * @param localVersion Версия данных на локальном устройстве
   */
  async _updateData(localVersion: number): Promise<void> {
    try {
      runInAction(() => {
        this.progressMessage = E_LoadingMessage.UPDATE_START;
      });
      await updateData(localVersion);
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
      await loadAllData();
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

const contentLoader = new ContentLoader();

export default contentLoader;
