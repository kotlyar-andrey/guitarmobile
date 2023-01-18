export enum E_ContentType {
  LESSON = 'lessons',
  HOWTOPLAY = 'howtoplays',
  CHORD = 'chords',
  BEAT = 'beats',
}

export enum E_LoadingState {
  NONE,
  LOADING,
  ERROR,
  SUCCESS,
}

export enum E_LoadingMessage {
  UPDATING = 'Проверка обнолений',
  UPDATE_START = 'Обновление данных',
  UPDATE_SUCCESS = 'Данные обновлены',
  UPDATE_ERROR = 'Ошибка при обновлении',
  LOAD_START = 'Загрузка данных, нужно подождать',
  LOAD_SUCCESS = 'Данные загружены',
  LOAD_ERROR = 'Ошибка при загрузке',
  NONE = '',
}
