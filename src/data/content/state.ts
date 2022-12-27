import {makeObservable, observable, runInAction} from 'mobx';
import {loadAllData, loadUpdatedData} from './api';
import {E_LoadingState, I_UpdatedData} from './interfaces';
import {getDataVersion, saveLoadedOrUpdatedData} from './storage';

class Content {
  loadingState: E_LoadingState = E_LoadingState.NONE;
  progressMessage: string = '';
  dataVersion: number | null = null;

  constructor() {
    makeObservable(this, {
      loadingState: observable,
      progressMessage: observable,
      dataVersion: observable,
    });
  }

  /**
   * Проверка обновлений. Если первый запуск, данные будут загружены на устройство.
   */
  async update() {
    console.log('Start update');
    runInAction(() => {
      this.loadingState = E_LoadingState.LOADING;
      this.progressMessage = 'Проверка обновлений';
    });
    const localVersion = await getDataVersion();
    if (localVersion !== null) {
      console.log('update data');
      await this._updateData(localVersion);
    } else {
      console.log('download all data');
      await this._loadAndSaveDataFromServer();
    }
  }

  /**
   * Загружает обновленные данные с сервера и сохраняет их на устройстве
   * @param localVersion Версия данных на локальном устройстве
   */
  async _updateData(localVersion: number): Promise<void> {
    try {
      runInAction(() => {
        this.progressMessage = 'Обновление данных';
        this.dataVersion = localVersion;
      });
      const updatedData: I_UpdatedData = await loadUpdatedData(localVersion);
      await saveLoadedOrUpdatedData(updatedData);
      runInAction(() => {
        this.progressMessage = 'Данные обновлены';
        this.loadingState = E_LoadingState.SUCCESS;
      });
    } catch (error: unknown) {
      console.log('ERROR in updateData: ', error);
      runInAction(() => {
        this.loadingState = E_LoadingState.ERROR;
        this.progressMessage = 'Ошибка при обновлении';
      });
    }
  }

  /**
   * Загружает все данные с сервера и сохраняет их на устройстве
   */
  async _loadAndSaveDataFromServer() {
    try {
      runInAction(() => {
        this.progressMessage = 'Загрузка данных, нужно подождать';
      });
      const data: I_UpdatedData = await loadAllData();
      await saveLoadedOrUpdatedData(data);
      runInAction(() => {
        this.progressMessage = 'Данные загружены';
        this.loadingState = E_LoadingState.SUCCESS;
        this.dataVersion = data.lastVersion;
      });
    } catch (error: unknown) {
      console.log('ERROR in loadAndSaveDataFromServer', error);
      runInAction(() => {
        this.loadingState = E_LoadingState.ERROR;
        this.progressMessage = 'Ошибка при загрузке';
      });
    }
  }
}

export default new Content();
