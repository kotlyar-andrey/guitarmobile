import {I_InfoForUpdate} from './interfaces';
import {E_ContentType} from './enums';
import requestExecutor from '~/config/requstExecutor';
import localStorage from '~/config/localStorage';
import {DATA_VERSION} from './consts';

/**
 * Загружает с сервера весь контент, а так же версию данных и сохраняет на устройсве пользователя
 * @returns Весь контект с уроками, разборами и т.п
 */
export async function loadAllData(): Promise<void> {
  await _loadListOfData(E_ContentType.LESSON);
  await _loadListOfData(E_ContentType.HOWTOPLAY);
  await _loadListOfData(E_ContentType.CHORD);
  await _loadListOfData(E_ContentType.BEAT);
  const version = await _loadVersion();
  localStorage.save({
    key: DATA_VERSION,
    data: version !== null ? version : 0,
  });
}

export async function updateData(localVersion: number): Promise<void> {
  const dataForUpdate = await _loadInfoForUpdate(localVersion);
  await _reloadListOfData(E_ContentType.LESSON, dataForUpdate.lessons);
  await _reloadListOfData(E_ContentType.HOWTOPLAY, dataForUpdate.howtoplays);
  await _reloadListOfData(E_ContentType.CHORD, dataForUpdate.chords);
  await _reloadListOfData(E_ContentType.BEAT, dataForUpdate.beats);
  localStorage.save({
    key: DATA_VERSION,
    data: dataForUpdate.last_version,
  });
}

/**
 * Загружает список данных с сервера и сохраняет на устройстве пользователя
 * @param contentType Урок, разбор, аккорд или бой
 */
async function _loadListOfData(contentType: E_ContentType): Promise<void> {
  console.log('start _loadListOf: ', contentType);
  const response = await requestExecutor.get(`/data/${contentType}/`);
  response.data.forEach(item => {
    localStorage.save({
      key: contentType,
      id: item.pk.toString(),
      data: item,
    });
  });
}

/**
 * Загружает один урок, разбор, аккорд или бой по идентификатору и сохраняет на устройстве
 * @param contentType lesson, howtoplay, accord or beat
 * @param id Идентификатор нужного аккорда, разбора, аккорда или боя
 */
async function _loadObjectOfData(
  contentType: E_ContentType,
  id: number,
): Promise<void> {
  const response = await requestExecutor.get(`/data/${contentType}/${id}/`);
  localStorage.save({
    key: contentType,
    id: id.toString(),
    data: response.data,
  });
}

/**
 * Получает с сервера последнюю версию данных
 * @returns Последня версия данных
 */
async function _loadVersion(): Promise<number> {
  const response = await requestExecutor.get('/data/update/');
  const data = response.data;
  return data.last_version;
}

/**
 * Загружает список идентификаторов измененных уроков, разборов и аккордов.
 * @param localVersion Версия данных на устройстве пользователя
 * @returns Списки идентификаторов обновленных данных, которые нужно перезагрузить
 */
async function _loadInfoForUpdate(
  localVersion: number,
): Promise<I_InfoForUpdate> {
  const response = await requestExecutor.get(`/data/update/${localVersion}/`);
  return response.data;
}

/**
 * Обновляет список данных (перезагружает их с сервера)
 * @param contentType Вид контента
 * @param ids Список идентификаторов, по которым нужно обновить данные
 */
async function _reloadListOfData(
  contentType: E_ContentType,
  ids: number[],
): Promise<void> {
  for (let i = 0; i < ids.length; i++) {
    await _loadObjectOfData(contentType, ids[i]);
  }
}
